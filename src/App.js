import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Sidenav from './components/Sidenav';
import About from "./pages/about"
import Home from "./pages/home"
import NotFound from "./pages/notfound"

function App() {    
  return (
    <div className="App">
      
      <Router>
        <Sidenav />

         <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/about" element={<About/>} />
           <Route path="*" element={<NotFound/>}/>
         </Routes>

        {/* </Sidenav> */}
         
      </Router>


      

    </div>
  );
}

export default App;
