import { twMerge } from "tailwind-merge";

const MyToast = ({ toastItems, success, info }) => {
  return (
    <div className="toast toast-start">
      {toastItems.map((toast, index) => {
        return (
          <div
            className={twMerge(
              "alert",
              success && "alert-success",
              info && "alert-info"
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
