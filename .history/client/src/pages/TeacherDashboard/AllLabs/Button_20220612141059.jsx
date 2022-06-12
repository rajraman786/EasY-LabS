import React, { useState , useEffect } from 'react';

const Button = (props) => {
    const {priority, labDetails , teacher , setLabDetails} = props;

  const btnClick = () => {

    labDetails.all_labs[priority].instructor=teacher;
    labDetails.all_labs[priority].added = true;

    const newArray = [...labDetails.all_labs];

    const newMyLab = {
      name:labDetails.all_labs[priority].name,
      instructor:labDetails.all_labs[priority].instructor,
      problems:[
        {
          problem_id:1,
          problem_name:"Prime Number",
          problem_desc:"Given a number, find whether it is prime number or not",
          sample_input:"5",
          sample_output:"Yes",
          date:"3-05-2001"
        },
        {
          problem_id:2,
          problem_name:"Armstrong Number",
          problem_desc:"Given a number, find whether it is armstrong number or not",
          sample_input:"153",
          sample_output:"Yes",
          date:"3-05-2001"
        }
      ]
    }
    
    setLabDetails({
      ...labDetails,
      all_labs:[...newArray],
      myLabs : [...labDetails.myLabs,newMyLab]
    });
    
  }

  return (
    <div className={priority ? "card-btn-2" : "card-btn"}>
            <button onClick={labDetails.all_labs[priority].added ? null : btnClick}>{labDetails.all_labs[priority].added ? 
            <div>
                Added
                <span><i class="bi bi-check2-circle"></i></span>
            </div>
            : "Add to My Labs"}</button>
        </div>
  )
}

export default Button;