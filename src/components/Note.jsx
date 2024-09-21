import React from "react";

function Note(props) {
  function remove(event) {
    props.delete(props.id);
    return event.preventDefault();
  }
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={remove}>DELETE</button>
    </div>
  );
}

export default Note;
