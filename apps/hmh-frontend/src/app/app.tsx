import React from 'react';
import './app.scss';
import { ReactComponent as Logo } from './logo.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
export const App = () => {
  //TODO: add logo to header
  return (
    <div className='app'>
      <Router>
        <header className='flex'>
          <Container>
            <nav>
              <Row>
                <Logo width='75' height='75' />
                <Col sm='4'>
                  <h1>Heal My Hearing</h1>
                </Col>
                  <Col sm='2'>
                    <Link to='/'>Home</Link>
                  </Col>
                  <Col>
                      <Link to='/about'>About</Link>
                  </Col>
                  <Col>
                    <Link to='/users'>Users</Link>
                  </Col>
              </Row>
            </nav>
          </Container>
        </header>
        <main>
          <Container>
            <div>
              <Switch>
                <Route path='/about'>
                  <div>about</div>
                </Route>
                <Route path='/users'>
                  <div>user</div>
                </Route>
                <Route path='/'>
                  <div>home</div>
                </Route>
              </Switch>
            </div>
          </Container>
        </main>
      </Router>
    </div>
  );
};

export default App;
