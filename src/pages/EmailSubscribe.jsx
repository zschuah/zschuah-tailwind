import { twMerge } from "tailwind-merge";
import EmailRow from "../components/EmailRow";
import useToast from "../hooks/useToast";
import EmailDarkCard from "../layout/EmailDarkCard";
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
      <EmailDarkCard>
        <div className="p-8 w-full">
          <h4 className="font-semibold underline text-center">
            Testing out VITE environment variables
          </h4>
          <p>IMPORT_META_ENV_MODE: {import.meta.env.MODE}</p>
          <p>IMPORT_META_ENV_BASE_URL: {import.meta.env.BASE_URL}</p>
          <p>IMPORT_META_ENV_VITE_USER: {import.meta.env.VITE_USER}</p>
          <p>IMPORT_META_ENV_VITE_WALLET: {import.meta.env.VITE_WALLET}</p>
        </div>
      </EmailDarkCard>

      <EmailDarkCard>
        <EmailRow handleAddToast={handleAddToast} />
      </EmailDarkCard>

      {/* END OF CARDS */}
      <MyToast toastItems={toastItems} className="alert-success" />
    </div>
  );
};

export default EmailSubscribe;
