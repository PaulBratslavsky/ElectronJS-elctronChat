import React from "react";
import ChatList from "../ChatList";
import SearchBox from "../SearchBox";

export default function ChatListBar() {
  return (
    <div className="list-container">
      <SearchBox />
      <ChatList />
    </div>
  );
}
