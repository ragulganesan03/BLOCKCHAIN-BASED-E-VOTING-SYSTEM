import React, { useState } from "react";

const Login = (props) => {
  const [isMetamaskLoginVisible, setMetamaskLoginVisible] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");
  const [validationClass, setValidationClass] = useState("");

  const enableMetamaskLogin = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const aadharNumber = document.getElementById("aadharNumber").value;

    const isParametersCorrect =
      username && password && aadharNumber && aadharNumber.length === 12;

    if (isParametersCorrect) {
      setMetamaskLoginVisible(true);
      setValidationMessage("Verification successful!");
      setValidationClass("validation-success");
    } else {
      setValidationMessage("Please fill in all required fields correctly.");
      setValidationClass("validation-failure");
    }
  };

  return (
    <React.Fragment>
      <div className="header">
        <div className="info">
          <h1>Blockchain Based E Voting </h1>
          <div className="meta">By Ragul, Dhanush, Divya, Sairam</div>
        </div>
      </div>
      <h1 className="welcome-message">
        Welcome to decentralized voting application
      </h1>
      <div className="login-container">
        <div className="login">
          <input type="text" id="username" placeholder="Username" required />
          <input
            type="password"
            id="password"
            placeholder="Password"
            required
          />
          <input
            type="text"
            id="aadharNumber"
            name="aadharNumber"
            pattern="\d{12}"
            title="Aadhar number must be 12 digits"
            required
            placeholder="Aadhar Number"
          />
          <button type="button" id="verifyButton" onClick={enableMetamaskLogin}>
            Verify
          </button>
          {validationMessage && (
            <p className={`validation-message ${validationClass}`}>
              {validationMessage}
            </p>
          )}
        </div>
        {isMetamaskLoginVisible && (
          <button
            className="login-button"
            id="loginMetamaskButton"
            onClick={props.connectWallet}
          >
            Login Metamask
          </button>
        )}
      </div>
    </React.Fragment>
  );
};

export default Login;
