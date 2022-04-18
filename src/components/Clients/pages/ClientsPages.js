import React, { useEffect, useState } from "react";
import Clients from "../Clients";
import axios from "axios";

export default function ClientsPages() {
  const [clients, setClients] = useState([]);
  const [clientsTemp, setClientsTemp] = useState([]);

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    getClientsAsync();
    getCountriesAsync();
  }, []);

  const getClientsAsync = async (pageNum = 1) => {
    try {
      let response = await axios.get("/client/get-clients", {
        params: { page: pageNum },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      });
      if (response.data) {
        setClients(response.data);
        setClientsTemp(response.data);
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  const getCountriesAsync = async (pageNum = -1) => {
    try {
      let response = await axios.get("/country/get-countries", {
        params: { page: pageNum },

        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      });
      if (response.data) {
        console.log(response.data);
        setCountries(response.data);
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  const createAsync = async (client) => {
    try {
      let response = await axios.post("/client/create-client", client, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      });

      if (response.data) {
        const newClientsList = [...clients];
        newClientsList.push(response.data);
        setClients(newClientsList);
      }
    } catch (err) {
      console.log(err.response);
    }
  };
  const deleteAsync = async (clientId) => {
    try {
      let response = await axios.delete(`/client/delete/${clientId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      });
      const newClients = clients.filter((client) => client.id !== clientId);
      setClients([]);
      setClients(newClients);
    } catch (err) {
      console.log(err.response);
    }
  };
  const updateAsync = async (patchdata) => {
    try {
      let response = await axios.put(
        `/client/update-client/${patchdata.id}`,
        patchdata,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("userData")}`,
          },
        }
      );

      if (response.data) {
        clients[clients.findIndex((cl) => cl.id === patchdata.id)] =
          response.data;
        setClients(clients);
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  const search = (searchParam) => {
    setClients(clientsTemp);

    if (searchParam !== "") {
      let newClients = clients.filter((client) =>
        client.name
          .toString()
          .toLowerCase()
          .includes(searchParam.toString().toLowerCase())
      );
      setClients(newClients);
    }
  };

  const alphaSearch = (letter) => {
    if (letter !== "") {
      let newClients = clientsTemp.filter((client) =>
        client.name
          .toString()
          .toLowerCase()
          .slice(0, 1)
          .includes(letter.toLowerCase())
      );
      setClients(newClients);
    }
  };

  return (
    <React.Fragment>
      {clients && (
        <Clients
          clients={clients}
          countries={countries}
          createClient={createAsync}
          updateClient={updateAsync}
          deleteClient={deleteAsync}
          search={search}
          alphaSearch={alphaSearch}
          getClients={getClientsAsync}
        />
      )}
    </React.Fragment>
  );
}
