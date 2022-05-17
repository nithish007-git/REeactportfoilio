//import logo from './logo.svg';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import Sidenav from'./componets/sidenav.js';
import Topnav from'./componets/topnav.js';
import './App.css';
import About from './componets/about.js';
import Edu from './componets/edu.js';
import Skill from './componets/skills.js';
import Menu from './componets/menu.js';

function App() {

  const[currentview,setcurrentview]=useState("menu");
    function updateCurrentview(pagename){
      setcurrentview(pagename)
      console.log(pagename);
    }
  return (
    <div className="App">
  
    
     
     <Sidenav actionclick={updateCurrentview}/>
     <Topnav label={currentview}/>
     {currentview==="About"?<About/>:""}
     {currentview==="menu"?<Menu/>:""}
     {currentview==="SKILLS"?<Skill/>:""}
     {currentview==="Education" ?<Edu/>:""}

  
     </div>
  );
}

export default App;
