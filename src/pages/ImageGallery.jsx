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
      setIsPicsum(false);
      fetchImages();
      setInput("");
    }
  };

  const handleReset = () => {
    setIsPicsum(true);
    setSeedList(seedList.map(() => crypto.randomUUID()));
  };

  return (
    <div
      id="image-gallery"
      className="bg-cyan-100 min-h-screen grid place-items-center py-8"
    >
      {/* CARD CONTAINER */}
      <div className="bg-white w-11/12 p-8 rounded-3xl shadow-2xl max-w-7xl">
        {/* SEARCH ROW */}
        <div className="flex items-center space-x-2">
          <form className="join" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered input-info join-item"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="btn btn-info join-item">
              <TbSearch className="text-2xl" />
            </button>
          </form>

          <button className="btn btn-warning" onClick={handleReset}>
            <TbZoomReset className="text-2xl" />
          </button>

          <span className="countdown font-mono text-6xl">hello</span>

          <div className={twMerge("badge badge-lg", !isPicsum && "bg-info")}>
            Pexels
          </div>
          <div className={twMerge("badge badge-lg", isPicsum && "bg-warning")}>
            Picsum
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
                  "relative grid place-items-center"
                )}
              >
                {imgUrl && (
                  <img
                    src={imgUrl}
                    alt={seed}
                    className={twMerge(
                      "h-full w-full hover:scale-110 transition",
                      "object-cover object-center",
                      "cursor-pointer z-10"
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

      <MyToast toastItems={toastItems} info />
    </div>
  );
};

export default ImageGallery;
