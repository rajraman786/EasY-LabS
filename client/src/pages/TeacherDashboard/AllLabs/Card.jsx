import React,{useState,useEffect} from 'react';
import Button from './Button';

const Card = (props) => {
    const {lab_id,labDetails,teacher,setLabDetails} = props;

    //console.log(all_labs);



  return (
    <div className="card">
        <div className='card-title'>
            <h1>{labDetails.all_labs[lab_id].name}</h1>
        </div>
        <div className='card-text'>
            <h3>{`${labDetails.all_labs[lab_id].instructor === "" ? "" : "Instructor:-"} ${labDetails.all_labs[lab_id].instructor}`}</h3>
        </div>
        <Button lab_id={lab_id} labDetails={labDetails} teacher={teacher} setLabDetails={setLabDetails}  />   
      </div>
  )
}

export default Card;