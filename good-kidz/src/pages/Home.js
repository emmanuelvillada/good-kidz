import React from 'react';
import logo from '../images/good kidz.jpg';  // Asegúrate de que la ruta del logo sea correcta

const Home = () => {
  const events = [
    { id: 1, name: 'Community Cleanup', date: '2024-06-10', description: 'Join us for a community cleanup event to keep our parks clean.' },
    { id: 2, name: 'Summer Camp', date: '2024-07-15', description: 'A fun and educational summer camp for kids aged 5-12.' },
    { id: 3, name: 'Fundraising Gala', date: '2024-09-20', description: 'An evening of dining and entertainment to support our programs.' },
  ];

  return (
    <div className="container">
      <div className="video-background">
        <video autoPlay loop muted>
          <source src="https://www.videvo.net/videvo_files/converted/2021_02/videos/210203_01_Aerial_Circle_4k_004.mp4" type="video/mp4" />
        </video>
      </div>

      <header>
        <div className="logo">
          <img src={logo} alt="Good Kidz logo" />
        </div>
        <h1>Welcome to Good Kidz</h1>
        <p>Good Kidz is dedicated to helping children develop and thrive through various community programs and events.</p>
      </header>

      <section className="events-section">
        <h2>Upcoming Events</h2>
        <ul className="events-list">
          {events.map(event => (
            <li key={event.id} className="event-card">
              <h3>{event.name}</h3>
              <p>Date: {event.date}</p>
              <p>{event.description}</p>
            </li>
          ))}
        </ul>
      </section>
      
      <button className="btn btn-primary">Join Now</button>
      
    </div>
  );
};

export default Home;
