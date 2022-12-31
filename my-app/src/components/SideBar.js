import React, { useContext}  from 'react';
import {Link} from 'react-router-dom';
import providerFile from '../context/contex';
import logo from '../components/a.png';


 function SideBar () {
   
  const { english, setEnglish } = useContext(providerFile);
  
  const setLanguage = () => {
    english ? setEnglish(false) : setEnglish(true);
  }
  

return(
  <div className="links">
    <div>
    <img src={ logo } alt="logo" className="logo" />
    </div>
  <Link to="/"><p>Home</p></Link>
  <Link to="/about"><p>{english? `About`: `Sobre mim`}</p></Link>
  <Link to="/skills"><p>{english ? `My Skills` : `Minhas habilidades`}</p></Link>
  <Link to="/contact"><p>{english ? `Contact` : `contato`}</p></Link>
  <button onClick={()=> setLanguage() } className="langbtn">{english ?  `Portuguese`: `Inglês` }</button>
 
  </div>
)


 }

  

export default SideBar; 