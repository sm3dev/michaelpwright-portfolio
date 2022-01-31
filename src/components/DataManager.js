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
export const getProjectbyID = (id) => {
  console.log(projectsArray);

  const projectObj = projectsArray.find((project) => project.id === id);
  console.log(projectObj);
  return projectObj;
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

// this function needs to put the useState items into separate arrays
const getData = () => {
  fetch("api/database.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
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
