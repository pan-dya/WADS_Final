import { useState, useEffect } from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";
import "../Design/Faq.css";

const Faq = () => {
  const [selected, setSelected] = useState(null);
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

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <div>
      <div className="padding"></div>
      <h2 className="page-title">FAQs</h2>
      <div className="wrapper">
        <article className="accordion">
          {data.map((item, i) => (
            <div className="item">
              <div className="title" onClick={() => toggle(i)}>
                <h2>{item.question}</h2>
                <span>{selected === i ? "-" : "+"}</span>
              </div>
              <div className={selected === i ? "content show" : "content"}>
                {item.answer}
              </div>
            </div>
          ))}
        </article>
      </div>
    </div>
  );
};

const data = [
  {
    question: "What payment are accepted?",
    answer:
      "We only accept cashless payment, like debit or credit card, QRIS and any e-wallet.",
  },
  {
    question: "How can we tip the workers?",
    answer:
      "For the tip, you can use cash or add it on your payment.",
  },
  {
    question: "Is there any available apps for mobile phone?",
    answer:
      "Currently, we haven’t planned to make any mobile apps",
  },
];

export default Faq;

