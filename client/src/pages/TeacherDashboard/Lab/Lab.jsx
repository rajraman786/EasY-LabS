import React, { useEffect, useState } from 'react'
import { useParams,useLocation,Outlet,NavLink } from 'react-router-dom';

const Lab = () => {
    const {name,lab_id} = useParams();
    const location = useLocation();

  return (
    <>
    <div className='heading'>
      <div className="leftSide">
          <h1>{name.toUpperCase()}</h1>
      </div>
      <div className="rightSide">
        <div className='links'>
          <NavLink to="all">All Problems</NavLink>
        </div>
        <div className='links'>
          <NavLink to="today">Today's Problems</NavLink>
        </div>
        <div className='links'>
          <NavLink to="students">Students</NavLink>
        </div>
        <div className='links'>
          <NavLink to="enroll">Enroll</NavLink>
        </div>
      </div>      
    </div>
    <Outlet/>
    </>
  )
}

export default Lab;