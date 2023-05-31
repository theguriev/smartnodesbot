import ListItem from "./ListItem";
import { v4 as uuidv4 } from "uuid";

const mockedShopItems = [
  { img: "/lava.webp", title: "Lava", price: "240$", id: uuidv4() },
  { img: "/defund.webp", title: "DeFund", price: "230$", id: uuidv4() },
  { img: "/chainflip.webp", title: "Chainflip", price: "240$", id: uuidv4() },
  { img: "/shardeum.webp", title: "Shardeum", price: "240$", id: uuidv4() },
  { img: "/muon-network.webp", title: "Muon", price: "230$", id: uuidv4() },
  { img: "/massa.webp", title: "Massa", price: "240$", id: uuidv4() },
  { img: "/elixir-finance.webp", title: "Elixir", price: "240$", id: uuidv4() },
];

const List = () => {
  return (
    <div className="flex flex-wrap justify-start">
      {mockedShopItems.map((shopItem) => (
        <ListItem key={shopItem.id} {...shopItem} />
      ))}
    </div>
  );
};

export default List;
