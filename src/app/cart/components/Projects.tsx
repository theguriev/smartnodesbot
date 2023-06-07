import fetchProjects from "../../api/fetchProjects";
import { Project } from "../../types";
import Items from "./Items";

const Projects = async () => {
  const response = await fetchProjects({
    limit: "10",
    offset: "0",
    status: "ACTIVE",
  });

  const toMap = (projects: Array<Project>) =>
    projects.reduce<Record<number, Project>>(
      (map, project) => ({
        ...map,
        [project.id]: project,
      }),
      {}
    );

  return <Items projects={response.data} projectsMap={toMap(response.data)} />;
};

export default Projects;
