import React from 'react';
import "./Lab.css";
import {useParams} from "react-router-dom";

const Enroll = ({labDetails,setLabDetails}) => {

  const {index:lab_id} = useParams();

  const handleClick = (student_id) => {

    labDetails.all_labs[lab_id].students = [...labDetails.all_labs[lab_id].students,student_id];

    const newArray = [...labDetails.all_labs];

    if(!labDetails.students[student_id-1].myLabs.includes(parseInt(lab_id)+1))
    {
      labDetails.students[student_id-1].myLabs = [...labDetails.students[student_id-1].myLabs,parseInt(lab_id)+1]
      
      labDetails.students[student_id-1].problems_solved =  {...labDetails.students[student_id-1].problems_solved , [parseInt(lab_id)+1] : []} 
    }

    const newStudents = [...labDetails.students];
      
    setLabDetails({
      ...labDetails,
      all_labs:newArray,
      students:newStudents
    });

  }
console.log(labDetails);  
return (
    <div className="table-container">
      <table>
          <caption>Enroll Students into this lab</caption>
          <thead>
            <tr>
                <th scope="col">S.No.</th>
                <th scope="col">Name</th>
                <th scope="col">Entry No.</th>
                <th scope="col">Department</th>
                <th scope="col">Enroll</th>
            </tr>
          </thead>
          <tbody>
            {
              labDetails.students.map((student,index) => {

                const enrolled = labDetails.all_labs[lab_id].students.includes(student.student_id)

                return (
                <tr key={index}>
                    <th scope="row">{index+1}.</th>
                    <td>{student.name}</td>
                    <td>{student.entry_no}</td>
                    <td>{student.department}</td>
                    <td><button onClick={() => { !enrolled && handleClick(student.student_id)}} 
                                className={`enroll-btn-${enrolled?2:1}`}>{enrolled?"Enrolled":"Enroll"}
                                </button></td>
                </tr>
                )
              })
            }
            
          </tbody>
  
      </table>
  </div>
  )
}

export default Enroll;