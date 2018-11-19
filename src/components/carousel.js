import React, { Component } from "react";
import Slider from "react-slick";

import image1 from '../assets/images/slides/1.jpg';
import image2 from '../assets/images/slides/5.png';
import image3 from '../assets/images/slides/3.jpg';
import image4 from '../assets/images/slides/7.jpg';
import image5 from '../assets/images/slides/8.jpg';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      autoplay: true,
      autoplaySpeed: 2000,
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div>
        <Slider {...settings}>
          <div>
            <img src={image1} alt=""/>
          </div>
          <div>
            <img src={image2} alt=""/>
          </div>
          <div>
            <img src={image3} alt=""/>
          </div>
          <div>
            <img src={image4} alt=""/>
          </div>
          <div>
            <img src={image5} alt=""/>
          </div>
        </Slider>
      </div>
    );
  }
}
