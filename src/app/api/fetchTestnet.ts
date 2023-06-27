import { Project } from "../types";

const fetchTestnet = async ({ id }: { id: number }): Promise<Project> => {
  try {
    const response = await fetch(
      `${process.env.baseUrl}/api/v1/test-net/${id}`
    );
    if (!response.ok) {
      throw new Error(`Request failed with status code ${response.status}`);
    }
    const data: Project = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching testnet:", error);
    throw error;
  }
};

export default fetchTestnet;
