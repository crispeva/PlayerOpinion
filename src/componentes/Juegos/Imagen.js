import React from "react";
import StarRating from "./StarRating"
const Imagen=(props)=>{
const {background_image,name,rating,added}=props.imagen;
    return(

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" >
            <div className="card card-dark">
                <img src={background_image} alt={name} className="card-img-top"/>
                <div className="card-body">
                    <p className="card-text">{name}</p>
                    <p className="card-text">{rating}</p>
                    <p>hola</p>
                </div>
            </div>
        </div>
    )
}
export default Imagen;