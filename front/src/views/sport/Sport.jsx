import { Link } from "react-router-dom";

import "./Sport.css";

import Header from "../../components/header/Header";

export default function Sport() {
  return (
    <div className="sport">
      <div className="sport-laptop-message-left">
        Are you doing sport with a laptop ?
      </div>
      <Header />
      <div id="title-glitched" title="Sport">
        Sport
      </div>
      <div className="sport-laptop-message-right">
        Are you doing sport with a laptop ?
      </div>
    </div>
  );
}
