import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Calendly from './calendly/calendly';
import './scheduling-feature.scss';
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js"></script>

/* eslint-disable-next-line */
export interface SchedulingFeatureProps {}

export const SchedulingFeature = (props: SchedulingFeatureProps) => {
  return (
    <Container className="scheduling-feature">
      <h1>Schedule with Us</h1>
      <Row>
        <Col sm="2">
          <Row>Scehdule a 1 hour hearing aid assessment</Row>
          <Row>& find the right hearing aid for you</Row>
          <Row>Have a question?</Row>
          <Row>Contact us:</Row>
          <Row>303-847-8572</Row>
          <Row>MAP VIEW</Row>
        </Col>
        <Col sm="10">
          <Calendly/>
        </Col>
      </Row>
      <Row>What I need from Abu:</Row>
      <Row>
        <ul>
          <li>review calendly monthly fees/features</li>
          <li>set up g-calendar</li>
          <li>buy calendly subscription</li>
          <li>send login creds for both via email</li>
        </ul>
      </Row> 
    </Container>
  );
};

export default SchedulingFeature;
