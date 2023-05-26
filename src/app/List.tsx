import ListItem from "./ListItem";
import { shopItems } from "./mockedData";
import { shopItemType } from "./mockedData";
import { v4 as uuidv4 } from "uuid";

export default function List() {
  const shopItemsList = shopItems();

  return (
    <div className="max-w-[480px] flex flex-wrap justify-around content-end">
      {shopItemsList.map((shopItem: shopItemType) => (
        <ListItem key={uuidv4()} {...shopItem} />
      ))}
    </div>
  );
}
