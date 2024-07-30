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
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSplitBill(value) {
    setFriendsList((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );

    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <Sidebar>
        <FriendsList
          friendsList={friendsList}
          setSelectedFriend={setSelectedFriend}
        />
        {isOpen && (
          <FormAddFriend
            setFriendsList={setFriendsList}
            setIsOpen={setIsOpen}
          />
        )}
        <Button onClick={() => setIsOpen((prev) => !prev)}>
          {isOpen ? "Close" : "Add Friend"}
        </Button>
      </Sidebar>
      {selectedFriend && (
        <FormSplitBill
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
