import React from 'react'

const Card = (props) => {
    return (
        <div>

            <div className='card-item'>
                <img src={props.photo} alt='project photo' height="300px" width="300px" />
                <h2>{props.title}</h2>
                <p>{props.description}</p>
                <a href={props.url} target='_blank'>see more </a>➡️

            </div>
        </div>
    )
}

export default Card;