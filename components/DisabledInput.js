import React from 'react'
import inputStyles from "../components/isabledInput.module.css";


const DisabledInput = ({plc,prct,cmt }) => {
  return (
    <div className={inputStyles.inputBody} title={cmt} >
    <div className='ml-2 font-heroSubText' >
    <div className={inputStyles.inputBox}>
      <input 
      
      type={"number"}
      numeric 
      inputMode={"numeric"}
      required
      disabled
      placeholder={prct +'%'}
      min={0}
      max={100}
      onKeyDown={e => /[\+\-\.\,]$/.test(e.key) && e.preventDefault()}
      >
        
      </input>
      <span className=' text-xs text-teal-400' >{plc}</span>
      <i></i>
      <p className='absolute text-xs font-thin jhamela text-black overflow-hidden h-2'>{cmt}</p>

      
    </div>
  </div>
  </div>
  )
}

export default DisabledInput