import React from 'react';
import {NavLink,useParams} from "react-router-dom";

const ProblemCard = ({name,id,date,desc,priority,click}) => {
  return (
      <>
    <div className={`problem-card ${priority ?"" : "first"}`}>
        <div className='left'>
            <div className='card-title'>
                    <h3><span className='id'>{`${id}.  `}</span>{name}</h3>
            </div>
            <div className='card-date'>
                {`Date:- ${date}`}
            </div>
        </div>
        <div className='right'>
            <div className='problem-btn'>
                <NavLink to={click}>
                        <button>View Problem</button>
                </NavLink>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default ProblemCard;