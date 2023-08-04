import React from "react";
import FriendsListItem from "./FriendListItem";
import PropTypes from "prop-types";

export default function FriendList({friends}){
    return (
    <ul className="friend-list">
        
    {friends.map((friend) => (<FriendsListItem
    avatar={friend.avatar}
    name={friend.name}
    isOnline={friend.isOnline}
    key={friend.id}/>
    ))}
           

   </ul>)

}


FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
      })
    ).isRequired,
  };