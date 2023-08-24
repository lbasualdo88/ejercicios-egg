import './main.css';
import Personaje from '../../Ejercicio3';
import { Link } from 'react-router-dom';
import Formulario from '../../Ejercicio6';
import { useState } from 'react';

const Main = () => {
    const [id, setId] = useState("")
    const [mostrar, setMostrar] = useState(false)

    const actualizarId = (id) => {
        setId(id)
        console.log(mostrar)
        if (mostrar) {
            setMostrar(!mostrar)
        }
    }
    return ( 
    <main className='main'>
        <div className='divMain'>
        <Formulario 
        actualizarId={actualizarId}
        setMostrar={setMostrar}
        />
        <div>
            {mostrar  ? 
            <Personaje 
            titulo="Chiquito"
            id={id} 
            /> : <></>      
        }
        <div className='divMain2'>
            <Link className='a__main2' to="/about">Ir al Contador</Link>   
        </div>
        </div>

        </div>
     </main>
)}

export default Main;



 /*
    const mostrarApi = () => {
        return fetch(`https://rickandmortyapi.com/api/character/`)
        .then(respuesta => respuesta.json())
        .then((respuesta) => {
           const {results} = respuesta
               results.forEach(element => {
                console.log(element.name)
               });
           })
        }
        mostrarApi()
 */