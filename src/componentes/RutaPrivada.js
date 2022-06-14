import React from 'react';
import { Navigate } from 'react-router-dom';
  import { useAuth0 } from '@auth0/auth0-react';
import Juegos from './Juegos/Juegos';
  const RutaPrivada = ()=>{
    const {isAuthenticated}=useAuth0(); 
return isAuthenticated ? <Juegos></Juegos> : <Navigate to="/" />;
  };
  export default RutaPrivada;