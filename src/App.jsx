import { useState } from "react";
import Button from "./Components/Button";
import FriendsList from "./Components/FriendsList";
import Sidebar from "./Components/Sidebar";
import FormAddFriend from "./Components/FormAddFriend";
import FormSplitBill from "./Components/FormSplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friendsList, setFriendsList] = useState(initialFriends);
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="app">
      <Sidebar>
        <FriendsList friendsList={friendsList} />
        {isOpen && <FormAddFriend />}
        <Button onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? "Close" : "Add Friend"}
        </Button>
      </Sidebar>
      <FormSplitBill />
    </div>
  );
}

export default App;
