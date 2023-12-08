import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";

function App() {
  const [cycleCount, setCycleCount] = useState(0);
  const [cycleTarget, setCycleTarget] = useState(0);
  const [reset, setReset] = useState(false);
  const [mode, setMode] = useState(0);

  const updateTarget = (target) => {
    setCycleTarget(target);
  };

  const updateMode = (mode) => {
    setMode(mode);
  };

  const updateReset = () => {
    setReset(!reset);
  };

  useEffect(() => {
    console.log(mode);
    console.log(reset);
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
            ></Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
