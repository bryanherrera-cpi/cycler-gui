import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";
import { socket } from "./socket";

function App() {
  const [cycleCount, setCycleCount] = useState(0);
  const [cycleTarget, setCycleTarget] = useState(0);
  const [reset, setReset] = useState(false);
  const [mode, setMode] = useState("IDLE");
  const [socketConnection, setSocketConnection] = useState(socket.connected);

  function onConnect() {
    setSocketConnection(true);
  }

  const updateTarget = (target) => {
    setCycleTarget(target);
  };

  const updateMode = (mode) => {
    setMode(mode);
    if (mode == "START") {
      socket.emit("mode", { data: "<2>" });
    }
    if (mode == "STOP") {
      socket.emit("mode", { data: "<1>" });
    }
  };

  const updateReset = () => {
    setReset(!reset);
    if (mode == "STOP") {
      setMode("IDLE");
    }
  };

  useEffect(() => {
    console.log("Mode: " + mode);
    console.log("Reset: " + reset);
    console.log("Socket Connected: " + socketConnection);
    // socket.emit("Hello World!");
    socket.on("connect", () => onConnect());
  });

  return (
    <div className=''>
      <Header></Header>
      <div className='container vh-100'>
        <div className='row justify-content-center vh-100'>
          <div className='col-6'>
            <Form
              updateTarget={updateTarget}
              updateMode={updateMode}
              updateReset={updateReset}
              mode={mode}
            ></Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
