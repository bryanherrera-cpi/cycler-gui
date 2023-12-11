import React from "react";
import Loading from "./Loading";
import Form from "./Form";

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
      <Form
        updateTarget={updateTarget}
        updateMode={updateMode}
        onReset={onReset}
        mode={mode}
        cycleCount={cycleCount}
        cycleTarget={cycleTarget}
      ></Form>
    );
  };

  const renderLoading = () => {
    return <Loading></Loading>;
  };
  return (
    <div className='card'>
      <div className='card-body'>
        {socketConnection ? renderForm() : renderLoading()}
      </div>
    </div>
  );
}

export default Card;
