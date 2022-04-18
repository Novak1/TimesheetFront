import React from "react";
import Pagination from "../../shared/components/pagination/Pagination";
import AlphaFilter from "../../shared/components/Filters/AlphaFilter";
import RoleReports from "./RoleReports";
import RolesList from "./RolesList";
import Header from ".././../shared/components/header/Header";
import Footer from ".././../shared/components/footer/Footer";

const Roles = (props) => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <section className="content">
          <h2>
            <i className="ico categories"></i>Roles
          </h2>
          <RoleReports create={props.create} />
          <AlphaFilter alphaSearch={props.alphaSearch} />
          <RolesList
            roles={props.roles}
            update={props.update}
            delete={props.delete}
          />
          <Pagination get={props.getRoles} />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Roles;
