import Navbar from '../Components/Navbar.js'
import Header from '../Components/Header.js'
import About from '../Components/About.js'
import Services from '../Components/Services.js'
import Footer from '../Components/Footer.js'
// import FloatingNav from './FloatingNav.js'

const Home = () => {
  return (
    <main>
      <Navbar/>
      <Header/>
      <About/>
      <Services/>
      <Footer/>
      {/* <FloatingNav/> */}
    </main>
  )
}

export default Home