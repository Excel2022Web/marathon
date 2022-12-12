import React from 'react'
import { HiChevronDoubleRight } from "react-icons/hi";

import './Home.css'

import landing_curve from '../../assets/svg/landing_curve.svg'
import landing_avatar from '../../assets/png/landing_avatar.png'


function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <div className='home__left'>
          <button className='home_reg_btn'>
            Register Now
            <HiChevronDoubleRight />
          </button>
        </div>
        <div className='home__right'>
          <img src={landing_avatar} alt="" className='landing_avatar' />
        </div>
      </div>
      <img src={landing_curve} alt="" className='landing_curve' />
    </div>
  )
}

export default Home