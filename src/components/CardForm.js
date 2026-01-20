import { updateCard } from "../services/api";

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
          <input type="text" name="name" required/>
        </label>
        <br></br><br></br>
        <label>
          URL for Card Picture:
          <input type="text" name="name" required/>
        </label>
        <br></br><br></br>
        <button>
          Save Changes
        </button>
  </form>;
}
