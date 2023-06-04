import { twMerge } from "tailwind-merge";
import MyToast from "../components/MyToast";
import useToast from "../hooks/useToast";

const PricingCards = () => {
  const { toastItems, handleAddToast } = useToast();

  return (
    <div className="pricing-cards">
      {/* Global Container */}
      <div className="flex items-center justify-center min-h-screen bg-slate-800">
        {/* Inner Container */}
        <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 my-24 md:my-0">
          {/* Col 1 */}
          <div className="bg-slate-700 rounded-xl text-white">
            {/* Upper Container */}
            <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
              <div className="text-center uppercase">Basic</div>
              <h1 className="mt-10 font-serif text-5xl text-center">100GB</h1>
              <h5 className="mt-2 text-center">$1.99/Month</h5>
              <div className="flex justify-center">
                <button
                  className={twMerge(
                    "inline-block p-10 py-3 my-6 text-center",
                    "border border-violet-600 rounded-lg",
                    "transition duration-200",
                    "hover:bg-violet-800 hover:border-violet-800"
                  )}
                  onClick={() => handleAddToast("100GB purchased!")}
                >
                  Purchase
                </button>
              </div>
            </div>

            {/* Border */}
            <div className="border-t border-slate-700"></div>

            {/* Lower Container */}
            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
              {/* List Container */}
              <div className="flex flex-col space-y-2">
                {/* List Item 1 */}
                <div className="flex justify-center">
                  <span>&#10003;</span>
                  <span className="text-sm ml-1">100 GB of storage</span>
                </div>

                {/* List Item 2 */}
                <div className="flex justify-center">
                  <span>&#10003;</span>
                  <span className="text-sm ml-1">Option to add members</span>
                </div>

                {/* List Item 3 */}
                <div className="flex justify-center">
                  <span>&#10003;</span>
                  <span className="text-sm ml-1">Extra member benefits</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 2 */}
          <div className="bg-violet-600 rounded-xl text-white">
            {/* Upper Container */}
            <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
              <div className="text-center uppercase">Standard</div>
              <h1 className="mt-10 font-serif text-5xl text-center">200GB</h1>
              <h5 className="mt-2 text-center">$3.99/Month</h5>
              <div className="flex justify-center">
                <button
                  className={twMerge(
                    "inline-block p-10 py-3 my-6 text-center",
                    "border border-violet-600 rounded-lg bg-violet-600",
                    "transition duration-200",
                    "hover:bg-violet-800 hover:border-violet-800"
                  )}
                  onClick={() => handleAddToast("200GB purchased!")}
                >
                  Purchase
                </button>
              </div>
            </div>

            {/* Border */}
            <div className="border-t border-slate-700"></div>

            {/* Lower Container */}
            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
              {/* List Container */}
              <div className="flex flex-col space-y-2">
                {/* List Item 1 */}
                <div className="flex justify-center">
                  <span>&#10003;</span>
                  <span className="text-sm ml-1">200 GB of storage</span>
                </div>

                {/* List Item 2 */}
                <div className="flex justify-center">
                  <span>&#10003;</span>
                  <span className="text-sm ml-1">Option to add members</span>
                </div>

                {/* List Item 3 */}
                <div className="flex justify-center">
                  <span>&#10003;</span>
                  <span className="text-sm ml-1">Extra member benefits</span>
                </div>
              </div>
            </div>
          </div>

          {/* Col 3 */}
          <div className="bg-slate-700 rounded-xl text-white">
            {/* Upper Container */}
            <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
              <div className="text-center uppercase">Premium</div>
              <h1 className="mt-10 font-serif text-5xl text-center">2TB</h1>
              <h5 className="mt-2 text-center">$8.99/Month</h5>
              <div className="flex justify-center">
                <button
                  className={twMerge(
                    "inline-block p-10 py-3 my-6 text-center",
                    "border border-violet-600 rounded-lg",
                    "transition duration-200",
                    "hover:bg-violet-800 hover:border-violet-800"
                  )}
                  onClick={() => handleAddToast("2TB purchased!")}
                >
                  Purchase
                </button>
              </div>
            </div>

            {/* Border */}
            <div className="border-t border-slate-700"></div>

            {/* Lower Container */}
            <div className="p-8 mx-3 mb-3 rounded-b-xl bg-slate-800">
              {/* List Container */}
              <div className="flex flex-col space-y-2">
                {/* List Item 1 */}
                <div className="flex justify-center">
                  <span>&#10003;</span>
                  <span className="text-sm ml-1">2 TB of storage</span>
                </div>

                {/* List Item 2 */}
                <div className="flex justify-center">
                  <span>&#10003;</span>
                  <span className="text-sm ml-1">Option to add members</span>
                </div>

                {/* List Item 3 */}
                <div className="flex justify-center">
                  <span>&#10003;</span>
                  <span className="text-sm ml-1">Extra member benefits</span>
                </div>
              </div>
            </div>
          </div>

          {/* END OF COLS */}
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
