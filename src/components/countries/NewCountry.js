import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewCountryPopup from "./NewCountryPopup";

const NewCountry = (props) => {
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
        Create new country
      </Link>
      <NewCountryPopup
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModal}
        create={props.create}
      />
    </>
  );
};

export default NewCountry;
