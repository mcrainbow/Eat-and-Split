import React from "react";
import Button from "./Button";

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with friend</h2>

      <label>💰 Bill value</label>
      <input type="text" />

      <label>🧍‍♀️ Your expense</label>
      <input type="text" />

      <label>👫 friend expense</label>
      <input type="text" disabled />

      <label>🤑 Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">friend Name</option>
      </select>

      <Button>Split bill</Button>
    </form>
  );
}

export default FormSplitBill;
