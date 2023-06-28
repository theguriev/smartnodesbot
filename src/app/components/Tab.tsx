import { FC } from "react";
import Link from "next/link";
import classNames from "classnames";

const Tab: FC<{ active: boolean; href: string; label: string }> = ({
  active,
  href,
  label,
}) => {
  return (
    <li className="mr-2" role="presentation">
      <Link
        href={href}
        className={classNames(
          "inline-block py-4 border-b-2 rounded-t-lg",
          active
            ? "border-solid text-tg_button_color"
            : "text-tg_hint_color hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
        )}
      >
        {label}
      </Link>
    </li>
  );
};

export default Tab;
