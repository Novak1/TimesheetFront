import React from "react";
import RolesListItem from "./RolesListItem";

const RolesList = (props) => {
  return (
    <div className="accordion-wrap projects">
      {props.roles.map((role, index) => (
        <RolesListItem
          key={index}
          role={role}
          delete={props.delete}
          update={props.update}
        />
      ))}
    </div>
  );
};

export default RolesList;
