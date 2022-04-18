import React, { useState } from "react";
import { Link } from "react-router-dom";
import NewTeamMemberPopup from "./NewTeamMemberPopup";

function NewTeamMember(props) {
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
        Create new team member
      </Link>
      <NewTeamMemberPopup
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModal}
        create={props.create}
        roles={props.roles}
      />
    </>
  );
}

export default NewTeamMember;
