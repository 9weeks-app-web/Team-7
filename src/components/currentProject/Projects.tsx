import { Project } from "../../types/projectTypes";
import ProjectCard from "./ProjectCard";

interface ProjectsProps {
  projects: Project[];
}
const Projects = ({ projects }: ProjectsProps) => {
  return (
    <div className="flex popular-project-content p-[40px]">
      {projects.map((project) => (
        <div className={project.id === "1" ? "" : "ml-[24px]"} key={project.id}>
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
};

export default Projects;
