import React from 'react'
import './Winners.scss'

const Winners = ({data, premio, premiosSorteados, setPremiosSorteados}) => {
  const listado = data;

  const r = obtenerValor(0,listado.length)
  const ganador = listado[r];
  if (ganador === undefined){
    ganador = listado[obtenerValor(0,listado.length)]
  }
  premio[0].ganadores.push(ganador)
  listado.splice(r, 1)
  setPremiosSorteados(1)



  function obtenerValor(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
        <>
        {premio[0].ganadores.map((ganador) => (
                <img alt={ganador} key={ganador} className='winnerimagen' src={require(`../../images/${ganador}`)} />
          ))}
    </>
  )
}

export default Winners