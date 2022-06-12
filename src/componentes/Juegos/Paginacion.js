import React from "react";
import "./Paginacion.css"
const Paginacion=props=>{
    return(
        <div id="paginacion" >
            <div >
                
            <button id="anterior" onClick={props.paginaAnterior} type="button" class="btn btn-warning">&larr;Anterior </button>
            </div>
         
            <div >
            <button id="siguiente"  onClick={props.paginaSiguiente} type="button" class="btn btn-warning">Siguiente&rarr;</button>
            
            </div>
        
        </div>
        
     
    )
}
export default Paginacion;