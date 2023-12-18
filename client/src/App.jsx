import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Card from "./Components/Card";
import { socket } from "./socket";

function App() {
  const [cyclerOneMode, setCyclerOneMode] = useState("IDLE");
  const [cyclerTwoMode, setCyclerTwoMode] = useState("IDLE");

  const [cycleCount, setCycleCount] = useState(0);
  const [cycleTarget, setCycleTarget] = useState(0);
  //const [mode, setMode] = useState("IDLE");
  // const [socketConnection, setSocketConnection] = useState(socket.connected);
  const [socketConnection, setSocketConnection] = useState(true);

  function onConnect() {
    setSocketConnection(true);
  }

  const regex = /[{\[]{1}([,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]|".*?")+[}\]]{1}/gis;

  function jsonFromString(str) {
    const match = str.match(regex);
    return match;
  }

  const onArduinoMessage = (msg) => {
    let data = JSON.parse(jsonFromString(msg));
    console.log(data);
    setCycleCount(data.CycleCount);
    if (data.CycleCount === cycleTarget) {
      updateMode("DONE");
    }
  };

  const updateTarget = (target) => {
    setCycleTarget(target);
  };

  const updateMode = (cycler, mode) => {
    if (cycler === "1") {
      setCyclerOneMode(mode);
    } else {
      setCyclerTwoMode(mode);
    }
  };

  const onReset = (cycler) => {
    if (cycler === "1") {
      if (cyclerOneMode === "STOP" || cyclerOneMode === "DONE") {
        setCyclerOneMode("IDLE");
      }
    } else {
      if (cyclerTwoMode === "STOP" || cyclerTwoMode === "DONE") {
        setCyclerTwoMode("IDLE");
      }
    }

    setCycleCount(0);
  };

  useEffect(() => {
    socket.on("connect", () => onConnect());
    socket.on("arduinoMessage", onArduinoMessage);

    let clientMessage = `<${cycleCount}|${cycleTarget}|${cyclerOneMode}>`;
    socket.emit("clientMessage", { data: clientMessage });
    console.log("Sent Client Message to Arduino: " + clientMessage);

    return () => {
      socket.off("connect", onConnect);
      socket.off("arduinoMessage", onArduinoMessage);
    };
  }, [cyclerOneMode, cyclerTwoMode]);

  return (
    <div>
      <Header></Header>
      <div className='container vh-100'>
        <div className='row justify-content-center vh-100'>
          <div className='col-6'>
            <Card
              updateTarget={updateTarget}
              updateMode={updateMode}
              onReset={onReset}
              cyclerOneMode={cyclerOneMode}
              cyclerTwoMode={cyclerTwoMode}
              socketConnection={socketConnection}
              cycleCount={cycleCount}
              cycleTarget={cycleTarget}
            ></Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
