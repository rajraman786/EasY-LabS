import React from 'react';
import { useParams } from 'react-router-dom';
import "./Lab.css";

const ProblemDetails = ({labDetails}) => {

    const {index:lab_id,problem:problem_id} = useParams();

    const problem = labDetails.all_labs[lab_id].problems[problem_id-1];
    const lab = (parseInt(lab_id) + 1).toString();
    console.log(problem);
  return (
    <div className='details-container'>
        <h2 className="style"><span>{problem_id}. </span>{problem.problem_name}</h2>
        <p className="style">{problem.problem_desc}</p>
        <div className='input style'>
            <h4>Sample Input</h4>
            <p>{problem.sample_input}</p>
        </div>
        <div className='output style'>
            <h4>Sample Output</h4>
            <p>{problem.sample_output}</p>
        </div>
        <div className="table-container-2">
                <table>
                    <caption>Students Submissions</caption>
                    <thead>
                        <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Entry No.</th>
                            <th scope="col">Department</th>
                            <th scope="col">Submissions</th>
                        </tr>
                    </thead>
                    <tbody>
            {
              labDetails.students.map((student,index) => {

                const solved = student.problems_solved[lab].includes(parseInt(problem_id))
                console.log(student.problems_solved[lab]);
                return (
                  solved &&
                <tr key={index}>
                    <th scope="row">{index+1}.</th>
                    <td>{student.name}</td>
                    <td>{student.entry_no}</td>
                    <td>{student.department}</td>
                    <td>
                         <button className={`enroll-btn-1`}>View</button>
                    </td>
                </tr>
                )
              })
            }
            
          </tbody>
  
      </table>
  </div>
    </div>
  )
}

export default ProblemDetails