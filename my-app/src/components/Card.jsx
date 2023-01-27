import React from 'react'
import Slider from "react-slick";
// import Trivia1 from '../images/trivia/trivia.png'

export default function Card({ project }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings}>
      <div>
        <images src={project.photo1} alt={`Projeto ${}`}
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
    </Slider>
  );

};
