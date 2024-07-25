import React from "react";
import Button from "./Button";

function Friend({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      <p>You and {friend.name} are even</p>

      <Button>Select</Button>
    </li>
  );
}

export default Friend;
