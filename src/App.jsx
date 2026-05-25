// import { useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero.jsx'
import { Problems } from './components/Problems/Problems.jsx'
import { Plans } from './components/Plans/Plans.jsx'
import HowItWorks from './components/HowItWorks/HowItWorks.jsx'

function App() {


  return (
    <>
     <div className="app-container">

      <Hero />
      <Problems />
      <Plans />
      <HowItWorks />

     </div>
    </>
  )
}

export default App
