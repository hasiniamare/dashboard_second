import React from "react";
import Logo from '../../imgs/logo 1.png';
import "./Sidebar.css";
import { SidebarData } from "../../Data/Data";
import LogoutIcon from '@mui/icons-material/Logout';

function Sidebar() {
  
  return (
    <div className='Sidebar'>
      {/*logo*/}
      <div className='logo'>
        <img src={Logo} alt="logo" />  
      </div>

      {/*menu*/}
      <div className="Menu">
        {SidebarData.map((item, index) => (
      <div
      key={index}
      className={`MenuItem ${
        window.location.pathname === item.link ? "active" : "MenuItem"
      }`}
      onClick={() => {
        window.location.pathname = item.link;
      }}
    >
      <div className="icon">{item.icon}</div>
      <div className="title">{item.title}</div>
    </div>
  ))}

  <div className="MenuItem">
    <LogoutIcon/>
    <span>
      Logout
    </span>
  </div>

  </div>

</div>
  );
}

export default Sidebar;
