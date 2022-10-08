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
  const [testData, setTestData] = useState(null);
  const [calendarData, setCalendarData] = useState(null);

  const calendarUrl = () => {
    const url = "http://localhost:9000/planning/";
    const today = new Date();
    return url + today.getFullYear() + "/" + today.getMonth();
  };

  useEffect(() => {
    axios
      .get("http://localhost:9000/testAPI")
      .then((res) => setTestData(res.data))
      .catch((err) => console.log(err));

    axios
      .get(calendarUrl())
      .then((res) => setCalendarData(res.data))
      .catch((err) => console.log(err));

    axios
      .get("https://api.github.com/users/VincentCMLejeune/events")
      .then((res) => setGithubData(res))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (testData) {
      console.log(testData);
    }
  }, [testData]);

  useEffect(() => {
    if (testData !== null && githubData !== null && calendarData !== null) {
      setDataLoaded(true);
    } else {
      setDataLoaded(false);
    }
  }, [testData, githubData, calendarData]);

  return (
    <div className="App">
      {dataLoaded ? (
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home githubData={githubData} calendarData={calendarData} />
              }
            />
            <Route path="/sports" element={<Sport />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <Loading />
      )}
    </div>
  );
}
