import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { Container, Row, Col, Button } from 'react-bootstrap'

function ContactScreen() {

  const contacts = [
  'Professional Email: ldamasio@stefanini.com',
  'Professional Email: ldamasio@fapesp.br',
  'Personal Linkedin Profile: https://linkedin.com/in/ldamasio',
  'Personal Email: ldamasio@gmail.com',
  'Personal Github Profile: https://github.com/ldamasio/',
  'Personal Twitter Profile: https://twitter.com/ldamasio',
  'Personal Instagram Profile: https://instagram.com/ldamasio',
  'Personal Website: http://leandrodamasio.com'
  ];
  
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-body">
        <Container>
          <h1>Contacts</h1>
          <ul>
            { contacts.map( (contact) => <li className="contact">{ contact }</li>) }
          </ul>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default ContactScreen
