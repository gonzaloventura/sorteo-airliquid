import React from 'react'
import './Winners.scss'

const Winners = ({data, premiosSorteados, setPremiosSorteados}) => {
  const ganadores = [];
  let listado = data;
  if (localStorage.getItem('array')){
    listado = JSON.parse(localStorage.getItem('array'))
  }


  const r = obtenerValor(0,listado.length)
  let ganador = listado[r];
  if (ganador === undefined){
    ganador = listado[obtenerValor(0,listado.length)]
  }
  console.log(ganador)
  ganadores.push(ganador)
  listado.splice(r, 1)
  setPremiosSorteados(1)

  localStorage.setItem('array', JSON.stringify(listado))



  function obtenerValor(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
        <>
        {ganadores.map((ganador) => (
                <img alt={ganador} key={ganador} className='winnerimagen' src={require(`../../images/${ganador}`)} />
          ))}
    </>
  )
}

export default Winners