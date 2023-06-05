import classNames from "classnames";
import { FC, MouseEventHandler, PropsWithChildren } from "react";

const Button: FC<
  PropsWithChildren<{
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    variant?: "primary" | "secondary";
  }>
> = ({ className, onClick, children, variant }) => {
  const theme = "light";

  const variantDictionary = {
    primary: theme === "light" ? "bg-smart" : "bg-funny",
    secondary: theme === "light" ? "bg-kind" : "bg-lucky",
    "": undefined,
  };
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
