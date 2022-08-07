import React from 'react';

const Product = (props) => {
  return (
    <div>
          <h2>{props.name}</h2>
          <p>{props.description}</p>
          <ul>
              <li>{props.price} NGN</li>
          </ul>
          <hr />
    </div>
  )
}

export default Product;