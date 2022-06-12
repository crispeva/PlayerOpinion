import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from 'react-bootstrap';
export const LoginButton=() => {
    const {loginWithRedirect}= useAuth0();

    return(
        <NavLink className="btn brn-dark" active-class-name="active">
      <li className="nav-item"> <a className="nav-link active" aria-current="page" href="#login" onClick={()=> loginWithRedirect()} style={{color:"orange"}}>LOGIN</a></li>
      </NavLink>

    ) ;
};