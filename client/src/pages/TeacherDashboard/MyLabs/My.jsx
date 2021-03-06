import React from 'react';
import MyLabsCard from './MyLabsCard';

const My = (props) => {
    const {labDetails} = props;
  return (
    <div className='my-labs'>
        <div className='heading'>
            <h1>My Labs</h1>
        </div>
        {labDetails.myLabs.length===0 ? (<div className='body-text'>
            <h2>You don't have any labs yet. Add one from All Labs page.</h2>
        </div>) : 
            <div className="card-container">
                {
                    labDetails.myLabs.map((lab_id,index) => {
                        return (
                            <MyLabsCard name={labDetails.all_labs[lab_id-1].name} 
                                        instructor={labDetails.all_labs[lab_id-1].instructor} 
                                        lab_id={lab_id-1} key={index}/>
                        )
                    })
                }
            </div>
        }
    </div>
  )
}

export default My;