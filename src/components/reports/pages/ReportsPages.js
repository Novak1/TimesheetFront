import React, { useEffect, useState } from "react";
import Reports from "../Reports";

const ReportsPages = () => {
  const [reports, setReports] = useState([]);
  const [teamMembers, setTeamMembers] = useState([]);
  const [clients, setClients] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getReports();
    getTeamMembers();
    getClients();
    getCategories();
  }, []);

  const getTeamMembers = () => {};
  const getClients = () => {};
  const getCategories = () => {};

  const getReports = () => {
    setReports([
      ...reports,
      {
        id: 1,
        date: Date.now,
        teamMemberName: "Neko neko",
        projectName: "Neki proj",
        category: "Front-end",
        description: "nenesadasdas",
        time: 6.7,
      },
      {
        id: 2,
        date: Date.now,
        teamMemberName: "Neko neko",
        projectName: "Neki proj",
        category: "Front-end",
        description: "nenesadasdas",
        time: 6.7,
      },
    ]);
  };

  return (
    <React.Fragment>{reports && <Reports reports={reports} />}</React.Fragment>
  );
};

export default ReportsPages;
