import React from 'react'
import './Title.css'
import sample from '../../images/salahaiyya.jpg'

function Title() {
  return (
  
       <div 
       style={{
        backgroundImage: `url("https://t4.ftcdn.net/jpg/04/94/42/43/360_F_494424324_F4WyzpHSuyKD90kcOQv6nmfsDNxeSZSx.jpg")` 
      ,backgroundSize:'cover' 
      }}
       className='titleContainer'>
        <img src={sample} alt=''/>
       <div className='titleChild'>
        <h3>Salahiyya Kummankode</h3>
        <h1>Soccer Fiesta</h1>
       </div>
       </div>
  
  )
}

export default Title