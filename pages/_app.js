import "../styles/globals.css";
import Template from "../components/Template";
import { motion, AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial="pageInitin"
        animate="pageAnimate"
        exit="pageExit"
        varients={{
          pageInitin: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
          pageExit: {
            backgroundColor:"black",
            opacity: 0
          }
        }}
      >
        <Template>
          <Component {...pageProps} />
        </Template>
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
