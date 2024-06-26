import React, { useState } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaLinkedin, FaEnvelope, FaGithub, FaTwitter, FaInstagram, FaGlobe } from 'react-icons/fa';

function ContactScreen() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar a lógica para enviar o formulário
    console.log(formData); // Exemplo: log dos dados do formulário
    // Limpar campos após o envio (opcional)
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  const contacts = [
    { icon: <FaLinkedin />, text: 'Personal Linkedin Profile', link: 'https://linkedin.com/in/ldamasio' },
    { icon: <FaEnvelope />, text: 'ldamasio@gmail.com', link: 'mailto:ldamasio@gmail.com' },
    { icon: <FaGithub />, text: 'Personal Github Profile', link: 'https://github.com/ldamasio/' },
    { icon: <FaTwitter />, text: 'Personal Twitter Profile', link: 'https://twitter.com/ldamasio' },
    { icon: <FaInstagram />, text: 'Personal Instagram Profile', link: 'https://instagram.com/ldamasio' },
    { icon: <FaGlobe />, text: 'Personal Website', link: 'http://leandrodamasio.com' },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-body">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <h1 className="text-center my-4 text-light">Contacts</h1>
              <ul className="contacts-list">
                {contacts.map((contact, index) => (
                  <li key={index} className="contact-item">
                    <div className="contact-icon">{contact.icon}</div>
                    {contact.link.startsWith('mailto:') ? (
                      <a
                        href={contact.link}
                        target={contact.link.startsWith('mailto:') ? '_self' : '_blank'}
                        rel={contact.link.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                        className="contact-link"
                      >
                        {contact.text}
                      </a>
                    ) : (
                      <a href={contact.link} target="_blank" rel="noopener noreferrer" className="contact-link">
                        {contact.text}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
              <hr />
              <h2 className="text-center my-4 text-light">Send a Message</h2>
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={4}
                    name="message"
                    placeholder="Enter your message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button variant="success" type="submit" className="contact-neon-button">
                  Send
                </Button>

              </Form>
            </Col>
          </Row>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default ContactScreen;
