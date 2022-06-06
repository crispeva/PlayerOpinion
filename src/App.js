import './App.css';
import React from "react";

import { Footer } from './componentes/Footer';
import Contacto  from './componentes/Contacto/Contacto.jsx';
import SobreMi from './componentes/SobreMi/SobreMi';
import Menu from './componentes/Menu';
import { Inicio } from './componentes/Inicio/Inicio';
import Juegos from './componentes/Juegos/Juegos';

import {
  BrowserRouter as Router,
Routes,
  Route
} from "react-router-dom";



function App() {

  return (
       <Router>
 <Menu/>
 <Routes>
<Route path='/' element={<Inicio/>}>
</Route>
<Route path='/Juegos' element={<Juegos></Juegos>}>
  
  </Route>
  <Route path='/SobreMi' element={<SobreMi></SobreMi>}>
  
  </Route>
  <Route path='/Contacto' element={<Contacto></Contacto>}>

  </Route>
 
</Routes>
   <Footer/>
    </Router>
    
  );
}

export default App;
