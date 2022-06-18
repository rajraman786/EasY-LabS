import React from 'react';
import {NavLink} from "react-router-dom";

const MyLabsButton = ({lab_id,name}) => {
  return (
    <NavLink to={`/student-dashboard/my-labs/${name.toLowerCase()}/${lab_id}/all`}>
        <div className="card-btn">
            <button>Go to Lab</button>
        </div>
    </NavLink>
    
  )
}

export default MyLabsButton;