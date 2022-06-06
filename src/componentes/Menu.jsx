import React from 'react';
import logo from './Imagenes/logo.png';
import {LoginButton} from '../login/login'
import { LogoutButton } from '../login/logout';
import { Profile } from '../login/profile';
import { Navbar } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import './menu.css';
import {
    NavLink
  } from "react-router-dom";
export const Menu = () => {
    const {isAuthenticated}=useAuth0(); 
    return (

        <div className="container-flex" id='menu'>
        <nav className="navbar navbar-expand-lg bg-dark text-uppercase fixed-top" >
        <img  src={logo} width="90px" height="70px"/>
        
          <div  id='menu2'>
           <ul className="navbar-nav">
           <NavLink to="/" className="btn brn-red" active-Class-Name="active">
       <li className="nav-item"> <a className="nav-link active" aria-current="page" href="#" style={{color:"orange"}}>Inicio</a></li>
       
       </NavLink>
       <NavLink to="/Juegos" className="btn brn-dark" active-class-name="active">
       <li className="nav-item"> <a className="nav-link active" aria-current="page" href="#" style={{color:"orange"}}>Juegos</a></li>
       </NavLink>
       <NavLink to="/SobreMi" className="btn brn-light" active-class-name="active">
       <li className="nav-item"> <a class="nav-link active" aria-current="page" href="#"style={{color:"orange"}}>SobreMi </a></li>
       </NavLink>
       <NavLink to="/Contacto" className="btn brn-light" active-class-name="active">
       <li className="nav-item"> <a className="nav-link active" aria-current="page" href="#" style={{color:"orange"}} >Contacto</a></li>
       </NavLink>
       <Navbar.Collapse className="justify-content-end">
       {isAuthenticated ? (
                 <>
               <Profile/>
              <LogoutButton />
          
               </>
         
                ) :( <LoginButton/>
                )}
           
           </Navbar.Collapse>
           </ul>
       
           </div>
        </nav>

        </div>
);
};
export default Menu;