import React from "react";

const Connected = (props) => {
  const handleNumberChange = (event) => {
    const enteredIndex = parseInt(event.target.value, 10);
    if (
      !isNaN(enteredIndex) &&
      enteredIndex >= 0 &&
      enteredIndex < props.candidates.length
    ) {
      props.handleNumberChange(event);
    } else {
      console.log("Invalid index");
    }
  };
  return (
    <div className="connected-container">
      <h1 className="connected-header">Welcome To a Secure Voting</h1>
      <h2 className="connected-header">
        Choose the candidate you want to vote
      </h2>
      <p className="connected-account">Metamask Account: {props.account}</p>
      <p className="connected-account">Remaining Time: {props.remainingTime}</p>
      {props.showButton ? (
        <p className="connected-account">
          Your Vote has been successfully casted
        </p>
      ) : (
        <div>
          <input
            type="number"
            placeholder="Enter Candidate Index"
            value={props.number}
            onChange={handleNumberChange}
          ></input>
          <br />
          <button className="login-button" onClick={props.voteFunction}>
            Vote
          </button>
        </div>
      )}
      <table id="myTable" className="candidates-table">
        <thead>
          <tr>
            <th>Index</th>
            <th>Candidate name</th>
            <th>Candidate votes</th>
          </tr>
        </thead>
        <tbody>
          {props.candidates.map((candidate, index) => (
            <tr key={index}>
              <td>{candidate.index}</td>
              <td>{candidate.name}</td>
              <td>{candidate.voteCount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Connected;
