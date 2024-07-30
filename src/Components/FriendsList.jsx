import Friend from "./Friend";

function FriendsList({ friendsList }) {
  return (
    <ul>
      {friendsList.map((item) => (
        <Friend key={item.id} friend={item} />
      ))}
    </ul>
  );
}

export default FriendsList;
