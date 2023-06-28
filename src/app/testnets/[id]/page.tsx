import fetchTestnet from "@/app/api/fetchTestnet";
import ProjectItem from "@/app/[id]/components/ProjectItem";

const TestnetPage = async ({ params }: { params: { id: number } }) => {
  const id = params.id;
  const response = await fetchTestnet({
    id: id,
  });

  return <ProjectItem project={response} />;
};

export default TestnetPage;
