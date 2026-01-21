import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";
import { getCards, deleteCard } from "../services/api";

export default function CardList() {
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    getCards()
      .then((res) => {
        setCards(res || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load cards");
        setLoading(false);
      });
  }, []);

  const handleDelete = async (card) => {
    setBusy(true);
    try {
      await deleteCard(card.id);
      setCards((prev) => prev.filter((c) => c.id !== card.id));
    } catch {
      setError("Failed to delete card");
    } finally {
      setBusy(false);
    }
  };

  if (loading) return <main>Loading...</main>;
  if (error) return <main>{error}</main>;

  return (
    <main className="card-grid">
      <Link to="/new" style={{ textDecoration: "none" }}>
        <button type="button" className="btn btn-add">
          + Add New Card
        </button>
      </Link>
      {cards.length === 0 && <p>No cards found</p>}
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}
          onDelete={handleDelete}
          busy={busy}
        />
      ))}
    </main>
  );
}