import './Design/Header.css'
import HeaderImage from './Assets/OddJobsIcon.png'

const Header = () => {
  return (
    <header id="header">
        <div className='header_profile'>
          <img src={HeaderImage} alt='OddJobs'></img>
        </div>
    </header>
  )
}

export default Header