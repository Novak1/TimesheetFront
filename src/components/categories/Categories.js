import React from "react";
import Pagination from "../../shared/components/pagination/Pagination";
import AlphaFilter from "../../shared/components/Filters/AlphaFilter";
import CategoriesReports from "./CategoriesReports";
import CategoriesList from "./CategoriesList";
import Header from ".././../shared/components/header/Header";
import Footer from ".././../shared/components/footer/Footer";

const Categories = (props) => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <section className="content">
          <h2>
            <i className="ico categories"></i>Categories
          </h2>
          <CategoriesReports create={props.create} />
          <AlphaFilter alphaSearch={props.alphaSearch} />
          <CategoriesList
            categories={props.categories}
            update={props.update}
            delete={props.delete}
          />
          <Pagination get={props.getCategories} />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Categories;
