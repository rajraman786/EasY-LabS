import MenuItem from "./MenuItem/MenuItem";
import SideMenu from "./SideMenu/SideMenu";
import { useState,useEffect } from 'react';


const TeacherDashboard = (props) => {

    const teacherName = "Ms. Sonika Gupta";

  const lab_details = {
    all_labs : [
        {
            name:"C++",
            instructor:"",
            added : false,
            compiler:"c/c++",
            desc:"A basic and beginner friendly lab for learning C++",
            
        },
        {
            name:"Python",
            instructor:"",
            added : false,
            compiler:"python",
            desc:"A basic and beginner friendly lab for learning Python"
        },
        {
            name:"Java",
            instructor:"",
            added : false,
            compiler:"java",
            desc:"A basic and beginner friendly lab for learning Java"

        },
        {
            name:"C",
            instructor:"",
            added : false,
            compiler:"c/c++",
            desc:"A basic and beginner friendly lab for learning C"
        }
    ],

    myLabs:[]
    
  }

  


    return ( <><SideMenu labDetails={labDetails}  onCollapse={((inactive) => {
          setInactive(inactive);
        })}/></> );
}
 
export default TeacherDashboard;