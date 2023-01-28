import React, { useContext } from 'react'
import Slider from "react-slick";
import providerFile from '../context/contex';


export default function Card({ project }) {
  const {  english } = useContext(providerFile);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider {...settings} >
     
      <div className="card1" with="40px">
 
        <img src={project.photo1} alt={`Projeto ${project.name}`}  />
        <p className='projectName'>{project.name}</p>
        <p className='projectLink'><a href={project.url}>{english ? "Link to the project" : "Link para o projeto"}</a></p>
  
      </div>
      <div className="card1" >
        <img src={project.photo2} alt={`Projeto ${project.name}`}  />
        <p className='projectName'>{project.name}</p>
        <p className='projectLink'><a href={project.url}>{english ? "Link to the project" : "Link para o projeto"}</a></p>
      </div>
      <div className="card1">
        <img src={project.photo3} alt={`Projeto ${project.name}`}  />
        <p className='projectName'>{project.name}</p>
        <p className='projectLink'><a href={project.url}>{english ? "Link to the project" : "Link para o projeto"}</a></p>
      </div>

    </Slider>
  );

};
