import React from "react";
import NewCategory from "./NewCategory";
import { AuthContext } from "../../shared/context/auth-context";
import { useContext } from "react/cjs/react.development";

const CategoriesReports = (props) => {
  const context = useContext(AuthContext);

  return (
    <div>
      {context.roles.find((r) => r === "Admin") !== undefined && (
        <div className="grey-box-wrap reports">
          <NewCategory create={props.create} />
        </div>
      )}
    </div>
  );
};

export default CategoriesReports;
