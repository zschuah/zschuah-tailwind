import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const MyNavLink = ({ children, className, ...rest }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        twMerge(
          "tab",
          isActive && "bg-red-600 text-white",
          "flex flex-col items-center w-20 h-16",
          className
        )
      }
      {...rest}
    >
      {children}
    </NavLink>
  );
};

export default MyNavLink;
