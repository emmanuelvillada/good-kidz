// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home.jsx'; // Asegúrate de que la ruta sea correcta
import Header from './components/Header';
import Footer from './components/Footer';
// import About from './pages/About.jsx';
import Register from './pages/Register.jsx';
import Auth from './components/Auth.jsx';

function App() {
  return (
    <Router>
      <Header></Header>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
      <Footer></Footer>
    </Router>
  );
}

export default App;
