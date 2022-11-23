import React from 'react'
import './ListWinners.scss'
import Winners from '../Winners/Winners';
import soundButton from "../assets/button.mp3";

const ListWinners = ({data, sorteo, setSorteo, premiosSorteados, setPremiosSorteados}) => {


    const premios = [
      {
        premio: "PREMIO",
        cantidad: 100,
        ganadores: []
      }
    ];
    
    const audio = new Audio(soundButton);
    
    const reset = () => {
      audio.play();
      setSorteo("btn")
      setPremiosSorteados(premiosSorteados + 1)
    }
    
    return (
    <div className='list'>
        <div className='winners'>
            <Winners data={data} premio={premios} premiosSorteados={premiosSorteados} setPremiosSorteados={setPremiosSorteados} />
        </div>
        <button className="btn-reset" onClick={reset}>RESET</button>
    </div>
  )
}

export default ListWinners