import './App.scss';
import Button from './components/Button/Button';
import ListWinners from './components/ListWinners/ListWinners';
import React, {useEffect, useState} from 'react';
import Confetti from 'react-confetti'
import RandomNames from './components/RandomNames/RandomNames';


function App() {
  const [sorteo, setSorteo] = useState("btn");
  const [premiosSorteados, setPremiosSorteados] = useState(1);
  const { width, height } = '100%'

  const data = ['Persona1.png', 'Persona2.png', 'Persona3.png', 'Persona4.png', 'Persona5.png','Persona6.png', 'Persona7.png', 'Persona8.png', 'Persona9.png', 'Persona10.png','Persona11.png', 'Persona12.png', 'Persona13.png', 'Persona14.png', 'Persona15.png'];

  useEffect(()=>{
    localStorage.getItem("etapa") && setPremiosSorteados(1)
  },[])

  function fullReset(){
    localStorage.clear();
    window.location.reload();
  }

  return (
    <>
    <div className="App"> 
      <img alt='Logo' className='brand' src={require("./components/assets/images/logo.png")} />
      {sorteo === "btn" ? 
      <>
      <RandomNames sorteo={sorteo} setSorteo={setSorteo} />
      <Button data={data} sorteo={sorteo} setSorteo={setSorteo} />
      {premiosSorteados > 4 && <button onClick={fullReset}>Empezar de nuevo</button>}
      </>
      : 
      sorteo === "text" ? 
      <>
      <RandomNames sorteo={sorteo} setSorteo={setSorteo} />
      <div className='blankspace'></div>
      </>
      :
      <>
      <ListWinners data={data} sorteo={sorteo} setSorteo={setSorteo} premiosSorteados={premiosSorteados} setPremiosSorteados={setPremiosSorteados} />
      <Confetti
      width={width}
      height={height}
      numberOfPieces={150}
      wind={0.01}
      gravity={0.05}
    />
      </>
      }
       {/* <ListWinners /> */}
       
    </div>
    </>
  );
}

export default App;
