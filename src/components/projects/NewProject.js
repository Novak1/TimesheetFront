import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewProjectPopup from "./NewProjectPopup";

function NewProject(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const setModal = (bool) => {
    setModalIsOpen(bool);
  };

  return (
    <>
      <Link
        to="#"
        className="link new-member-popup"
        onClick={() => setModal(true)}
      >
        Create new project
      </Link>
      <NewProjectPopup
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModal}
        clients={props.clients}
        leads={props.leads}
        create={props.create}
      />
    </>
  );
}

export default NewProject;
