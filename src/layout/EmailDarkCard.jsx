import { twMerge } from "tailwind-merge";

const EmailDarkCard = ({ children }) => {
  return (
    <section
      className={twMerge(
        "bg-zinc-800 w-3/4 rounded-2xl max-w-2xl",
        "overflow-hidden sm:flex text-white"
      )}
    >
      {children}
    </section>
  );
};

export default EmailDarkCard;
