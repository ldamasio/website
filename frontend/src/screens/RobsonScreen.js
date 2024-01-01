import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'

function RobsonScreen() {

  const features = [
  'Robson is a robot specialized in cryptocurrency trading',
  'Programmed to monitor the market in real time',
  'Strategy and operations-oriented BTC/USDT data mining model',
  'Probabilistic analyzes for decision making',
  'Automatic buying or selling digital assets',
  'Ruled by the Dealer method\'s risk management',
  'Associated marketing tool for disseminating signals',
  'Source code is entirely open and free'
];
  
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-body">
        <Container>
          <h1>Robson Bot</h1>
          <ul>
            { features.map( (feature) => <li className="robson">{ feature }</li>) }
          </ul>
          <h3>Links</h3>
          <a href="https://: www.robson.srv.br/" target="_blank" rel="noopener noreferrer">
              Robson Bot Professional Edition
          </a>
          <a href="https://: www.robson.srv.br/" target="_blank" rel="noopener noreferrer">
              Public Repository
          </a>

        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default RobsonScreen
