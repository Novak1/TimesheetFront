import React from "react";
import ClientsListItem from "./ClientsListItem";

const ClientsList = (props) => {
  return (
    <div className="accordion-wrap clients">
      {props.clients.map((client, index) => (
        <ClientsListItem
          client={client}
          key={index}
          countries={props.countries}
          updateClient={props.updateClient}
          deleteClient={props.deleteClient}
        />
      ))}
    </div>
  );
};

export default ClientsList;
