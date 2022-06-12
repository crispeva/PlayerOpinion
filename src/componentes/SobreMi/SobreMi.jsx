import React, { Component } from "react";
import { Card,Image } from 'react-bootstrap';
import "./SobreMi.css";
import Mifoto from './mifoto.jpeg';
import { Footer } from '../Footer';
import Menu from '../Menu';
class SobreMi extends Component {
  

render(){
 
  return (
<div>
  <Menu/>
    <div className='container ' id='box_sobremi'>
      <div class="row justify-content-md-center">
    <div class="col col-sm-12" id="mifoto">
    <img  class="img-thumbnail" src={Mifoto} width="350px" height="350px" />
    </div>
    <div class="col-lg-4">
    <Card style={{ width: '18rem' , backgroundColor:'#252525',color:'white'}} >
  <Card.Body>
    <Card.Title style={{color:'orange'}}>Yo</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Presentación</Card.Subtitle>
    <Card.Text>
      Hola, mi nombre es Cristian Pérez Vargas y vengo de un pueblo llamado El Carpio
    </Card.Text>
  </Card.Body>
</Card>
    </div>
    <br></br>
    <div class="col-lg-4">
    <Card style={{ width: '18rem' , backgroundColor:'#252525',color:'white'}} >
  <Card.Body>
    <Card.Title  style={{color:'orange'}}>Aprendizaje</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Estudios</Card.Subtitle>
    <Card.Text>
      He cursado 2 ciclos Superiores , Desarrollo Aplicaciones Web (DAW) y Desarrollo Aplicaciones Multiplataforma (DAM)
    </Card.Text>
  </Card.Body>
</Card>
    </div>
    <br></br>
    <div class="col-lg-4">
    <Card style={{ width: '18rem' , backgroundColor:'#252525',color:'white'}} >
  <Card.Body>
    <Card.Title  style={{color:'orange'}}>Descripción</Card.Title>
    <Card.Subtitle className="mb-2 text-muted">Mi página</Card.Subtitle>
    <Card.Text>
      Trata simplemente de poder opinar libremente sobre tus juegos favoritos y compartirlos.
    </Card.Text>
  </Card.Body>
</Card>
    </div>
  </div>
 
</div>
<Footer/>
</div>
  );
}
}

export default SobreMi;