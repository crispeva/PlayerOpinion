import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Image from 'react-bootstrap/Image'
export const Profile=()=>{
    const {user, isAuthenticated,isLoading}=useAuth0();
    if(isLoading){
        return <div>Loading....</div>
    }

    return (
        isAuthenticated && 
    
     
        <Image
         src={user.picture}  
          roundedCircle
          alt={user.name}
        />
     

           
         
       
    );
};