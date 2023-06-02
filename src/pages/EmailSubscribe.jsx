import { useState } from "react";
import { twMerge } from "tailwind-merge";
import MyToast from "../components/MyToast";

const EmailSubscribe = () => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [toastItems, setToastItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.match(/^\S+@\S+\.\S+$/)) {
      setIsEmailValid(true);
      setToastItems([...toastItems, `${email} registered!`]);
    } else {
      setIsEmailValid(false);
    }
  };

  return (
    <div
      id="email-subscribe"
      className={twMerge(
        "bg-zinc-700 min-h-screen",
        "flex flex-col items-center justify-center"
      )}
    >
      {/* CARD #1 */}
      <div className="bg-zinc-800 w-3/4 rounded-2xl max-w-2xl my-4">
        <p className="p-8 text-white">Lorem ipsum dolor sit amet.</p>
      </div>

      {/* CARD #2 */}
      <div
        className={twMerge(
          "bg-zinc-800 w-3/4 rounded-2xl max-w-2xl my-4",
          "overflow-hidden sm:flex"
        )}
      >
        <div className="sm:w-1/3 min-h-60 bg-success">
          <img
            src="https://source.unsplash.com/random/?plant"
            alt="plant"
            className="h-full w-full object-cover object-center"
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

      <MyToast toastItems={toastItems} setToastItems={setToastItems} />
    </div>
  );
};

export default EmailSubscribe;
