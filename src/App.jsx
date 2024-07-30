import { useState } from "react";
import Button from "./Components/Button";
import FriendsList from "./Components/FriendsList";
import Sidebar from "./Components/Sidebar";

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
  return (
    <div className="app">
      <Sidebar>
        <FriendsList friendsList={friendsList} />
        <Button>Add Friend</Button>
      </Sidebar>
    </div>
  );
}

export default App;
