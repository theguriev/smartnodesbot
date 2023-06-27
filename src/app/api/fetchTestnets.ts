import { ProjectResponse } from "../types";

const fetchTestnets = async ({
  limit = "100",
  offset = "0",
  status = "ACTIVE",
}): Promise<ProjectResponse> => {
  try {
    const response: Response = await fetch(
      `${process.env.baseUrl}/api/v1/test-net?${new URLSearchParams({
        limit,
        offset,
        status,
      })}`
    );
    if (!response.ok) {
      throw new Error(`Request failed with status code ${response.status}`);
    }
    const data: ProjectResponse = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching testnets:", error);
    throw error;
  }
};

export default fetchTestnets;
