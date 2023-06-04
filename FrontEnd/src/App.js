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

const App = () => {
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
          <Route path="/" element={<Home />}></Route>
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
          <Route path="/services" element={<Service />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
