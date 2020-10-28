import React from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import Home from "./Pages/Home"
import Projects from "./Pages/Projects"
import Documents from "./Pages/Documents"
import Contact from "./Pages/Contact"
import Navbar from "./Components/Navbar/Navbar"
// import Header from "./Components/Header/Header"
// import Footer from "./Components/Footer/Footer"
import './App.css';


function App() {
  return (
   <HashRouter basename='/'>
     <div className="App">
         <div> < Navbar /> </div>
       {/* <div className="jumbotron"> */}
        <Route exact path="portfolio-ashtonwalden/#/" component={Home} />
        <Route exact path="portfolio-ashtonwalden/#/projects" component={Projects} />
        <Route exact path="portfolio-ashtonwalden/#/documents" component={Documents}/>
        <Route exact path="portfolio-ashtonwalden/#/contact" component={Contact} />
       {/* </div> */}
     </div>
     {/* <Footer /> */}
   </HashRouter>
  );
}

export default App;