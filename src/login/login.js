import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar } from 'react-bootstrap';
export const LoginButton=() => {
    const { loginWithRedirect}= useAuth0();

    return(
        <Navbar.Text>
       <a href="#login" onClick={()=> loginWithRedirect()} style={{color:"orange"}}>LOGIN</a>
      </Navbar.Text>

    ) ;
};