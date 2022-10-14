import { Link } from "react-router-dom";

import GithubContribution from "./github contributions/GithubContribution";
import Planning from "./planning/Planning";
import Todos from "./todos/Todos";

import "./Home.css";

export default function Home({ calendarData, setCalendarData, githubData }) {
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
          <Link to="/stellaris">
            <button>STELLARIS</button>
          </Link>
        </div>
      </header>
    </div>
  );
}
