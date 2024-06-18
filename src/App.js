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
import { useDispatch } from "react-redux";
import { logout } from "./features/auth/authSlice";
import { useEffect } from "react";
import Login from "./pages/admin/Login";
import DashBoard from "./pages/admin/DashBoard";
import Users from "./pages/admin/Users";
import InDemand from "./pages/admin/InDemand";
import Inquiries from "./pages/admin/Inquiries";
import Subscribed from "./pages/admin/Subscribed";
import Testimonials from "./pages/admin/Testimonials";
import Tracks from "./pages/admin/Tracks";

function App() {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await dispatch(logout());
  };

  //we only want user logged in for one day
  const handleGetLastLogin = () => {
    let lastLogin = localStorage.getItem("newLogIn");
    // Current time
    var currentTime = new Date().getTime();
    // Calculate the difference in milliseconds
    var timeDifference = currentTime - lastLogin;
    // Convert milliseconds to minutes
    var minutesPassed = Math.floor(timeDifference / (1000 * 60));

    if (minutesPassed > 1400) {
      handleLogout();
    }
  };

  useEffect(() => {
    handleGetLastLogin();
  });

  return (
    <div className="App max-w-[2000px] m-auto">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/platform" element={<PlatformAccess />} />
          <Route path="/track/:id" element={<SpecificTrack />} />
          <Route path="/admin" element={<DashBoard />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path="/admin/users" element={<Users />} />
          <Route path="/admin/in-demand" element={<InDemand />} />
          <Route path="/admin/inquiries" element={<Inquiries />} />
          <Route path="/admin/sub" element={<Subscribed />} />
          <Route path="/admin/testimonials" element={<Testimonials />} />
          <Route path="/admin/tracks" element={<Tracks />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
}

export default App;
