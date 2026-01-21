import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardForm from "../components/CardForm";
import { getCards, updateCard } from "../services/api";

export default function EditCard() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  // load card
  useEffect(() => {
    getCards()
      .then((res) => {
        const data = Array.isArray(res) ? res : res.data;
        const found = data.find((c) => String(c.id) === String(id));

        if (!found) {
          setError("Card not found");
        } else {
          setCard(found);
        }
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load card");
        setLoading(false);
      });
  }, [id]);

  // submit edit
  const handleSubmit = async (updatedData) => {
    setBusy(true);
    setError(null);
    try {
      await updateCard(id, updatedData);
      navigate("/cards");
    } catch {
      setError("Failed to update card");
    } finally {
      setBusy(false);
    }
  };

  if (loading) return <p>loading = true</p>;
  if (error) return <p>{error}</p>;

  return (
    <main className="form-page">
      <h1>Edit Card</h1>

      <CardForm
        initialData={card}
        onSubmit={handleSubmit}
        busy={busy}
      />
    </main>
  );
}
