let usersArray = [];
let projectsArray = [];
let navTaglinesArray = [];
let techStackObjectsArray = [];
let heroTaglinesArray = [];
let testimonialsArray = [];

// const DataManager = () => {
//   const [allNavTaglines, setAllNavTaglines] = useState([]);
//   const [allTechObjects, setAllTechObjects] = useState([]);
//   const [allProjects, setAllProjects] = useState([]);
//   const [allUsers, setAllUsers] = useState([]);

//   useEffect(() => {
//     fetch("api/database.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setAllNavTaglines(data.navTaglines);
//         setAllTechObjects(data.techStack);
//         setAllProjects(data.projects);
//         setAllUsers(data.users);
//       });
//   }, []);

//   usersArray = allUsers;
//   projectsArray = allProjects;
//   navTaglinesArray = allNavTaglines;
//   techStackObjectsArray = allTechObjects;
//   console.log(allUsers);
// };

export const getUserByID = (id) => {
  const userObj = usersArray.find((user) => user.id === id);
  return userObj;
};

export const getAllProjects = () => {
 return projectsArray;
  
};
export const getProjectbyID = (id) => {
  const projectObj = projectsArray.find((obj) => obj.id === id)
  return projectObj;
};


// this function needs to put the useState items into separate arrays
const getData = () => {
  return fetch("api/database.json")
    .then((res) => res.json())
    .then((data) => {
      navTaglinesArray = data.navTaglines;
      techStackObjectsArray = data.techStack;
      projectsArray = data.projects;
      usersArray = data.users;
    });

  return usersArray;
};

getData();
