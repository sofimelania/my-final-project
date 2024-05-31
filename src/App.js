
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import './App.css';


function App  () {
 
 return (
    < div className="App">
  
<Router>
      <nav>
        <Link to="/"className='link'>Home</Link>
        <Link  to="/about"className='link'>About</Link>
        <Link to="/contact us"className='link'>Contact us</Link>
      </nav>
      <Routes> 
      <Route path="/" element = {<Home />}/>
        <Route path="/about" element = {<About />}/>
        <Route path="/contact us" element = {<Contact us />}/>
      </Routes> 
      </Router> 

</div>
  );
}

export default App;