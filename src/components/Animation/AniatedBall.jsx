import React from 'react'
import ball from '../../images/football.jpg'
import './animatedBall.css'
import {motion} from 'framer-motion/dist/framer-motion'

function AnimatedBall() {
  const ballVariant={
    start:{
      x:[-30,-10],
      y:[10,-1000],
      rotateY:10
    ,
    transition:{
    x:{
      yoyo:Infinity,
      duration:2,
      ease:'easeOut'
    },
  y:{
    yoyo:Infinity,
    duration:2
  },
  rotateY:{
    yoyo:Infinity

  }
}
  }}
  return (
    <motion.div
    variants={ballVariant}
    animate='start'
    className='ball'>
        <img src={ball} alt=''/>
    </motion.div>
  )
}

export default AnimatedBall