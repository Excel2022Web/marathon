import React from 'react'

import { Home, Excel, Sponsors, Contact } from '../../components'

import './LandingPage.css'

function LandingPage() {
  return (
    <div className='landingPage'>
      <Home />
      <Excel />
      <Sponsors />
      <Contact />
    </div>
  )
}

export default LandingPage