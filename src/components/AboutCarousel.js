import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

function SampleNextArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block'}}
      onClick={onClick}
    ></div>
  );
}

function SamplePrevArrow(props) {
  const {className, style, onClick} = props
  return (
    <div
      className={className}
      style={{...style, display: 'block'}}
      onClick={onClick}
    ></div>
  );
}

export default class AboutCarousel extends Component {

  render() {
    return (
      <div className="carousel-holder">
        <Carousel
          pauseOnHover={true}
          slide={true}
        >
          <Carousel.Item>
            <img src="./images/about/legalmal.png" />
            <Carousel.Caption>
              <h3>Legal Malpractice</h3>
              <h3>Medical Malpractice</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="./images/about/injurydeath.png" />
            <Carousel.Caption>
              <h3>Personal Injury</h3>
              <h3>Wrongful Death</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="./images/about/probate.png" />
            <Carousel.Caption>
              <h3>Probate & Estate Planning</h3>
              <h3>Wills & Powers of Attorney</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="./images/about/ladybird.png" />
            <Carousel.Caption>
              <h3>Property Transfers</h3>
              <h3>Ladybird Deeds</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="./images/about/guardian.png" />
              <Carousel.Caption>
                <h3>Conservatorships</h3>
                <h3>Guardianships</h3>
              </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="./images/about/family.png" />
            <Carousel.Caption>
              <h3>Family Law</h3>
              <h3>Divorce</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="./images/about/litigation.png" />
            <Carousel.Caption>
              <h3>Litigation in Circuit Courts</h3>
              <h3>Litigation in District Courts</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="./images/about/workers.png" />
            <Carousel.Caption>
              <h3>Workers Compensation</h3>
              <h3>Social Security Disability</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src="./images/about/company.png" />
            <Carousel.Caption>
              <h3>Corporations</h3>
              <h3>Limited Liability Companies</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    );
  }
}