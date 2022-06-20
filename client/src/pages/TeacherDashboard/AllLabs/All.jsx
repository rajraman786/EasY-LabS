import React,{useState,useEffect} from 'react';
import Card from './Card';


const All = (props) => {

  const {labDetails,teacher,setLabDetails} = props;

  //console.log(allLabs);


  return (
    <>
    <div className='heading'>
      <h1>All Labs</h1>
    </div>
    <div className="card-container">
          {
          labDetails.all_labs.map((lab,index) => {
            return (
                <Card
                key={index} 
                lab_id={lab.lab_id-1}
                labDetails={labDetails}
                teacher={teacher}
                setLabDetails={setLabDetails}
                />
            )
          })
      }
    </div>
    </>
  )
}

export default All;