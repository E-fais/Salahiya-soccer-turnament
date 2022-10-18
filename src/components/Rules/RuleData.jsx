import React from 'react'
import './rules.css'
import{motion} from 'framer-motion/dist/framer-motion'

function RuleData() {
  return (
    <motion.div
    initial={{y:'-100px'}}
      animate={{y:0}}
      transition={{type:'spring'}}
    className='data'>
        <h2>Rules For Soccer Fiesta</h2>
        <ul>
 <li>Registration: കളി തുടങ്ങുന്നതിനു അര മണിക്കൂർ മുമ്പെങ്കിലും 
100 Riyal കോർട്ട്‌ ഫീ അടച്‌ രെജിസ്ടർ ചെയ്യണം</li>

<li>മാച്ച്‌ സമയം : 30 minutes</li>
<li>കളിക്ക്‌ മുമ്പ്‌ വാം അപ്പ്‌ :5 minutes</li>
<li>ഹാഫ്‌ റ്റൈം ഇടവേള : 5 minutes</li>
<li>ഓഫ്‌ സൈഡ്‌ : ഇല്ല</li>
<li>മൈനസ്‌ പാസ്‌ ഗോളിക്ക്‌ പിടിക്കാമൊ: പറ്റില്ല
(ചെസ്റ്റ്‌ , ഹെഡ്‌ പാസ്‌ പറ്റും.)</li>
<span className='highlite'>ഗോളി മൈനസ്‌ പാസ്‌ പിടിച്ചാൽ : Indirect Free Kick</span>
<li>
രണ്ടാമത്തെ കളി കഴിഞ്ഞ്‌  ഫൈനലിനു മുമ്പ്‌ റസ്റ്റ്‌ ടൈം : 10 Minutes.</li>
<li>Out Ball, Goal Kick  ടയറക്റ്റ്‌ പോസ്റ്റിലേക്ക്‌ ശൂട്ട്‌ ചെയ്‌താൽ ഗോളാവുമൊ: ഇല്ല</li>

<li>Cards :Red Card കിട്ടിയാൽ പുറത്താവും.<br/>
2 Yellow cards = Red Card </li>

<span className='highlite'>First Round ൽ Red Card കിട്ടിയാൽ ഫൈനൽ കളിക്കാൻ പറ്റും .</span>
<li>Substitute: Rolling Substitute (Unlimited).
എത്ര പ്രാവശ്യം വേണമെങ്കിലും കയറി ഇറങ്ങാം</li>
<li>Draw ആയാൽ : Penalty Shootout</li>
<span className='highlite'>എത്ര എന്നത്‌ റെഫറി തീരുമാനിക്കും</span>
<li>Jersey And Soccer Boots:Must</li>
<span className='highlite'>കളിക്കിടയിലുണ്ടാവുന്ന അപകടങ്ങൾക്ക്‌ കമ്മിറ്റി ഉത്തരവാദി ആയിരുക്കുന്നതല്ല.</span>
</ul>
    </motion.div>
  )
}

export default RuleData