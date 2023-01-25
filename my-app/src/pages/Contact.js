import React, { useContext, useEffect } from 'react';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import SideBar from '../components/SideBar';
import providerFile from '../context/contex';





function Contact () {
   const { loading, setloading } = useContext(providerFile);

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
            <h3>How to Contact me</h3>
            <p>Email: heberttafetteira.com@gmail.com</p>
            <p>Phone Number: +55</p>
            <p>Whatsapp: </p>
            <p>Linkedin: </p>
            </div>
            </main>
            ) }  
            <Footer />
            
            </div>
        )
    }

export default Contact;