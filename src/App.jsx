import React from 'react';
import logo from './react.png';
import './App.css';
import NavBar from './Components/NavBar';
//FuncComp - alias - start with an Uppercase
import FuncComp from './Components/Functional';
import ClassComp from './Components/ClassComponent';
import WelcomeComp from './Components/Welcom';
//Configure the routing paths 
import { Route,Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <NavBar/>
     <Routes>
      <Route path="funcom" element={<FuncComp/>}></Route>
      <Route path="classcom" element={<ClassComp/>}></Route>
      <Route path="*" element={<WelcomeComp/>}></Route>
     </Routes>
    </div>
  );
}

export default App;