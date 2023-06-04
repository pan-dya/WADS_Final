import React, { useState, useEffect } from "react";
import "../Design/Services.css";
import ServiceData from "../Data/ServiceData.js";
import Card from "./Card.js";
import { Route, Routes, useNavigate } from "react-router-dom";
import Service from "../Pages/Service";

const Services = ({selectedService, setSelectedService}) => {
  const navigate = useNavigate();
  // const [selectedService, setSelectedService] = useState(0);

  const handleCardClick = (serviceId) => {
    setSelectedService(serviceId);
    console.log(selectedService);
    navigate("/services"); // Navigate to /services page
  };

  // useEffect(() => {
  //   console.log(selectedService); // Check the updated value of selectedService
  // }, [selectedService]);

  return (
    <div>
      <section id="services">
        <h2>Our Services</h2>
        <p>Choose from our available services</p>
        <div className="container services_container">
          {ServiceData.map((item) => (
            <Card
              key={item.id}
              className="service white"
              onClick={() => handleCardClick(item.id)}
            >
              <div>{item.id}</div>
              <div className="service_icon">{item.icon}</div>
              <div className="service_title">
                <h4>{item.title}</h4>
              </div>
            </Card>
          ))}
        </div>
      </section>
      <Routes>
        <Route
          path="/services"
          element={<Service selectedService={selectedService} />}
        />
      </Routes>
    </div>
  );
};

export default Services;
