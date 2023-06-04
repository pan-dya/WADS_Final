import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header.js";
import About from "../Components/About.js";
import Services from "../Components/Services.js";

const Home = ({ selectedService, setSelectedService }) => {
  const [expire, setExpire] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const refreshToken = async () => {
      try {
        const response = await axios.get("http://localhost:5000/token");
        const decoded = jwt_decode(response.data.accessToken);
        setExpire(decoded.exp);
      } catch (error) {
        if (error.response) {
          navigate("/login");
        }
      }
    };
    refreshToken();
  }, [navigate]);

  const axiosJWT = axios.create();
  axiosJWT.interceptors.request.use(
    async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
        const response = await axios.get("http://localhost:5000/token");
        const decoded = jwt_decode(response.data.accessToken);
        setExpire(decoded.exp);
      }
      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  return (
    <main>
      <Header />
      <About />
      <Services
        selectedService={selectedService}
        setSelectedService={setSelectedService}
      />
    </main>
  );
};

export default Home;
