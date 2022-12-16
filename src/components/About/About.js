import React from 'react'

import './About.css'

import map from '../../assets/png/map.png'

function About() {
  return (
    <div className='about' id='about'>
      <div className='about__container'>
        <div className='about__left'>
          <div className='about_map_div'>
            <span className='map_event'>Marathon Route</span>
            <img src={map} alt="" />
          </div>
        </div>
        <div className='about__right'>
          <div className='al__content'>
            <h1>OPENING NIGHT AT INTERNATIONAL MUSEUM </h1>
            <h3>FEB 15th, 2023</h3>
            <h5>Durbar Hall</h5>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About