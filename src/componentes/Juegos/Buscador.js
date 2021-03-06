import React, { Component } from "react";
import { useAuth0 } from "@auth0/auth0-react";
class Buscador extends Component{
    busquedaRef= React.createRef();
    obtenerDatos=(e)=>{
            e.preventDefault();
            
            const termino=this.busquedaRef.current.value;
            this.props.datosBusqueda(termino);
            
    }
    render(){
        
        return(
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                   
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Buscar tu juego"/>

                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="Buscar"/>

                    </div>
                </div>
            </form>
        );
    }
}

export default Buscador;