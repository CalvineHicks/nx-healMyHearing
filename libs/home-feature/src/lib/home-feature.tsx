import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { ScheduleWidget, DeviceCard, ServicesNav } from 'libs/common-ui/src'

import './home-feature.scss';

/* eslint-disable-next-line */
export interface HomeFeatureProps {}

export const HomeFeature: React.FC<HomeFeatureProps> = (props: HomeFeatureProps) => {
  return (
    <>
    <Container className='home'>
      <Row className='banner'>
        <div className='banner-background'>
          <div className='banner-text'>
             <span className="banner-text-1">Heal Your Hearing</span> 
             <span className="banner-text-2">Audiology & Hearing Aids</span>
             <img src="assets/hearing-aid-1.png" alt="hearing aid picture" height='50px' width='50px'></img>
             <img src="assets/hearing-aid-2.png" alt="hearing aid picture" height='50px' width='50px'></img>
             <img src="assets/hearing-aid-3.png" alt="hearing aid picture" height='50px' width='50px'></img>
          </div>
        </div>
      </Row>
      <Row>
        <Col sm="4">
          <ScheduleWidget/>
        </Col>
        <Col sm="8">
          <div className="provider">Locally owned and operated audiology clinic in Aurora Colorado.</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <ServicesNav/>     
        </Col>
        <Col>
          <div>device card list from map</div>
          <DeviceCard/>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default HomeFeature;
