import React from 'react'

const Card = (props) => (
    <div className="card">
      {<h3>{props.data.author}</h3>}
      <p>{props.data.base}</p>
      <p>{props.data.headline}</p>
      <p>Negative Score: {props.data.sentiment.neg}</p>
      <p>Neutral Score: {props.data.sentiment.neu}</p>
      <p>Positive Score: {props.data.sentiment.pos}</p>
    </div>
)

export default Card;