import React from 'react'

const Heading = (props) => {
  return (
    <div>
      <h3>{props.title}</h3>
      <h2>{props.name}</h2>
    </div>
  )
}

export default Heading;
