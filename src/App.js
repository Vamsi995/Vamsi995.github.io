import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Sidenav from './components/Sidenav';
import About from "./pages/about"

function App() {    
  return (
    <div className="App">
      
      <Router>
        <Sidenav />
         <Routes>
           <Route path="/" />
           <Route path="/about" element={<About/>} />
         </Routes>
      </Router>


      

    </div>
  );
}

export default App;
