import React from 'react'

import './Schedule.css'

function ScheduleCard() {
  return (
    <div className='schedule_card' data-aos="fade-up" data-aos-duration="1200">
        <div className='scard_timeline'>
            <h4 className='scard_time1'>09:30 </h4>
            <h6 className='scard_time2'>AM</h6>
        </div>
        <div className='scard_details'>
            <h5 className='scard_desc1'>Lorem ipsum do lor sit </h5>
            <p className='scard_desc2'>Lorem ipsum dolor sit amet consectetur. Lacus nisl praesent dapibus varius. Vivamus odio feugiat adipiscing scelerisque sed  feugiat adipiscing scelerisque sed </p>
        </div>
    </div>
  )
}

export default ScheduleCard