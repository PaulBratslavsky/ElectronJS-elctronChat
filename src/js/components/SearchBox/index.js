import React from "react";

export default function SearchBox({...props}) {
  return (
    <div className="chat-search-box">
      <div className="input-group">
        <input className="form-control" placeholder="Search" {...props} />
      </div>
    </div>
  );
}
