import ProjectItem from "./ProjectItem";
import { ProjectsList } from "../../helpers/ProjectsList";
const ProjectList = () => {
  return ProjectsList.map((project) => {
    return (
      <ProjectItem
        title={project.title}
        subtitle={project.subtitle}
        link={project.link}
        image={project.image}
        technology={project.technology}
      />
    );
  });
};

export default ProjectList;
