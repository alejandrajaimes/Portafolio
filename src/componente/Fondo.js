import React from 'react';
import '../estilos/fondo.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from '../componente/Header';
import Fut4 from '../imagenes/fut4.jpeg'
import Fut1 from '../imagenes/fut1.jpeg'
import Fut from '../imagenes/fut.jpeg'
import Fut2 from '../imagenes/fut2.jpeg'
import Fut3 from '../imagenes/fut3.jpeg'
import Tarea from '../imagenes/tarea.jpeg'


const Fondo = () => {
    return ( 
      <>
      <Header/>
      <div className="contenedor12">

             <ul>
               <li>
               <div className="card" >
            <img className="card-img-top"  src={Fut4} alt="Card image cap"/>
            <div className="card-body">
            <p className="card-text">FútbollApp</p>
            </div>
            </div>
               </li>
               <li>
               <div className="card" >
            <img className="card-img-top"  src={Fut1} alt="Card image cap"/>
            <div className="card-body">
            <p className="card-text">Cards</p>
            </div>
            </div>
               </li>
               </ul>
               <ul>
               <li>
               <div className="card" >
            <img className="card-img-top"  src={Fut} alt="Card image cap"/>
            <div className="card-body">
            <p className="card-text">Formulario para la inscripción</p>
            </div>
            </div>
               </li>
               <li>
               <div className="card" >
            <img className="card-img-top"  src={Fut2} alt="Card image cap"/>
            <div className="card-body">
            <p className="card-text">Cards de canchas</p>
            </div>
            </div>
               </li>
               </ul>
               <ul>
               <li>
               <div className="card" >
            <img className="card-img-top"  src={Fut3} alt="Card image cap"/>
            <div className="card-body">
            <p className="card-text">Lista de tareas</p>
            </div>
            </div>
               </li>
               <li>
               <div className="card" >
            <img className="card-img-top"  src={Tarea} alt="Card image cap"/>
            <div className="card-body">
            <p className="card-text">formulacio en css </p>
            </div>
            </div>
               </li>
             </ul>
            
             </div>
             </>
            

            
            
          
      
        
     );
}
 
export default Fondo;