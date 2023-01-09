import { useContext } from "react";
import providerFile from "../context/contex";




const Footer = () => {

   const{ english, loading } = useContext(providerFile); 
   
  return(
  
    <footer className="foot">
    {english? (<p>@Created and developded By Hebertt Nascimento</p>) : 
    (<p>@Criado e desenvolvido por Hebertt Nascimento</p>)}
    
    </footer> 

  )
    

}

export default Footer;