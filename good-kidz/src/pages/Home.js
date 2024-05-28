import React from 'react';
import logo from '../images/good kidz.jpg';  // Asegúrate de que la ruta del logo sea correcta

const Home = () => {
  const events = [
    { id: 1, name: 'Community Cleanup', date: '2024-06-10', description: 'Join us for a community cleanup event to keep our parks clean.' },
    { id: 2, name: 'Summer Camp', date: '2024-07-15', description: 'A fun and educational summer camp for kids aged 5-12.' },
    { id: 3, name: 'Fundraising Gala', date: '2024-09-20', description: 'An evening of dining and entertainment to support our programs.' },
  ];

  return (
    <div>
      <header>
        <img src={logo} alt="Good Kidz logo" />
        <h1>Welcome to Good Kidz</h1>
        <p>Good Kidz is dedicated to helping children develop and thrive through various community programs and events.</p>
      </header>
      <section>
        <h2>Upcoming Events</h2>
        <ul>
          {events.map(event => (
            <li key={event.id}>
              <h3>{event.name}</h3>
              <p>Date: {event.date}</p>
              <p>{event.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
