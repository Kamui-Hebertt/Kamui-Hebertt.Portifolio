import { useContext } from "react";
import { useLocation } from "react-router-dom";
import providerFile from "../context/contex";




const Footer = () => {

   const{ english } = useContext(providerFile); 
      const location =  useLocation();
      console.log(location.pathname)
   
  return(
  
    <footer className={ location.pathname === "/" ? "foot" : "footSkills"}>
    {english? (<p>Copyright ©2023 All rights reserved | This template is made by Hebertt</p>) : 
    (<p>Copyright ©2023 All rights reserved | This template is made by Hebertt</p>)}
    
    </footer> 

  )
    

}

export default Footer;