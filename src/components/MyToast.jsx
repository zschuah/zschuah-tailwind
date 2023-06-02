import { useEffect } from "react";

const MyToast = ({ toastItems, setToastItems }) => {
  useEffect(() => {
    let toastTimeout;
    if (toastItems.length > 0) {
      toastTimeout = setTimeout(() => {
        setToastItems(toastItems.slice(1));
        console.log("REMOVING TOAST");
      }, 2000);
    }
    return () => clearTimeout(toastTimeout);
  }, [toastItems]);

  return (
    <div className="toast toast-start">
      {toastItems.map((toast, index) => (
        <div className="alert alert-success" key={index}>
          <span>{toast}</span>
        </div>
      ))}
    </div>
  );
};

export default MyToast;
