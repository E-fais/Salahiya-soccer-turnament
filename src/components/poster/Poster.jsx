import React from 'react'
import './Poster.css'
import guest from '../../images/guest.jpg'


function Poster() {
  return (
    <div className='poster'>
      <h1>
      Football Tournament
        </h1> 
        <h2 className='date'>On 21st October 2022</h2>
        <h2>Cambridge Girls School - Hilal </h2>
       
        <h3 className='kickoff'>Kick Off: 6.45 PM</h3>
        <div className='guest'>
            <img src={guest} alt=''/>
            <h4>Chief Guest</h4>
            <h3>
              <a href='https://www.facebook.com/abdussamad.kc' target='_blank'>Abdussamad Kc</a>
              </h3>
            <p>
              <strong>(Iron Man 2022)</strong>
              </p>
        </div>
    </div>
  )
}

export default Poster