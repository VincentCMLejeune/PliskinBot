import { Link } from "react-router-dom";

import GithubContribution from "../../components/github contributions/GithubContribution";
import Today from "../../components/today/Today";
import Todos from "../../components/todos/Todos";

import "./Home.css";

export default function Home({ calendarData, githubData }) {
  return (
    <div className="Home">
      <header className="Home-header">
        <Today calendarData={calendarData} />
        <GithubContribution githubData={githubData} />
        <Todos />
        <div>
          <Link to="/sports">
            <button>SPORT</button>
          </Link>
        </div>
      </header>
    </div>
  );
}
