import { twMerge } from "tailwind-merge";

const MyToast = ({ toastItems, variant, className }) => {
  return (
    <div className="toast toast-start z-50">
      {toastItems.map((toast, index) => {
        return (
          <div
            className={twMerge(
              "alert",
              variant && `alert-${variant}`,
              className
            )}
            key={index}
          >
            <span>{toast}</span>
          </div>
        );
      })}
    </div>
  );
};

export default MyToast;
