//This is an example of why we need to use useState and not variables

import React from 'react'

const ErrorExample = () => {
let title = "House of Leaves"

const handleClick = () => {
    title = "Crime and Punishment" 
    console.log(title)
}

  return (
    <>
        <h2>{title}</h2>
        <button className='btn'  onClick={handleClick}>Change Title</button>
    </>
  )
}

export default ErrorExample