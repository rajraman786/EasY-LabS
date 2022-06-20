import React from 'react';
import "./MyLabs.css";
import MyLabsCard from './MyLabsCard';

const MyLabs = ({labDetails,setLabDetails,loggedStudent}) => {
  return (
    <div className='my-labs'>
        <div className='heading'>
            <h1>My Labs</h1>
        </div>
        <div className="card-container">
                {
                    labDetails.students[loggedStudent-1].myLabs.map((lab_id,index) => {
                        return (
                            <MyLabsCard name={labDetails.all_labs[lab_id-1].name} 
                                        instructor={labDetails.all_labs[lab_id-1].instructor} 
                                        lab_id={lab_id} />
                        )
                    })
                }
        </div>
    </div>    
  )
}

export default MyLabs