import fetchTestnet from "@/app/api/fetchTestnet";
import ProjectItem from "@/app/node/[id]/components/ProjectItem";

const TestnetPage = async ({ params: { id } }: { params: { id: number } }) => {
  const response = await fetchTestnet({ id });

  return (
    <ProjectItem
      imageUrl={response.imageUrl}
      name={response.name}
      github={response.github}
      medium={response.medium}
      telegram={response.telegram}
      twitter={response.twitter}
      reddit={response.reddit}
      url={response.url}
      descriptionEn={response.descriptionEn}
      descriptionRu={response.descriptionRu}
      monthlyPrice={response.monthlyPrice}
      discord={response.discord}
    />
  );
};

export default TestnetPage;
