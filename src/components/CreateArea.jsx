import React, { useState } from "react";
function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });
  function change(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      if (name === "title") {
        return {
          title: value,
          content: prevValue.content,
        };
      } else if (name === "content") {
        return {
          title: prevValue.title,
          content: value,
        };
      }
    });
  }
  function remain(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    return event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          onChange={change}
          name="title"
          value={note.title}
          placeholder="Title"
        />
        <textarea
          onChange={change}
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={remain}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
