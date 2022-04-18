import React from "react";
import ReportsFilters from "./ReportsFilter";
import ReportsFooter from "./ReportsFooter";
import ReportsList from "./ReportsList";
import Header from ".././../shared/components/header/Header";
import Footer from ".././../shared/components/footer/Footer";

const Reports = (props) => {
  return (
    <div>
      <Header />
      <div className="wrapper">
        <section className="content">
          <h2>
            <i className="ico report"></i>Reports
          </h2>
          <ReportsFilters />
          <ReportsList reports={props.reports} />
          <ReportsFooter />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Reports;
