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
  try {
    const response = await fetch(
      `${process.env.baseUrl}/api/v1/projects/bulk-purchase`,
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

export default postBulkPurchase;
