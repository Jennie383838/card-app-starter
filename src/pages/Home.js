import { useNavigate } from "react-router-dom";
import "./Home.css";



export default function Home() {
  const navigate = useNavigate();
  return <div className="home-container" >
    <h1 className="h1"> Welcome to Das Card App</h1>
    <button onClick={() => navigate("/cards")} className="view-btn">
      View Cards
    </button>
  </div>;
}
