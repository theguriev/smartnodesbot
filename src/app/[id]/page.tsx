import fetchProject from "../api/fetchProject";
import ProjectItem from "./components/ProjectItem";

const ItemPage = async ({ params }: { params: { id: number } }) => {
  const id = params.id;
  const response = await fetchProject({
    id: id,
  });

  return <ProjectItem project={response}/>;
};

export default ItemPage;
