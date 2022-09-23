import { useState, useEffect } from "react";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const [testData, setTestData] = useState(undefined);

  const testAPI = () => {
    fetch("http://localhost:9000/testAPI")
      .then((res) => res.text())
      .then((res) => setTestData({ apiResponse: res }));
  };

  useEffect(() => {
    testAPI()
  }, [])

  useEffect(() => {
    console.log(testData);
  }, [testData]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {testData && <p>{testData.apiResponse}</p>}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
