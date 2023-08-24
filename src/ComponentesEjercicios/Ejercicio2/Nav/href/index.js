import React from 'react'
import './heref.css'

const titulo1 = "Egg"
const titulo2 = "Argentina Programa"
const url1 = "https://egg.live/es-ar/";
const url2 = "https://www.argentina.gob.ar/economia/conocimiento/argentina-programa";
export const Href = () => {
  return (
    <div className='div__a'>
        <a className='a' href={url1}>{titulo1}</a>
        <a className='a' href={url2}>{titulo2}</a>
    </div>
  )
}
