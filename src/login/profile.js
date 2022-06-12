import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Image from 'react-bootstrap/Image'
import { NavLink } from "react-bootstrap";
export const Profile=()=>{
    const {user, isAuthenticated,isLoading}=useAuth0();
    if(isLoading){
        return <div>Loading....</div>
    }

    return (
        isAuthenticated && 
    
        <NavLink  className="btn brn-dark" active-class-name="active">
        <li className="nav-item"> <Image
         src={user.picture} width="40px" height="40px"  
          roundedCircle
          alt={user.name}
        
        /></li>
          </NavLink>
       
     

           
         
       
    );
};