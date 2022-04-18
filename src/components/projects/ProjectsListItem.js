import React, { useRef, useState } from "react";
import $ from "jquery";
import { AuthContext } from "../../shared/context/auth-context";
import { useContext } from "react/cjs/react.development";

const ProjectsListItem = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const context = useContext(AuthContext);

  const detailsRef = useRef();

  const [name, setName] = useState(props.project.name);
  const [desc, setDesc] = useState(props.project.description);
  const [customerId, setCustomerId] = useState(props.project.clientId);
  const [leadId, setLeadId] = useState(props.project.leadId);
  const [status, setStatus] = useState(props.project.status);
  const [archive, setArchive] = useState(props.project.archive);

  const [nameErr, setNameErr] = useState(false);
  const [leadIdErr, setLeadIdErr] = useState(false);
  const [customerIdErr, setCustomerIdErr] = useState(false);

  const setIsOpenHandler = () => {
    setIsOpen(!isOpen);

    if (!isOpen) {
      $(detailsRef.current).slideDown("normal");
    } else {
      $(detailsRef.current).slideUp("normal");
    }
  };

  const changeNameHandler = (e) => setName(e.target.value);
  const changeDescHandler = (e) => setName(e.target.value);
  const changeCustomerIdHandler = (e) => setCustomerId(e.target.value);
  const changeLeadIdHandler = (e) => setName(e.target.value);
  const changeStatusHandler = (e) => setStatus(e.target.value);
  const changeArchiveHandler = (e) => setArchive(e.target.value);

  const deleteProject = (event) => {
    event.preventDefault();
    props.delete(props.project.id);
  };

  const updateProject = (event) => {
    event.preventDefault();
    checkValidity();

    if (!nameErr && !leadIdErr && !customerIdErr) {
      props.update({
        id: props.project.id,
        name: name,
        description: desc,
        leadId: leadId,
        customerId: customerId,
        archive: archive,
        status: status,
      });
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
    <div className="item" id="button">
      <div
        className="heading"
        onClick={() => setIsOpenHandler()}
        id={props.project.id}
      >
        <span>{name}</span>
        <i>+</i>
      </div>
      <div className="details" ref={detailsRef}>
        <form>
          <ul className="form">
            <li>
              <label>Project name:</label>
              <input
                type="text"
                className="in-text"
                defaultValue={props.project.name}
                name="name"
                onChange={changeNameHandler}
              />
              {nameErr && <span className="form-span">Name is required</span>}
            </li>
            <li>
              <label>Lead:</label>
              <select
                name="lead"
                onChange={changeLeadIdHandler}
                value={props.project.leadId}
              >
                {props.leads.map((lead, index) => (
                  <option
                    key={index}
                    value={lead.id}
                    defaultValue={
                      lead.id === props.project.leadId ? true : false
                    }
                  >
                    {lead.name}
                  </option>
                ))}
              </select>
              {leadIdErr && <span className="form-span">Lead is required</span>}
            </li>
          </ul>
          <ul className="form">
            <li>
              <label>Description:</label>
              <input
                type="text"
                className="in-text"
                defaultValue={props.project.description}
                name="description"
                onChange={changeDescHandler}
              />
            </li>
          </ul>
          <ul className="form last">
            <li>
              <label>Customer:</label>
              <select
                name="clientName"
                onChange={changeCustomerIdHandler}
                value={props.project.clientId}
              >
                {props.clients.map((client, index) => (
                  <option
                    key={index}
                    value={client.id}
                    defaultValue={
                      client.id === props.project.clientId ? true : false
                    }
                  >
                    {client.name}
                  </option>
                ))}
              </select>
              {customerIdErr && (
                <span className="form-span">Customer is required</span>
              )}
            </li>
            <li className="inline">
              <label>Status:</label>
              <span className="radio">
                <label htmlFor="inactive">Active:</label>
                <input
                  type="radio"
                  value="1"
                  name="status"
                  onChange={changeStatusHandler}
                  defaultChecked={props.project.projectStatus === 1}
                />
              </span>
              <span className="radio">
                <label htmlFor="active">Inactive:</label>
                <input
                  type="radio"
                  value="0"
                  name="status"
                  onChange={changeStatusHandler}
                  defaultChecked={props.project.projectStatus === 0}
                />
              </span>
              <span className="radio">
                <label htmlFor="active">Archive:</label>
                <input
                  type="radio"
                  value={true}
                  name="archive"
                  onChange={changeArchiveHandler}
                  defaultChecked={props.project.archive === true}
                />
              </span>
            </li>
          </ul>
          {context.roles.find((r) => r === "Admin") !== undefined && (
            <div className="buttons">
              <div className="inner">
                <a href="#" onClick={updateProject} className="btn green">
                  Save
                </a>
                <a href="#" onClick={deleteProject} className="btn red">
                  Delete
                </a>
              </div>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default ProjectsListItem;
