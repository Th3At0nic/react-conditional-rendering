import logo from "./logo.svg";
import "./App.css";
import User from "./Components/User/User";
import { useState } from "react";

function App() {
  const [familiar, setFamiliar] = useState(false);
  return (
    <div className="App">
      <h1>Is Familiar: {familiar.toString()}</h1>
      <button
        className="m-3 p-3 bg bg-info"
        onClick={() => setFamiliar(!familiar)}
      >
        Toggle
      </button>
      <User familiar={familiar}></User>
    </div>
  );
}

export default App;
