import React, { Component } from "react";
import './Juegos.css';
import Buscador  from './Buscador';
import Resultado  from './Resultado';
import { Footer } from '../Footer';
import { Menu } from '../Menu';
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
     
    }
    consultarApi =()=>{
 
        const termino=this.state.termino;
        const pagina=this.state.pagina;
        const url=`https://api.rawg.io/api/games?key=2cc715e9e8814518aeed3cf5fed44c9b&search=${termino}&page_size=9&page=${pagina}`;
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
        <div>
            <Menu/>
        <div className="container-fixed" id="body">
         
            <div className="row justify-content-center">
            <div class="col-sm-8">
            
           
                
            <div className="jumbotron">
              
           

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
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer/>
        </div>
        </div>
    );
   
}

}
export default Juegos