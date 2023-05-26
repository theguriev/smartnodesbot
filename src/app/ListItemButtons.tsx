import { FC, MouseEventHandler } from "react";
import Button from "./Button";
import Transition from "react-transition-group/Transition";

const ListItemButtons: FC<{
  onRemove?: MouseEventHandler<HTMLButtonElement>;
  onAdd?: MouseEventHandler<HTMLButtonElement>;
  activeCounter: boolean;
  counter: number;
}> = ({ onAdd, onRemove, activeCounter, counter }) => (
  <div className="w-[80px] h-[30px] flex justify-between relative">
    <Button
      variant="secondary"
      onClick={onRemove}
      className={`w-[38px] text-[36px] font-sans h-[30px] flex items-center justify-center ${
        counter === 0 && "hidden"
      }`}
    >
      <span className="mt-[-4px]">-</span>
    </Button>

    <Transition in={activeCounter} timeout={100}>
      {(state) => (
        <Button
          onClick={onAdd}
          variant="primary"
          className={`add_button absolute right-0 ${state} font-sans text-[14px] h-[30px] flex items-center justify-center ${
            counter === 0
              ? "w-[80px] h-[30px] font-bold"
              : "w-[38px] text-[30px]"
          }`}
        >
          <span className={`mt-[-4px] ${counter === 0 && "hidden"}`}>+</span>
          <span className={`${counter !== 0 && "hidden"}`}>ADD</span>
        </Button>
      )}
    </Transition>
  </div>
);

export default ListItemButtons;
