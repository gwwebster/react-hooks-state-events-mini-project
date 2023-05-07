import React, {useState} from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {

  const [formData, setFormData] = useState({
    text: "",
    category: categories[1],
  });
  
  const optionElements = categories.map(category => {
    if (category !== "All") {
      return <option key={category} value={category} >{category}</option>
    }
  })

  function handleChange(e) {
    const formObjKey = e.target.name
    const value = e.target.value

    setFormData({
      ...formData,
      [formObjKey]: value
    })
  }

  function handleSubmit(e) {
    e.preventDefault()
    onTaskFormSubmit(formData)
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit} >
      <label>
        Details
        <input type="text" value={formData.text} onChange={handleChange} name="text" />
      </label>
      <label>
        Category
        <select 
          name="category"
          value={formData.category}
          onChange={handleChange}
        >
          {optionElements}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
