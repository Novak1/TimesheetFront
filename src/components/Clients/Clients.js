import React from "react";
import ClientsReports from "./ClientsReports";
import AlphaFilter from "../../shared/components/Filters/AlphaFilter";
import Pagination from "../../shared/components/pagination/Pagination";
import ClientsList from "./ClientsList";
import Header from ".././../shared/components/header/Header";
import Footer from ".././../shared/components/footer/Footer";

const Clients = (props) => {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <section className="content">
          <h2>
            <i className="ico clients"></i>Clients
          </h2>
          <ClientsReports
            createClient={props.createClient}
            countries={props.countries}
            clients={props.clients}
            search={props.search}
          />
          <AlphaFilter alphaSearch={props.alphaSearch} />
          <ClientsList
            updateClient={props.updateClient}
            deleteClient={props.deleteClient}
            clients={props.clients}
            countries={props.countries}
          />
          <Pagination get={props.getClients} />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Clients;
