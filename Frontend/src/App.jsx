import { BrowserRouter as Router, Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import ErrorPage from './pages/ErrorPage'

function App() {

  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
