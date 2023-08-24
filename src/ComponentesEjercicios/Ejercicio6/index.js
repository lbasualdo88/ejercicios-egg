import './main3.css'
import Campo from '../Campo/campo'
import { useState } from 'react'

const Formulario = (props) => {
    const { id, actualizarId, setMostrar, mostrar } = props

    const manejarEnvio = (e) => {
        e.preventDefault()
    }
    return (
        <section className='div_main3'>
            <form className='form' onSubmit={manejarEnvio}>
            <div className="div-contenedor">
                <h2 className='h2'>Elije tu personaje The Rick and Morty</h2>
                <Campo
                required={props.required}
                value={id}
                actualizarId={actualizarId}
                />
                <div className="div_personajes">
                    <button 
                    className="a"
                    type='submit'
                    onClick={()=>{setMostrar(!mostrar)}}
                    >Mostrar Personajes</button>
                </div>
            </div>
            </form>
        </section>

    )
}

export default Formulario


