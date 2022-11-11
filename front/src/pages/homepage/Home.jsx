import { Link } from "react-router-dom";

import GithubContribution from "./github contributions/GithubContribution";
import Planning from "./planning/Planning";
import Todos from "./todos/Todos";

import "./Home.css";

export default function Home({
  calendarData,
  setCalendarData,
  githubData,
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
          <Link to="/sports">
            <button>SPORT</button>
          </Link>
          {stellarisData === null ? (
            <Link to="/stellaris">
              <button>STELLARIS</button>
            </Link>
          ) : (
            <button id="Stellaris-link-disabled">STELLARIS UNAVAILABLE</button>
          )}
        </div>
      </header>
    </div>
  );
}
