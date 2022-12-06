import React from 'react'

import './Home.css'

import home_img from '../../assets/svg/home_img.svg'


function Home() {
  return (
    <div className='home'>
      <div className='home__container'>
        <div className='home__left'>

        </div>
        <div className='home__right'>
          <img src={home_img} className="home_img" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Home