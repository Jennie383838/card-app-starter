import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardForm from "../components/CardForm";
import { addCard } from "../services/api";

export default function AddCard() {
  /* TODO: Complete the AddCard page
    - display a form for adding a new card (use the CardForm component to display the form)
    - handle form submission to call addCard API
    - handle busy and error states
    - style as a form UI */

    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault(); 
        alert("Registered Successfully!");
    }

  return (
    <div className="App">
      <h1 className="form">Register Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Username" className="input" required />
        <input type="email" placeholder="Email" className="input" required />
        <input type="text" placeholder="Phone Number" className="input" required />
        <input type="text" placeholder="Address" className="input" required />
        <button type="submit" className="button">Register</button>
        <button onClick={() => navigate(-1)} className="backbutton">
        Go Back
      </button>
      </form>
    </div>
  );
}
