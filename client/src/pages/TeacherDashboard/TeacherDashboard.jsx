import { useState,useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import SideMenu from "./SideMenu/SideMenu";
import All from "./AllLabs/All";
import Create from "./CreateLab/Create";
import My from "./MyLabs/My";
import Lab from "./Lab/Lab";
import AllProblems from './Lab/AllProblems';
import TodayProblems from './Lab/TodayProblems';
import Students from './Lab/Students';
import Enroll from './Lab/Enroll';
import CreateProblem from './Problem/CreateProblem';
import Submissions from './Lab/Submissions';
import ProblemDetails from './Lab/ProblemDetails';

const TeacherDashboard = ({connectedLabDetails:lab_details,setConnectedLabDetails}) => {

   
  const [inactive,setInactive] = useState(false);

  const [labDetails,setLabDetails] = useState(lab_details);
    
  const teacherName = "Ms. Sonika Gupta";

  useEffect(() => {
    setConnectedLabDetails(labDetails)
  },[labDetails]);

  

    return ( <>
        <SideMenu labDetails={labDetails}  onCollapse={((inactive) => {
          setInactive(inactive);
        })}/>
        <div className={`container ${ inactive ? "inactive" : ""}`}>
          <Routes>
                <Route path="/all" element={<All labDetails={labDetails} teacher={teacherName} setLabDetails={setLabDetails} />} />
                <Route path="/create-lab"  element={<Create labDetails={labDetails} setLabDetails={setLabDetails}  />} />
                <Route path="/my-labs"  element={<My labDetails={labDetails}/>} />
                <Route path="/my-labs/:name/:index/*"  element={<Lab/>} >
                    <Route path="all" element={<AllProblems labDetails={labDetails}/>} />
                    <Route path="today" element={<TodayProblems/>} />
                    <Route path="add" element={<CreateProblem labDetails={labDetails}  setLabDetails={setLabDetails} />}/>   
                    <Route path="students" element={<Students labDetails={labDetails} />} />
                    <Route path="submissions/:student" element={<Submissions labDetails={labDetails}  />}/>
                    <Route path="problem-details/:problem" element={<ProblemDetails labDetails={labDetails} />}/>
                    <Route path="enroll" element={<Enroll labDetails={labDetails} setLabDetails={setLabDetails} />} />
                </Route>
          </Routes>
        </div>    
        </> );
}
 
export default TeacherDashboard;