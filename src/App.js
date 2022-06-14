import './App.css';
import React from "react";

import Contacto  from './componentes/Contacto/Contacto.jsx';
import SobreMi from './componentes/SobreMi/SobreMi';
import { Inicio } from './componentes/Inicio/Inicio';
import Juegos from './componentes/Juegos/Juegos';
import RutaPrivada from './componentes/RutaPrivada';

import {
  BrowserRouter as Router,
Routes,
  Route
} from "react-router-dom";



function App() {

  return (
       <Router>

 <Routes>
<Route path='/' element={<Inicio/>}>
</Route>

  <Route path='/Juegos' element={<RutaPrivada ></RutaPrivada>}/>
  <Route path='/SobreMi' element={<SobreMi></SobreMi>}>
  
  </Route>
  <Route path='/Contacto' element={<Contacto></Contacto>}>

  </Route>
 
</Routes>
   
    </Router>
    
  );
}

export default App;
