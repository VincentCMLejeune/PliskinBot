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
  const [calendarData, setCalendarData] = useState(null);
  const [githubData, setGithubData] = useState(null);
  const [sportData, setSportData] = useState(null);
  const [stellarisData, setStellarisData] = useState(null);
  const [testData, setTestData] = useState(null);

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
      .get("http://localhost:9000/fitness")
      .then((res) => setSportData(res.data))
      .catch((err) => console.log(err));

    axios
      .get("http://localhost:9000/stellaris")
      .then((res) => setStellarisData(res.data))
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
    if (
      calendarData !== null &&
      githubData !== null &&
      sportData !== null &&
      stellarisData !== null &&
      testData !== null
    ) {
      setDataLoaded(true);
    } else {
      setDataLoaded(false);
    }
  }, [calendarData, githubData, sportData, stellarisData, testData]);

  return (
    <div className="App">
      {dataLoaded ? (
        <BrowserRouter>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <Home
                  calendarData={calendarData}
                  setCalendarData={setCalendarData}
                  githubData={githubData}
                />
              }
            />
            <Route path="/sports" element={<Sport sportData={sportData} />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <Loading
          calendarData={calendarData}
          githubData={githubData}
          testData={testData}
          stellarisData={stellarisData}
          sportData={sportData}
        />
      )}
    </div>
  );
}
