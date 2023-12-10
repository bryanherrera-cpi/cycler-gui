import React from "react";

function Loading() {
  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
        <div
          className='spinner-border text-secondary spinner-border-lg'
          role='status'
        >
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>
      <div className='row justify-content-center text-center mb-5 mt-2'>
        <h5>Loading...</h5>
      </div>
    </div>
  );
}

export default Loading;
