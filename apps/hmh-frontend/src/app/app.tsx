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
                <Logo width='75' height='75'/>
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
                    <Col><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.8728829060333!2d-104.80270688462447!3d39.74250617944926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c637534f7c491%3A0xbc97887f667cbf53!2s1600%20Laredo%20St%2C%20Aurora%2C%20CO%2080011!5e0!3m2!1sen!2sus!4v1607557547453!5m2!1sen!2sus" width="600" height="450" aria-hidden="false"></iframe></Col>                 
                    <Col>
                      <Row>
                        <strong>Phone Number:</strong>
                        <div> 303-847-8572</div>
                      </Row>
                      <Row>
                        <strong>Email:</strong>
                        <a href="mailto:test@gmail.com"> test@gmail.com</a>
                      </Row>
                      <Row>
                        <strong>Hours:</strong>
                        <div> 9 - 5 Weekdays</div>
                      </Row>
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
