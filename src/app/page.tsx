import Script from "next/script";
import ListItem from "./ListItem";
import { v4 as uuidv4 } from "uuid";

const mockedShopItems = [
  { img: "/lava.webp", title: "Lava", price: "240$" },
  { img: "/defund.webp", title: "DeFund", price: "230$" },
  { img: "/chainflip.webp", title: "Chainflip", price: "240$" },
  { img: "/shardeum.webp", title: "Shardeum", price: "240$" },
  { img: "/muon-network.webp", title: "Muon", price: "230$" },
  { img: "/massa.webp", title: "Massa", price: "240$" },
  { img: "/elixir-finance.webp", title: "Elixir", price: "240$" },
];

const Home = () => (
  <>
    <Script src="https://telegram.org/js/telegram-web-app.js" />
    <div className="flex justify-center">
      <div className="max-w-[480px] flex flex-wrap content-end">
        {mockedShopItems.map((shopItem) => (
          <ListItem key={uuidv4()} {...shopItem} />
        ))}
      </div>
    </div>
  </>
);

export default Home;
