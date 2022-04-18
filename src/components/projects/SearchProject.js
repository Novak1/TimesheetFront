import React from "react";

function SearchProject(props) {
  const changeHandler = (e) => {
    props.search(e.target.value);
  };

  return (
    <div className="search-page">
      <input
        type="search"
        name="search-projects"
        onChange={changeHandler}
        className="in-search"
      />
    </div>
  );
}

export default SearchProject;
