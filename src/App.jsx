import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import MyToast from "./components/MyToast";
import EmailSubscribe from "./pages/EmailSubscribe";
import ImageGallery from "./pages/ImageGallery";
import useToast from "./hooks/useToast";

function App() {
  const { toastItems, setToastItems, handleAddToast } = useToast();

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={<EmailSubscribe handleAddToast={handleAddToast} />}
        />
        <Route path="/image-gallery" element={<ImageGallery />} />
      </Routes>

      <MyToast toastItems={toastItems} setToastItems={setToastItems} />
    </div>
  );
}

export default App;
