import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Navbar } from "react-bootstrap";
export const LogoutButton=()=> {
    const {logout}= useAuth0();

    return( 
        <Navbar.Text>
        <a href="#login" id="logout" onClick={()=> logout({returnTo: window.location.origin}) }>LOGOUT</a>
       </Navbar.Text>
  
      
    
    );
};