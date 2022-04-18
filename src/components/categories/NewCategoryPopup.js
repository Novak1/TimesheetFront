import React, { useState } from "react";
import Modal from "react-modal";

const NewCategoryPopup = (props) => {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);

  const changeHandler = (e) => setName(e.target.value);
  const submitHandler = (event) => {
    event.preventDefault();
    checkValidity();

    if (error) {
      const body = {
        name: name,
      };
      props.create(body);
    }
  };

  const checkValidity = () => {
    setError(false);
    if (name === "") {
      setError(true);
    }
  };

  return (
    <div>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={() => props.setModalIsOpen(false)}
        closeTimeoutMS={200}
        className="new-member-inner"
        shouldFocusAfterRender={false}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={false}
        style={{
          overlay: {
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          },
        }}
      >
        <h2>Create new category</h2>
        <form onSubmit={submitHandler}>
          <ul className="form">
            <li>
              <label>Name:</label>
              <input
                type="text"
                className="in-text"
                name="name"
                onChange={changeHandler}
              />
              {error && <span className="form-span">Name is required</span>}
            </li>
          </ul>
          <div className="buttons">
            <div className="inner">
              <input type="submit" className="btn green" value="Save" />
            </div>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default NewCategoryPopup;
