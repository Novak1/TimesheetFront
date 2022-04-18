import React, { useState, useEffect } from "react";
import Roles from "../Roles";
import axios from "axios";

const RolePages = () => {
  const [roles, setRoles] = useState([]);
  const [rolesTemp, setRolesTemp] = useState([]);

  useEffect(() => {
    getRoles();
  }, []);

  const getRoles = async (pageNum = 1) => {
    return await axios
      .get("/role/get-roles", {
        params: { page: pageNum },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      })
      .then((response) => {
        if (response.data) {
          console.log(response);
          setRoles([]);
          setRoles(response.data);
          setRolesTemp(response.data);
        }
      })
      .catch((err) => {
        if (err.response) {
          throw err.response;
        }
      });
  };

  const createAsync = async (category) => {
    await axios
      .post("/role/create-role", category, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      })
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          const newRolesList = [...roles];
          newRolesList.push(response.data);
          setRoles(newRolesList);
        }
      })
      .catch((err) => {
        if (err.response) {
          throw err.response;
        }
      });
  };
  const deleteAsync = async (roleId) => {
    await axios
      .delete(`/role/delete/${roleId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      })
      .then((response) => {
        const newRoles = roles.filter((r) => r.id !== roleId);
        setRoles([]);
        setRoles(newRoles);
      })
      .catch((err) => {
        if (err.response) {
        }
      });
  };
  const updateAsync = async (patchdata) => {
    await axios
      .put(`/role/update-role/${patchdata.id}`, patchdata, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      })
      .then((response) => {
        if (response.data) {
          roles[roles.findIndex((cat) => cat.id === patchdata.id)] =
            response.data;
          setRoles(roles);
        }
      })
      .catch((err) => {
        if (err.response) {
        }
      });
  };

  const alphaSearch = (letter) => {
    if (letter !== "") {
      let newRoles = rolesTemp.filter((cat) =>
        cat.name
          .toString()
          .toLowerCase()
          .slice(0, 1)
          .includes(letter.toLowerCase())
      );
      setRoles(newRoles);
    } else {
      setRoles(rolesTemp);
    }
  };

  return (
    <React.Fragment>
      {roles && (
        <Roles
          roles={roles}
          update={updateAsync}
          delete={deleteAsync}
          create={createAsync}
          alphaSearch={alphaSearch}
          getRoles={getRoles}
        />
      )}
    </React.Fragment>
  );
};

export default RolePages;
