import React from "react";

function CategoryFilter({ categories, selectedState, selectedStateCallback }) {

  const buttons = categories.map(category => {
    return (
      <button 
        key={category}
        className={selectedState === category ? "selected" : ""}
        onClick={() => selectedStateCallback(category)}
      >{category}
      </button>
    )
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {buttons}
    </div>
  );
}

export default CategoryFilter;