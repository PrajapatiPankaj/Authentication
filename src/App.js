import {Routes,Route} from 'react-router-dom'
import Login from './components/login'
import Register from './components/register'
import {Container,Row,Col} from 'react-bootstrap'
import { UserAuthContextProvider } from './context/authContextApi';


function App() {
  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );

}

export default App;
