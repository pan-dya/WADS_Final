import Home from "./Pages/Home.js";
import Faq from "./Pages/Faq.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Footer from "./Components/Footer.js";
import Login from "./Components/Login.js";
import Register from "./Components/Register.js";
import PageNotFound from "./Pages/PageNotFound.js";
import Profile from "./Pages/Profile.js";
import Complete from "./Pages/Complete.js";
import Service from "./Pages/Service.js";
import { useState } from "react";

const App = () => {
  const [selectedService, setSelectedService] = useState(0);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
        <Route
          element={
            <>
              <Navbar />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route
            path="/"
            element={
              <Home
                selectedService={selectedService}
                setSelectedService={setSelectedService}
              />
            }
          ></Route>
          <Route path="/faq" element={<Faq />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
        </Route>
        <Route
          element={
            <>
              <Navbar />
              <Outlet />
            </>
          }
        >
          <Route path="/submitted" element={<Complete />}></Route>
          <Route
            path="/services"
            element={
              <Service
                selectedService={selectedService}
                setSelectedService={setSelectedService}
              />
            }
          ></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
