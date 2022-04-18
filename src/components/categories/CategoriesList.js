import React from "react";
import CategoriesListItem from "./CategoriesListItem";

const CategoriesList = (props) => {
  return (
    <div className="accordion-wrap projects">
      {props.categories.map((category, index) => (
        <CategoriesListItem
          key={index}
          category={category}
          delete={props.delete}
          update={props.update}
        />
      ))}
    </div>
  );
};

export default CategoriesList;
