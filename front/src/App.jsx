import { useState, useEffect } from "react";

import Todos from "./components/Todos";
import "./App.css";

const axios = require("axios").default;

function App() {
  const [testData, setTestData] = useState(undefined);

  const testAPI = () => {
    axios
      .get("http://localhost:9000/testAPI")
      .then((res) => setTestData(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    testAPI();
  }, []);

  useEffect(() => {
    console.log(testData);
  }, [testData]);

  return (
    <div className="App">
      <header className="App-header">
        {testData && <p>{testData}</p>}
        <Todos />
      </header>
    </div>
  );
}

export default App;
