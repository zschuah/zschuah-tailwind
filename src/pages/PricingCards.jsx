import PricingColumn from "../components/PricingColumn";
import { getPriceList } from "../data/pricingData";
import useToast from "../hooks/useToast";
import MyToast from "../layout/MyToast";

const PricingCards = () => {
  const { toastItems, handleAddToast } = useToast();
  const priceList = getPriceList();

  return (
    <div className="pricing-cards">
      {/* Global Container */}
      <div className="flex items-center justify-center min-h-screen bg-slate-800">
        {/* Inner Container */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 my-24 md:my-0">
          {priceList.map((price) => (
            <PricingColumn
              price={price}
              handleAddToast={handleAddToast}
              key={price.id}
            />
          ))}
        </div>
      </div>

      <MyToast
        toastItems={toastItems}
        className="bg-violet-700 text-white border-none"
      />
    </div>
  );
};

export default PricingCards;
