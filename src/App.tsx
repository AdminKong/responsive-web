// import React, { useState } from 'react'
// import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Page/Home'
import About from './Page/About'
import Service from './Page/Service'
import Contact from './Page/Contact'
import NotFound from "./Page/NotFound";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/service" element={<Service/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
