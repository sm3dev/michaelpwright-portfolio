const users = [
  {
    id: 1,
    firstName: "Michael",
    middleInitial: "P",
    lastName: "Wright",
    displayName: "Michael P. Wright",
    jobTitle: "UX Developer",
    headshot: "michaelpwright-laugh-selfie-800px.jpg",
    homepageURL: "https://www.michaelpwright.com/",
    linkedIn: "https://www.linkedin.com/in/mpw",
    gitHub: "https://github.com/sm3dev",
    twitter: "",
    email: "mrwry7@gmail.com",
    aboutMeIntro:
      "The Cohort website is a staple in the NSS Web Developer Program cirriculum. \nThe UI/UX Students of Cohort 51 were charged with creating a hub. \nfor getting students employment and showcasing the UI/UX knowledge and talent.",
    personalInfo1:
      "The Cohort website is a staple in the NSS Web Developer Program cirriculum. \nThe UI/UX Students of Cohort 51 were charged with creating a hub for getting students employment and showcasing the UI/UX knowledge and talent.",
    personalInfo2:
      "The Cohort website is a staple in the NSS Web Developer Program cirriculum. \nThe UI/UX Students of Cohort 51 were charged with creating a hub for getting students employment and showcasing the UI/UX knowledge and talent.",
    photoCollage: "placeholderImage.gif",
    photoCollageLink: "https://github.com/sm3dev",
    accoladeIntroText:
      "The UI/UX Students of Cohort 51 were charged with creating a hub for getting students employment",
    testimonialsIntroText:
      "The UI/UX Students of Cohort 51 were charged with creating a hub for getting students employment",
    additionalPhoto: "placeholderImage.gif",
    additionalPhotoLink: "https://github.com/sm3dev",
    resumeLink:
      "https://drive.google.com/file/d/1q0FZIR742rX9uwlIdSna8WdBnAZ3fW1y/view?usp=sharing",
  },
];

const testimonials = [
  {
    id: 1,
    personFullName: "Brenda L.",
    testimony: "You are so determined!",
    userId: 1,
  },
  { id: 2, personFullName: "", testimony: "", userId: 1 },
  { id: 3, personFullName: "", testimony: "", userId: 1 },
  { id: 4, personFullName: "", testimony: "", userId: 1 },
];

const techStack = [
  {
    id: 1,
    name: "Semantic HTML",
    skillLevel: 5,
  },
  {
    id: 2,
    name: "CSS3",
    skillLevel: 5,
  },
  {
    id: 3,
    name: "JavaScript",
    skillLevel: 4,
  },
  {
    id: 4,
    name: "Git",
    skillLevel: 4,
  },
  {
    id: 5,
    name: "GitHub",
    skillLevel: 5,
  },
  {
    id: 6,
    name: "ReactJS",
    skillLevel: 3,
  },
  {
    id: 7,
    name: "React Hooks",
    skillLevel: 3,
  },
  {
    id: 8,
    name: "VS Code",
    skillLevel: 5,
  },
  {
    id: 9,
    name: "JSON Server",
    skillLevel: 5,
  },
  {
    id: 10,
    name: "NPM",
    skillLevel: 5,
  },
  {
    id: 11,
    name: "Postman",
    skillLevel: 5,
  },
  {
    id: 12,
    name: "dbdiagram",
    skillLevel: 5,
  },
  {
    id: 13,
    name: "Bootstrap",
    skillLevel: 5,
  },
  {
    id: 14,
    name: "API",
    skillLevel: 3,
  },
  {
    id: 15,
    name: "Wireframing",
    skillLevel: 4,
  },
  {
    id: 17,
    name: "CRUD",
    skillLevel: 4,
  },
  {
    id: 18,
    name: "Agile",
    skillLevel: 3,
  },
  {
    id: 19,
    name: "Material UI",
    skillLevel: 3,
  },
  {
    id: 20,
    name: "Figma",
    skillLevel: 4,
  },
  {
    id: 21,
    name: "SASS",
    skillLevel: 4,
  },
  {
    id: 22,
    name: "Responsive Design",
    skillLevel: 5,
  },
  {
    id: 23,
    name: "User Testing",
    skillLevel: 3,
  },
  {
    id: 24,
    name: "UX Research",
    skillLevel: 2,
  },
  {
    id: 25,
    name: "Prototyping",
    skillLevel: 4,
  },
  {
    id: 26,
    name: "Reactstrap",
    skillLevel: 5,
  },
  {
    id: 27,
    name: "Info Architecture",
    skillLevel: 4,
  },
  {
    id: 28,
    name: "Mockups",
    skillLevel: 5,
  },
  {
    id: 29,
    name: "Media Queries",
    skillLevel: 5,
  },
  {
    id: 30,
    name: "Tailwind CSS",
    skillLevel: 2,
  },
  {
    id: 31,
    name: "CSS Flexbox",
    skillLevel: 4,
  },
  {
    id: 32,
    name: "CSS Grid",
    skillLevel: 3,
  },
  {
    id: 33,
    name: "Adobe Illustrator",
    skillLevel: 5,
  },
  {
    id: 34,
    name: "Adobe XD",
    skillLevel: 4,
  },
  {
    id: 35,
    name: "React Router",
    skillLevel: 3,
  },
  {
    id: 36,
    name: "Team Collab",
    skillLevel: 5,
  },
  {
    id: 37,
    name: "Single Page Application",
    skillLevel: 4,
  },
  {
    id: 38,
    name: "CodePen",
    skillLevel: 5,
  },
  {
    id: 39,
    name: "Material Design",
    skillLevel: 3,
  },
  {
    id: 40,
    name: "Next.js",
    skillLevel: 1,
  },
  {
    id: 41,
    name: "Supabase",
    skillLevel: 1,
  },
  {
    id: 42,
    name: "Storybook",
    skillLevel: 1,
  },
  {
    id: 43,
    name: "DevTools",
    skillLevel: 3,
  },
];

