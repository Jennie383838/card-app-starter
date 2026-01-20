import { useNavigate } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="home-container">
      <h1 className="home-title">Welcome to Das Card App</h1>
      <p className="home-subtitle">
        Manage your cards easily and efficiently.
      </p>
      <button
        onClick={() => navigate("/cards")}
        className="btn-view"
        aria-label="View all cards"
      >
        View Cards
      </button>
    </main>
  );
}
