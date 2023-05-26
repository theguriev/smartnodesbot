export type shopItemType = {
  img: string;
  title: string;
  price: string;
};

const mockedShopItems: Array<shopItemType> = [
  { img: "/lava.webp", title: "Lava", price: "240$" },
  { img: "/defund.webp", title: "DeFund", price: "230$" },
  { img: "/chainflip.webp", title: "Chainflip", price: "240$" },
  { img: "/shardeum.webp", title: "Shardeum", price: "240$" },
  { img: "/muon-network.webp", title: "Muon Network", price: "230$" },
  { img: "/massa.webp", title: "Massa", price: "240$" },
  { img: "/elixir-finance.webp", title: "Elixir.finance", price: "240$" },
];

export const shopItems = () => {
  return mockedShopItems;
};
