import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";


export const Portfolio = () => {
  // const [allNavTaglines, setAllNavTaglines] = useState([]);
  // const [allTechObjects, setAllTechObjects] = useState([]);
  // const [allProjects, setAllProjects] = useState([]);
  // const [allUsers, setAllUsers] = useState([]);
  // const [user, setUser] = useState({});
  // const [allHeroTaglines, setAllHeroTaglines] = useState([]);
  // const [allQuotes, setAllQuotes] = useState([]);
  // const [allTestimonials, setAllTestimonials] = useState([]);

  // const getFirstUser = () => {
  //   allUsers.map((userObj) => setUser(userObj.id === 1));
  // };

  // useEffect(() => {
  //   fetch("api/database.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAllNavTaglines(data.navTaglines);
  //       setAllTechObjects(data.techStack);
  //       setAllProjects(data.projects);
  //       setAllUsers(data.users);
  //       getFirstUser();
  //       setAllHeroTaglines(data.heroTaglines);
  //       setAllQuotes(data.aboutQuotes);
  //       setAllTestimonials(data.testimonials);
  //     });
  // }, []);

  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
};
