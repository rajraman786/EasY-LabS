import React from 'react'

const ProblemCard = ({name,id,date,desc,priority,btnText,class:btnClass}) => {
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
            <div className={`problem-btn-${btnClass}`}>
                <button>{btnText}</button>
            </div>
        </div>
    </div>
    </>
  )
}

export default ProblemCard;