import React from 'react'

import './Perks.css'
import PerksCard from './PerksCard'

function Perks() {
  return (
    <div className='perks'>
        <div className='perks_container'>
            <PerksCard />
            <PerksCard />
            <PerksCard />
        </div>
    </div>
  )
}

export default Perks