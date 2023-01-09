import { useContext } from "react";
import { useLocation } from "react-router-dom";
import providerFile from "../context/contex";




const Footer = () => {

   const{ english } = useContext(providerFile); 
      const location =  useLocation();
      console.log(location.pathname)
   
  return(
  
    <footer className={ location.pathname === "/" ? "foot" : "footSkills"}>
    {english? (<p>@Created and developded By Hebertt Nascimento</p>) : 
    (<p>@Criado e desenvolvido por Hebertt Nascimento</p>)}
    
    </footer> 

  )
    

}

export default Footer;