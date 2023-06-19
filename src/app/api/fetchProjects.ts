import { ProjectResponse } from "../types";

const fetchProjects = async ({
  limit = "100",
  offset = "0",
  status = "ACTIVE",
}) => {
  const response = await fetch(
    `https://smart-nodes-api-stg.azurewebsites.net/api/v1/projects?${new URLSearchParams(
      { limit, offset, status }
    )}`
  );
  const data: ProjectResponse = await response.json();
  return data;
};

export default fetchProjects;
