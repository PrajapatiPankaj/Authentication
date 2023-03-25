import {Routes,Route} from 'react-router-dom'
import Login from './components/login'
import Register from './components/register'
import {Container,Row,Col} from 'react-bootstrap'
import { UserAuthContextProvider } from './context/authContextApi';
import Home from './components/home';
import ProtectedRoute from './components/protetctedrouted';


function App() {
  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );

}

export default App;
