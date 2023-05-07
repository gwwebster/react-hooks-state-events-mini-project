import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteTaskCallback, selectedState }) {

  const tasksToDisplay = tasks.map(task => {
    return <Task key={task.text} text={task.text} category={task.category} deleteTask={deleteTaskCallback} />
  })
  .filter(task => {
    if (selectedState === "" || selectedState === "All") {
      return true
    } else if (selectedState === task.props.category) {
      return true
    } 
  })

  return (
    <div className="tasks">
      {tasksToDisplay}
    </div>
  );
}

export default TaskList;