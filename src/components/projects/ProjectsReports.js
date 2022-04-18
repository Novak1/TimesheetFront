import React from "react";
import SearchProjects from "./SearchProject";
import NewProject from "./NewProject";
import { AuthContext } from "../../shared/context/auth-context";
import { useContext } from "react/cjs/react.development";

function ClientsReports(props) {
  const context = useContext(AuthContext);

  return (
    <div>
      <div className="grey-box-wrap reports">
        {context.roles.find((r) => r === "Admin") !== undefined && (
          <NewProject
            clients={props.clients}
            leads={props.leads}
            create={props.create}
          />
        )}
        <SearchProjects search={props.search} />
      </div>
    </div>
  );
}

export default ClientsReports;
