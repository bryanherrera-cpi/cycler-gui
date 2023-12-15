const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");

// const portPath = "/dev/cu.usbserial-FT55ZKR1";
//const portPath = "/dev/cu.usbserial-120";
//const portPath = "/dev/cu.usbserial-130";
const portPath = "/dev/cu.usbserial-120";
//const portPath = "/dev/cu.usbserial-AC009159";

//Print Available Serial Ports
// SerialPort.list().then(function (ports) {
//   ports.forEach(function (port) {
//     console.log("Port: ", port);
//   });
// });

const port = new SerialPort({
  path: portPath,
  baudRate: 9600,
});

const express = require("express");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
var cors = require("cors");
const app = express();

app.use(cors());

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const parser = new ReadlineParser();

port.pipe(parser);

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("clientMessage", (msg) => {
    console.log("Sent to Arduino: " + msg.data);
    port.write(msg.data);
  });
});

let previousArduinoResponse = "";
parser.on("data", (data) => {
  if (data !== previousArduinoResponse) {
    previousArduinoResponse = data;
    io.emit("arduinoMessage", data);
    console.log("Server Received Arduino Message: " + data);
  }
});

server.listen(8080, () => {
  console.log("server running at http://localhost:8080");
});
