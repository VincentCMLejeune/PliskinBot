import { Link } from "react-router-dom";

import Todos from "../../components/todos/Todos";
import GithubContribution from "../../components/github contributions/GithubContribution";
import "./Home.css";

export default function Home({ githubData }) {
  return (
    <div className="Home">
      <header className="Home-header">
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
