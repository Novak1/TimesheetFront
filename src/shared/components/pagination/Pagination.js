import React from "react";

const Pagination = (props) => {
  const changeHandler = (num) => {
    props.get(num);
  };

  return (
    <div className="pagination">
      <ul>
        <li>
          <a href="#" onClick={() => changeHandler(1)}>
            1
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeHandler(2)}>
            2
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changeHandler(3)}>
            3
          </a>
        </li>
        <li className="last">
          <a href="#">Next</a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
