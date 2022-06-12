import logo from './Imagenes/logo.png';
import {LoginButton} from '../login/login'
import { LogoutButton } from '../login/logout';
import { Profile } from '../login/profile';
import { useAuth0 } from '@auth0/auth0-react';
import React, { useState } from 'react';
import './menu.css';
import {
    NavLink
  } from "react-router-dom";
import { Alert } from 'bootstrap';
export const Menu = () => {
  const [setShow] = useState(true);
    const {isAuthenticated}=useAuth0(); 
    return (

        <div className="justify-content-end" id='menu'>
        <nav className="navbar navbar-expand-lg bg-dark text-uppercase fixed-top" >
        <img id='logo' src={logo} width="90px" height="80px"/>
        
          <div className='col' id='menu'>
           <ul className="navbar-nav">
           <NavLink to="/" className="btn brn-red" active-Class-Name="active">
       <li className="nav-item"> <a className="nav-link active" aria-current="page" href="#" style={{color:"orange"}}>Inicio</a></li>
       
       </NavLink>
       {isAuthenticated?(
      
       <NavLink to="/Juegos" className="btn brn-dark" active-class-name="active">
       <li className="nav-item"> <a className="nav-link active" aria-current="page" href="#" style={{color:"orange"}}>Juegos</a></li>
       </NavLink>
        ): <NavLink to="/" className="btn brn-dark" active-class-name="active">
        <li className="nav-item"> <a className="nav-link active" aria-current="page" href="#" style={{color:"orange"}}>Juegos</a></li>
        </NavLink>}
       <NavLink to="/SobreMi" className="btn brn-light" active-class-name="active">
       <li className="nav-item"> <a class="nav-link active" aria-current="page" href="#"style={{color:"orange"}}>SobreMi </a></li>
       </NavLink>
       <NavLink to="/Contacto" className="btn brn-light" active-class-name="active">
       <li className="nav-item"> <a className="nav-link active" aria-current="page" href="#" style={{color:"orange"}} >Contacto</a></li>
       </NavLink>
      
       {isAuthenticated ? (
                 <>
               <Profile/>
              <LogoutButton />
          
               </>
         
                ) :( <LoginButton/>
                )}
           
           
           </ul>
       
           </div>
        </nav>
        </div>
);
};
export default Menu;