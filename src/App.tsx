//App.tsx
import './App.css'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Footer from './components/Footer'
const App = () =>{
  return(
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>
        <Footer />
      </Router>
   </div>
  )
}
export default App