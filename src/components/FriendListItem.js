import React from "react";
import PropTypes from "prop-types";

export default function FriendsListItem({avatar, name, isOnline}){
    return(
        <li className="friend-item">
        <span className={isOnline ? 'status online' : 'status offline'}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </li>
    )
}

FriendsListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool,
}