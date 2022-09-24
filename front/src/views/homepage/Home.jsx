import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Todos from "../../components/todos/Todos";
import "./Home.css";

const axios = require("axios").default;

export default function Home() {
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
    <div className="Home">
      <header className="Home-header">
        {testData && <p>{testData}</p>}
        <div>
          <Link to="/sports">
            <button>SPORT</button>
          </Link>
        </div>
        <Todos />
      </header>
    </div>
  );
}
