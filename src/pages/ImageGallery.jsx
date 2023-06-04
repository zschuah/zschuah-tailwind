import { useState } from "react";
import { TbSearch, TbZoomReset } from "react-icons/tb";
import { twMerge } from "tailwind-merge";
import MyToast from "../components/MyToast";
import { searchPexelsImages } from "../data/pexels";
import useToast from "../hooks/useToast";

const ImageGallery = () => {
  const { toastItems, handleAddToast } = useToast();
  const [seedList, setSeedList] = useState(
    [...Array(8)].map(() => crypto.randomUUID())
  );

  const [isPicsum, setIsPicsum] = useState(true);
  const [input, setInput] = useState("");
  const [pexelsList, setPexelsList] = useState("");

  const [middleText, setMiddleText] = useState("Lorem Picsum");

  const fetchImages = async () => {
    setPexelsList([]);
    const data = await searchPexelsImages(input, seedList.length);
    const mappedData = data.map((item) => item.src.large);
    setPexelsList(mappedData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      handleAddToast(`Searching for ${input}...`);
      setMiddleText(input);

      setIsPicsum(false);
      fetchImages();
      setInput("");
    }
  };

  const handleReset = () => {
    setMiddleText("Lorem Picsum");
    setIsPicsum(true);
    setSeedList(seedList.map(() => crypto.randomUUID()));
  };

  return (
    <div
      id="image-gallery"
      className="bg-cyan-100 min-h-screen grid place-items-center py-8"
    >
      {/* CARD CONTAINER */}
      <div
        className={twMerge(
          "bg-white w-11/12 p-8 rounded-3xl shadow-2xl max-w-7xl",
          "mt-16 lg:mt-0"
        )}
      >
        {/* SEARCH ROW */}
        <div
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
            <div
              className={twMerge("badge badge-lg", isPicsum && "bg-warning")}
            >
              Picsum
            </div>
          </div>
        </div>

        {/* GALLERY */}
        <div
          className={twMerge(
            "grid grid-cols-1 gap-2 my-8",
            "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          )}
        >
          {seedList.map((seed, index) => {
            const imgUrl = isPicsum
              ? `https://picsum.photos/seed/${seed}/900/600`
              : pexelsList[index];

            return (
              <div
                key={seed}
                className={twMerge(
                  "h-60 overflow-hidden bg-cyan-50",
                  "relative grid place-items-center group"
                )}
              >
                {/* BLACK BOX */}
                <span
                  className={twMerge(
                    "absolute z-20 bottom-0 left-0 right-0 p-2",
                    "bg-black text-white text-xs",
                    "opacity-10 group-hover:opacity-50 transition"
                  )}
                >
                  {imgUrl || "Loading..."}
                </span>
                {imgUrl && (
                  <img
                    src={imgUrl}
                    alt={seed}
                    className={twMerge(
                      "h-full w-full group-hover:scale-110 transition",
                      "object-cover object-center",
                      "z-10 cursor-pointer"
                    )}
                    onClick={() => window.open(imgUrl)}
                  />
                )}
                {/* LOADING SPINNER */}
                <span className="loading loading-bars loading-lg absolute"></span>
              </div>
            );
          })}
        </div>

        {/* CARD CONTAINER BOTTOM */}
      </div>

      <MyToast toastItems={toastItems} className="alert-info" />
    </div>
  );
};

export default ImageGallery;
