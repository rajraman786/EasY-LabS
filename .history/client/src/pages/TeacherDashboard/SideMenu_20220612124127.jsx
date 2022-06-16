import React, { useEffect, useState } from 'react';
import logo from "../../assets/";
import fullLogo from "../assets/fullLogo.png";
import MenuItem from './MenuItem';
import { NavLink } from 'react-router-dom';

const SideMenu = ({onCollapse,labDetails}) => {

  const [inactive,setInactive] = useState(true);

  const Menus = [
    {
      name:"All Labs",
      icon:<i class="bi bi-list-ol"></i>,
      to:"/"
    },
    {
      name : "My Labs",
      subMenus :  labDetails.myLabs,
      icon : <i class="bi bi-view-list"></i>,
      to:"/my-labs"
    },
    {
      name:"Create Lab",
      icon:<i class="bi bi-plus-square"></i>,
      to:"/create-lab"
    }
  ]

  useEffect(() => {
    onCollapse(inactive);
  },[inactive]);

  return (
    <div className={`side-menu ${inactive ? "inactive" : ""}`}>
      <div className='top-section'>
        <NavLink to="/">
            <div className='logo'>
              <img src={logo} />
            </div>
        </NavLink>
        
        <div onClick={() => setInactive(!inactive)} className='toggle'>
            {
              inactive ? <i class="bi bi-arrow-right-square-fill"></i> :  <i class="bi bi-arrow-left-square-fill"></i>
            }
           
        </div>
      </div>
      <div className="divider"></div>
      <div className='main-menu'>
        <ul>
          {Menus.map((menu,index) => (
            <MenuItem
            key={index}
            name={menu.name}
            subMenus ={menu.subMenus}
            icon={menu.icon}
            to={menu.to}
            onClick={() => setInactive(false)}
            inactive={inactive}
            />
          ))}
          {/* <li>
            <a className='menu-item'>
              <div className='menu-icon'>
                  <i class="bi bi-speedometer2"></i>
              </div>
              <span>Dashboard</span>
              </a>
          </li>
          <MenuItem
          name="Content"
          subMenus ={ [
            {
              name:"Courses"
            },
            {
              name:"Videos"
            }
          ]}
          icon={<i class="bi bi-newspaper"></i>}
          />
          <li>
            <a className='menu-item'>
              <div className='menu-icon'>
                  
              </div>
              <span>Content</span>
              </a>
              <ul className='sub-menu'>
                <li>
                  <a>Courses</a>
                </li>
                <li>
                  <a>Videos</a>
                </li>
              </ul>
          </li>
          <li>
            <a className='menu-item'>
              <div className='menu-icon'>
                  <i class="bi bi-vector-pen"></i>
              </div>
              <span>Design</span>
              </a>
          </li> */}
        </ul>
        
      </div>
      
    </div>
  )
}

export default SideMenu;