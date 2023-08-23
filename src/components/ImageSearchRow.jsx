import { twMerge } from "tailwind-merge";
import { TbSearch, TbZoomReset } from "react-icons/tb";

const ImageSearchRow = ({
  handleSubmit,
  input,
  setInput,
  handleReset,
  middleText,
  isPicsum,
}) => {
  return (
    <section
      className={twMerge(
        "flex justify-between items-center",
        "flex-col lg:flex-row space-y-4"
      )}
    >
      <form className="flex items-center space-x-2" onSubmit={handleSubmit}>
        <div className="join">
          <input
            type="text"
            placeholder="Type here"
            className={twMerge(
              "input input-bordered input-info join-item",
              "w-32 lg:w-auto"
            )}
            value={input}
            onChange={(e) => setInput(e.target.value)}
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
            onClick={handleReset}
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
