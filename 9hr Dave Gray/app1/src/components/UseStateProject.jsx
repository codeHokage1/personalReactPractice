import React, { useState } from 'react';
import colorNames from 'colornames'

const UseStateProject = () => {
    const [color, setColor] = useState('');
    const [isTextVisible, setIsTextVisible] = useState(true);

  return (
      <div>
          <div className="color-container" style={{backgroundColor: color}}>
              <p style={{color: isTextVisible ? null : 'black' }}>{
                  color ? color : "Empty Value"
              }</p>
              <p style={{color: isTextVisible ? null : 'black' }}>{colorNames(color)}</p>
          </div>
          <input type="text" className='color-input' placeholder='Enter a color' value={color} onChange={(e) => setColor(e.target.value)} />
          <button onClick={() => setIsTextVisible(!isTextVisible)}>See Text</button>
    </div>
  )
}

export default UseStateProject