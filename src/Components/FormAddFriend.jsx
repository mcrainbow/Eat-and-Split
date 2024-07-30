import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ setFriendsList, setIsOpen }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleAddFriend(e) {
    e.preventDefault();

    if (!name || !image) return;

    setFriendsList((prev) => [
      ...prev,
      { id: Date.now(), name, image, balance: 0 },
    ]);
    setIsOpen(false);
  }

  return (
    <form className="form-add-friend" onSubmit={(e) => handleAddFriend(e)}>
      <label>👫 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🌄 Image URL</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        disabled
      />
      <Button>Add</Button>
    </form>
  );
}
