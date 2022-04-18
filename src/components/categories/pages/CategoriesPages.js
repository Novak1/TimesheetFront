import React, { useState, useEffect } from "react";
import Categories from "../Categories";
import axios from "axios";

const CategoriesPages = () => {
  const [categories, setCategories] = useState([]);
  const [categoriesTemp, setCategoriesTemp] = useState([]);

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {}, [categories]);

  const getCategories = async (pageNum = 1) => {
    return await axios
      .get("/category/get-categories", {
        params: { page: pageNum },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      })
      .then((response) => {
        if (response.data) {
          setCategories(response.data);
          setCategoriesTemp(response.data);
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
      .post("/category/create-category", category, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      })
      .then((response) => {
        if (response.data) {
          console.log(response.data);
          const newCategoryList = [...categories];
          newCategoryList.push(response.data);
          setCategories(newCategoryList);
        }
      })
      .catch((err) => {
        if (err.response) {
          throw err.response;
        }
      });
  };
  const deleteAsync = async (categoryId) => {
    await axios
      .delete(`/category/delete/${categoryId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      })
      .then((response) => {
        const newCat = categories.filter((cat) => cat.id !== categoryId);
        setCategories([]);
        setCategories(newCat);
      })
      .catch((err) => {
        if (err.response) {
        }
      });
  };
  const updateAsync = async (patchdata) => {
    await axios
      .put(`/category/update-category/${patchdata.id}`, patchdata, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("userData")}`,
        },
      })
      .then((response) => {
        if (response.data) {
          categories[categories.findIndex((cat) => cat.id === patchdata.id)] =
            response.data;
          setCategories(categories);
        }
      })
      .catch((err) => {
        if (err.response) {
        }
      });
  };

  const alphaSearch = (letter) => {
    if (letter !== "") {
      let newCategories = categoriesTemp.filter((cat) =>
        cat.name
          .toString()
          .toLowerCase()
          .slice(0, 1)
          .includes(letter.toString().toLowerCase())
      );

      setCategories((prevState) => (prevState = newCategories));
    }
  };

  return (
    <React.Fragment>
      {categories && (
        <Categories
          categories={categories}
          update={updateAsync}
          delete={deleteAsync}
          create={createAsync}
          alphaSearch={alphaSearch}
          getCategories={getCategories}
        />
      )}
    </React.Fragment>
  );
};

export default CategoriesPages;
