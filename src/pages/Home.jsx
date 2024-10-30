import React, { useState } from 'react';
import './Home.css';
import backgroundImage from '../assets/bg.jpg'; // Adjust path if needed
import { Modal, Button } from 'react-bootstrap';

const Home = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="home-container">
      {/* Background Image */}
      <div
        className="background-image"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>

      {/* Content Section */}
      <div className="content">
        <h1>Adventure Awaits</h1>
        <p>What are you waiting for?</p>
        <div className="button-group">
          <button className="btn btn-secondary">Get Started</button>
          <button onClick={handleShow} className="btn btn-secondary">
            Watch Trailer &#9654;
          </button>
        </div>
      </div>

      {/* Modal */}
      <Modal size="lg" show={show} onHide={handleClose} style={{ backdropFilter: 'blur(5px)' }}>
        <Modal.Header closeButton>
          <Modal.Title>Trailer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            width="100%"
            height="395"
            src="https://www.youtube.com/embed/_e8BFrAPedM"
            title="Meghalaya: World’s Wettest Place | Mawsynram Village | North East India"
           
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
