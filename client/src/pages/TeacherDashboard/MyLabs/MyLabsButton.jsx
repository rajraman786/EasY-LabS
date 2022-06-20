import React from 'react';
import {NavLink} from "react-router-dom";

const MyLabsButton = ({lab_id,name}) => {
  //console.log(priority);
  return (
      <NavLink to={`/teacher-dashboard/my-labs/${name.toLowerCase()}/${lab_id}/all`}  state={{from:lab_id}}  >
            <div className={lab_id ? "card-btn-2" : "card-btn"}>
                    <button>Go to Lab</button>
            </div>
      </NavLink>
  )
}

export default MyLabsButton;