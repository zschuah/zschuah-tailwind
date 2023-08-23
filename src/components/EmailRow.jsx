import { useState } from "react";
import { twMerge } from "tailwind-merge";

const EmailRow = ({ handleAddToast }) => {
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
    <section
      className={twMerge(
        "bg-zinc-800 w-3/4 rounded-2xl max-w-2xl",
        "overflow-hidden sm:flex"
      )}
    >
      <div className="sm:w-1/3 min-h-60 bg-success overflow-hidden">
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
        <h4 className="font-serif">Get diet and fitness tips in your inbox</h4>
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
    </section>
  );
};

export default EmailRow;
