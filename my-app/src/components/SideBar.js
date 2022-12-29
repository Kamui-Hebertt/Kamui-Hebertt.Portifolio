import React, { useContext}  from 'react';
import {Link} from 'react-router-dom';
import providerFile from '../context/contex';


 function SideBar () {
   
  const { english, setEnglish } = useContext(providerFile);
  
  const setLanguage = () => {
    english ? setEnglish(false) : setEnglish(true);
  }
  

return(
  <div className="links">
  <Link to="/"><p>Home</p></Link>
  <Link to="/about"><p>{english? `About`: `Sobre mim`}</p></Link>
  <Link to="/skills"><p>{english ? `My Skills` : `Minhas habilidades`}</p></Link>
  <button onClick={()=> setLanguage() } className="langbtn">{english ?  `Portuguese`: `Inglês` }</button>
 
  </div>
)


 }

  

export default SideBar; 