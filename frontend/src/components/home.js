// Home.js
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

const Home = () => {
  return (
    <Container className="mt-4">
      <Jumbotron>
        <h1>Bienvenido a la plataforma de travel</h1>
        <p>
          Comparte tus experiencias de travel.
        </p>
      </Jumbotron>
    </Container>
  );
};

export default Home;
