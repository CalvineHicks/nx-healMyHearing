import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import './contact-us-feature.scss';

/* eslint-disable-next-line */
export const ContactUsFeature: React.FC = () => {
  return (
    <Container className="contact-us-feature">
      <h1>Contact Us</h1>
      <hr/>
      <Row>
        <Col sm="8">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3067.8728829060333!2d-104.80270688462447!3d39.74250617944926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876c637534f7c491%3A0xbc97887f667cbf53!2s1600%20Laredo%20St%2C%20Aurora%2C%20CO%2080011!5e0!3m2!1sen!2sus!4v1607557547453!5m2!1sen!2sus" width="600" height="450" aria-hidden="false"></iframe></Col>
        <Col sm="4">
          <Row>
            <strong>Heal Your Hearing</strong>
          </Row>
          <Row>
            <strong>Address:</strong>
            <div> 1600 Laredo St, Aurora, CO 80011</div>
          </Row>
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
            <Col sm="3">
              <div>Monday</div>
              <div>Tuesday</div>
              <div>Wednesday</div>
              <div>Thursday</div>
              <div>Friday</div>
            </Col>
            <Col sm="2">
              <div>9:00 am - 5:00 pm</div>
              <div>9:00 am - 5:00 pm</div>
              <div>9:00 am - 5:00 pm</div>
              <div>9:00 am - 5:00 pm</div>
              <div>9:00 am - 5:00 pm</div>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>

  );
};

export default ContactUsFeature;
