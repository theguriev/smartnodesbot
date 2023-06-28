import { ProjectResponse } from "../types";

const postBulkPurchase = async ({
  email,
  phone,
  firstName,
  lastName,
  shoppingCart,
  telegram,
}: {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  shoppingCart: Array<{
    projectId: number;
    nodesCount: number;
  }>;
  telegram: string;
}) => {
  const response = await fetch(
    "https://smart-nodes-api-stg.azurewebsites.net/api/v1/projects/bulk-purchase",
    {
      body: JSON.stringify({
        email,
        phone,
        firstName,
        lastName,
        shoppingCart,
        telegram,
      }),
      headers: { "Content-Type": "application/json" },
      method: "POST",
    }
  );
  const data: ProjectResponse = await response.json();
  return data;
};

export default postBulkPurchase;
