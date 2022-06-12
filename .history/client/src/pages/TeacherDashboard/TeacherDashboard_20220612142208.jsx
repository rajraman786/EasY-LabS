// import MenuItem from "./MenuItem/MenuItem";
import SideMenu from "./SideMenu/SideMenu";
import { useState,useEffect } from 'react';
import { Routes, Route } from "react-router-dom";

const TeacherDashboard = ({lab_details}) => {

   
  const [inactive,setInactive] = useState(false);

  const [labDetails,setLabDetails] = useState(lab_details);


    return ( <>
        <SideMenu labDetails={labDetails}  onCollapse={((inactive) => {
          setInactive(inactive);
        })}/>
        <div className={`container ${ inactive ? "inactive" : ""}`}>
          <Routes>
                <Route path="/teacher-dashboard" element={<AllLab />} />
          </Routes>
        </div>    
        </> );
}
 
export default TeacherDashboard;