import Home from './Pages/Home.js'
import Faq from './Pages/Faq.js'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.js'
import Footer from './Components/Footer.js'
// import FloatingNav from './FloatingNav.js'

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/faq' element={<Faq />}></Route>
      </Routes>
      <Footer />
      {/* <FloatingNav/> */}
    </Router>
  )
}

export default App