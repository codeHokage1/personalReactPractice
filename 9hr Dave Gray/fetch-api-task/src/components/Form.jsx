import React from 'react'
import Button from './Button'

const Form = ({reqEndPoint, setReqEndPoint}) => {
  return (
    <form onSubmit={e => e.preventDefault()}>
        <Button buttonName="users" reqEndPoint={reqEndPoint} setReqEndPoint={setReqEndPoint} />
        <Button buttonName="posts" reqEndPoint={reqEndPoint} setReqEndPoint={setReqEndPoint} />
        <Button buttonName="comments" reqEndPoint={reqEndPoint} setReqEndPoint={setReqEndPoint} />
    </form>
  )
}

export default Form