import React from 'react'
import { FiMapPin, FiCalendar, FiClock } from "react-icons/fi";

import './About.css'

import map from '../../assets/png/map.png'

function About() {
  return (
    <div className='about' id='about'>
      <div className='about__container'>
        <div className='about__left'>
          <div className='about_map_div'>
            <div className='map_event'>
              <p>Marathon Route</p>
            </div>
            <img src={map} alt="" />
          </div>
        </div>
        <div className='about__right'>
          <div className='ar__content'>
            <h1>OPENING NIGHT AT INTERNATIONAL MUSEUM </h1>
            <p>Lorem ipsum dolor sit amet consectetur. Lacus nisl praesent dapibus varius. Vivamus odio feugiat adipiscing scelerisque sed elit in. Commodo egestas dapibus viverra dignissim gravida eget sed ac id. Vivamus odio feugiat adipiscing scelerisque sed elit in. Lorem ipsum dolor sit amet. Lacus nisl praesent dapibus varius. Vivamus odio feugiat adipiscing scelerisque sed elit in. Commodo egestas dapibus viverra dignissim gravida eget sed ac id. Vivamus odio feugiat adipiscing scelerisque sed elit in. </p>
            <div className='ar_footer'>
              <div className='ar__item'>
                <FiMapPin className='ar__item_icon'/>
                <p>Durbar Hall</p>
              </div>
              <div className='ar__item'>
                <FiCalendar className='ar__item_icon'/>
                <p>February <br />4, 2023</p>
              </div>
              <div className='ar__item'>
                <FiClock className='ar__item_icon'/>
                <p>9:30 am - 12:30 PM</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default About