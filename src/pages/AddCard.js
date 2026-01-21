import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardForm from "../components/CardForm";
import { addCard } from "../services/api";

export default function AddCard() {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (formValues) => {
    setBusy(true);
    setError(null);

    try {
      await addCard(formValues);
      navigate("/cards");
    } catch (err) {
      setError(err.message || "Failed to add card");
    } finally {
      setBusy(false);
    }
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Add a New Card</h1>
      <CardForm
        values={{ card_name: "", card_pic: "" }}
        onSubmit={handleSubmit}
        busy={busy}
        error={error}
        submitText="Add Card"
      />
    </main>
  );
}