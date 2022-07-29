import React from 'react';
import location from '../images/location.png';

const Card = (props) => {
  return (
    <section className='card'>
        <img src={props.image} alt="" />
        <div className="card-details">
            <div className='location'>
                <img src={location} alt="" />
                <span className='state'>{props.location}</span>
                <span><a href={props.googleMapLink}>View on Google Maps</a></span>
            </div>
              <h3>{ props.title}</h3>
            <p><strong >{props.start}  - {props.end}</strong></p>
            <p className='description'>
                {props.description}
            </p>
        </div>
    </section>
  )
}

export default Card