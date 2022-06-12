import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = (props) => {
    const {name , subMenus , icon , onClick , inactive ,to} = props;

    const [expand,setExpand] = useState(false);

  return (
          <li onClick={onClick}>
            <NavLink to={to} onClick={() => setExpand(!expand)} className='menu-item'>
              <div className='menu-icon'>
                  {icon}
                  <span>{name}</span>
              </div>
              
              </NavLink>
              {subMenus && subMenus.length>0 ? (
                  <ul className={`sub-menu ${expand && !inactive ? "active" : ""}`}>
                    {
                        subMenus.map((menu,index)=>(
                            <NavLink to={`my-labs/${menu.name.toLowerCase()}/${index}/all`} key={index}>
                                {menu.name.toUpperCase()}
                            </NavLink>
                        ))
                    } 
                  </ul>
              ) : null}
              
          </li>
  )
}

export default MenuItem;