import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import ErrorPage from './pages/ErrorPage'

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
        
        <Footer />
      </Router>
    </div>
  )
}

export default App
