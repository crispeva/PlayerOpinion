import React, { Component } from "react";
import './Juegos.css';
import Buscador  from './Buscador';
import Resultado  from './Resultado';
class Juegos extends Component{
    state={
        termino:'',
        imagenes:[],
        pagina:''
    }
    scroll=()=>{
        const elemento=document.querySelector('.jumbotron');
        elemento.scrollIntoView('smooth','start');
    }
    paginaAnterior=()=>{
        let pagina=this.state.pagina;

        if(pagina==1)return null;
                pagina-=1;
                this.setState({
                    pagina
                },()=>{
                    this.consultarApi();
                    this.scroll();
                });
                console.log(pagina)
    }
    paginaSiguiente=()=>{
       
        let pagina=this.state.pagina;

        pagina+=1;

        this.setState({
            pagina
        },()=>{
            this.consultarApi();
            this.scroll();
        });
        console.log(pagina)
    }
    consultarApi =()=>{
        const termino=this.state.termino;
        const pagina=this.state.pagina;
        const url=`https://api.rawg.io/api/games?key=2cc715e9e8814518aeed3cf5fed44c9b&search=${termino}&page=${pagina}`;
console.log(url);
      fetch(url)
      .then(respuesta=> respuesta.json())
      .then(resultado=> this.setState({imagenes:resultado.results}))
}
    datosBusqueda =(termino)=>{
            this.setState({
                termino:termino,
                pagina:1
            },()=>{
                this.consultarApi();
            } )    
             
    }
    render(){ 
    return (
        <div className="container" id="body">
            <div className="row justify-content-center">
            <div class="col-sm-8">

                
            <div className="jumbotron">
               <p className="lead text-center">Buscador Juegos</p>
           

                <Buscador
                datosBusqueda={this.datosBusqueda}
                />

</div>
      </div> 
        </div>
        <div className="row justify-content-center">
        <Resultado
       imagenes={this.state.imagenes}
       paginaAnterior={this.paginaAnterior}
       paginaSiguiente={this.paginaSiguiente}
       />
        </div>
      
        </div>
    );
}
}
export default Juegos