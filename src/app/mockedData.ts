export type shopItemType = {
  img: string;
  title: string;
  price: string;
};

const mockedShopItems: Array<shopItemType> = [
  { img: "/burger.png", title: "Burger", price: "5.00$" },
  { img: "/fries.png", title: "Fries", price: "2.20$" },
  { img: "/hotdog.png", title: "Hotdog", price: "3.00$" },
  { img: "/taco.png", title: "Taco", price: "4.00$" },
  { img: "/pizza.png", title: "Pizza", price: "8.00$" },
  { img: "/donut.png", title: "Donut", price: "1.00$" },
  { img: "/popcorn.png", title: "Popcorn", price: "2.00$" },
  { img: "/coke.png", title: "Coke", price: "1.60$" },
  { img: "/cake.png", title: "Cake", price: "11.00$" },
  { img: "/icecream.png", title: "Icecream", price: "6.00$" },
  { img: "/cookie.png", title: "Cookie", price: "4.50$" },
  { img: "/flan.png", title: "Flan", price: "8.15$" },
];

export const shopItems = () => {
  return mockedShopItems;
};
