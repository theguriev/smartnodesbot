import { useRouter } from "next/navigation";
import { useTelegram } from "../hooks/useTelegram";
import ListItem from "./ListItem";
import { CountedCartItemType } from "../types";
import { useShopItemsContext } from "../context/shopItems";

const List = () => {
  const { shopItems, setShopItems } = useShopItemsContext();
  console.log(shopItems, "list");
  const router = useRouter();
  const {
    WebApp: { MainButton, BackButton },
  } = useTelegram();
  const showMainButton = (items: Array<CountedCartItemType>) => {
    if (items.length === 0) {
      MainButton.hide();
    } else {
      MainButton.setParams({
        text: "VIEW ORDER",
        color: "#33b445",
      });
      MainButton.show();
    }
  };

  BackButton.hide();
  MainButton.onClick(() => router.push("/cart"));

  const handleAdd = (product: CountedCartItemType) => {
    const updatedItems = shopItems.map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          amount: item.amount + 1,
          totalPrice: (item.amount + 1) * item.monthlyPrice,
        };
      }
      return item;
    });
    setShopItems(updatedItems);
    showMainButton(updatedItems);
  };

  const handleRemove = (product: CountedCartItemType) => {
    const updatedItems = shopItems.map((item) => {
      if (item.id === product.id) {
        return {
          ...item,
          amount: item.amount - 1,
          totalPrice: (item.amount - 1) * item.monthlyPrice,
        };
      }
      return item;
    });
    setShopItems(updatedItems);
    showMainButton(updatedItems);
  };

  return (
    <>
      <div className="flex flex-wrap justify-start">
        {shopItems.map((shopItem) => (
          <ListItem
            key={shopItem.id}
            {...shopItem}
            onAdd={handleAdd}
            onRemove={handleRemove}
          />
        ))}
        <button onClick={() => router.push("/cart")}>to cart</button>
      </div>
    </>
  );
};

export default List;
