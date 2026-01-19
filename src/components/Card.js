import { Link } from "react-router-dom";

export default function Card({ card, onDelete, busy }) {
  // guard clause
  if (!card) return null;

  return (
    <div className="card-container">
      <img
        src={card.image || "https://via.placeholder.com/150"}
        alt={card.name || "Card image"}
        className="card-image"
      />

      <div className="card-content">
        <h3 className="card-title">{card.name}</h3>
        <p className="card-id">ID: {card.id}</p>
      </div>

      <div className="card-actions">
        <Link to={`/edit/${card.id}`}>
          <button type="button" className="btn btn-edit">
            Edit
          </button>
        </Link>

        <button
          type="button"
          className="btn btn-delete"
          onClick={() => onDelete(card)}
          disabled={busy}
        >
          {busy ? "Deleting..." : "Delete"}
        </button>
      </div>
    </div>
  );
}
