import React from "react";
import ProjectsListItem from "./ProjectsListItem";

const ProjectsList = (props) => {
  return (
    <div className="accordion-wrap projects">
      {props.projects.map((project, index) => (
        <ProjectsListItem
          project={project}
          key={index}
          clients={props.clients}
          leads={props.leads}
          update={props.update}
          delete={props.delete}
        />
      ))}
    </div>
  );
};

export default ProjectsList;
