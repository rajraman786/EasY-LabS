import { useState,useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import SideMenu from "./SideMenu/SideMenu";
import All from "./AllLabs/All";
import Create from "./CreateLab/Create";
import My from "./MyLabs/My";
import La

const TeacherDashboard = ({lab_details}) => {

   
  const [inactive,setInactive] = useState(false);

  const [labDetails,setLabDetails] = useState(lab_details);
    
  const teacherName = "Ms. Sonika Gupta";

    return ( <>
        <SideMenu labDetails={labDetails}  onCollapse={((inactive) => {
          setInactive(inactive);
        })}/>
        <div className={`container ${ inactive ? "inactive" : ""}`}>
          <Routes>
                <Route path="/all" element={<All labDetails={labDetails} teacher={teacherName} setLabDetails={setLabDetails} />} />
                <Route path="/create-lab"  element={<Create labDetails={labDetails} setLabDetails={setLabDetails}  />} />
                <Route path="/my-labs"  element={<My labDetails={labDetails}/>} />
                <Route path="/my-labs/:name/:index/*"  element={<Lab/>} ></Route>
          </Routes>
        </div>    
        </> );
}
 
export default TeacherDashboard;