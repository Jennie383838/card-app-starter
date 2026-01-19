import { useEffect, useState } from "react";
import Card from "../components/Card";
import { getCards, deleteCard } from "../services/api";

export default function CardList() {
  // Store card data
  const [cards, setCards] = useState([]);

  // Handle loading state while fetching data
  const [loading, setLoading] = useState(true);

  // Prevent multiple delete actions at once
  const [busy, setBusy] = useState(false);

  // Store error messages
  const [error, setError] = useState(null);

  // Fetch cards when component mounts
  useEffect(() => {
    getCards()
      .then((data) => {
        setCards(data);        // Save cards to state
        setLoading(false);     // Stop loading
      })
      .catch(() => {
        setError("Failed to load cards"); // Handle fetch error
        setLoading(false);
      });
  }, []);

  // Handle deleting a card
  const handleDelete = async (card) => {
    setBusy(true); // Disable delete buttons
    try {
      await deleteCard(card.id); // Call API to delete
      setCards(cards.filter((c) => c.id !== card.id)); // Update UI
    } catch {
      setError("Failed to delete card"); // Handle delete error
    } finally {
      setBusy(false); // Re-enable buttons
    }
  };

  // Show loading message
  if (loading) return <main>Loading...</main>;

  // Show error message
  if (error) return <main>{error}</main>;

  return (
    <main className="card-grid">
      {/* Render cards in a grid */}
      {cards.map((card) => (
        <Card
          key={card.id}
          card={card}                 // Card data
          onDelete={handleDelete}     // Delete handler
          busy={busy}                 // Disable while deleting
        />
      ))}
    </main>
  );
}
