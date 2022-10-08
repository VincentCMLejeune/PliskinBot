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
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
