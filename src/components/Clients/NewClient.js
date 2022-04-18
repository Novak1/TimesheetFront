import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewClientPopup from "./NewClientPopup";

function NewClient(props) {
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
        Create new client
      </Link>
      <NewClientPopup
        countries={props.countries}
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModal}
        createClient={props.createClient}
      />
    </>
  );
}

export default NewClient;
