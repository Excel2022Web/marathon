import React from 'react'

import { Home, About, Excel, GMaps, Sponsors, Contact } from '../../components'

import './LandingPage.css'

function LandingPage() {
  return (
    <div className='landingPage'>
      <Home />
      <About />
      {/* <Schedule /> */}
      <GMaps />
      <Excel />
      <Sponsors />
      <Contact />
    </div>
  )
}

export default LandingPage