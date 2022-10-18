import React, { useState } from 'react'
import {motion} from 'framer-motion/dist/framer-motion'
import './rules.css'
import RuleData from './RuleData'

function Rules() {
    const [seeRules,setSeeRules] =useState(false)
  
  return (
    <div className='Rules'>
        <motion.button
        onClick={()=>{
            setSeeRules(!seeRules);
         window.scroll(0,900)
           
        }}
        whileHover={{scale:1.1}}
         className='ruleBtn'>
           { seeRules?'Close Rules': "See Rules" }
        </motion.button>
      <div 
      id='data'>
        {seeRules&&<RuleData/>}
      </div>
        </div>
  )
}

export default Rules