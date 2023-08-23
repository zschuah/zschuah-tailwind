import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./layout/Navbar";
import EmailSubscribe from "./pages/EmailSubscribe";
import LoremPicsum from "./pages/LoremPicsum";
import PricingCards from "./pages/PricingCards";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/lorem-picsum" />} />
        <Route path="/email-subscribe" element={<EmailSubscribe />} />
        <Route path="/lorem-picsum" element={<LoremPicsum />} />
        <Route path="/pricing-cards" element={<PricingCards />} />
        <Route path="*" element={<Navigate to="/lorem-picsum" />} />
      </Routes>
    </div>
  );
}

export default App;
