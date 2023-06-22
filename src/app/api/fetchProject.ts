import { Project } from "../types";

const fetchProject = async ({ id }: { id: number }): Promise<Project> => {
  try {
    const response = await fetch(
      `https://smart-nodes-api-stg.azurewebsites.net/api/v1/projects/${id}`
    );
    if (!response.ok) {
      throw new Error(`Request failed with status code ${response.status}`);
    }
    const data: Project = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching project:", error);
    throw error;
  }
};

export default fetchProject;
