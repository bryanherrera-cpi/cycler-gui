const { SerialPort } = require("serialport");
const { ReadlineParser } = require("@serialport/parser-readline");

const port = new SerialPort({
  path: "/dev/cu.usbmodem21301",
  baudRate: 9600,
});

const parser = new ReadlineParser();
port.pipe(parser);
parser.on("data", console.log);

const express = require("express");
const { createServer } = require("node:http");
const { join } = require("node:path");
const { Server } = require("socket.io");

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("a user connected");
  socket.on("mode", (msg) => {
    console.log("Sent to Arduino: " + msg.data);
    port.write(msg.data);
  });
});

server.listen(8080, () => {
  console.log("server running at http://localhost:8080");
});
