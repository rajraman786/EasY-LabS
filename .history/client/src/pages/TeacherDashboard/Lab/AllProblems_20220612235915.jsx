import React from 'react';
import 
import {useParams} from "react-router-dom";

const AllProblems = ({labDetails}) => {
   const {index:lab_id} = useParams();
  console.log(lab_id);
  return (
    <div className='problem-card-container'>
      {
        labDetails.myLabs[lab_id].problems.map((problem,index) => {
          return (
            <ProblemCard key={index} priority={index} name={problem.problem_name} id={problem.problem_id} desc={problem.problem_desc} date={problem.date} />
        )})
      }
    </div>
  )
}

export default AllProblems;