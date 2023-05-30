import Navbar from './Navbar.js'
import Header from './Header.js'
import About from './About.js'
import Services from './Services.js'
import Faq from './Faq.js'
import Footer from './Footer.js'
import FloatingNav from './FloatingNav.js'

const App = () => {
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

export default App