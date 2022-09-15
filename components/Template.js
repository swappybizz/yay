import { useState } from 'react' 
import Navbar from './Navbar'
import Footer from './Footer'
import Floating from "./Floating"

import { useInView } from 'react-intersection-observer';
import { motion,AnimatePresence } from "framer-motion"

const Template = ({children}) => {
  const { ref, inView, entry } = useInView();
  
  const [view, setView] = useState();

  
  return (
    <div className="">
    <div ref={ref}>
    <Navbar  />
    </div>
    <AnimatePresence>
    {!inView &&
    <motion.div
    initial={{opacity:0 }}
    animate={{y:0,opacity:1 ,position: "fixed", }}
    exit={{opacity:0  }}
   >
    <Floating/>
    </motion.div>}
    </AnimatePresence>
     


  
    
    
    {children}
    <Footer/>
   
    </div>
  )
}

export default Template