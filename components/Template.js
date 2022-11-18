import Navbar from "./Navbar";
import Footer from "./Footer";
import Floating from "./Floating";


import { useInView } from "react-intersection-observer";
import { motion, AnimatePresence } from "framer-motion";

const Template = ({ children }) => {
  const { ref, inView, entry } = useInView();

  return (
    <div className="" style={{scrollBehavior:'smooth'}}>
      
      <div ref={ref}>
      {/* <Banner/> */}
      <a className="cursor-pointer hidden" href="/camp">
    <div className="flex w-full h-12 bg-admit-red items-center justify-center cursor-pointer">
        <p className="font-medium">Har konkurranseevnen til bedriften din endret seg ?</p>
    </div>
    </a>
        <Navbar />
      </div>
      <AnimatePresence>
        {!inView && (
          <motion.div
            initial={{ opacity: 0,  }}
            animate={{ y: 0, opacity: 1, position: "fixed" }}
            exit={{ opacity: 0, }}
          >
            <Floating />
          </motion.div>
        )}
      </AnimatePresence>

      {children}
      <Footer />
    </div>
  );
};

export default Template;
