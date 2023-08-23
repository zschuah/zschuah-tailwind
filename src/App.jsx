import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";
import EmailSubscribe from "./pages/EmailSubscribe";
import ImageGallery from "./pages/ImageGallery";
import PricingCards from "./pages/PricingCards";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/lorem-picsum" />} />
        <Route path="/email-subscribe" element={<EmailSubscribe />} />
        <Route path="/lorem-picsum" element={<ImageGallery />} />
        <Route path="/pricing-cards" element={<PricingCards />} />
        <Route path="*" element={<Navigate to="/lorem-picsum" />} />
      </Routes>
    </div>
  );
}

export default App;
