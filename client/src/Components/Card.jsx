import React from "react";
import Loading from "./Loading";
import Form from "./Form";
import CyclerNav from "./CyclerNav";

function Card({
  updateTarget,
  updateMode,
  onReset,
  mode,
  socketConnection,
  cycleCount,
  cycleTarget,
}) {
  const renderForm = () => {
    return (
      <div className='tab-content rounded-bottom'>
        <div
          className='tab-pane fade show active'
          id='cycle1-tab-pane'
          role='tabpanel'
          aria-labelledby='cycle1-tab'
          tabindex='0'
        >
          <Form
            updateTarget={updateTarget}
            updateMode={updateMode}
            onReset={onReset}
            mode={mode}
            cycleCount={cycleCount}
            cycleTarget={cycleTarget}
          ></Form>
        </div>
        <div
          className='tab-pane fade'
          id='cycle2-tab-pane'
          role='tabpanel'
          aria-labelledby='cycle2-tab'
          tabindex='0'
        >
          <Form
            updateTarget={updateTarget}
            updateMode={updateMode}
            onReset={onReset}
            mode={mode}
            cycleCount={cycleCount}
            cycleTarget={cycleTarget}
            tabTarget='cycle2-tab-pane'
            index='1'
          ></Form>
        </div>
      </div>
    );
  };

  const renderLoading = () => {
    return <Loading></Loading>;
  };
  return (
    <div className='card'>
      <div className='card-body'>
        <CyclerNav mode={mode}></CyclerNav>
        {socketConnection ? renderForm() : renderLoading()}
      </div>
    </div>
  );
}

export default Card;
