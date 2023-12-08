import React from "react";
import Header from "./Components/Header";
import Form from "./Components/Form";

function App() {
  return (
    <div className=''>
      <Header></Header>
      <div className='container vh-100'>
        <div className='row justify-content-center vh-100'>
          <div className='col-6'>
            <Form></Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
