import React from 'react'

const Button = ({buttonName, reqEndPoint, setReqEndPoint}) => {
  return (
      <button
          className={buttonName === reqEndPoint ? 'selected' : null}
          type='button'
          onClick={() => setReqEndPoint(buttonName)}
      >
          {buttonName}          
    </button>
  )
}

export default Button