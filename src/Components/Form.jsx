import React from "react";

function Form({ updateTarget, updateMode, updateReset }) {
  const onTargetChange = (e) => {
    //console.log(e.target.value);
    updateTarget(e.target.value);
  };

  const onModeSelect = (e) => {
    updateMode(e);
    //console.log(e);
  };

  const onReset = () => {
    updateReset();
  };

  return (
    <div className='card'>
      <div className='card-body'>
        <div className='container'>
          <div className='row justify-content-center status-banner bg-info rounded-3'>
            <div className='col-8 justify-content-center text-center'>
              <h2 className='m-0'>IDLE</h2>
            </div>
          </div>
          <div className='row justify-content-center status-banner bg-warning rounded-3 d-none'>
            <div className='col-8 justify-content-center text-center'>
              <h2 className='m-0'>Busy</h2>
            </div>
          </div>
          <div className='row justify-content-center status-banner text-bg-secondary rounded-3 d-none'>
            <div className='col-8 justify-content-center text-center'>
              <h2 className='m-0'>Paused</h2>
            </div>
          </div>
          <div className='row justify-content-center status-banner text-bg-danger rounded-3 d-none'>
            <div className='col-8 justify-content-center text-center'>
              <h2 className='m-0'>Fail</h2>
            </div>
          </div>
          <div className='row justify-content-center mt-4'>
            <div className='col-10 justify-content-center'>
              <div className='d-flex justify-content-between'>
                <div className='col-auto'>
                  <h3 className='m-0'>Cycle Count:</h3>
                </div>
                <div className='col-6'>
                  <div type='text' className='card d-flex align-items-center'>
                    <span className='my-1 h3'>0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row justify-content-center my-4'>
            <div className='col-10'>
              <div className='d-flex justify-content-between'>
                <div className='col-auto'>
                  <h3 className='m-0'>Target:</h3>
                </div>
                <div className='col-6 input-group-lg'>
                  <input
                    type='text'
                    className='form-control text-center'
                    onChange={(e) => onTargetChange(e)}
                  ></input>
                </div>
              </div>
            </div>
          </div>
          <div className='d-grid gap-2 col-8 mx-auto'>
            <button
              className='btn btn-success'
              type='button'
              onClick={() => onModeSelect("START")}
            >
              START
            </button>
            <button
              className='btn btn-danger'
              type='button'
              onClick={() => onModeSelect("STOP")}
            >
              STOP
            </button>
            <button
              className='btn btn-secondary'
              type='button'
              onClick={() => onReset()}
            >
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
