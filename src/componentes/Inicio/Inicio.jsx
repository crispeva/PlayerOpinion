import React from 'react';
import { Carousel } from 'react-bootstrap';
import './inicio.css';
export const Inicio = () => {
  return (
    <div className='container' id='carrusel'>

   
    <div  className='row justify-content-center'>
    <div class="col-sm-8">
<Carousel>
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://www.comunidadxbox.com/wp-content/uploads/2022/03/Grand-Theft-Auto-V-Mobile-Take-Two-Zygna-Deal-1.jpg"
      alt="GTA V"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item >
    <img
      className="d-block w-100"
      src="https://i.blogs.es/b2ec36/warzone/1366_2000.jpeg"
      alt="WARZONE"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://futbolmoderno.eu/wp-content/uploads/2021/07/portada-fifa-22.jpg.webp"
      alt="God of War"
    />
    <Carousel.Caption>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
<h1>Da tu opinion sin miedo</h1>
</div>
</div>
  );
};
export default Inicio;