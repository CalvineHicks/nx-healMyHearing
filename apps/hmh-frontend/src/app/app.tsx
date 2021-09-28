import React from 'react';
import './app.scss';
import { ReactComponent as Logo } from './logo2_white.svg';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import SchedulingFeature from 'libs/scheduling-feature/src';
import HomeFeature from 'libs/home-feature/src';
import ContactUsFeature from 'libs/contact-us-feature/src'
export const App = () => {
  //TODO: add logo to header
  return (
    <div className='app'>
      <Router>
        <header className='flex'>
          <Container>
            <nav>
              <Row>
                <Col className='header-link logo' sm='4'>
                  <Link to='/'><Logo width='300' height='70 ' /></Link>
                </Col>
                <Col className='header-link' sm='3'>
                  <Link to='/services'>Services</Link>
                </Col>
                <Col className='header-link' sm='2'>
                  <Link to='/scheduling'>Scheduling</Link>
                </Col>
                <Col className='header-link' sm='3'>
                  <Link to='/contact'>Contact Us</Link>
                </Col>
              </Row>
            </nav>
          </Container>
        </header>
        <main>
          <div className='body'>
            <Switch>
              <Route path='/scheduling'>
                <SchedulingFeature />
              </Route>
              <Route path='/contact'>
                <ContactUsFeature />
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
                    <li>review calendly monthly fees/features</li>
                    <li>set up g-calendar</li>
                    <li>buy calendly subscription</li>
                    <li>send login creds for both via email</li>
                  </ul>
                </Row>
              </Route>
              <Route path='/'>
                <HomeFeature />
                <SchedulingFeature />
                <ContactUsFeature />
              </Route>
            </Switch>
          </div>
        </main>
      </Router>
    </div>
  );
};

export default App;
