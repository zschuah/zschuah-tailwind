import { AiOutlineMail } from "react-icons/ai";
import { BsImageFill } from "react-icons/bs";
import { ImPriceTags } from "react-icons/im";
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
      <div className="tabs tabs-boxed flex-nowrap">
        <MyNavLink to="/email-subscribe">
          <AiOutlineMail className="text-2xl" />
          <p className="text-xs">Email Subscribe</p>
        </MyNavLink>
        <MyNavLink to="/lorem-picsum">
          <BsImageFill className="text-2xl" />
          <p className="text-xs">Lorem Picsum</p>
        </MyNavLink>
        <MyNavLink to="/pricing-cards">
          <ImPriceTags className="text-2xl" />
          <p className="text-xs">Pricing Cards</p>
        </MyNavLink>
      </div>
    </nav>
  );
};

export default Navbar;
