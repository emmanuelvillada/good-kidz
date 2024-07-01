// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx'; // Asegúrate de que la ruta sea correcta
import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About.jsx';

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Otras rutas */}
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
