import './Design/Navbar.css'
import Logo from './Assets/OddJobsIcon.png'
import Link from './Link.js'
import {FiLogIn} from 'react-icons/fi'

const Navbar = () => {
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
        <button id='theme_icon'><FiLogIn/></button>
      </div>
    </nav>
  )
}

export default Navbar