import './Contacto.css';
import React, { useRef } from 'react';
import { Form,FloatingLabel,Button } from 'react-bootstrap';
import  emailjs from 'emailjs-com';
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

    <div className='container' id='form_contacto'>
<form  ref={form} onSubmit={enviarEmail}>
<div class="row">
<legend class="text-center header" style={{color:"orange"}}>Contacta con nosotros</legend>

              <Form.Label>Correo</Form.Label>
              <div class="col-xs-12 col-sm-8 col-md-6">
                  <input type="text" class="form-control" placeholder="Introduce tu correo" />
                
              </div>
             
              <div class="col-xs-12 col-sm-8 col-md-6">
         
              <input type="text" class="form-control" placeholder="Introduce tu nombre" id='name' name="name"/>
  </div>
          
       
          <Form.Label>Tlfn</Form.Label>
              <div class="col-xs-12 col-sm-8 col-md-6">
                
                  <input type="text" class="form-control" placeholder="Introduce tu numero de telefono" />
              </div>
              
              <div class="col-xs-12 col-sm-8 col-md-6">
            
              <input type="date" class="form-control" placeholder="Enter Card Number" />
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
  <input class="btn btn-warning" type="submit" value="Enviar" />
</form>
</div>
  );
}


export default Contacto;