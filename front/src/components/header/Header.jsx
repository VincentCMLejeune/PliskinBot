import { Link } from "react-router-dom";

import "./Header.css";

export default function Header() {
  return (
    <Link to="/" style={{ textDecoration: "none" }}>
      <div className="header">MAIN MENU</div>
    </Link>
  );
}
