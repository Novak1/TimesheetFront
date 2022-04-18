import React from "react";
import NewRole from "./NewRole";
import { AuthContext } from "../../shared/context/auth-context";
import { useContext } from "react/cjs/react.development";

const RoleReports = (props) => {
  const context = useContext(AuthContext);

  return (
    <div>
      {context.roles.find((r) => r === "Admin") !== undefined && (
        <div className="grey-box-wrap reports">
          <NewRole create={props.create} />
        </div>
      )}
    </div>
  );
};

export default RoleReports;
