import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {

  const [selected, setSelected] = useState("");
  const [taskElements, setTaskElements] = useState(TASKS);

  function handleSelectedChange(selectedCategory) {
    setSelected(selectedCategory)
  }

  function handleDeleteTask(taskToDelete) {
    const updatedTasks = taskElements.filter(element => element.text !== taskToDelete)
    setTaskElements(updatedTasks)
  }

  function handleNewTask(newTaskObj) {
    setTaskElements([
      ...taskElements,
      newTaskObj
    ])
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
        selectedStateCallback={handleSelectedChange} 
        selectedState={selected} 
        categories={CATEGORIES} 
      />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={handleNewTask}/>
      <TaskList 
        tasks={taskElements} 
        deleteTaskCallback={handleDeleteTask} 
        selectedState={selected} 
      />
    </div>
  );
}

export default App;
