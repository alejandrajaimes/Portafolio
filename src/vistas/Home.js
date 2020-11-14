import React from 'react';
import "../estilos/home.css"
import Face from '../imagenes/face.png'
import Git from '../imagenes/git.png'
import Ins from '../imagenes/ins.png'
import Dos from '../imagenes/dos.png'
import Header from '../componente/Header'

 
const Home = () => {
    return ( 
       <div className="contenedor">
           <Header/>
            <main className="l-main bd-grid">
            <div className="home">
                <div className="home__information">
                    <span className="home__pressent anime-text">Alejandra Jaimes</span>
                    <h1 className="home__title anime-text"> DEVELOPER</h1>
                    <span className="home__skill anime-text">FRONTEND</span>
                    
                    <div>
                        <a href="#" className="home__button anime-text">DOWNLOAD CV</a>
                    </div>
                </div>

                <div className="home__img">
                     <img src={Dos} className="home__img_mia" alt=""/>
                </div>
                
                <div className="home__social">
                           <a href="https://www.facebook.com/alejandra.jaimes.908"><img src={Face} name="logo-facebook" className="home__social-icon" alt=""/></a>
                            <a href="https://github.com/alejandrajaimes"> <img src={Git} name="logo-github" className="home__social-icon" alt=""/></a>
                          <a href="https://www.instagram.com/alejaimespr/?hl=es-la"> <img src={Ins} name="logo-instagram" className="home__social-icon" alt=""/></a>

                 </div>

            </div>
        </main>
       </div>
     );
}
 
export default Home;

