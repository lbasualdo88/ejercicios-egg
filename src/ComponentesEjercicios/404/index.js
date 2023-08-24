import image from '../img/404.jpg'
import './pages404.css'
import '../Ejercicio4/main2.css'
import { Link } from 'react-router-dom'

const Pagina404 = () => {

    return (
        <main className='main_404'>
        <img className='img_404' src={image} alt='404'/>
        <p className='p_404'>Esta pagina no existe</p>
        <div className="divMain2">
        <Link className='a__main2' to="/">Volver</Link>
        </div>
    </main>

    )
}


export default Pagina404;