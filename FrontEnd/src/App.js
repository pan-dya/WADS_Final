import Home from './Pages/Home.js'
import Faq from './Pages/Faq.js'
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar.js'
import Footer from './Components/Footer.js'
import LoginField from './Components/LoginField.js'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginField />}></Route>
        <Route
          element={
            <>
              <Navbar />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route path="/" element={<Home />}></Route>
          <Route path="/faq" element={<Faq />}></Route>
        </Route>
      </Routes>
    </Router>
  )
}

export default App