import React, { Component } from "react";
class form extends Component{
    busquedaRef= React.createRef();
    obtenerDatos=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_qs1v9er','template_h7c2rbq',e.target,'rbwlsU96qavYsfAxj')
        console.log(res);

    }
    render(){
        return(
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                   
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" placeholder="Busca tu juego"/>

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