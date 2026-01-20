import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardForm from "../components/CardForm";
import { getCards, updateCard } from "../services/api";

export default function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [card, setCard] = useState(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);

  // load existing card
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

  // submit update
  const handleSubmit = async (updatedCard) => {
    setBusy(true);
    try {
      await updateCard(id, updatedCard);
      navigate("/");
    } catch {
      setError("Failed to update card");
    } finally {
      setBusy(false);
    }
  };

  if (loading) return <main>Loading...</main>;
  if (error) return <main>{error}</main>;

  return (
    <main>
      <CardForm
        initialData={card}
        onSubmit={handleSubmit}
        busy={busy}
      />
    </main>
  );
}
