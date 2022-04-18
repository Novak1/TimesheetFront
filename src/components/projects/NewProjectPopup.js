import React, { useState } from "react";
import Modal from "react-modal";

const NewProjectPopup = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [customerId, setCustomerId] = useState("");
  const [leadId, setLeadId] = useState("");

  const [nameErr, setNameErr] = useState(false);
  const [leadIdErr, setLeadIdErr] = useState(false);
  const [customerIdErr, setCustomerIdErr] = useState(false);

  const changeNameHandler = (e) => setName(e.target.value);
  const changeDescriptionHandler = (e) => setDescription(e.target.value);
  const changeCustomerHandler = (e) => setCustomerId(e.target.value);
  const changeLeadHandler = (e) => setLeadId(e.target.value);

  const submitHandler = (event) => {
    event.preventDefault();
    checkValidity();

    if (!nameErr && !leadIdErr && !customerIdErr) {
      const body = {
        name: name,
        description: description,
        customerId: customerId,
        leadId: leadId,
      };
      props.create(body);
    }
  };

  const resetErrors = () => {
    setNameErr(false);
    setLeadIdErr(false);
    setCustomerIdErr(false);
  };

  const checkValidity = () => {
    resetErrors();

    if (leadId === "") {
      setNameErr(true);
    }
    if (name === "") {
      setLeadIdErr(true);
    }
    if (customerId === "") {
      setCustomerIdErr(true);
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
        <h2>Create new project</h2>
        <form onSubmit={submitHandler}>
          <ul className="form">
            <li>
              <label>Project name:</label>
              <input
                type="text"
                className="in-text"
                name="name"
                onChange={changeNameHandler}
              />
              {nameErr && <span className="form-span">Name is required</span>}
            </li>
            <li>
              <label>Description:</label>
              <input
                type="text"
                className="in-text"
                name="description"
                onChange={changeDescriptionHandler}
              />
            </li>
            <li>
              <label>Customer:</label>
              <select name="clientName" onChange={changeCustomerHandler}>
                <option>Select customer</option>
                {props.clients.map((client, index) => (
                  <option key={index} value={client.id}>
                    {client.name}
                  </option>
                ))}
              </select>
              {customerIdErr && (
                <span className="form-span">Customer is required</span>
              )}
            </li>
            <li>
              <label>Lead:</label>
              <select name="lead" onChange={changeLeadHandler}>
                <option>Select lead</option>
                {props.leads.map((lead, index) => (
                  <option key={index} value={lead.id}>
                    {lead.name}
                  </option>
                ))}
              </select>
              {leadIdErr && <span className="form-span">Lead is required</span>}
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

export default NewProjectPopup;
