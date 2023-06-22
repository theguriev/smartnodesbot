import { FC } from "react";
import fetchProject from "../api/fetchProject";
import ProjectItem from "./components/ProjectItem";

const ItemPage: FC<{ params: { id: number } }> = async ({ params }) => {
  const { id } = params;
  const response = await fetchProject({
    id: id,
  });

  return <ProjectItem project={response} />;
};

export default ItemPage;
