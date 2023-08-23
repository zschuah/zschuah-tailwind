import { useState } from "react";
import { twMerge } from "tailwind-merge";
import ImageSearchRow from "../components/ImageSearchRow";
import { searchPexelsImages } from "../data/pexels";
import useToast from "../hooks/useToast";
import MyToast from "../layout/MyToast";

const ImageGallery = () => {
  const { toastItems, handleAddToast } = useToast();
  const [seedList, setSeedList] = useState(
    [...Array(8)].map(() => crypto.randomUUID())
  );

  const [isPicsum, setIsPicsum] = useState(true);
  const [pexelsList, setPexelsList] = useState([]);

  const fetchImages = async (input) => {
    setPexelsList([]);
    const data = await searchPexelsImages(input, seedList.length);
    const mappedData = data.map((item) => item.src.large);
    setPexelsList(mappedData);
  };

  const handleSubmit = (input) => {
    handleAddToast(`Searching for ${input}...`);
    setIsPicsum(false);
    fetchImages(input);
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
      <div
        className={twMerge(
          "bg-white w-11/12 p-8 rounded-3xl shadow-2xl max-w-7xl",
          "mt-16 lg:mt-0"
        )}
      >
        <ImageSearchRow
          handleSubmit={handleSubmit}
          handleReset={handleReset}
          isPicsum={isPicsum}
        />

        {/* GALLERY */}
        <section
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
        </section>

        {/* CARD CONTAINER BOTTOM */}
      </div>

      <MyToast toastItems={toastItems} className="alert-info" />
    </div>
  );
};

export default ImageGallery;
