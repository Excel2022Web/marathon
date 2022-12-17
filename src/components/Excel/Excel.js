import React from 'react'

import './Excel.css'

import mainImg from '../../assets/png/mainimg.png'
import mobileImg from '../../assets/png/mobileimg.png'

function Excel() {
  return (
    <div className='excel' id="coordinators">
      <div className='excel_container'>
        <div className='excel_left'>
            <div className='excel_left_title'>
              <h4 className='excel_title'>FORTITUDE</h4>
              <div className='excel_line'></div>
            </div>
            <p className='excel_desc'>Lorem ipsum dolor sit amet consectetur. Lacus nisl praesent dapibus varius. Vivamus odio feugiat adipiscing scelerisque sed elit in. Commodo egestas dapibus viverra dignissim gravida eget sed ac id. Vivamus odio feugiat adipiscing scelerisque sed elit in. Lorem ipsum dolor sit amet</p>
          </div>
          <div className='excel_right'>
            <div className='excel_right_title'>
              <h4 className='excel_title'>Excel</h4>
              <div className='excel_line'></div>
            </div>
            <p className='excel_desc1'>Lorem ipsum dolor sit amet consectetur. Lacus nisl praesent dapibus varius. Vivamus odio feugiat adipiscing scelerisque sed elit in. Commodo egestas dapibus viverra dignissim gravida eget sed ac id. Vivamus odio feugiat adipiscing scelerisque sed elit in. Lorem ipsum dolor sit amet</p>
          </div>
          <div className='img_container'>
            <img src={mainImg} alt='' className='excel_img' />
          </div>
          <div className='img_container1'>
            <img src={mobileImg} alt='' className='excel_img_mobile' />
          </div>
      </div>
        
    </div>
  )
}

export default Excel