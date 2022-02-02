let usersArray = [];
let projectsArray = [];
let navTaglinesArray = [];
let techStackObjectsArray = [];
let heroTaglinesArray = [];
let testimonialsArray = [];
let quotesArray = [];

export const DataManager = () => {
  return console.log("I'm from the data manager!");
};

export const getUserByID = (id) => {
  const userObj = usersArray.find((user) => user.id === id);
  return userObj;
};

export const getAllProjects = () => {
  return projectsArray;
};

export const getProjectbyID = (array, id) => {
  let bingoProject = array.find((data) => data.id == id);
  return bingoProject;
};

export const getNavTaglines = () => {
  return navTaglinesArray;
};

export const getTechStackArray = () => {
  return techStackObjectsArray;
};

export const getHeroTaglines = () => {
  return heroTaglinesArray;
};

export const getTestimonies = () => {
  return testimonialsArray;
};
export const getQuotes = () => {
  return quotesArray;
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
      heroTaglinesArray = data.heroTaglines;
      quotesArray = data.aboutQuotes;
      testimonialsArray = data.testimonials;
    });
};

getData();
