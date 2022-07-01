import React from 'react';
import ProblemCard from './ProblemCard';
import {useParams,NavLink} from "react-router-dom";

const Solved = ({labDetails,loggedStudent}) => {
   const {index:lab_id} = useParams();
  console.log(lab_id);
  return (
    <div className='problem-card-container'>
      {
        labDetails.students[loggedStudent-1].problems_solved[lab_id].map((problem_id,index) => {
            
          return (
            <NavLink to={`/solutions/${loggedStudent}/${lab_id-1}/${problem_id}`}>
                      <ProblemCard key={index}
                        btnText="View Solution"
                        class={2} 
                        priority={index} 
                        name={labDetails.all_labs[lab_id-1]?.problems[problem_id-1].problem_name} 
                        id={problem_id} 
                        desc={labDetails.all_labs[lab_id-1]?.problems[problem_id-1].problem_desc} 
                        date={labDetails.all_labs[lab_id-1]?.problems[problem_id-1].date} />

            </NavLink>
            
        )})
      }
    </div>
  )
}

export default Solved;