import React from 'react';

import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Home from './components/Home';
import ContactUs from './components/ContactUs';



function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route exact path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>




    </>
  );
}

export default App;
