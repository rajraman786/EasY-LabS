import React, { useState , useEffect } from 'react';

const Button = (props) => {
    const {lab_id, labDetails , teacher , setLabDetails} = props;

  const btnClick = () => {

    labDetails.all_labs[lab_id].instructor=teacher;
    labDetails.all_labs[lab_id].added = true;

    const newArray = [...labDetails.all_labs];

    const newMyLab = lab_id+1;

    setLabDetails({
      ...labDetails,
      all_labs:[...newArray],
      myLabs : [...labDetails.myLabs,newMyLab]
    });
    
  }

  return (
    <div className={lab_id ? "card-btn-2" : "card-btn"}>
            <button onClick={labDetails.all_labs[lab_id].added ? null : btnClick}>{labDetails.all_labs[lab_id].added ? 
            <div>
                Added
                <span><i class="bi bi-check2-circle"></i></span>
            </div>
            : "Add to My Labs"}</button>
        </div>
  )
}

export default Button;