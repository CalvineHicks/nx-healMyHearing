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
import SchedulingFeature from 'libs/scheduling-feature/src';
import HomeFeature from 'libs/home-feature/src';
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
                <Col className='header-link' sm='2'>
                 <Link to='/'>Heal My Hearing</Link>
                </Col>
                <Col className='header-link' sm='2'>
                      <Link to='/services'>Services</Link>
                </Col>
                <Col className='header-link' sm='2'>
                    <Link to='/scheduling'>Scheduling</Link>
                </Col>
                <Col className='header-link' sm='2'>
                  <Link to='/contact'>Contact Us</Link>
                </Col>
              </Row>
            </nav>
          </Container>
        </header>
        <main>
          <Container>
            <div className='body'>
              <Switch>
                <Route path='/scheduling'>
                  <SchedulingFeature/>
                </Route>
                <Route path='/contact'>
                  <h1>Contact Us</h1>
                  <Row>
                    <Col>Map View</Col>                  
                    <Col>
                      <ul>
                        <li>1600 laredo st, aurora co 80011</li>
                        <li>303-847-8572</li>
                        <li>9 - 5 Weekdays</li>
                      </ul>
                    </Col>
                  </Row>
                </Route>
                <Route path='/services'>
                  <Row>This is the SERVICES page</Row>
                  <Row>What is on this page:</Row>
                  <Row>List of services provided w/ photos and descriptions</Row>
                  <Row>What I need from Abu:</Row>
                  <Row>
                    <ul>
                      <li>list of services provided</li>
                      <li>short description of each service</li>
                    </ul>
                  </Row>
                </Route>
                <Route path='/'>
                  <HomeFeature/>
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
