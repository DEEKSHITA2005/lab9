import './App.css';
import Contactus from './components/Contactus';
import Home from './components/Home';
import Navbar from './components/Navbar';

import { Routes,Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
    <Navbar title="CSE_HONOURS" homepage="Home" aboutus="Contact Us"/>
    <Routes>
    <Route path='/' element={<Home heading="This is my home page"/>} />
    <Route path='about' element={< Contactus />} />
    </Routes>
    </div>
  );
}

export default App;