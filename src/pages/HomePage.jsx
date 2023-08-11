import React from 'react'
import Header from '../components/navbar/Header'
import Slider from '../components/slider/Slider'
import Schedules from '../components/schedules/Schedules'
import Mentors from '../components/mentors/Mentors'
import Reviews from '../components/reviewss/Reviews'
import Footer from '../components/footer/Footer'

const HomePage = () => {
  return (
    <div>
      <Header/>
      <Slider/>
      <Schedules/>
      <Mentors/>
      <Reviews/>
      <Footer/>
    </div>
  )
}

export default HomePage