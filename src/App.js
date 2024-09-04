import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Contact from "./pages/Contact";
import HowItWorks from "./pages/HowItWorks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="features" element={<Features />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/how" element={<HowItWorks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
