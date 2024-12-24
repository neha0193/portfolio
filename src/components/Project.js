import React from 'react'
import fig1 from '../assets/clockii.png'
import fig3 from '../assets/weather.png'
import fig2 from '../assets/to-do.png'
import fig4 from '../assets/downloads.png'
import Card from './Card'

const Project = () => {
  return (
    <div>
      <h1>Featured Projects...</h1>
      <div className='card'>
        <Card photo={fig1} title="Clock app" description="a digital clock app with quotes API" url="https://clock-app-red.vercel.app/.com/saiva19" />
        <Card photo={fig3} title= "Weather app" description="react weather app with API" url="https://wheather-app-ochre-nu.vercel.app/" />
        <Card photo={fig2} title= "To-do App" description="A simple To-do lsit App" url="https://to-do-app-sigma-lake.vercel.app/" />
        <Card photo={fig4} title= "One click Download" description="A simple App to download basic files" url="https://easy-downloads.vercel.app/" />
      </div>
      <br/>

    </div>
  )
}

export default Project
