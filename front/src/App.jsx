import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

import Home from "./views/homepage/Home";
import Sport from "./views/sport/Sport";
import Loading from "./views/loading/Loading";
import "./App.css";

export default function App() {
  const [githubData, setGithubData] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);
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
