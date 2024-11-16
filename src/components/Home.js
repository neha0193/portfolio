import React from 'react'
import fig4 from '../assets/new_user.png'

const Home = () => {
  return (
    <div className='mains'>
      <div className='main_text'>
      <h1>I'm Neha</h1>
      <h4> Currently Unemployed</h4>
      <p>But learning to be a good React dev, while building <br /> products that make others happy!!</p>
      </div>
      <img className = 'user' src={fig4} height='140' width='150'/>
    </div>

  )
}

export default Home ;