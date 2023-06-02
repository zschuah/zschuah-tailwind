const MyToast = ({ toastItems }) => {
  return (
    <div className="toast toast-start">
      {toastItems.map((toast, index) => {
        return (
          <div className="alert alert-success" key={index}>
            <span>{toast}</span>
          </div>
        );
      })}
    </div>
  );
};

export default MyToast;
