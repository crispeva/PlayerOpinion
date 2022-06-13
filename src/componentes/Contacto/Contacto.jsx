import './Contacto.css';
import React, { useRef } from 'react';
import { Form,FloatingLabel,Button } from 'react-bootstrap';
import  emailjs from 'emailjs-com';
import { Footer } from '../Footer';
import { Menu } from '../Menu';
export const Contacto = () =>  {
  


  
  const form = useRef();

  const enviarEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_qs1v9er', 'template_h7c2rbq', form.current, 'rbwlsU96qavYsfAxj')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
<div>
  <Menu/>
    <div className='container py-4' id='form_contacto'>
<form  ref={form} onSubmit={enviarEmail}>
<div class="row">
<legend class="text-center header" style={{color:"orange"}} id="titulo">Contacta con nosotros</legend>

              <Form.Label>Correo</Form.Label>
              <div class="mb-3">
                  <input type="text" class="form-control" placeholder="Introduce tu correo" id='email' name="email"/>
                
              </div>
              <Form.Label>Nombre</Form.Label>
              <div class="mb-3">
         
              <input type="text" class="form-control" placeholder="Introduce tu nombre" id='name' name="name"/>
  </div>
          
       
          <Form.Label>Tlfn</Form.Label>
              <div class="mb-3">
                
                  <input type="text" class="form-control" placeholder="Introduce tu numero de telefono" id='telefono' name="telefono"/>
              </div>
              <Form.Label>Fecha de hoy</Form.Label>
              <div class="mb-3">
            
              <input type="date" class="form-control" placeholder="Enter Date Number" id='fecha' name="fecha"/>
  </div>
          </div>
          
          <Form.Label></Form.Label>
          <FloatingLabel controlId="floatingTextarea2" label="Comentario" id="message" name="message">
    <Form.Control
      as="textarea"
      placeholder="Comenta aqui tu duda"
      style={{ height: '100px' }}
    />
     
  </FloatingLabel>
 <br/>
  <input class="btn btn-warning btn-lg" type="submit" value="Enviar" id='buttonform'/>
</form>

</div>
<Footer/>
</div>
  );
}


export default Contacto;