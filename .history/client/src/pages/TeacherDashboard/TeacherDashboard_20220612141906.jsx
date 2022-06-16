// import MenuItem from "./MenuItem/MenuItem";
import SideMenu from "./SideMenu/SideMenu";
import { useState,useEffect } from 'react';
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";

const TeacherDashboard = ({lab_details}) => {

   
  const [inactive,setInactive] = useState(false);

  const [labDetails,setLabDetails] = useState(lab_details);


    return ( <><SideMenu labDetails={labDetails}  onCollapse={((inactive) => {
          setInactive(inactive);
        })}/></> );
}
 
export default TeacherDashboard;