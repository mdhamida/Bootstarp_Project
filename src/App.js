import React from 'react'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Contact from './components/Contact';
import Container from './components/Container';
import Files from './components/Files';
import Image from './components/Image';
import Navbar from './components/Navbar';
import Skills from './components/Skills';
import Slider from './components/Slider';
import Table from './components/Table';
import {Switch,Route,Link , Routes} from "react-router-dom";
 

const App = () => {
  return (
    <>
  <Navbar/>
    <Routes>
    <Route path='/'  element={<Slider/>}></Route>
    <Route path='/files'  element={<Files/>}></Route>
    <Route path='/skills'  element={<Skills/>}></Route>
    <Route path='/contact'  element={<Contact/>}></Route>
    </Routes>










{/*     
    <Navbar/>
    <Slider/>
    <Files/>
    <Skills/>
    <Contact/> */}
    {/* <Container/> */}
    {/* <Image/> */}
    {/* <Table/> */}
     
    </>
  )
}

export default App