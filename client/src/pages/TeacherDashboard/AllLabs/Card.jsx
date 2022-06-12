import React,{useState,useEffect} from 'react';
import Button from './Button';

const Card = (props) => {
    const {priority,labDetails,teacher,setLabDetails} = props;

    //console.log(all_labs);



  return (
    <div className="card">
        <div className='card-title'>
            <h1>{labDetails.all_labs[priority].name}</h1>
        </div>
        <div className='card-text'>
            <h3>{`${labDetails.all_labs[priority].instructor === "" ? "" : "Instructor:-"} ${labDetails.all_labs[priority].instructor}`}</h3>
        </div>
        <Button priority={priority} labDetails={labDetails} teacher={teacher} setLabDetails={setLabDetails}  />   
      </div>
  )
}

export default Card;