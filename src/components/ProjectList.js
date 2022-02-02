import React from "react";
import { ProjectCard } from "./ProjectCard";

export const ProjectList = ({ allProjects }) => {
  // const [allProjects, setAllProjects] = useState([]);

  // useEffect(() => {
  //   fetch("api/database.json").then((res) => res.json()).then((data) => {
  //       setAllProjects(data.projects);
  //     });
  // }, []);

  return (
    <>
      <section className="project-list__block">
        {allProjects.map((projectObj) => (
          <ProjectCard key={projectObj.id} projectObj={projectObj} />
        ))}
      </section>
    </>
  );
};
