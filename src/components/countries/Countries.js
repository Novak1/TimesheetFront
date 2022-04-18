import React from "react";
import Pagination from "../../shared/components/pagination/Pagination";
import AlphaFilter from "../../shared/components/Filters/AlphaFilter";
import Header from ".././../shared/components/header/Header";
import Footer from ".././../shared/components/footer/Footer";
import CountriesList from "./CountriesList";
import CountriesReports from "./CountriesReports";

const Countries = (props) => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <section className="content">
          <h2>
            <i className="ico categories"></i>Countries
          </h2>
          <CountriesReports create={props.create} />
          <AlphaFilter alphaSearch={props.alphaSearch} />
          <CountriesList
            countries={props.countries}
            update={props.update}
            delete={props.delete}
          />
          <Pagination get={props.getCountries} />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Countries;
