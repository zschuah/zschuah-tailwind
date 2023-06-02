import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import EmailSubscribe from "./pages/EmailSubscribe";
import ImageGallery from "./pages/ImageGallery";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<EmailSubscribe />} />
        <Route path="/image-gallery" element={<ImageGallery />} />
      </Routes>
    </div>
  );
}

export default App;
