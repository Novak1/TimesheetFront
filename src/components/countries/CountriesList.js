import React from "react";
import CountriesListItems from "./CountriesListItems";

const CountriesList = (props) => {
  return (
    <div className="accordion-wrap projects">
      {props.countries.map((country, index) => (
        <CountriesListItems
          key={index}
          country={country}
          delete={props.delete}
          update={props.update}
        />
      ))}
    </div>
  );
};

export default CountriesList;
