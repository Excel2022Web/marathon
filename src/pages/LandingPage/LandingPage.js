import React from 'react'

import { Home, About, Excel, Sponsors, Contact, Schedule } from '../../components'

import './LandingPage.css'

function LandingPage() {
  return (
    <div className='landingPage'>
      <Home />
      <About />
      <Sponsors />
      <Schedule />
      {/* <GMaps /> */}
      <Excel />
      <Contact />
    </div>
  )
}

export default LandingPage