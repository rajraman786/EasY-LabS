import React from 'react';
import ProblemCard from '../Problem/ProblemCard';
import {useParams} from "react-router-dom";

const AllProblems = ({labDetails}) => {
   const {index:lab_id,name} = useParams();
  console.log(lab_id);
  return (
    <div className='problem-card-container'>
      {
        labDetails.all_labs[lab_id]?.problems.map((problem,index) => {
          return (
            <ProblemCard key={index} 
                          priority={index} 
                          name={problem.problem_name} 
                          id={problem.problem_id} 
                          desc={problem.problem_desc} 
                          date={problem.date}
                          click={`/teacher-dashboard/my-labs/${name}/${lab_id}/problem-details/${problem.problem_id}`}
                          />
        )})
      }
    </div>
  )
}

export default AllProblems;