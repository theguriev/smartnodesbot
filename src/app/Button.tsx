import classNames from "classnames";
import { FC, MouseEventHandler, PropsWithChildren } from "react";

const variantDictionary = {
  primary: "bg-el-senor",
  secondary: "bg-el-patron",
  "": undefined,
};

const Button: FC<
  PropsWithChildren<{
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    variant?: "primary" | "secondary";
  }>
> = ({ className, onClick, children, variant }) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        className,
        variantDictionary[variant || ""],
        "cursor-pointer text-white px-3 py-1 rounded-md"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
