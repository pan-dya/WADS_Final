import '../Design/Navbar.css'
import Logo from '../Assets/OddJobsIcon.png'
import Link from '../Data/Link.js'
import {FiLogIn} from 'react-icons/fi'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const Logout = async ()=>{
      try {
          await axios.delete('http://localhost:5000/logout');
          navigate('/login');
      } catch (error) {
          console.log(error);
      }
  }
  return (
    <nav>
      <div className="container nav_container">
        <a href="index.html" className="nav_logo">
          <img src={Logo} alt="OddJobs"></img>
        </a>
        <ul className="nav_menu">
          {
            Link.map(item => <li key={item.id}><a href={item.link}>{item.title}</a></li>)
          }
        </ul>
        <button onClick={Logout} id='theme_icon'><FiLogIn/></button>
      </div>
    </nav>
  )
}

export default Navbar