import './hijo.css';
import { useState, useEffect } from 'react';

const Personaje = (props) => {
  const [personaje, setPersonaje] = useState(null);
   const { id } = props 

    useEffect(() => {
      console.log(`ID recibido: ${id}`);
      fetch(`https://rickandmortyapi.com/api/character/${id}`)
          .then(response => response.json())
          .then(data => setPersonaje(data));
  }, [id]);
      if (!personaje) {
        console.log(personaje)
        return <div>Cargando...</div>;
      }
      

    return (
        <div>
            <h2>{personaje.name}</h2>
            <img src={personaje.image} alt={personaje.name} />
        </div>
    );
}

export default Personaje;
