import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { getUserById } from "./components/DataManager";
import { Footer } from "./components/Footer";

export const Portfolio = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch("api/database.json")
      .then((res) => res.json())
      .then((data) => {
        let usersArray = data.users;
        setUser(getUserById(usersArray, 1));
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
