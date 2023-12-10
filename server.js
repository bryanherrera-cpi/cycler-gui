const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");

// const port = new SerialPort({
//   path: "/dev/cu.usbmodem21301",
//   baudRate: 9600,
// });

const port = new SerialPort({
  path: "/dev/cu.usbmodem1301",
  baudRate: 9600,
});

// const myport = new SerialPort({
//   path: "/dev/cu.usbmodem1301",
//   baudRate: 115200,
// });

const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");
var cors = require("cors");
const app = express();

app.use(cors());

// GET method route
// app.get("/cyclecount", (req, res) => {
//   res.send(arduinoResponse);
// });

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

let arduinoResponse = "";
let previousArduinoResponse = "";
const parser = new ReadlineParser();
// const myparser = new ReadlineParser();

port.pipe(parser);
// myport.pipe(myparser);

// myparser.on("data", (data) => {
//   // arduinoResponse = data;
//   // if (arduinoResponse !== previousArduinoResponse) {
//   //   console.log("Server Received Arduino Message" + arduinoResponse);
//   //   previousArduinoResponse = arduinoResponse;
//   //   io.emit("arduinoMessage", arduinoResponse);
//   // }
//   console.log("Test" + data);
// });

// parser.on("data", (data) => {
//   arduinoResponse = data;
//   // if (arduinoResponse !== previousArduinoResponse) {
//   //   console.log("Server Received Arduino Message" + arduinoResponse);
//   //   previousArduinoResponse = arduinoResponse;
//   //   io.emit("arduinoMessage", arduinoResponse);
//   // }
//   console.log("Server Received Arduino Message" + arduinoResponse);
// });

io.on("connection", (socket) => {
  console.log("a user connected");
  // socket.on("mode", (msg) => {
  //   console.log("Sent to Arduino: " + msg.data);
  //   port.write(msg.data);
  // });
  socket.on("clientMessage", (msg) => {
    console.log("Sent to Arduino: " + msg.data);
    port.write(msg.data);
  });

  // parser.on("data", (data) => {
  //   // arduinoResponse = data;
  //   // socket.emit("arduinoMessage", arduinoResponse);
  //   if (data !== previousArduinoResponse) {
  //     // console.log("Server Received Arduino Message" + arduinoResponse);
  //     previousArduinoResponse = data;
  //     io.emit("arduinoMessage", data);
  //     console.log("Server Received Arduino Message: " + data);
  //   }
  // });

  // socket.emit("arduinoMessage", arduinoResponse);
  // console.log("Server Received Arduino Message" + arduinoResponse);

  // if (arduinoResponse !== previousArduinoResponse) {
  //   //socket.emit("arduinoMessage", arduinoResponse);
  //   console.log("Server Received Arduino Message" + arduinoResponse);
  //   previousArduinoResponse = arduinoResponse;
  // }
});

parser.on("data", (data) => {
  // arduinoResponse = data;
  // socket.emit("arduinoMessage", arduinoResponse);
  if (data !== previousArduinoResponse) {
    // console.log("Server Received Arduino Message" + arduinoResponse);
    previousArduinoResponse = data;
    io.emit("arduinoMessage", data);
    console.log("Server Received Arduino Message: " + data);
  }
});

server.listen(8080, () => {
  console.log("server running at http://localhost:8080");
});
