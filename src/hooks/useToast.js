import { useState, useEffect } from "react";

function useToast() {
  const [toastItems, setToastItems] = useState([]);

  const handleAddToast = (toast) => {
    setToastItems([...toastItems, toast]);
  };

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

  return { toastItems, setToastItems, handleAddToast };
}

export default useToast;
