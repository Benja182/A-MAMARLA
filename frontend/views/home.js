// Home.js
import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <Container className="mt-4">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <Jumbotron>
          <h1>Bienvenido a la plataforma de travel</h1>
          <p>
            Comparte tus experiencias de travel.
          </p>
        </Jumbotron>
      </motion.div>
    </Container>
  );
};

export default Home;
