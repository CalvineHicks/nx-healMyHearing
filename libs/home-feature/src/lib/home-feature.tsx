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
          <div className='banner-content'>
            
          </div>
          <div className='banner-text'>
             <span className="banner-text-1">Hearing Aids & Audiology</span> 
             <span className="banner-text-2">in Aurora, Colorado</span>
          </div>
        </div>
      </Row>
      <Row>
        <Col sm="4">
          <ScheduleWidget/>
        </Col>
        <Col sm="8">
          <div className="provider">Heal Your Hearing/Audiologicus is founded by Mohammad Ismail Tahir, a trained Otolaryngologist (ENT Physician) from Pakistan with over 35 years of International experience. He has been caring for individuals of all ages with ENT conditions with special interest in Ear diseases including Hearing Loss. He understands the impact of hearing loss on quality of life, which affects not only the one who with it but also the loved ones who take part in Caring such individual. He assisted Dr Anthony P Cheng MD an Otolaryngologist at Swedish Medical Center in caring for Hearing impaired individuals, Dr Mohammad Asghar, Aud an Audiologist, at Thornhill Hearing and Balance Center Canada, and Volunteered at Audiology Department VA Medical Center Denver, a sign of love and passion he has developed to help the Hearing-impaired people. He is member of international Hearing and Balance Academy(HBA), Audiology online, International Hearing Society, has a newborn Hearing screening certificate from Utah State University, and License to Dispense Hearing Aids by State of Colorado.</div>
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
