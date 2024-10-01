import React from 'react'
import fig1 from '../assets/PHASMO.jpg'

const Project = () => {
  return (
    <div>
      <h1>Featured Projects...</h1>
      <div className='card'>
        <div className='card-item'>
          <img src={fig1} alt='project photo' height="240px" width="240px" />
          <h2>A clock app </h2>
          <p>a react based clock app</p>
          <a href='https://github.com/saiva19' target='_blank'>see more </a>➡️
        </div>
        <div className='card-item'>
          <img src={fig1} alt='project photo' height="240px" width="240px" />
          <h2>A clock app </h2>
          <p>a react based clock app</p>
          <a href='https://github.com/saiva19' target='_blank'>see more </a>➡️
        </div>
      </div>
    </div>
  )
}

export default Project