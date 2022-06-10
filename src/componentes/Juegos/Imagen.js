import { Button } from "bootstrap";
import React, { useEffect, useState } from "react";
import { collection, getDocs,addDoc,query, where} from "firebase/firestore";
import db from "../firebase/firebaseConfig"
import { async } from "@firebase/util";
import { useAuth0 } from "@auth0/auth0-react";
const Imagen=(props)=>{
  
    const {user}=useAuth0();
    const gmail=user.email;
const {background_image,name,rating,id}=props.imagen;
const [Comentarios,setcomentarios]=useState([]);
const comentariosCollection=collection(db, "Comentarios");
const [newComentario,setNewComentario]=useState("");
const crearComentario= async()=>{
await addDoc(comentariosCollection,{contenido:newComentario,id_juego:{id},correo:{gmail}})
};

useEffect(()=>{
    const getcomentario=async()=>{
        const q = query(comentariosCollection, where("id_juego", "==", {id},"AND","correo","==",{gmail}));
            const data = await getDocs(q);
            data.forEach((doc) => {
                // doc.data() is never undefined for query doc snapshots
                setcomentarios(data.docs.map((doc)=>({...doc.data(),id: doc.id })));
              });
            console.log(data);
    };
    

    getcomentario();
},[]);
    return(

        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4" >
            <div className="card card-dark">
                <img src={background_image} alt={name} className="card-img-top"/>
                <div className="card-body">
                    <p className="card-text">{name}</p>
                    <p className="card-text">{rating}</p>
                    <p>{id}</p>
                    <label>Comentario</label><input type="text" onChange={(event)=>{setNewComentario(event.target.value)}}/> 
                        {Comentarios.map((Comentario)=>{
                            return (
                             
                                   <h3>Comentario: {Comentario.contenido}</h3> 
                            );
                        }
                        )} 
                 <button onClick={crearComentario}>Añadir</button>
                </div>
            </div>
        </div>
    )
}
export default Imagen;