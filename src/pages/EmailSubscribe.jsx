import { useState } from "react";
import { twMerge } from "tailwind-merge";
import MyToast from "../components/MyToast";
import useToast from "../hooks/useToast";

const EmailSubscribe = () => {
  const { toastItems, handleAddToast } = useToast();

  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.match(/^\S+@\S+\.\S+$/)) {
      setIsEmailValid(true);
      handleAddToast(email + " registered!");
    } else {
      setIsEmailValid(false);
    }
  };

  return (
    <div
      id="email-subscribe"
      className={twMerge(
        "bg-zinc-700 min-h-screen",
        "flex flex-col items-center justify-center space-y-4 py-8"
      )}
    >
      {/* CARD #1 */}
      <div
        className={twMerge(
          "bg-zinc-800 w-3/4 rounded-2xl max-w-2xl",
          "mt-16 sm:m-0"
        )}
      >
        <div className="p-8 text-white">
          <p>import.meta.env.MODE: {import.meta.env.MODE}</p>
          <p>import.meta.env.BASE_URL: {import.meta.env.BASE_URL}</p>
          <p>import.meta.env.VITE_USER: {import.meta.env.VITE_USER}</p>
          <p>import.meta.env.VITE_WALLET: {import.meta.env.VITE_WALLET}</p>
        </div>
      </div>

      {/* CARD #2 */}
      <div
        className={twMerge(
          "bg-zinc-800 w-3/4 rounded-2xl max-w-2xl",
          "overflow-hidden sm:flex"
        )}
      >
        <div className="sm:w-1/3 h-60 bg-success overflow-hidden">
          <img
            src="https://source.unsplash.com/random/?plant"
            alt="plant"
            className={twMerge(
              "h-full w-full object-cover object-center",
              "hover:scale-110 transition"
            )}
          />
        </div>

        {/* CARD #2 TEXT */}
        <div className="p-8 text-white flex flex-col justify-center space-y-4">
          <h4 className="font-serif">
            Get diet and fitness tips in your inbox
          </h4>
          <p className="text-sm">
            Eat better and exercise better. Sign up for the Diet & Fitness
            newsletter.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="sm:space-x-2">
              <input
                type="text"
                placeholder="Enter your email address"
                className={twMerge(
                  "input input-ghost text-sm",
                  !isEmailValid && "input-error",
                  "w-full sm:w-auto"
                )}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                className={twMerge(
                  "btn btn-success normal-case text-sm",
                  "w-full sm:w-auto",
                  "mt-2 sm:mt-0"
                )}
              >
                Subscribe
              </button>
            </div>

            <small
              className={twMerge("text-red-500", isEmailValid && "invisible")}
            >
              Please enter a valid email
            </small>
          </form>
        </div>
      </div>

      {/* END OF CARDS */}
      <MyToast toastItems={toastItems} variant="success" />
    </div>
  );
};

export default EmailSubscribe;
