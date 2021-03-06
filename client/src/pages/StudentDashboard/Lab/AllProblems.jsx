import React from 'react';
import ProblemCard from './ProblemCard';
import {useParams,Link} from "react-router-dom";

const AllProblems = ({labDetails,loggedStudent}) => {
  const {index:lab_id} = useParams();
  console.log(lab_id);
  return (
    <div className='problem-card-container'>
      {
        labDetails.all_labs[lab_id-1]?.problems.map((problem,index) => {
            const solved = labDetails.students[loggedStudent-1].problems_solved[lab_id].includes(problem.problem_id);
          return (
              <Link to={`/${problem.problem_name.toLowerCase().split(" ").join("-")}/${loggedStudent}/${lab_id}/${problem.problem_id}`}>
                  <ProblemCard
                      key={index}
                      btnText={solved ? "Solved" : "Solve Problem"}
                      class={solved ? 1 : 2}
                      priority={index}
                      name={problem.problem_name}
                      id={problem.problem_id}
                      desc={problem.problem_desc}
                      date={problem.date}
                  />
              </Link>
          );})
      }
    </div>
  )
}

export default AllProblems;