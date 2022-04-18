import React, { useEffect, useState } from "react";
import TeamMembers from "../TeamMembers";
import axios from "axios";

const TeamMembersPages = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [teamMembersTemp, setTeamMembersTemp] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    getTeamMembers();
    getRoles();
  }, []);

  const getTeamMembers = async (pageNum = 1) => {
    try {
      let response = await axios.get("/teammember/get-tms", {
        params: { page: pageNum },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      });
      if (response.data) {
        setTeamMembers(response.data);
        setTeamMembersTemp(response.data);
        console.log(response.data);
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  const getRoles = async (pageNum = -1) => {
    try {
      let response = await axios.get("/role/get-roles", {
        params: { page: pageNum },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      });

      console.log(response.data);
      setRoles(response.data);
    } catch (err) {
      console.log(err.response);
    }
  };

  const createAsync = async (tm) => {
    await axios
      .post("/teammember/create-tm", tm, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      })
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          const newTMsList = [...teamMembers];
          newTMsList.push(response.data);
          setTeamMembers(newTMsList);
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);

        if (err.response) {
        }
      });
  };
  const deleteAsync = async (tmId) => {
    await axios
      .delete(`/teammember/delete/${tmId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      })
      .then((response) => {
        const newTms = teamMembers.filter((tms) => tms.id !== tmId);
        setTeamMembers([]);
        setTeamMembers(newTms);
      })
      .catch((err) => {
        if (err.response) {
        }
      });
  };
  const updateAsync = async (patchdata) => {
    console.log(patchdata);
    await axios
      .put(`/teammember/update-member/${patchdata.id}`, patchdata, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      })
      .then((response) => {
        if (response.data) {
          teamMembers[teamMembers.findIndex((tm) => tm.id === patchdata.id)] =
            response.data;
          setTeamMembers(teamMembers);
        }
      })
      .catch((err) => {
        if (err.response) {
        }
      });
  };

  const alphaSearch = (letter) => {
    if (letter !== "") {
      let newtms = teamMembersTemp.filter((tm) =>
        tm.name
          .toString()
          .toLowerCase()
          .slice(0, 1)
          .includes(letter.toLowerCase())
      );
      setTeamMembers(newtms);
    }
  };

  return (
    <React.Fragment>
      {teamMembers && (
        <TeamMembers
          teamMembers={teamMembers}
          update={updateAsync}
          create={createAsync}
          delete={deleteAsync}
          alphaSearch={alphaSearch}
          getTeamMembers={getTeamMembers}
          roles={roles}
        />
      )}
    </React.Fragment>
  );
};

export default TeamMembersPages;
