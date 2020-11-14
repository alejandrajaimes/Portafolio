import React from 'react';
import '../estilos/informacion.css';
import Header from '../componente/Header'

const Informacion = () => {
    return ( 
            
        <>
        <Header/>
        <div class="card cards">
        <div class="card-body">
          <h1 class="card-title">CONTACTO</h1>
             <div>
              <ul>
                  <li><h2 class="card-subtitle mb-2 text-muted">CORREO:</h2></li>
                  <li><p class="card-text"></p>alejaimesperez5@gmail.com</li>
              </ul>
              <ul>
              <li><h2 class="card-subtitle mb-2 text-muted">TELEFONO:</h2></li>
                  <li><p class="card-text"></p>302 369 66 60</li>
              </ul>
          </div>
          
        </div>
      </div>
      </>
     );
}
 
export default Informacion;