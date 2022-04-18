import React, { useEffect, useState } from "react";
import Projects from "../Projects";
import axios from "axios";
export default function ProjectsPages() {
  const [projects, setProjects] = useState([]);
  const [projectsTemp, setProjectsTemp] = useState([]);

  const [leads, setLeads] = useState([]);
  const [clients, setClients] = useState([]);

  useEffect(() => {
    getClientsAsync();
    getProjectsAsync();
    getLeadsAsync();
  }, []);

  const getClientsAsync = async (pageNum = -1) => {
    return await axios
      .get("/client/get-clients", {
        params: { page: pageNum },

        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      })
      .then((response) => {
        if (response.data) {
          setClients(response.data);
        }
      })
      .catch((err) => {
        if (err.response) {
        }
      });
  };
  const getProjectsAsync = async (pageNum = 1) => {
    return await axios
      .get("/project/get-projects", {
        params: { page: pageNum },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      })
      .then((response) => {
        if (response.data) {
          setProjects(response.data);
          setProjectsTemp(response.data);
          console.log(projects);
        }
      })
      .catch((err) => {
        if (err.response) {
        }
      });
  };
  const getLeadsAsync = async (pageNum = -1) => {
    return await axios
      .get("/teammember/get-tms", {
        params: { page: pageNum },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      })
      .then((response) => {
        if (response.data) {
          setLeads(response.data);
        }
      })
      .catch((err) => {
        if (err.response) {
          throw err.response;
        }
      });
  };

  const createAsync = async (proj) => {
    await axios
      .post("/project/create-project", proj, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      })
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          const newProjectsList = [...projects];
          newProjectsList.push(response.data);
          setProjects(newProjectsList);
        }
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response);

        if (err.response) {
        }
      });
  };
  const deleteAsync = async (projId) => {
    await axios
      .delete(`/project/delete/${projId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      })
      .then((response) => {
        const newProjects = projects.filter((proj) => proj.id !== projId);
        setProjects([]);
        setProjects(newProjects);
      })
      .catch((err) => {
        if (err.response) {
        }
      });
  };
  const updateAsync = async (patchdata) => {
    // console.log(patchdata);
    await axios
      .put(`/project/update-project/${patchdata.id}`, patchdata, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      })
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          projects[projects.findIndex((proj) => proj.id === patchdata.id)] =
            response.data;
          setProjects(projects);
        }
      })
      .catch((err) => {
        console.log(err.response.data);
        if (err.response) {
        }
      });
  };

  const search = (searchParam) => {
    setProjects(projectsTemp);

    if (searchParam !== "") {
      let newProjects = projects.filter((proj) =>
        proj.name
          .toString()
          .toLowerCase()
          .includes(searchParam.toString().toLowerCase())
      );
      setProjects(newProjects);
    }
  };
  const alphaSearch = (letter) => {
    if (letter !== "") {
      let newProjects = projectsTemp.filter((proj) =>
        proj.name
          .toString()
          .toLowerCase()
          .slice(0, 1)
          .includes(letter.toLowerCase())
      );
      setProjects(newProjects);
    }
  };
  return (
    <React.Fragment>
      {clients && leads && projects && (
        <Projects
          update={updateAsync}
          create={createAsync}
          delete={deleteAsync}
          clients={clients}
          leads={leads}
          projects={projects}
          search={search}
          alphaSearch={alphaSearch}
          getProjects={getProjectsAsync}
        />
      )}
    </React.Fragment>
  );
}
