/**
 * API Service (Create React App)
 *
 * 1) Create `.env` at project root
 * 2) Set: REACT_APP_API_URL=https://YOUR-BACKEND.onrender.com
 * 3) Restart `npm start`
 */
const API_URL = process.env.REACT_APP_API_URL || "";

/**
 * TODO: If your backend routes differ, update the paths here.
 * Required endpoints:
 * - GET    /allcards
 * - POST   /addcard
 * - PUT    /updatecard/:id
 * - DELETE /deletecard/:id
 */

export async function getCards() {
  // GET /allcards (provided as reference)
  const res = await fetch(`${API_URL}/cards`);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

export async function addCard(card) {
  // TODO: implement POST /addcard
}

export async function updateCard(id, card) {
  // TODO: implement PUT /updatecard/:id
  try { 
    const response = await fetch(`/cards/${id}/edit`, { 
      method: 'PUT', 
      headers: { 'Content-Type': 'application/json', }, 
      body: JSON.stringify(card), 
    }); 
    
    if (!response.ok) { 
      throw new Error(`Failed to update card: ${response.statusText}`); 
    } 
    
    const updatedCard = await response.json(); 
    return updatedCard; 
  } catch (error) { 
    console.error('Error updating card:', error); 
    throw error; 
  }
}

export function deleteCard(id) {
  // TODO: implement DELETE /deletecard/:id
}
