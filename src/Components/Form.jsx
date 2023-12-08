import React from "react";

function Form() {
  return (
    <div class='card'>
      <div class='card-body'>
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
                <div class='col-auto'>
                  <h3 class='m-0'>Cycle Count:</h3>
                </div>
                <div class='col-6'>
                  <div type='text' class='card d-flex align-items-center'>
                    <span className='my-1 h3'>0</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row justify-content-center my-4'>
            <div className='col-10'>
              <div className='d-flex justify-content-between'>
                <div class='col-auto'>
                  <h3 class='m-0'>Target:</h3>
                </div>
                <div class='col-6 input-group-lg'>
                  <input type='text' class='form-control text-center'></input>
                </div>
              </div>
            </div>
          </div>
          <div class='d-grid gap-2 col-8 mx-auto'>
            <button class='btn btn-success' type='button'>
              START
            </button>
            <button class='btn btn-danger' type='button'>
              STOP
            </button>
            <button class='btn btn-secondary' type='button'>
              RESET
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form;
