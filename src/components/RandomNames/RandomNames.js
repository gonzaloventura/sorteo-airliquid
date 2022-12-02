import React from 'react'
import './RandomNames.scss'

const RandomNames = ({sorteo, setSorteo}) => {
  const bomboOne = ['Persona1.png', 'Persona2.png', 'Persona3.png', 'Persona4.png', 'Persona5.png','Persona6.png', 'Persona7.png', 'Persona8.png', 'Persona9.png', 'Persona10.png','Persona11.png', 'Persona12.png', 'Persona13.png', 'Persona14.png', 'Persona15.png'];

  const bomboTwo = ['Persona1.png', 'Persona2.png', 'Persona3.png', 'Persona4.png', 'Persona5.png','Persona6.png', 'Persona7.png', 'Persona8.png', 'Persona9.png', 'Persona10.png','Persona11.png', 'Persona12.png', 'Persona13.png', 'Persona14.png', 'Persona15.png'];

  const bomboThree = ['Persona1.png', 'Persona2.png', 'Persona3.png', 'Persona4.png', 'Persona5.png','Persona6.png', 'Persona7.png', 'Persona8.png', 'Persona9.png', 'Persona10.png','Persona11.png', 'Persona12.png', 'Persona13.png', 'Persona14.png', 'Persona15.png'];

  const bomboFour = ['Persona1.png', 'Persona2.png', 'Persona3.png', 'Persona4.png', 'Persona5.png','Persona6.png', 'Persona7.png', 'Persona8.png', 'Persona9.png', 'Persona10.png','Persona11.png', 'Persona12.png', 'Persona13.png', 'Persona14.png', 'Persona15.png'];

  return (
    <>
    {sorteo === "btn" ? 
    <>
    <div className='randomnames'>
      
      <div className='box'>
        {bomboOne.map((ganador) => (
            <img alt={ganador} key={ganador} className='imgwinner' src={require(`../../images/${ganador}`)} />
          ))
        }
      </div>
      <div className='box'>
        {bomboTwo.map((ganador) => (
            <img alt={ganador} key={ganador} className='imgwinner' src={require(`../../images/${ganador}`)} />
          ))
        }
      </div>
      <div className='box'>
        {bomboThree.map((ganador) => (
            <img alt={ganador} key={ganador} className='imgwinner' src={require(`../../images/${ganador}`)} />
          ))
        }
      </div>
      <div className='box'>
        {bomboFour.map((ganador) => (
            <img alt={ganador} key={ganador} className='imgwinner' src={require(`../../images/${ganador}`)} />
          ))
        }
      </div>
    </div>
    </>
    :
    <>
    <div className='randomnames speed'>
      <div className='box'>
        {bomboOne.map((ganador) => (
            <img alt={ganador} key={ganador} className='imgwinner' src={require(`../../images/${ganador}`)} />
          ))
        }
      </div>
      <div className='box'>
        {bomboTwo.map((ganador) => (
            <img alt={ganador} key={ganador} className='imgwinner' src={require(`../../images/${ganador}`)} />
          ))
        }
      </div>
      <div className='box'>
        {bomboThree.map((ganador) => (
            <img alt={ganador} key={ganador} className='imgwinner' src={require(`../../images/${ganador}`)} />
          ))
        }
      </div>
      <div className='box'>
        {bomboFour.map((ganador) => (
            <img alt={ganador} key={ganador} className='imgwinner' src={require(`../../images/${ganador}`)} />
          ))
        }
      </div>
    </div>
    </>
    }
    </>
    
  )
}

export default RandomNames