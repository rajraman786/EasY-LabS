import React , {useState,useEffect} from 'react';
import {Routes,Route} from "react-router-dom";
import MyLabs from './MyLabs/MyLabs';
import Lab from "./Lab/Lab";
import AllProblems from "./Lab/AllProblems";
import Solved from "./Lab/Solved";

const StudentDashboard = ({connectedLabDetails:lab_details,setConnectedLabDetails}) => {

    const loggedStudent = 1;
    const [labDetails,setLabDetails] = useState(lab_details);

    useEffect(() => {
    setConnectedLabDetails(labDetails)
  },[labDetails]);

  //console.log(lab_details);

  return (
    <Routes>
        <Route path="/my-labs" element={<MyLabs labDetails={labDetails} setLabDetails={setLabDetails} loggedStudent={loggedStudent} />} />
        <Route path="/my-labs/:name/:index/*"  element={<Lab/>} >
            <Route path="all" element={<AllProblems loggedStudent={loggedStudent} labDetails={labDetails}/>} />
            <Route path="solved" element={<Solved loggedStudent={loggedStudent} labDetails={labDetails}/>} />
        </Route>            
    </Routes>
  )
}

export default StudentDashboard