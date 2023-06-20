import fetchTestnets from "@/app/api/fetchTestnets";
import List from "@/app/components/List";

const Testnets = async () => {
  const response = await fetchTestnets({
    limit: "100",
    offset: "0",
    status: "ACTIVE",
  });

  return <List projects={response.data} />;
};

export default Testnets;
