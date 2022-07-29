import React from 'react';
import service1 from '../images/service1.png'
import star from '../images/Star 1.png';

const Card = (props) => {
  return (
      <section className="card">
          {props.isSoldOut  && <div className='service-badge'>SOLD OUT</div>}
          <img src={props.image} alt="service1" className="card-image" />      
          <section className='card-details'>
              <div className='rating'>
                  <img src={props.star} alt="star" className='star-logo' />
                  <p className='rating-num'>{props.rating}</p>
                  <p>({props.ratingNum})</p>
              </div>
              <p className="lesson-title">{props.lessonTitle}</p>
              <p className='price'><strong>From {props.price}</strong>/person</p>
          </section>
    </section>
  )
}

export default Card