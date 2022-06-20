import React from 'react';
import {useParams,useLocation,Outlet,NavLink} from "react-router-dom";
import "./Lab.css";

const Lab = () => {

    const {name,lab_id} = useParams();

  return (
    <>
    <div className='heading'>
      <div className="leftSide">
          <h1>{name.toUpperCase()}</h1>
      </div>
      <div className="rightSide">
        <div className='links'>
                <NavLink to="/student-dashboard/my-labs">Labs</NavLink>
            </div>
            <div className='links'>
                <NavLink to="all">All Problems</NavLink>
            </div>
            <div className='links'>
                <NavLink to="solved">Solved</NavLink>
            </div> 
      </div>      
    </div>
    <Outlet/>
    </>
  )
}

export default Lab