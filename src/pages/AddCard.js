import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardForm from "../components/CardForm";
import { updateCard, getCards } from "../services/api";

export default function EditCard() {
  const [busy, setBusy] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [card, setCard] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchCard = async () => {
      try {
        const allCards = await getCards();
        const foundCard = allCards.find(c => c.id === parseInt(id));
        if (foundCard) {
          setCard(foundCard);
        } else {
          setError("Card not found");
        }
      } catch (err) {
        setError(err.message || "Failed to load card");
      } finally {
        setLoading(false);
      }
    };

    fetchCard();
  }, [id]);

  const handleSubmit = async (formValues) => {
    setBusy(true);
    setError(null);

    try {
      await updateCard(id, formValues);
      navigate("/cards");
    } catch (err) {
      setError(err.message || "Failed to update card");
    } finally {
      setBusy(false);
    }
  };

  if (loading) return <main style={{ padding: "2rem" }}>Loading...</main>;

  if (!card) {
    return (
      <main style={{ padding: "2rem" }}>
        <h1>Card not found</h1>
        <p>{error}</p>
      </main>
    );
  }

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Edit Card</h1>
      <CardForm
        values={{ card_name: card.card_name, card_pic: card.card_pic }}
        onSubmit={handleSubmit}
        busy={busy}
        error={error}
        submitText="Update Card"
      />
    </main>
  );
}