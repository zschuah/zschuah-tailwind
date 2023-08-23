import { twMerge } from "tailwind-merge";
import EmailRow from "../components/EmailRow";
import useToast from "../hooks/useToast";
import MyToast from "../layout/MyToast";

const EmailSubscribe = () => {
  const { toastItems, handleAddToast } = useToast();

  return (
    <div
      id="email-subscribe"
      className={twMerge(
        "bg-zinc-700 min-h-screen",
        "flex flex-col items-center justify-center space-y-4 py-8"
      )}
    >
      <section
        className={twMerge(
          "bg-zinc-800 w-3/4 rounded-2xl max-w-2xl",
          "mt-16 sm:m-0"
        )}
      >
        <div className="p-8 text-white">
          <p>IMPORT_META_ENV_MODE: {import.meta.env.MODE}</p>
          <p>IMPORT_META_ENV_BASE_URL: {import.meta.env.BASE_URL}</p>
          <p>IMPORT_META_ENV_VITE_USER: {import.meta.env.VITE_USER}</p>
          <p>IMPORT_META_ENV_VITE_WALLET: {import.meta.env.VITE_WALLET}</p>
        </div>
      </section>

      <EmailRow handleAddToast={handleAddToast} />

      {/* END OF CARDS */}
      <MyToast toastItems={toastItems} className="alert-success" />
    </div>
  );
};

export default EmailSubscribe;
