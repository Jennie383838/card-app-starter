import { NavLink } from "react-router-dom";
import "./Navbar.css";


export default function Navbar() {
  const getClass = ({ isActive }) => (isActive ? "nav-active" : null);

  return (
    <header className="container">
      <strong>Card App</strong>
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
