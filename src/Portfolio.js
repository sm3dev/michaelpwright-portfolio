import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";

export const Portfolio = () => {
  const [allNavTaglines, setAllNavTaglines] = useState([]);
  const [allTechObjects, setAllTechObjects] = useState([]);
  const [allProjects, setAllProjects] = useState([]);
  const [allUsers, setAllUsers] = useState([]);
  const [user, setUser] = useState({});

  const getFirstUser = () => {
    allUsers.map((userObj) => setUser(userObj.id === 1));
  };

  useEffect(() => {
    fetch("api/database.json")
      .then((res) => res.json())
      .then((data) => {
        setAllNavTaglines(data.navTaglines);
        setAllTechObjects(data.techStack);
        setAllProjects(data.projects);
        setAllUsers(data.users);
        getFirstUser();
      });
  }, []);

  return (
    <div className="page">
      <Outlet allProjects={allProjects} allNavTaglines={allNavTaglines} allTechObjects={allTechObjects} allUsers={allUsers} />
      <Footer />
    </div>
  );
};
