// import MenuItem from "./MenuItem/MenuItem";
import SideMenu from "./SideMenu/SideMenu";
import { useState,useEffect } from 'react';


const TeacherDashboard = ({labDetails}) => {

   
  const [inactive,setInactive] = useState(false);

  const [labDetails,setLabDetails] = useState(labDetails);


    return ( <><SideMenu labDetails={labDetails}  onCollapse={((inactive) => {
          setInactive(inactive);
        })}/></> );
}
 
export default TeacherDashboard;