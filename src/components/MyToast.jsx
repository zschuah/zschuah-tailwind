import { twMerge } from "tailwind-merge";

const MyToast = ({ toastItems, success, info, warning }) => {
  return (
    <div className="toast toast-start z-50">
      {toastItems.map((toast, index) => {
        return (
          <div
            className={twMerge(
              "alert",
              success && "alert-success",
              info && "alert-info",
              warning && "alert-warning"
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
