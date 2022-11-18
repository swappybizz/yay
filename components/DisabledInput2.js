import React from 'react'
import inputStyles from "../components/isabledInput2.module.css";


const DisabledInput2 = ({plc,prct,cmt }) => {
  return (
    <div className={inputStyles.inputBody} title={cmt} >
    <div className='ml-2 font-heroSubText' >
    <div className={inputStyles.inputBox}>
      <input 
      className=''
      type={"number"}
      numeric 
      inputMode={"numeric"}
      required
      disabled
      placeholder={prct +' NOK'}
      min={0}
      max={100}
      onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
      >
        
      </input>
      <span className='animate-pulse text-xs text-teal-400' >{plc}</span>
      <i></i>
      
    </div>
  </div>
  </div>
  )
}

export default DisabledInput2