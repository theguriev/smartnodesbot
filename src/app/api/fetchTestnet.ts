import { Project } from "../types";

const fetchTestnet = async ({ id }: { id: number }) => {
  const response = await fetch(
    `https://smart-nodes-api-stg.azurewebsites.net/api/v1/test-net/${id}`
  );
  const data: Project = await response.json();
  return data;
};

export default fetchTestnet;
