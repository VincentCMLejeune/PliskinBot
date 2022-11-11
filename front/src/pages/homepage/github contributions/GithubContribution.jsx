import { useEffect, useState } from "react";

import LoadingError from "../../../components/loading error/LoadingError";

import "./GithubContribution.css";

import GitHubLogo from "../../../assets/icons/github-logo.svg";

export default function GithubContribution({ githubData }) {
  const [haveicontributed, setHaveicontributed] = useState(null);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    if (githubData !== null) {
      const today = formatDate(new Date());
      const lastContributionDate = githubData.data[0].created_at.slice(0, 10);
      setHaveicontributed(today === lastContributionDate);
    }
  }, [githubData]);

  return (
    <>
      {githubData !== null ? (
        <div className="github-contribution">
          <a
            href="https://github.com/VincentCMLejeune"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={GitHubLogo}
              alt="GitHub"
              className="github-contribution-logo"
            />
          </a>
          {haveicontributed !== null && (
            <div className="github-contribution-didicontribute">
              {haveicontributed ? (
                <div>Contributed today</div>
              ) : (
                <div>Haven't contributed today</div>
              )}
            </div>
          )}
        </div>
      ) : (
        <LoadingError element={"Github Data"} />
      )}
    </>
  );
}
