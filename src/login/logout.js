import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-bootstrap";

export const LogoutButton=()=> {
    const {logout}= useAuth0();

    return( 
        <NavLink  className="btn brn-dark" active-class-name="active">
         <li className="nav-item"><a  className="nav-link active" aria-current="page" href="#login"style={{color:"orange"}} id="logout" onClick={()=> logout({returnTo: window.location.origin}) }>LOGOUT</a></li>
         
        </NavLink>

      
    
    );
};