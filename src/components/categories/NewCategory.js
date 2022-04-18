import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewCategoryPopup from "./NewCategoryPopup";

const NewCategory = (props) => {
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
        Create new category
      </Link>
      )
      <NewCategoryPopup
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModal}
        create={props.create}
      />
    </>
  );
};

export default NewCategory;
