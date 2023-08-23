import { twMerge } from "tailwind-merge";

const ImageGallery = ({ seedList, pexelsList, isPicsum }) => {
  return (
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
  );
};

export default ImageGallery;
