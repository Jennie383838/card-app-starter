import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

  return (
    <header className="container">
      <span className="app-name">Card App</span> {/* added class for spacing */}
      <nav>
        <NavLink to="/" className={getClass}>
          Home
        </NavLink>
        <NavLink to="/cards" className={getClass}>
          Cards
        </NavLink>
      </nav>
    </header>
  );
}
