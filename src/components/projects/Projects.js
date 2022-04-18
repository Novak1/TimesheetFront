import React from "react";
import ProjectsReports from "./ProjectsReports";
import AlphaFilter from "../../shared/components/Filters/AlphaFilter";
import Pagination from "../../shared/components/pagination/Pagination";
import ProjectsList from "./ProjectsList";
import Header from ".././../shared/components/header/Header";
import Footer from ".././../shared/components/footer/Footer";

const Projects = (props) => {
  return (
    <>
      <Header />
      <div className="wrapper">
        <section className="content">
          <h2>
            <i className="ico projects"></i>Projects
          </h2>
          <ProjectsReports
            create={props.create}
            clients={props.clients}
            leads={props.leads}
            search={props.search}
          />
          <AlphaFilter alphaSearch={props.alphaSearch} />
          <ProjectsList
            projects={props.projects}
            clients={props.clients}
            leads={props.leads}
            update={props.update}
            delete={props.delete}
          />
          <Pagination get={props.getProjects} />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Projects;
