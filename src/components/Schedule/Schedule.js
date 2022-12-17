import React from 'react'


import './Schedule.css'
import ScheduleCard from './ScheduleCard'

function Schedule() {
  return (
    <div className='schedule' id='schedule'>
      <div className='schedule_container'>
        <h1 className="section__title" >Schedule</h1>
        <div className='schedule_timeline'>
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />
          <ScheduleCard />
        </div>
      </div>
        
    </div>
  )
}

export default Schedule