import React from "react";
import "./Paginacion.css"
const Paginacion=props=>{
    return(
    

     
      
        <div id="paginacion" >
            <div id="anterior">
                
            <button onClick={props.paginaAnterior} type="button" className="btn btn-info mr-1">Anterior &larr;</button>
            </div>
            <div id="siguiente">
            <button onClick={props.paginaSiguiente} type="button" className="btn btn-info ">Siguiente&rarr;</button>
            </div>
           
        </div>
        
     
    )
}
export default Paginacion;