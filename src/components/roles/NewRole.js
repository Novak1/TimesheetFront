import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewRolePopup from "./NewRolePopup";

const NewRole = (props) => {
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
        Create new role
      </Link>
      <NewRolePopup
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModal}
        create={props.create}
      />
    </>
  );
};

export default NewRole;
