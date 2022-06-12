import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { collection, getDocs,addDoc,query, where} from "firebase/firestore";
import db from "../firebase/firebaseConfig"
import { async } from "@firebase/util";
import { useAuth0 } from "@auth0/auth0-react";
import StarRating  from './StarRating';
import './imagen.css';
const Imagen=(props)=>{
  
    const {user}=useAuth0();
    const nom=user.name;
const {background_image,name,rating,id}=props.imagen;
const [Comentarios,setcomentarios]=useState([]);
const comentariosCollection=collection(db, "Comentarios");
const [newComentario,setNewComentario]=useState("");
const crearComentario= async()=>{
await addDoc(comentariosCollection,{contenido:newComentario,id_juego:{id},nombre:{nom}})
};

useEffect(()=>{
    const getcomentario=async()=>{
        const q = query(comentariosCollection, where("id_juego", "==", {id},"AND","nombre","==",{nom}));
            const data = await getDocs(q);
            data.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                setcomentarios(data.docs.map((doc)=>({...doc.data(),id: doc.id })));
              });
           
    };
    
    getcomentario();
},[]);
    return(
     
        <div className="col-12 col-sm-4" >
            <div className="card text-white bg-dark mb-3 fixed" id="padre">
                <img src={background_image} alt={name} className="card-img-top"/>
                <div className="card-body" >
                    <h4 className="card-text">{name}</h4>
                    <StarRating stars={rating} />

                        <textarea class="form-control" onChange={(event)=>{setNewComentario(event.target.value)}} aria-label="With textarea"></textarea>
                        <br></br>
                    <button class="btn btn-warning"onClick={crearComentario}>Añadir</button>
                    <br></br>
                    <br></br>
                   <h4>Comentarios</h4>
                        {Comentarios.map((Comentario)=>{
                            return (
                                
                                    <div id="cards">
                                   
                                     <label id="nombre">{Comentario.nombre.nom} :</label> <p> {Comentario.contenido}</p> 

                                   </div>
                            );
                        }
                        )} 
                 
                </div>
            </div>
            
        </div>
    )
}
export default Imagen;