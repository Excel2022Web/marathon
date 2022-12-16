import React from 'react'
import { HiChevronDoubleRight } from "react-icons/hi";

import './Home.css'

import chart from '../../assets/png/chart.png'
import landing_avatar from '../../assets/svg/landing_avatar.svg'


function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <div className='home__left'>
          <h1>mindful minds <br /><span>matter</span></h1>
          <p>Lorem ipsum dolor sit amet consectetur. Sit ultricies tellus ornare dolor. Et dictumst in faucibus tristique tincidunt. In est mauris sagittis eros vel. In massa diam amet diam magna sed.</p>
          <button className='home_reg_btn'>
            Register Now
            <HiChevronDoubleRight />
          </button>
        </div>
        <div className='home__right'>
          <img src={landing_avatar} alt="" className='landing_avatar' />
        </div>
      </div>
      <img src={chart} alt="" className='landing_curve' />
    </div>
  )
}

export default Home