import React from 'react'
import './RandomNames.scss'

const RandomNames = ({sorteo, setSorteo}) => {
  const bomboOne = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png", "11.png", "12.png", "13.png", "14.png", "15.png", "16.png", "17.png", "18.png", "19.png", "20.png", "21.png", "22.png", "23.png", "24.png", "25.png", "26.png", "27.png", "28.png", "29.png", "30.png", "31.png", "32.png", "33.png", "34.png", "35.png", "36.png", "37.png", "38.png", "39.png", "40.png", "41.png", "42.png"];

  const bomboTwo = ["43.png", "44.png", "45.png", "46.png", "47.png", "48.png", "49.png", "50.png", "51.png", "52.png", "53.png", "54.png", "55.png", "56.png", "57.png", "58.png", "59.png", "60.png", "61.png", "62.png", "63.png", "64.png", "65.png", "66.png", "67.png", "68.png", "69.png", "70.png", "71.png", "72.png", "73.png", "74.png", "75.png", "76.png", "77.png", "78.png", "79.png", "80.png", "81.png", "82.png", "83.png", "84.png", "85.png"];

  const bomboThree = ["86.png", "87.png", "88.png", "89.png", "90.png", "91.png", "92.png", "93.png", "94.png", "95.png", "96.png", "97.png", "98.png", "99.png", "100.png", "101.png", "102.png", "103.png", "104.png", "105.png", "106.png", "107.png", "108.png", "109.png", "110.png", "111.png", "112.png", "113.png", "114.png", "115.png", "116.png", "117.png", "118.png", "119.png", "120.png", "121.png", "122.png", "123.png", "124.png", "125.png", "126.png", "127.png", "128.png", "129.png", "130.png"];

  const bomboFour = ["131.png", "132.png", "133.png", "134.png", "135.png", "136.png", "137.png", "138.png", "139.png", "140.png", "141.png", "142.png", "143.png", "144.png", "145.png", "146.png", "147.png", "148.png", "149.png", "150.png", "151.png", "152.png", "153.png", "154.png", "155.png", "156.png", "157.png", "158.png", "159.png", "160.png", "161.png", "162.png", "166.png", "167.png", "168.png", "169.png", "170.png", "171.png", "172.png", "173.png", "174.png"];

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