import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home.jsx';
import About from './pages/About/about.jsx';
import Error from './components/Error/error.jsx'
import Housing from './pages/Housing/housing.jsx'
import './App.css'

function App() {
  return (
    <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/a-propos" element={<About />} />
    <Route path="*" element={<Error/>} />
    <Route path="/housing/:id" element={<Housing />} />
  </Routes>
  )
}

export default App
