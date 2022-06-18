import React from 'react';
import MyLabsButton from './MyLabsButton';

const MyLabsCard = ({name,instructor,lab_id}) => {
  return (
    <div className="card">
        <div className='card-title'>
            <h1>{name}</h1>
        </div>
        <div className='card-text'>
            <h3>{`Instructor:- ${instructor}`}</h3>
        </div>
        <MyLabsButton lab_id={lab_id} name={name} />   
      </div>
  )
}

export default MyLabsCard