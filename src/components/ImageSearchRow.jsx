import { useState } from "react";
import { TbSearch, TbZoomReset } from "react-icons/tb";
import { twMerge } from "tailwind-merge";

const ImageSearchRow = ({ handleSubmit, handleReset, isPicsum }) => {
  const [input, setInput] = useState("");
  const [isError, setIsError] = useState(false);
  const [middleText, setMiddleText] = useState("Lorem Picsum");

  const handleValidate = (e) => {
    e.preventDefault();
    if (input) {
      handleSubmit(input);
      setMiddleText(input);
      setInput("");
    } else {
      setIsError(true);
    }
  };

  return (
    <section
      className={twMerge(
        "flex justify-between items-center",
        "flex-col lg:flex-row space-y-4"
      )}
    >
      <form className="flex items-center space-x-2" onSubmit={handleValidate}>
        <div className="join">
          <input
            type="text"
            placeholder="Type here"
            className={twMerge(
              "input input-bordered input-info join-item",
              "w-32 lg:w-auto",
              isError && "ring ring-red-500 ring-offset-1"
            )}
            value={input}
            onChange={(e) => {
              setIsError(false);
              setInput(e.target.value);
            }}
          />

          <div className="tooltip" data-tip="Get specific images">
            <button type="submit" className="btn btn-info join-item">
              <TbSearch className="text-2xl" />
            </button>
          </div>
        </div>

        <div className="tooltip" data-tip="Get random images">
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => {
              setMiddleText("Lorem Picsum");
              setIsError(false);
              handleReset();
            }}
          >
            <TbZoomReset className="text-2xl" />
          </button>
        </div>
      </form>

      {/* MIDDLE TEXT */}
      <div className="font-[Pattaya] text-5xl">{middleText}</div>

      {/* BADGES */}
      <div className="space-x-2">
        <div className={twMerge("badge badge-lg", !isPicsum && "bg-info")}>
          Pexels
        </div>
        <div className={twMerge("badge badge-lg", isPicsum && "bg-warning")}>
          Picsum
        </div>
      </div>
    </section>
  );
};

export default ImageSearchRow;
