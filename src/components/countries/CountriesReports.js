import React from "react";
import NewCountry from "./NewCountry";
import { AuthContext } from "../../shared/context/auth-context";
import { useContext } from "react/cjs/react.development";

const CountriesReports = (props) => {
  const context = useContext(AuthContext);

  return (
    <div>
      {context.roles.find((r) => r === "Admin") !== undefined && (
        <div className="grey-box-wrap reports">
          <NewCountry create={props.create} />
        </div>
      )}
    </div>
  );
};

export default CountriesReports;
