import { Route, Routes } from "react-router-dom";
import "./App.css";
import MyToast from "./components/MyToast";
import useToast from "./hooks/useToast";
import EmailSubscribe from "./pages/EmailSubscribe";
import ImageGallery from "./pages/ImageGallery";

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
