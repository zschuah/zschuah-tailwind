import { twMerge } from "tailwind-merge";

const PricingColumn = ({ price, handleAddToast }) => {
  const { name, size, payment, benefits, isFeatured } = price;

  return (
    <section
      className={twMerge(
        "bg-slate-700 rounded-xl text-white",
        isFeatured && "bg-violet-600"
      )}
    >
      {/* Upper Container */}
      <div className="p-8 mx-3 mt-3 rounded-t-xl bg-slate-800">
        <div className="text-center uppercase">{name}</div>
        <h1 className="mt-10 font-serif text-5xl text-center">{size}</h1>
        <h5 className="mt-2 text-center">{payment}</h5>
        <div className="flex justify-center">
          <button
            className={twMerge(
              "inline-block p-10 py-3 my-6 text-center",
              "border border-violet-600 rounded-lg",
              isFeatured && "bg-violet-600",
              "transition duration-200",
              "hover:bg-violet-800 hover:border-violet-800"
            )}
            onClick={() => handleAddToast(size + " purchased!")}
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
          {benefits.map((benefit) => (
            <div className="flex justify-center" key={benefit}>
              <span>&#10003;</span>
              <span className="text-sm ml-1">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingColumn;
