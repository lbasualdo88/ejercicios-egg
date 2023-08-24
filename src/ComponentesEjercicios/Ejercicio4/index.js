import Contador from "../Ejercicio5"
import './main2.css'
import '../Ejercicio4/main2.css';
import { Link } from "react-router-dom";


const Main_2 = () => {

    return (
        <main className='main'>
        <div className='divMain'>
            <Contador />       
        <div className="divMain2">
        <Link className="a__main" to="/">Volver</Link>
        </div>
        </div>
     </main>

    )
}

export default Main_2;