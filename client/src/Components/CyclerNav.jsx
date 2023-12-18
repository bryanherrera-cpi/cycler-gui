import React from "react";

function CyclerNav({ cyclerOneMode, cyclerTwoMode }) {
  const modeColors = {
    START: "fas fa-circle fa-xs me-2 text-warning",
    STOP: "fas fa-circle fa-xs me-2 text-secondary",
    IDLE: "fas fa-circle fa-xs me-2 text-primary",
    DONE: "fas fa-circle fa-xs me-2 text-info",
  };

  const cyclerOneStatus = modeColors[cyclerOneMode];
  const cyclerTwoStatus = modeColors[cyclerTwoMode];

  return (
    <ul className='nav nav-tabs nav-fill' id='myTab' role='tablist'>
      <li className='nav-item' role='presentation'>
        <button
          className='nav-link active border border-bottom-0'
          id='cycle1-tab'
          data-bs-toggle='tab'
          data-bs-target='#cycle1-tab-pane'
          type='button'
          role='tab'
          aria-controls='cycle1-tab-pane'
          aria-selected='true'
        >
          <i className={cyclerOneStatus}></i>Cycler 1
        </button>
      </li>
      <li className='nav-item' role='presentation'>
        <button
          className='nav-link border border-bottom-0'
          id='cycle2-tab'
          data-bs-toggle='tab'
          data-bs-target='#cycle2-tab-pane'
          type='button'
          role='tab'
          aria-controls='cycle2-tab-pane'
          aria-selected='false'
        >
          <i className={cyclerTwoStatus}></i>Cycler 2
        </button>
      </li>
    </ul>
  );
}

export default CyclerNav;
