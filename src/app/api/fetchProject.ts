import { Project } from "../types";

const fetchProject = async ({id}: {id: number}) => {
  const response = await fetch(
    `https://smart-nodes-api-stg.azurewebsites.net/api/v1/projects/${id}`
  );
  const data: Project = await response.json();
  return data;
};

export default fetchProject;
