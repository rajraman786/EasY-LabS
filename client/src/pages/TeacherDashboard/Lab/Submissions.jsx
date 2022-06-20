import React from 'react';
import { useParams } from 'react-router-dom';
import ProblemCard from '../Problem/ProblemCard';

const Submissions = ({labDetails}) => {

    const {index:lab_id,student:student_id} = useParams(); 
    const lab = (parseInt(lab_id) + 1).toString();
  return (
    <div className="problem-card-container">
        {
            console.log(labDetails)
        }
        {
            labDetails.students[student_id-1].problems_solved[lab].map((problem_id,index) => {
                const problem = labDetails.all_labs[lab_id].problems[problem_id-1]
                console.log(problem)
         return (
            <ProblemCard key={index} 
                         priority={index} 
                         name={problem.problem_name} 
                         id={problem.problem_id} 
                         desc={problem.problem_desc} 
                         date={problem.date} />
        )
            })
        }
    </div>
  )
}

export default Submissions;