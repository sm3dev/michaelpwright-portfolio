let navTaglinesArray = [];
let techStackObjectsArray = [];
let testimonialsArray = [];
let quotesArray = [];

export const DataManager = () => {
  return console.log("I'm from the data manager!");
};

export const getUserById = (array, id) => {
  const userObj = array.find((user) => user.id === id);
  return userObj;
};

export const getProjectById = (array, id) => {
  let bingoProject = array.find((data) => data.id == id);
  return bingoProject;
};

export const getNavTaglines = () => {
  return navTaglinesArray;
};

export const getTechStackArray = () => {
  return techStackObjectsArray;
};

export const getTestimonies = () => {
  return testimonialsArray;
};
export const getQuotes = () => {
  return quotesArray;
};

// this function needs to put the useState items into separate arrays
const getData = () => {
  return fetch("api/database.json").then((res) => res.json()).then((data) => {
      navTaglinesArray = data.navTaglines;
      techStackObjectsArray = data.techStack;
      quotesArray = data.aboutQuotes;
      testimonialsArray = data.testimonials;
    });
};

getData();
