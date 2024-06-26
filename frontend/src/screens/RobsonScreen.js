import React from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Container, Row, Col } from 'react-bootstrap';

function RobsonScreen() {
  const features = [
    'Algo trade in Python',
    'Market in real time',
    'BTC/USDT data mining model',
    'Strategy and operations-oriented',
    'Probabilistic analyzes for decision making',
    'Automatic buying or selling digital assets',
    'Associated marketing tool for disseminating signals',
    'Asynchronous and multi-tenant architecture'
  ];

  const images = [
    'wing.png',
    'globe.png'
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-body">
        <Container>
          <h1>Robson Bot</h1>

          <img
            src={images[0]}
            alt="Robson Bot"
            className="img-fluid mb-3 rbs-center-image"
            style={{ maxWidth: '100%', height: 'auto', maxHeight: '200px' }}
          />

          <Row>
            {features.map((feature, index) => (
              <Col key={index} md={6} className="mb-4">
                <div className="feature-box text-center">
                  <p>{feature}</p>
                </div>
              </Col>
            ))}
          </Row>
          <h3>Links</h3>
          <Row>
            <Col>
              <a href="https://www.robsonbot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="rbs-neon-link"
              >
                Robson Bot Professional Edition
              </a>
            </Col>
          </Row>
          <Row>
            <Col>
              <a
                href="https://www.github.com/ldamasio/robson/"
                target="_blank"
                rel="noopener noreferrer"
                className="rbs-neon-link"
              >
                Public Repository
              </a>
            </Col>
          </Row>
        </Container>

        <img
          src={images[1]}
          alt="Robson Bot"
          className="img-fluid mb-3 rbs-center-image"
          style={{ maxWidth: '100%', height: 'auto', maxHeight: '200px' }}
        />

      </main>
      <Footer />
    </div>
  );
}

export default RobsonScreen;
