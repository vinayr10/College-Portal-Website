
import './App.css';
import Navbar from './app/Components/Navbar/Navbar';
import Main from './app/pages/main/Main';


import Events from './app/pages/Events/Events';
import Footer from './app/Components/Footer/Footer';
import About from './app/pages/About/About';
import Login from './app/pages/Login/Login';
import Signup from './app/pages/Signup/Signup'
import Home from './app/pages/Home/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Events" element={<Events />} />
        <Route path="/About" element={<About />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Home" element={<Home />} />
        
      </Routes>
      <Footer />
    </Router>
  );
}


export default App;
