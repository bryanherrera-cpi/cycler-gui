import React from "react";
import Logo from '../Assests/cp_logo.png'

function Header() {
  return (
    <header className="">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-3">
                    <img className="img-fluid p-4" src={Logo} alt="Chargepoint" />
                </div>
            </div>
        </div>
    </header>
  );
}

export default Header;