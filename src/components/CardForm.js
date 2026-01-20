import { useState } from "react";

export default function CardForm({ values, onChange, onSubmit, busy, error, submitText }) {
  const [formValues, setFormValues] = useState(values || { card_name: "", card_pic: "" });

  // handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (onChange) onChange({ ...formValues, [name]: value });
  };

  // handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit(formValues);
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: "400px", margin: "auto" }}>
      {error && (
        <div style={{ color: "red", marginBottom: "10px" }}>
          {error}
        </div>
      )}

      <label>
        Card Name:
        <input
          type="text"
          name="card_name"
          value={formValues.card_name}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginTop: "4px" }}
        />
      </label>

      <br /><br />

      <label>
        Card Picture URL:
        <input
          type="text"
          name="card_pic"
          value={formValues.card_pic}
          onChange={handleChange}
          required
          style={{ width: "100%", padding: "8px", marginTop: "4px" }}
        />
      </label>

      <br /><br />

      <button
        type="submit"
        disabled={busy}
        style={{
          padding: "10px 20px",
          backgroundColor: "#ff69b4",
          color: "#fff",
          border: "none",
          cursor: busy ? "not-allowed" : "pointer"
        }}
      >
        {busy ? "Saving..." : submitText || "Save Changes"}
      </button>
    </form>
  );
}
