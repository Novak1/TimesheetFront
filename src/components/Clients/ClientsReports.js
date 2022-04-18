import React from "react";
import SearchClients from "./SearchClients";
import NewClient from "./NewClient";
import { AuthContext } from "../../shared/context/auth-context";
import { useContext } from "react/cjs/react.development";

function ClientsReports(props) {
  const context = useContext(AuthContext);

  return (
    <div>
      <div className="grey-box-wrap reports">
        {context.roles.find((r) => r === "Admin") !== undefined && (
          <NewClient
            createClient={props.createClient}
            countries={props.countries}
          />
        )}
        <SearchClients clients={props.clients} search={props.search} />
      </div>
    </div>
  );
}

export default ClientsReports;
