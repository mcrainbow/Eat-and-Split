import Friend from "./Friend";

function FriendsList({ initialFriends }) {
  return (
    <ul>
      {initialFriends.map((item) => (
        <Friend key={item.id} friend={item} />
      ))}
    </ul>
  );
}

export default FriendsList;
