import { useState,useEffect } from "react";
import '../../styles/Products.css'
import axios from "axios"

const Product = () =>{
    
    const [filtro,setFiltro] = useState(1)
    const [producto,setProducto] = useState([])

    useEffect(() => {axios.get('https://fakestoreapi.com/products').then(resp => {
    console.log("dentro de useEffect:",resp.data);
    setProducto(resp.data)
    })},[filtro])
    
    const mostrarProducto = () =>{
        return producto.map((objeto)=> (
            <div key={objeto.id} className="cuerpo">
                <div className="producto">
                    <p id="nombreProducto">{objeto.title}</p>
                    <img src={objeto.image} alt="" className="imagen"/>
                </div>
            </div>
        ))
    }

    return(
        <>
        {mostrarProducto()}
        </>
    )
}

export default Product