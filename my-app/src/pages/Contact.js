import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import SideBar from '../components/SideBar';
import providerFile from '../context/contex';





function Contact () {
   const { loading, setloading, english } = useContext(providerFile);

   useEffect(
    () => {
      setloading(true)
      let timer1 = setTimeout(() => setloading(false), 2000);
      return () => {
        clearTimeout(timer1);
      };
    },
    []
  );
        return(
            <div  >
                <SideBar />
          {loading ? <Loading /> : (
          <main className="contact">
            <div className="textC">
            <h3>{english ? "How to Contact me" : "Como me contatar" }</h3>
            <p>Email: heberttafetteira.com@gmail.com</p>
            <p>{english ? "Phone Number/Whatsapp: +55 2199215-7839" : "Telefone"}</p>
         
           Linkedin: <a href="https://www.linkedin.com/in/hebertt-nascimento/"> Linkedin </a>
            </div>
            </main>
            ) }  
            <Footer />
            
            </div>
        )
    }

export default Contact;