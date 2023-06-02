import { useState } from "react";
import { twMerge } from "tailwind-merge";

const ImageGallery = () => {
  const [seedList] = useState([...Array(8)].map(() => crypto.randomUUID()));
  const [isPicsum, setIsPicsum] = useState(true);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      id="image-gallery"
      className="bg-cyan-100 min-h-screen grid place-items-center py-8"
    >
      {/* CARD CONTAINER */}
      <div className="bg-white w-11/12 p-8 rounded-2xl shadow-2xl max-w-7xl">
        <form className="join" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-info join-item"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="btn btn-info join-item">
            <span className="text-2xl">&#9732;</span>
          </button>
        </form>

        {/* GALLERY */}
        <div
          className={twMerge(
            "grid grid-cols-1 gap-4 my-8",
            "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          )}
        >
          {seedList.map((seed) => {
            const imgUrl = isPicsum
              ? `https://picsum.photos/seed/${seed}/600/400`
              : `https://source.unsplash.com/random/?dog`;

            return (
              <div key={seed} className="h-60">
                <img
                  src={imgUrl}
                  alt={seed}
                  className={twMerge(
                    "h-full w-full hover:scale-105 transition",
                    "object-cover object-center"
                  )}
                />
              </div>
            );
          })}
        </div>

        {/* CARD CONTAINER BOTTOM */}
      </div>
    </div>
  );
};

export default ImageGallery;
