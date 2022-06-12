import React from 'react';
import {NavLink} from "react-router-dom";

const MyLabsButton = ({priority,name}) => {
  return (
      <NavLink to={`/my-labs/${name.toLowerCase()}/${priority}/all`}  state={{from:priority}}  >
            <div className={priority ? "card-btn-2" : "card-btn"}>
                    <button>Go to Lab</button>
            </div>
      </NavLink>
  )
}

export default MyLabsButton;