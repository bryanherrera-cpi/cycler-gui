import React, { useState, useEffect } from "react";

function Form({
  updateTarget,
  updateMode,
  onReset,
  mode,
  cycleCount,
  cycleTarget,
}) {
  const onTargetChange = (e) => {
    updateTarget(e.target.value);
  };

  const onModeSelect = (e) => {
    updateMode(e);
  };

  const onResetClick = () => {
    onReset();
  };

  return (
    <div className='container'>
      {mode === "IDLE" ? (
        <div className='row justify-content-center status-banner text-bg-primary rounded-3'>
          <div className='col-8 justify-content-center text-center'>
            <h2 className='m-0'>READY</h2>
          </div>
        </div>
      ) : null}
      {mode === "START" ? (
        <div className='row justify-content-center status-banner bg-warning rounded-3'>
          <div className='col-8 justify-content-center text-center'>
            <h2 className='m-0'>Busy</h2>
          </div>
        </div>
      ) : null}
      {mode === "STOP" ? (
        <div className='row justify-content-center status-banner text-bg-secondary rounded-3'>
          <div className='col-8 justify-content-center text-center'>
            <h2 className='m-0'>Paused</h2>
          </div>
        </div>
      ) : null}
      {mode === "DONE" ? (
        <div className='row justify-content-center status-banner text-bg-info rounded-3'>
          <div className='col-8 justify-content-center text-center'>
            <h2 className='m-0'>DONE</h2>
          </div>
        </div>
      ) : null}

      {mode === "FAIL" ? (
        <div className='row justify-content-center status-banner text-bg-danger rounded-3 d-none'>
          <div className='col-8 justify-content-center text-center'>
            <h2 className='m-0'>Fail</h2>
          </div>
        </div>
      ) : null}
      <div
        className='progress my-3'
        role='progressbar'
        aria-label='Animated striped example'
        aria-valuenow={cycleCount}
        aria-valuemin='0'
        aria-valuemax={cycleTarget}
      >
        <div
          className='progress-bar progress-bar-striped progress-bar-animated'
          style={{ width: `${(cycleCount / cycleTarget) * 100}%` }}
        ></div>
      </div>
      <div className='row justify-content-center mt-4'>
        <div className='col justify-content-center'>
          <div className='d-flex flex-wrap justify-content-center justify-content-lg-between'>
            <div className='col-auto my-auto pb-2 pb-lg-0'>
              <h3 className='m-0'>Cycle Count:</h3>
            </div>
            <div className='col-lg-6 col-10'>
              <div type='text' className='card d-flex align-items-center'>
                <span className='my-1 h3'>{cycleCount}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='row justify-content-center my-4'>
        <div className='col justify-content-center'>
          <div className='d-flex flex-wrap justify-content-center justify-content-lg-between'>
            <div className='col-auto my-auto pb-2 pb-lg-0'>
              <h3 className='m-0'>Target:</h3>
            </div>
            <div className='col-lg-6 col-10 input-group-lg'>
              <input
                type='number'
                min='1'
                className='form-control text-center'
                onChange={(e) => onTargetChange(e)}
                disabled={mode !== "IDLE"}
              ></input>
            </div>
          </div>
        </div>
      </div>
      <div className='d-grid gap-2 col mx-auto'>
        <button
          className='btn btn-success'
          type='button'
          onClick={() => onModeSelect("START")}
          disabled={cycleTarget < 1 || mode === "START" || mode === "DONE"}
        >
          START
        </button>
        <button
          className='btn btn-danger'
          type='button'
          onClick={() => onModeSelect("STOP")}
          disabled={mode === "IDLE" || mode == "DONE" || mode === "STOP"}
        >
          STOP
        </button>
        <button
          className='btn btn-secondary'
          type='button'
          onClick={() => onResetClick()}
          disabled={mode === "IDLE" || mode == "START"}
        >
          RESET
        </button>
      </div>
    </div>
  );
}

export default Form;
