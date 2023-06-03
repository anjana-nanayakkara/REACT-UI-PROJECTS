
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Component/Home';
import About from "./Component/About";
import Services from "./Component/Services";
import Contact from "./Component/Contact";
import Policy from "./Component/Policy";
import Error from "./Component/Error";
import List from './Component/List';


const App=()=>{
  return (
    <>
      <List/>
      <Routes>
        <Route path="/" Component={Home}></Route>
        <Route path="/about" Component={About}></Route>
        <Route path="/services" Component={Services}></Route>
        <Route path="/contact" Component={Contact}></Route>
        <Route path="/policy" Component={Policy}></Route>
        <Route path="*" Component={Error}></Route>
      </Routes>
    </>
  );
}

export default App;
