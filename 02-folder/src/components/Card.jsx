import React from 'react'

const Card = (props) => {
  return (
    <div>
        
        
      <div className="top">
        <p>{props.val}</p>
      </div>
      <div className="bottom">
        {props.age}
      </div>
    </div>
  )
}

export default Card
