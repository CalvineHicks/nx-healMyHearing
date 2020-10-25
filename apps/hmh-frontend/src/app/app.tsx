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
                  <Row>This is the SCHEDULING Page</Row>
                  <Row>What is on this page:</Row>
                  <Row>Calendar View, Scheduling Link</Row>
                  <Row>What I need from Abu:</Row>
                  <Row>
                    <ul>
                      <li>review calendly monthly fees/features</li>
                      <li>set up g-calendar</li>
                      <li>buy calendly subscription</li>
                      <li>send login creds for both via email</li>
                    </ul>
                  </Row>                
                </Route>
                <Route path='/contact'>
                  <Row>This is the CONTACT US page</Row>
                  <Row>What is on this page:</Row>
                  <Row>Map View, Scheduling Link, Address, Phone Number, Hours</Row>
                  <Row>What I need from Abu:</Row>
                  <Row>
                    <ul>
                      <li>address</li>
                      <li>phone number</li>
                      <li>business hours</li>
                    </ul>
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
                  <Row>This is the HOME Page</Row>
                  <Row>What is on this page:</Row>
                  <Row>Welcome message, Audiology info, summary of services, big scheduling link</Row>
                  <Row>What I need from Abu:</Row>
                  <Row>
                    <ul>
                      <li>welcome message for page</li>
                      <li>tbd</li>
                      <li>tbd</li>
                      <li>tdb</li>
                    </ul>
                  </Row>                           
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
