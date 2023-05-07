import React from "react";

function Task({ text, category, deleteTask }) {
  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button value={text} className="delete" onClick={(e) => deleteTask(e.target.value)}>X</button>
    </div>
  );
}

export default Task;
