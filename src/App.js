
import React, { useEffect, useState } from 'react';
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
import LoaderPage from './Loader/Loader';

function App  () {
 const [stateLoader, setStateLoader] = useState(true);

 useEffect(() => {
  const timer =setTimeout(() => {
      setStateLoader(false);
   }, 2000);
    return () => clearTimeout(timer);
  }, []);

 return (
    < div className="App">
{stateLoader && <LoaderPage />}
  
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