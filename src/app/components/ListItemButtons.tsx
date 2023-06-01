import { FC, MouseEventHandler } from "react";
import Button from "./Button";
import Transition from "react-transition-group/Transition";
import classNames from "classnames";
import "./ListItemAnimation.css";

const ListItemButtons: FC<{
  onRemove?: MouseEventHandler<HTMLButtonElement>;
  onAdd?: MouseEventHandler<HTMLButtonElement>;
  counter: number;
}> = ({ onAdd, onRemove, counter }) => (
  <div className="w-[80px] h-[30px] flex justify-between relative">
    <Button
      variant="secondary"
      onClick={onRemove}
      className={classNames(
        "`w-[38px] text-[36px] font-sans h-[30px] flex items-center justify-center",
        counter === 0 && "hidden"
      )}
    >
      <span className="mt-[-4px]">-</span>
    </Button>

    <Transition in={counter > 0} timeout={100}>
      {(state) => (
        <Button
          onClick={onAdd}
          variant="primary"
          className={classNames(
            state,
            "add_button absolute right-0 font-sans text-[14px] h-[30px] flex items-center justify-center",
            counter === 0
              ? "w-[80px] h-[30px] font-bold"
              : "w-[38px] text-[30px]"
          )}
        >
          <span className={classNames(counter === 0 && "hidden", "mt-[-4px]")}>
            +
          </span>
          <span className={classNames(counter !== 0 && "hidden")}>ADD</span>
        </Button>
      )}
    </Transition>
  </div>
);

export default ListItemButtons;
