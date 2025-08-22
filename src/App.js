import "./App.css";
import "./Animations.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SpecificTrack from "./pages/SpecificTrack";
import PlatformAccess from "./pages/PlatformAccess";

function App() {
  return (
    <div className="App max-w-[2000px] m-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<PlatformAccess />} />
          <Route path="/track/:id" element={<SpecificTrack />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
