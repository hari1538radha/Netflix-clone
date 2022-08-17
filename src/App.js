import React from 'react';
import './App.css';
import {BrowserRouter,Route,Routes,Switch} from "react-router-dom";
import Home from './pages/Home';
import NetflixBanner from './pages/NetflixBanner';


function App() {
  return (

    <BrowserRouter> <div className="App">
    <div>
      <Routes>
        
     <Route   exact path="/" element={<Home/>} ></Route>
     <Route path="/netflix-banner" element={<NetflixBanner/>}  ></Route>
      </Routes>
      
    </div>
     </div>
     </BrowserRouter>

   )
   
 
   
}

export default App;
