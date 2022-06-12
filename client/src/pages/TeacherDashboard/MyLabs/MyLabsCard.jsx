import React from 'react';
import MyLabsButton from './MyLabsButton';

const MyLabsCard = (props) => {

    const {name,instructor,priority} = props;
  
    return (
    <div className="card">
        <div className='card-title'>
            <h1>{name}</h1>
        </div>
        <div className='card-text'>
            <h3>{`Instructor:- ${instructor}`}</h3>
        </div>
        <MyLabsButton priority={priority} name={name}/>   
      </div>
  )
  
}

export default MyLabsCard;