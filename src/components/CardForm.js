export default function CardForm({
  values,
  onChange,
  onSubmit,
  busy,
  error,
  submitText,
}) {
  /* TODO: Complete the CardForm component 
  - display form inputs for card_name and card_pic
  - display error message
  - display submit button 
  - handle form submission 
  - style as a form UI */

  return <form>
          <label>
        Name:
        <input type="text" name="card_name" value={values.card_name || ""} onChange={(e) => onChange("card_name", e.target.value)}
          required />
      </label>

      <label>
        URL of Card Picture:
        <input type="url" name="card_pic" value={values.card_pic || ""} onChange={(e) => onChange("card_pic", e.target.value)}
          required/>
      </label>

      {error && (
        <div style={{ color: "red", fontSize: "0.9rem" }}>
          {error}
        </div>
      )}

      <button type="submit" disabled={busy} >
        {busy ? "Submitting..." : submitText}
      </button>
  </form>;
}
