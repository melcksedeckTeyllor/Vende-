// import { useState } from 'react'
import './App.css'
import Hero from './components/Hero/Hero.jsx'
import { Problems } from './components/Problems/Problems.jsx'
import { Plans } from './components/Plans/Plans.jsx'
function App() {


  return (
    <>
     <div className="app-container">

      <Hero />
      <Problems />
      <Plans />

     </div>
    </>
  )
}

export default App
