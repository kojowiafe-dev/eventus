import React from 'react'
import Header from './components/Header'
// import Features from './components/Features'
// import Hero from './components/Hero'
// import Testimonials from './components/Testimonials'
// import Pricing from './components/Pricing'
// import Contact from './components/Contact'
import Login from './Routes/Login'
import Register from './Routes/Register'
import { useRoutes } from 'react-router-dom'
import LandingPage from './Routes/LandingPage'
import NotFoundPage from './Routes/NotFoundPage'
import Footer from './components/Footer'
import Layout from './Routes/Layout'
import VerifyEmail from './Routes/VerifyEmail'
import Hero from './components/Hero'
import UseWindowResize from './components/use-window-resize'
import { motion } from 'framer-motion'


function CustomRoutes () {

  const element = useRoutes([
    // {
    //   path: '/home', element: <Hero />
    // },
    {
      path : '/', element : <LandingPage />,
      children : [
        // {path: 'home', element: <Hero />},
        {path : 'register', element : <Register />},
        {path : 'login', element : <Login />},
        {path : 'index', element : <Layout />},
      ]
    },
    {
      path: 'verify-email', element: <VerifyEmail />
    },
    {
      path : '*', element : <NotFoundPage />
    },
  ]);
  return element
}

const App = () => {

  // const { scrollY } = useScroll()
  // const y = useTransform(scrollY, [0, 500], [0, 100])

  const windowSize = UseWindowResize();
  return (
    <div className='min-h-screen flex flex-col background-color text-gray-950 overflow-visible'>
      <Header />
      <motion.h1
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 10, delay: 0.7 }}
        className='fixed z-0 pointer-events-none select-none font-bold text-gray-400/15'
        style={{
          top: windowSize.width < 800 ? '50%' : '60%',
          left: '0%',
          transform: 'translate(-50%, -50%)',
          fontSize: windowSize.width < 800 ? '80px' : '180px',
          writingMode: windowSize.width < 800 ? 'vertical-rl' : 'horizontal-tb',
          textOrientation: 'mixed'
        }}
      >
        EVENTUS
      </motion.h1>

      {/* <motion.h1
        style={{
          y,
          fontSize: window.innerWidth < 800 ? '80px' : '180px',
          writingMode: window.innerWidth < 800 ? 'vertical-rl' : 'horizontal-tb',
          textOrientation: 'mixed',
          position: 'fixed',
          top: '50%',
          right: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
        className="sticky top-20 text-gray-400/15 font-bold text-[180px] select-none pointer-events-none z-0"
      >
        EVENTUS
      </motion.h1> */}

      <CustomRoutes />

      <Footer />
    </div>
  )
}

export default App