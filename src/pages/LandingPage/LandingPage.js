import React from 'react'

import { Home, Banner, About, Excel, Schedule, GMaps, Sponsors, Contact } from '../../components'

import './LandingPage.css'

function LandingPage() {
  return (
    <div className='landingPage'>
      <Home />
      <Banner />
      <About />
      <Schedule />
      <GMaps />
      <Excel />
      <Sponsors />
      <Contact />
    </div>
  )
}

export default LandingPage