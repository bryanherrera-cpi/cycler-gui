import React from "react";
import Loading from "./Loading";
import FormElements from "./FormElements";

function Form({
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
      <FormElements
        updateTarget={updateTarget}
        updateMode={updateMode}
        onReset={onReset}
        mode={mode}
        cycleCount={cycleCount}
        cycleTarget={cycleTarget}
      ></FormElements>
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

export default Form;
