import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getUserByID } from "./components/DataManager";
import { Footer } from "./components/Footer";

export const Portfolio = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState({});

  const getTheUser = () => {
    return getUserByID(1);
  };
  useEffect(() => {
    setUser(getTheUser());
  }, []);

  useEffect(() => {
    fetch("api/database.json")
      .then((res) => res.json())
      .then((data) => {
        setAllUsers(data.users);
      });
  }, []);

  return (
    <>
      <Outlet />

      {/* Footer needs to have user prop passed into it */}
      <Footer user={user} />
    </>
  );
};
