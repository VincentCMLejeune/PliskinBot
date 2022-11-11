// Dependencies
import axios from "axios";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Home from "./pages/homepage/Home";
import Loading from "./pages/loading/Loading";
import Fitness from "./pages/fitness/Fitness";
import Stellaris from "./pages/stellaris/Stellaris";

// Styling
import "./App.css";

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);
  const [calendarData, setCalendarData] = useState(null);
  const [githubData, setGithubData] = useState(null);
  const [fitnessData, setFitnessData] = useState(null);
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
      .then((res) => setFitnessData(res.data))
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
      fitnessData !== null &&
      stellarisData !== null &&
      testData !== null
    ) {
      setDataLoaded(true);
    }
  }, [calendarData, githubData, fitnessData, stellarisData, testData]);

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
                  fitnessData={fitnessData}
                  stellarisData={stellarisData}
                />
              }
            />
            <Route
              path="/fitness"
              element={<Fitness fitnessData={fitnessData} />}
            />
            <Route
              path="/stellaris"
              element={<Stellaris stellarisData={stellarisData} />}
            />
          </Routes>
        </BrowserRouter>
      ) : (
        <Loading
          calendarData={calendarData}
          githubData={githubData}
          testData={testData}
          stellarisData={stellarisData}
          fitnessData={fitnessData}
          setDataLoaded={setDataLoaded}
        />
      )}
    </div>
  );
}
