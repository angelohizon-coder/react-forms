import React, { useState } from "react";

function App() {
  var [message, changeMessage] = useState("");
  var [name, changeName] = useState("");

  function getInput(event) {
    changeName(event.target.value);
  }

  function getMessage() {
    changeMessage(name);
  }

  return (
    <div className="container">
      <h1>Hello {message}</h1>
      <input
        onChange={getInput}
        type="text"
        placeholder="What's your name?"
        value={name}
      />
      <button onClick={getMessage}>Submit</button>
    </div>
  );
}

export default App;
