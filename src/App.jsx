import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Outlet, useLocation } from "react-router";
import { AnimatePresence, motion } from 'framer-motion'
import ScrollToTop from './components/ScrollToTop'

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: [0.25, 0.25, 0.25, 0.75] }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <ScrollToTop />
    </>
  )
}

export default App
