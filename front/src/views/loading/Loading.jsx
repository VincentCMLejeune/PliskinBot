import "./Loading.css";

export default function Loading({ dataLoaded }) {
  return (
    <div className="Loading">
      <h1>Loading...</h1>
      <div className="Loading-items">
        <ul>
          {Object.values(dataLoaded).map((data, index) => (
            <div key={index}>
              <li className={data.isLoaded ? "Loaded-item" : ""}>
                {data.name}
              </li>
              {data.error && <div className="Loaded-error">{data.error}</div>}
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
