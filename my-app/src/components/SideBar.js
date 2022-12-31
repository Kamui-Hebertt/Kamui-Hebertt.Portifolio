import React, { useContext}  from 'react';
import {Link} from 'react-router-dom';
import providerFile from '../context/contex';
import logo from '../components/a.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';




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
 <div className="icons">
 <a href="https://www.linkedin.com/in/hebertt-nascimento" target="_blank" alt="linkedin" rel="noreferrer" ><LinkedInIcon /></a>
 <a href="https://github.com/Kamui-Hebertt" target="_blank" alt="github" rel="noreferrer" > <GitHubIcon /></a>  
  
 </div>
  </div>
)


 }

  

export default SideBar; 