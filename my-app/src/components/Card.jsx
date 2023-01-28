import React from 'react'
import Slider from "react-slick";


export default function Card({ project }) {
  console.log(project.photo1)
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings} >
     
      <div className="card1">
        <img src={project.photo1} alt={`Projeto ${project.name}`}  />
        <p>asdad</p>
      </div>
      <div className="card1" >
        <img src={project.photo2} alt={`Projeto ${project.name}`}  />
      </div>
      <div className="card1">
        <img src={project.photo3} alt={`Projeto ${project.name}`}  />
      </div>

    </Slider>
  );

};
