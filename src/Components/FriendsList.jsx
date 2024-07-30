import Friend from "./Friend";

function FriendsList({ friendsList, setSelectedFriend }) {
  function handleSelect(friend) {
    setSelectedFriend(friend);
  }
  return (
    <ul>
      {friendsList.map((item) => (
        <Friend key={item.id} friend={item} handleSelect={handleSelect} />
      ))}
    </ul>
  );
}

export default FriendsList;
