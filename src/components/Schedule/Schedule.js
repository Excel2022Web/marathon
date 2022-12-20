import React from 'react'


import './Schedule.css'
import ScheduleCard from './ScheduleCard'

function Schedule() {
  return (
    <div className='schedule' id='schedule'>
      <div className='schedule_container'>
        <h1 className="section__title" data-aos="fade-up" data-aos-duration="1200">Schedule</h1>
        {1 === 0 && (
          <div className='schedule_timeline'>
            <ScheduleCard />
            <ScheduleCard />
            <ScheduleCard />
            <ScheduleCard />
            <ScheduleCard />
          </div>
        )}
        <div className='schedule_coming'>
          <h1>Coming Soon</h1>
        </div>
      </div>
        
    </div>
  )
}

export default Schedule