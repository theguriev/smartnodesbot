import fetchProjects from "../api/fetchProjects";
import List from "./List";

const Projects = async () => {
  const response = await fetchProjects({
    limit: "100",
    offset: "0",
    status: "ACTIVE",
  });

  return <List projects={response.data} />;
};

export default Projects;
