import React, { Component } from "react";
import Slider from "react-slick";

import Img from "gatsby-image";

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
            <Img fluid={this.props.images[0]} alt="" />
          </div>
          <div>
            <Img fluid={this.props.images[1]} alt="" />
          </div>
          <div>
            <Img fluid={this.props.images[2]} alt="" />
          </div>
          <div>
            <Img fluid={this.props.images[3]} alt="" />
          </div>
          <div>
            <Img fluid={this.props.images[4]} alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}