const projects = [
  {
    id: "react-portfolio-website",
    name: "React Portfolio Website",
    description: "Break the internet with the first ever ever created",
    thumbnail: "mpwMinecraft3DGoldLogo512.png",
    desktopMobileImage: "placeholderImage.gif",
    linkToSite: "https://sm3dev.github.io/michaelpwright-portfolio/",
    linkRepo: "https://github.com/sm3dev/michaelpwright-portfolio",
    myRole: "Sole Designer, Sole Developer",
    challengeHeading: "Showcase NSS C51 Students",
    challengeText:
      "The Cohort website is a staple in the NSS Web Developer Program cirriculum.\nThe UI/UX Students of Cohort 51 were charged with creating a hub for getting students employment and showcasing the UI/UX knowledge and talent.",
    challengeImage: "placeholderImage.gif",
    challengeImageLink: "https://google.com",
    goalsHeading: "Goals and Constraints",
    goalsText:
      "The Cohort website is a staple in the NSS Web Developer Program cirriculum. \nThe UI/UX Students of Cohort 51 were charged with creating a hub for getting students employment and showcasing the UI/UX knowledge and talent.",
    goalsImage: "placeholderImage.gif",
    goalsImageLink: "https://google.com",
    processHeading: "From WordPress to Scripts",
    processText:
      "The Cohort website is a staple in the NSS Web Developer Program cirriculum. \nThe UI/UX Students of Cohort 51 were charged with creating a hub for getting students employment and showcasing the UI/UX knowledge and talent.",
    processImage: "placeholderImage.gif",
    processImageLink: "https://google.com",
    lessonsHeading: "Lessons Learned",
    lessonsText:
      "The Cohort website is a staple in the NSS Web Developer Program cirriculum. \nThe UI/UX Students of Cohort 51 were charged with creating a hub for getting students employment and showcasing the UI/UX knowledge and talent.",
    video: "placeholderVideo.gif",
  },
  {
    id: "nss-cohort-51-website",
    name: "NSS Cohort 51 Website",
    description: "Break the internet with the first ever ever created",
    thumbnail: "mpwMinecraft3DGoldLogo512.png",
    desktopMobileImage: "placeholderImage.gif",
    linkToSite: "https://nss-day-cohort-51.github.io/",
    linkRepo:
      "https://github.com/nss-day-cohort-51/nss-day-cohort-51.github.io",
    myRole: "Developer, Tech Stack Lead, CSS Resource",
    challengeHeading: "Showcase NSS C51 Students",
    challengeText:
      "The Cohort website is a staple in the NSS Web Developer Program cirriculum.\nThe UI/UX Students of Cohort 51 were charged with creating a hub for getting students employment and showcasing the UI/UX knowledge and talent.",
    challengeImage: "placeholderImage.gif",
    challengeImageLink: "https://google.com",
    goalsHeading: "Goals and Constraints",
    goalsText:
      "The Cohort website is a staple in the NSS Web Developer Program cirriculum. \nThe UI/UX Students of Cohort 51 were charged with creating a hub for getting students employment and showcasing the UI/UX knowledge and talent.",
    goalsImage: "placeholderImage.gif",
    goalsImageLink: "https://google.com",
    processHeading: "Our Process",
    processText:
      "The Cohort website is a staple in the NSS Web Developer Program cirriculum. \nThe UI/UX Students of Cohort 51 were charged with creating a hub for getting students employment and showcasing the UI/UX knowledge and talent.",
    processImage: "placeholderImage.gif",
    processImageLink: "https://google.com",
    lessonsHeading: "Lessons Learned",
    lessonsText:
      "The Cohort website is a staple in the NSS Web Developer Program cirriculum. \nThe UI/UX Students of Cohort 51 were charged with creating a hub for getting students employment and showcasing the UI/UX knowledge and talent.",
    video: "placeholderVideo.gif",
  },
  {
    id: "smilestones-app",
    name: "Smilestones App",
    description: "Break the internet with the first ever ever created",
    thumbnail: "mpwMinecraft3DGoldLogo512.png",
    desktopMobileImage: "placeholderImage.gif",
    linkToSite: "https://nss-day-cohort-51.github.io/",
    linkRepo: "https://github.com/sm3dev/smilestones-app",
    myRole: "Sole Designer, Sole Developer",
    challengeHeading: "Showcase NSS C51 Students",
    challengeText:
      "The Cohort website is a staple in the NSS Web Developer Program cirriculum.\nThe UI/UX Students of Cohort 51 were charged with creating a hub for getting students employment and showcasing the UI/UX knowledge and talent.",
    challengeImage: "placeholderImage.gif",
    challengeImageLink: "https://google.com",
    goalsHeading: "Goals and Constraints",
    goalsText:
      "The Cohort website is a staple in the NSS Web Developer Program cirriculum. \nThe UI/UX Students of Cohort 51 were charged with creating a hub for getting students employment and showcasing the UI/UX knowledge and talent.",
    goalsImage: "placeholderImage.gif",
    goalsImageLink: "https://google.com",
    processHeading: "Our Process",
    processText:
      "The Cohort website is a staple in the NSS Web Developer Program cirriculum. \nThe UI/UX Students of Cohort 51 were charged with creating a hub for getting students employment and showcasing the UI/UX knowledge and talent.",
    processImage: "placeholderImage.gif",
    processImageLink: "https://google.com",
    lessonsHeading: "Lessons Learned",
    lessonsText:
      "The Cohort website is a staple in the NSS Web Developer Program cirriculum. \nThe UI/UX Students of Cohort 51 were charged with creating a hub for getting students employment and showcasing the UI/UX knowledge and talent.",
    video: "placeholderVideo.gif",
  },
  {
    id: "password-inspiration-generator",
    name: "Password Inspiration Generator",
    description: "Break the internet with the first ever ever created",
    thumbnail: "mpwMinecraft3DGoldLogo512.png",
    desktopMobileImage: "placeholderImage.gif",
    linkToSite: "https://nss-day-cohort-51.github.io/",
    linkRepo: "https://github.com/sm3dev/smilestones-app",
    myRole: "Sole Designer, Sole Developer",
    challengeHeading: "Showcase NSS C51 Students",
    challengeText:
      "The Cohort website is a staple in the NSS Web Developer Program cirriculum.\nThe UI/UX Students of Cohort 51 were charged with creating a hub for getting students employment and showcasing the UI/UX knowledge and talent.",
    challengeImage: "placeholderImage.gif",
    challengeImageLink: "https://google.com",
    goalsHeading: "Goals and Constraints",
    goalsText:
      "The Cohort website is a staple in the NSS Web Developer Program cirriculum. \nThe UI/UX Students of Cohort 51 were charged with creating a hub for getting students employment and showcasing the UI/UX knowledge and talent.",
    goalsImage: "placeholderImage.gif",
    goalsImageLink: "https://google.com",
    processHeading: "Our Process",
    processText:
      "The Cohort website is a staple in the NSS Web Developer Program cirriculum. \nThe UI/UX Students of Cohort 51 were charged with creating a hub for getting students employment and showcasing the UI/UX knowledge and talent.",
    processImage: "placeholderImage.gif",
    processImageLink: "https://google.com",
    lessonsHeading: "Lessons Learned",
    lessonsText:
      "The Cohort website is a staple in the NSS Web Developer Program cirriculum. \nThe UI/UX Students of Cohort 51 were charged with creating a hub for getting students employment and showcasing the UI/UX knowledge and talent.",
    video: "placeholderVideo.gif",
  },
];

export const getProjects = () => {
  return projects;
};

export const getProject = (projectId) => {
  return projects.find(({ id }) => id === projectId);
};

export const getFirstUser = () => {
  return users[0];
};

export const getTeckStack = () => {
  return techStack;
};
