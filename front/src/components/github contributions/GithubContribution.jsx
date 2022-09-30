import { useEffect, useState } from "react";

import "./GithubContribution.css";

export default function GithubContribution({ githubData }) {
  const [haveicontributed, setHaveicontributed] = useState(null);

  // useEffect(() => {
  //     const today = new Date();
  //     console.log(today)
  // }, [])

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = date.getDate();
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    const today = formatDate(new Date());
    const lastContributionDate = githubData.data[0].created_at.slice(0, 10);
    setHaveicontributed(today === lastContributionDate);
  }, [githubData.data]);

//   useEffect(() => {
//     console.log(githubData);
//   }, [githubData]);

  return (
    <div className="github-contribution">
      <h1>GitHub</h1>
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
  );
}
