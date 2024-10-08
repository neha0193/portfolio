import React from 'react'
import fig1 from '../assets/clockii.png'
import fig2 from '../assets/to-do-list.png'
import fig3 from '../assets/weather.png'
import Card from './Card'

const Project = () => {
  return (
    <div>
      <h1>Featured Projects...</h1>
      <div className='card'>
        <Card photo={fig1} title="Clock app" description="a digital clock app with quotes" url="https://github.com/saiva19" />
        <Card photo={fig3} title= "Weather app" description="react weather app with API" url="https://github.com/saiva19" />
        <Card photo={fig2} title="To-do list app" description="a simple to-do list react app" url="https://github.com/saiva19" />
      </div>
      <br/>

    </div>
  )
}

export default Project