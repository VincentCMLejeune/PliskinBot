// Dependencies
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./views/homepage/Home";
import Loading from "./views/loading/Loading";
import Sport from "./views/sport/Sport";

// Styling
import "./App.css";

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [githubData, setGithubData] = useState(null);
  const [testData, setTestData] = useState(undefined);

  useEffect(() => {
    axios
      .get("http://localhost:9000/testAPI")
      .then((res) => setTestData(res.data))
      .catch((err) => console.log(err));

    axios
      .get("https://api.github.com/users/VincentCMLejeune/events")
      .then((res) => {
        setGithubData(res);
        // console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (testData) {
      console.log(testData);
    }
  }, [testData]);

  useEffect(() => {
    if (githubData !== null) {
      setDataLoaded(true);
    }
  }, [githubData]);

  return (
    <div className="App">
      {dataLoaded ? (
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home githubData={githubData} />} />
            <Route path="/sports" element={<Sport />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <Loading />
      )}
    </div>
  );
}
