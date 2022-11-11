import { Link } from "react-router-dom";

import GithubContribution from "./github contributions/GithubContribution";
import Planning from "./planning/Planning";
import Todos from "./todos/Todos";

import "./Home.css";

export default function Home({
  calendarData,
  setCalendarData,
  githubData,
  sportData,
  stellarisData,
}) {
  return (
    <div className="Home">
      <header className="Home-header">
        <Planning
          calendarData={calendarData}
          setCalendarData={setCalendarData}
        />
        <GithubContribution githubData={githubData} />
        <Todos />
        <div>
          {sportData !== null ? (
            <Link to="/sports">
              <button>SPORT</button>
            </Link>
          ) : (
            <button id="Home-link-disabled">SPORT UNAVAILABLE</button>
          )}
          {stellarisData !== null ? (
            <Link to="/stellaris">
              <button>STELLARIS</button>
            </Link>
          ) : (
            <button id="Home-link-disabled">STELLARIS UNAVAILABLE</button>
          )}
        </div>
      </header>
    </div>
  );
}
