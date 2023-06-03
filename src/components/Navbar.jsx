import { AiOutlineMail } from "react-icons/ai";
import { BsImageFill } from "react-icons/bs";
import { twMerge } from "tailwind-merge";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  return (
    <nav
      className={twMerge(
        "absolute left-1/2 -translate-x-1/2 mt-4",
        "opacity-50 hover:opacity-100"
      )}
    >
      <div className="tabs tabs-boxed">
        <MyNavLink to="/">
          <AiOutlineMail className="text-2xl" />
          <p className="text-xs">Email Subscribe</p>
        </MyNavLink>
        <MyNavLink to="/image-gallery">
          <BsImageFill className="text-2xl" />
          <p className="text-xs">Image Gallery</p>
        </MyNavLink>
      </div>
    </nav>
  );
};

export default Navbar;
