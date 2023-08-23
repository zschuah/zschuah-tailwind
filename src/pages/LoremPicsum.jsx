import { useState } from "react";
import { twMerge } from "tailwind-merge";
import ImageGallery from "../components/ImageGallery";
import ImageSearchRow from "../components/ImageSearchRow";
import { searchPexelsImages } from "../data/pexels";
import useToast from "../hooks/useToast";
import MyToast from "../layout/MyToast";

const LoremPicsum = () => {
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
        <ImageGallery
          seedList={seedList}
          pexelsList={pexelsList}
          isPicsum={isPicsum}
        />
      </div>

      <MyToast toastItems={toastItems} className="alert-info" />
    </div>
  );
};

export default LoremPicsum;
