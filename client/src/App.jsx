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
  const [arduinoMessage, setArduinoMessage] = useState("");

  function onConnect() {
    setSocketConnection(true);
  }

  const onArduinoMessage = (msg) => {
    let data = JSON.parse(msg);
    console.log(data);
    setCycleCount(data.CycleCount);
    if (data.CycleCount === cycleTarget) {
      updateMode("DONE");
    }
  };

  const updateTarget = (target) => {
    setCycleTarget(target);
  };

  const updateMode = (mode) => {
    setMode(mode);
  };

  const updateReset = () => {
    if (mode === "STOP" || mode === "DONE") {
      setMode("IDLE");
    }
    setCycleCount(0);
  };

  useEffect(() => {
    socket.on("connect", () => onConnect());
    socket.on("arduinoMessage", onArduinoMessage);

    let clientMessage = `<${cycleCount}|${cycleTarget}|${reset}|${mode}|${socketConnection}>`;
    socket.emit("clientMessage", { data: clientMessage });
    console.log("Sent Client Message to Arduino: " + clientMessage);

    return () => {
      socket.off("connect", onConnect);
      socket.off("arduinoMessage", onArduinoMessage);
    };
  }, [mode]);

  return (
    <div>
      <Header></Header>
      <div className='container vh-100'>
        <div className='row justify-content-center vh-100'>
          <div className='col-6'>
            <Form
              updateTarget={updateTarget}
              updateMode={updateMode}
              updateReset={updateReset}
              mode={mode}
              socketConnection={socketConnection}
              cycleCount={cycleCount}
              cycleTarget={cycleTarget}
            ></Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
