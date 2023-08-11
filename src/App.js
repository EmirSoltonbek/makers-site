import React from 'react'
import Header from './components/navbar/Header'
import Slider from './components/slider/Slider'
import Schedules from './components/schedules/Schedules'
import Mentors from './components/mentors/Mentors'

const App = () => {
  return (
    <div>
      <Header/>
      <Slider/>
      <Schedules/>
      <Mentors/>
    </div>
  )
}

export default App