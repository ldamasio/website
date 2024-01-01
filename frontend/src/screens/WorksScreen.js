import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import { Container } from 'react-bootstrap'

function WorksScreen() {

  const works = [
  'Senior Development Analyst at Stefanini Group / Fapesp',
  'Full Stack Developer at Garagem do Zé',
  'Web3 Developer at Crypto Join',
  'Full Stack Developer at NUSA Tecnologia',
  'Full Stack Developer at Boas Novas Gestão de Saúde',
  'Data Engineer at Global Hitss',
  'Full Stack Developer at NPL Brasil',
  'Agreements Manager at Urussanga City Hall',
  'Executive Secretary at Pro-Goethe Association',
  'Statistics Manager at the Florianópoils Secretary of Education',
  'Technical Advisor at the Office of Florianópolis Mayor',
  'Public Policy Analyst at e-Strategia Públic',
  'Founding President at São Paulo Aclimação Rotaract Club',
  'Researcher at Fundação Getúlio Vargas',
  'Founding President at the Public Administration Students National Federation'
  ];
  
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main className="App-body">
        <Container>
          <h1>Works</h1>
          <ul>
            { works.map( (work) => <li className="works">{ work }</li>) }
          </ul>
        </Container>
      </main>
      <Footer />
    </div>
  )
}

export default WorksScreen
