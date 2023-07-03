import { FC, MouseEventHandler } from "react";
import Button from "./Button";
import Transition from "react-transition-group/Transition";
import classNames from "classnames";
import "./ListItemAnimation.css";
import t from "@/app/utils/t";
import getLocale from "@/app/utils/getLocale";

const ListItemButtons: FC<{
  onRemove?: MouseEventHandler<HTMLButtonElement>;
  onAdd?: MouseEventHandler<HTMLButtonElement>;
  amount: number;
}> = ({ onAdd, onRemove, amount }) => {
  const locale = getLocale();
  return (
    <div className="w-20 h-8 flex justify-between relative">
      <Button
        variant="secondary"
        onClick={onRemove}
        className={classNames(
          "w-9 text-4xl h-8 flex items-center justify-center",
          amount === 0 && "hidden"
        )}
      >
        <span className="mt-[-4px]">-</span>
      </Button>

      <Transition in={amount > 0} timeout={100}>
        {(state) => (
          <Button
            onClick={onAdd}
            variant="primary"
            className={classNames(
              state,
              "add_button absolute right-0 h-8 flex items-center justify-center",
              amount === 0 ? "w-20 h-8 font-bold" : "w-9 text-3xl"
            )}
          >
            <span className={classNames(amount === 0 && "hidden", "mt-[-4px]")}>
              +
            </span>
            <span
              className={classNames(
                amount !== 0 && "hidden",
                "uppercase",
                locale === "ru" && "text-xs"
              )}
            >
              {t("Add")}
            </span>
          </Button>
        )}
      </Transition>
    </div>
  );
};

export default ListItemButtons;
