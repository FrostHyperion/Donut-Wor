import { Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

// pages
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ResetPassword from "./pages/ResetPassword";
import Account from "./pages/Account";
import Admin from "./pages/Admin";
import Donuts from "./pages/Donuts";

// components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      {location.pathname !== "/login" && <Header /> &&
        location.pathname !== "/register" && <Header /> &&
        location.pathname !== "/reset-password" && <Header />}

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/account" element={<Account />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/donuts" element={<Donuts />} />
      </Routes>

      {location.pathname !== "/login" && <Footer /> &&
        location.pathname !== "/register" && <Footer /> &&
        location.pathname !== "/reset-password" && <Footer />}
    </div>
  );
}

export default App;
