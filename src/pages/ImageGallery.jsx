import { useState } from "react";
import { TbSearch, TbZoomReset } from "react-icons/tb";
import { twMerge } from "tailwind-merge";
import MyToast from "../components/MyToast";
import useToast from "../hooks/useToast";
import { searchPexelsImages } from "../data/pexels";

const ImageGallery = () => {
  const { toastItems, handleAddToast } = useToast();
  const [seedList, setSeedList] = useState(
    [...Array(8)].map(() => crypto.randomUUID())
  );

  const [isPicsum, setIsPicsum] = useState(true);
  const [input, setInput] = useState("");

  const fetchImages = async () => {
    const data = await searchPexelsImages(input, seedList.length);
    console.log(data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input) {
      handleAddToast("Searching for " + input);
      setIsPicsum(false);
      fetchImages();
    }
  };

  const handleReset = () => {
    setIsPicsum(true);
    setSeedList(seedList.map(() => crypto.randomUUID()));
  };

  return (
    <div
      id="image-gallery"
      className="bg-cyan-100 min-h-screen grid place-items-center py-28"
    >
      {/* CARD CONTAINER */}
      <div className="bg-white w-11/12 p-8 rounded-2xl shadow-2xl max-w-7xl">
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

          <p>{isPicsum ? "Picsum" : "Unsplash"}</p>
        </div>

        {/* GALLERY */}
        <div
          className={twMerge(
            "grid grid-cols-1 gap-2 my-8",
            "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          )}
        >
          {seedList.map((seed) => {
            const imgUrl = isPicsum
              ? `https://picsum.photos/seed/${seed}/600/400`
              : "";

            return (
              <div key={seed} className="h-60 overflow-hidden">
                <img
                  src={imgUrl}
                  alt={seed}
                  className={twMerge(
                    "h-full w-full hover:scale-110 transition",
                    "object-cover object-center"
                  )}
                />
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
