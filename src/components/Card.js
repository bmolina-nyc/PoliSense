import React from 'react'

const Card = (props) => (
    <div className="card">
        <p>{console.log(props.sentiment)}</p>
        <h3>{props.data.author}</h3>
        <p>{props.data.base}</p>
        <p>{props.data.headline}</p>
        <p>Negative sentiment score: {props.sentiment.neg}</p>
        <p>Neutral sentiment score: {props.sentiment.neu}</p>
        <p>Postive sentiment score: {props.sentiment.pos}</p>
        <p>Compound sentiment score: {props.sentiment.compound}</p>

    </div>
)

export default Card;

    //   {<h3>{props.data.author}</h3>}
    //   <p>{props.data.base}</p>
    //   <p>{props.data.headline}</p>
    //   <p>Negative Score: {props.data.sentiment.neg}</p>
    //   <p>Neutral Score: {props.data.sentiment.neu}</p>
    //   <p>Positive Score: {props.data.sentiment.pos}</p>
        // {props.data.sentiment && console.log(Object.values(props.data.sentiment))}

    