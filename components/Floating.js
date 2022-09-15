import React from 'react'
import { motion,AnimatePresence } from "framer-motion"

const Floating = ({ isVisible }) => {
  return (
   
    <div className="fabbu">
    <div className="fab-wrapper">
  <input id="fabCheckbox" type="checkbox" className="fab-checkbox" />
  <label className="fab" for="fabCheckbox">
    <span className="fab-dots fab-dots-1"></span>
    <span className="fab-dots fab-dots-2"></span>
    <span className="fab-dots fab-dots-3"></span>
  </label>
  <div className="fab-wheel">
    <a className="fab-action fab-action-1">
      <i className="fas fa-question">sadsad</i>
    </a>
    <a className="fab-action fab-action-2">
      <i className="fas fa-book"></i>
    </a>
        <a className="fab-action fab-action-3">
      <i className="fas fa-address-book"></i>
    </a>
        <a className="fab-action fab-action-4">
      <i className="fas fa-info"></i>
    </a>
  </div>
</div>
</div>

    



  )
}

export default Floating