import './header.css';
import Ejercicio1 from './../Ejercicio1/index';
import { useState } from 'react';



const Header = () => {
    const [giro, cambiarGiro] = useState(true)

    const rotar = () => {
        cambiarGiro(!giro)
        console.log(giro)
    }
    return (
            <header className="App-header">
                <Ejercicio1 />
                <button  
                className='btn'  
                onClick={()=> {rotar()}}>
                <img 
                src="/imagenEgg.jpg" 
                className={giro ? "App-logo" : "App-logo2"} 
                alt="logo" 
                />
                </button>
            </header>
    )}

    export default Header;