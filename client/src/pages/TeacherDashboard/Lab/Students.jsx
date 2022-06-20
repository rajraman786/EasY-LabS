import React from 'react';
import "./Lab.css";
import {useParams,NavLink} from "react-router-dom";

const Students = ({labDetails}) => {

  const {index:lab_id,name} = useParams();

  return (
    <div className="table-container">
      <table>
          <caption>View Submissions</caption>
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

                const enrolled = student.myLabs.includes(parseInt(lab_id)+1)

                return (
                  enrolled &&
                <tr key={index}>
                    <th scope="row">{index+1}.</th>
                    <td>{student.name}</td>
                    <td>{student.entry_no}</td>
                    <td>{student.department}</td>
                    <td>
                      <NavLink to={`/teacher-dashboard/my-labs/${name}/${lab_id}/submissions/${student.student_id}`} >
                            <button className={`enroll-btn-1`}>View
                            </button>
                      </NavLink>
                      
                    </td>
                </tr>
                )
              })
            }
            
          </tbody>
  
      </table>
  </div>
  )
}

export default Students;