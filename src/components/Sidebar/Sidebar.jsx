import React, { useState } from "react";
import "./Sidebar.css";
import Logo from "../../imgs/logo 2.png";
import Site from "../Site/Site";
import { SidebarData } from "../../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0%'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
  return (
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
        <span>
          PyroInsight
        </span>
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
            >
              <Link 
              style={{textDecoration: 'none', color: 'black', fontSize:'16px', display: "flex", alignItems:"center", gap:"5px"}} 
              to={item.to}>
                <item.icon/>
                <span>{item.heading}</span>               
              </Link> 
            </div>
          );
        })}
        <div className="menuItem">
          <Site/>
        </div>
      </div>
    </motion.div>
    </>
  );
};

export default Sidebar;
