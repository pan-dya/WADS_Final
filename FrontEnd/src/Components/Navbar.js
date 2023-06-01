import "../Design/Navbar.css";
import Logo from "../Assets/OddJobsIcon.png";
import Link from "../Data/Link.js";
import { FiLogIn } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const Logout = async () => {
    try {
      await axios.delete("http://localhost:5000/logout");
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <nav>
      <div className="container nav_container">
        <a href="/" className="nav_logo">
          <img src={Logo} alt="OddJobs"></img>
        </a>
        <ul className="nav_menu">
          {Link.map((item) => (
            <li key={item.id}>
              <a href={item.link}>{item.title}</a>
            </li>
          ))}
        </ul>
        <div className="button_container">
          <a href="/profile" id="profile_icon">
            <AiOutlineUser />
          </a>
          <div className="vl"></div>
          <button onClick={Logout} id="theme_icon">
            <FiLogIn />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
