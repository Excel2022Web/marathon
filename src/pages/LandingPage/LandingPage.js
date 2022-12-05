import React from 'react'

import { Home, About, Excel, Schedule, Sponsors, Contact } from '../../components'

import './LandingPage.css'

function LandingPage() {
  return (
    <div className='landingPage'>
      <Home />
      <About />
      <Schedule />
      <Excel />
      <Sponsors />
      <Contact />
    </div>
  )
}

export default LandingPage