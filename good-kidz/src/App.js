import goodKidzImage from './images/good kidz.jpg';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import CreateEvent from './pages/CreateEvent';



function App() {
  return (
    <Router>
      <div className="App">
        <Header logo = {goodKidzImage} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/create-event" element={<CreateEvent />} />
        </Routes>
        <Footer  logo={goodKidzImage}/>
      </div>
    </Router>
  );
}

export default App;