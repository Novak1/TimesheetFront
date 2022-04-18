import React from "react";

function SearchClients(props) {
  const changeHandler = (e) => {
    props.search(e.target.value);
  };

  return (
    <div className="search-page">
      <input
        type="search"
        onChange={changeHandler}
        name="search-clients"
        className="in-search"
      />
    </div>
  );
}

export default SearchClients;
