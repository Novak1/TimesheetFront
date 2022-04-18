import React, { useState, useEffect } from "react";
import Countries from "../Countries";
import axios from "axios";

const CountryPages = () => {
  const [countries, setCountries] = useState([]);
  const [countriesTemp, setCountriesTemp] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  const getCountries = async (pageNum = 1) => {
    return await axios
      .get("/country/get-countries", {
        params: { page: pageNum },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      })
      .then((response) => {
        if (response.data) {
          console.log(response);
          setCountries([]);
          setCountries(response.data);
          setCountriesTemp(response.data);
        }
      })
      .catch((err) => {
        if (err.response) {
          throw err.response;
        }
      });
  };

  const createAsync = async (country) => {
    await axios
      .post("/country/create-country", country, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      })
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          const newList = [...countries];
          newList.push(response.data);
          setCountries(newList);
        }
      })
      .catch((err) => {
        if (err.response) {
          throw err.response;
        }
      });
  };
  const deleteAsync = async (countryId) => {
    await axios
      .delete(`/country/delete/${countryId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      })
      .then((response) => {
        const newCat = countries.filter((c) => c.id !== countryId);
        setCountries([]);
        setCountries(newCat);
      })
      .catch((err) => {
        if (err.response) {
        }
      });
  };
  const updateAsync = async (patchdata) => {
    await axios
      .put(`/country/update-country/${patchdata.id}`, patchdata, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      })
      .then((response) => {
        if (response.data) {
          countries[countries.findIndex((c) => c.id === patchdata.id)] =
            response.data;
          setCountries(countries);
        }
      })
      .catch((err) => {
        if (err.response) {
        }
      });
  };

  const alphaSearch = (letter) => {
    if (letter !== "") {
      let newCountries = countriesTemp.filter((c) =>
        c.name
          .toString()
          .toLowerCase()
          .slice(0, 1)
          .includes(letter.toLowerCase())
      );
      setCountries(newCountries);
    } else {
      setCountries(countriesTemp);
    }
  };

  return (
    <React.Fragment>
      {countries && (
        <Countries
          countries={countries}
          update={updateAsync}
          delete={deleteAsync}
          create={createAsync}
          alphaSearch={alphaSearch}
          getCountries={getCountries}
        />
      )}
    </React.Fragment>
  );
};

export default CountryPages;
