import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { Container, Row, Col, Button } from 'react-bootstrap'

function AboutScreen() {

  const about_items = [
    'I am a Full Stack Developer',
    'Born in 1986 in Brazil, I am passionate about Logic',
    'My areas of study are Philosophy, Public Administration and Computer Engineering'
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-body">
        <Container>
          <h1>About</h1>
          <Row>
            <Col xs={12} md={6}>
              <ul>
                {about_items.map((about_item) => <li className="about">{about_item}</li>)}
              </ul>
            </Col>
            <Col xs={12} md={6}>
              <img src="ldamasio.png" alt="Profile Picture" className="about-image" />
            </Col>
          </Row>
          <div className="about-me">
            <h2>Highly Skilled Professional</h2>
            <p>
              With extensive experience in technology and project management, I'm ready to
              contribute to your company's success.
            </p>

            <Row>
              <Col xs={12} md={6}>
                <p>My favorite tech stack includes:</p>
                <ul>
                  <li>Languages: Python, Javascript, Java, Typescript, Dart, Kotlin</li>
                  <li>
                    Web Dev: Django, FastAPI, NodeJS, ReactJS, NextJS, NestJS
                  </li>
                  <li>Databases: PostgreSQL, MongoDB, MySQL/MariaDB</li>
                  <li>Data Storage: Apache Hadoop, Spark, Hive</li>
                  <li>Query Languages: SQL, GraphQL, XPath</li>
                  <li>Message Queues: RabbitMQ, Kafka, Redis</li>
                  <li>Data Warehousing: Nifi, Druid, Superset</li>
                  <li>Search Engines: Lucene, Solr</li>
                  <li>DevOps: Docker, Docker Compose, Kubernetes, Github Actions</li>
                </ul>
                <p>
                  In addition to my technical expertise, I bring strong skills in:
                </p>
                <ul>
                  <li>Project Management: Planning, organizing, and delivering projects.</li>
                  <li>
                    Education: Computer Engineering Degree (60% completed) & Master's in
                    Public Administration (expertise in public and private management).
                  </li>
                  <li>Learning & Adaptability: Continuously update my knowledge.</li>
                  <li>Communication: Exceptional communication in Portuguese and English.</li>
                  <li>Teamwork: Collaborate effectively to achieve common goals.</li>
                  <li>Proactive & Initiative-Driven: Seek solutions and make decisions.</li>
                  <li>Results-Oriented: Deliver projects on time and within budget.</li>
                </ul>
                <p>I am available to help with various roles, including:</p>
                <ul>
                  <li>Software Developer</li>
                  <li>Data Engineer</li>
                  <li>Software Architect</li>
                  <li>DevOps Engineer</li>
                  <li>Data Scientist</li>
                  <li>Cloud Engineer</li>
                  <li>Project Manager</li>
                </ul>
                <p>Let's work together! Contact me for a quote.</p>
              </Col>
              <Col xs={12} md={6}>
                <img src="wing.png" alt="Wing Image" className="about-image" />
              </Col>
            </Row>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default AboutScreen
