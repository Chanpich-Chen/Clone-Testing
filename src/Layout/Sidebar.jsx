// import React, { useState } from 'react';
// import { RxHamburgerMenu } from "react-icons/rx";
// import Dashboard from '../Components/Dashboard';

// const Sidebar = () => {
//   const [toggle, setToggle] = useState(false);

//   const handleToggle = () => {
//     setToggle(!toggle);
//   };

//   return (
//     <div className={`sidebar ${toggle ? 'w-[5.8rem]' : ''}`}>
//       <Dashboard  toggle={toggle}/>
//       <div className='absolute left-[3.5rem] cursor-pointer' onClick={handleToggle}>
//         <RxHamburgerMenu
//           className={`${toggle ? "rotate-180" : ""} text-xs transition-all duration-300`}
//         />
//       </div>
//       {/* Add your sidebar content here */}
//     </div>
//   );
// };

// export default Sidebar;

import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxDashboard } from "react-icons/rx";
import { HiOutlineUsers } from "react-icons/hi";
import { BsChevronDown } from "react-icons/bs";
import logo from "../assets/images/smalllogo.png";
import textlogo from "../assets/images/text-logo.png";
import { Link, Outlet } from "react-router-dom";
function Sidebar() {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const [menu, setMenu] = useState([
    {
      title: "Dashboard",
      url: "/dashboard",
      active: true,
    },
    {
      title: "Manage Employee",
      url: "/manageEmployee",
      icon: <HiOutlineUsers />,
      active: false,
      submenu: true,
      // submenuItems: [
      //   {
      //     title: "Positions",
      //     url: "/position",
      //   },
      //   {
      //     title: "Add Employee",
      //     url: "/addemployee",
      //   },
      //   {
      //     title: "Manage Employee",
      //     url: "/manageemployee",
      //   },
      // ],
    },
  ]);

  return (
    <div className="flex relative">
      <div
        className=" absolute  bg-white w-full h-20"
        style={{ boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.1)" }}
      ></div>

      <div
        className={`bg-[#2463b0] h-screen  pt-8 ${
          open ? "w-80" : "w-24"
        } duration-300 relative`}
        style={{ boxShadow: "5px 0px 15px rgba(0, 0, 0, 0.3)" }}
      >
         
        {/*Hamburger button */} 
        <div className="p-3 bg-white  rounded-xl shadow-xl custom-box-shadow absolute -right-20 -mt-5 flex items-center">
          <RxHamburgerMenu
            color="#2463b0"
            className={`text-3xl font-extrabold cursor-pointer ${!open}`}
            onClick={() => setOpen(!open)}
          />
        </div>
        

        {/* <div className="-mt-1 flex justify-center">
          {open ? (
            <img className="w-72" src={textlogo} alt="" />
          ) : (
            <>
              <img
                className={`${open && "hidden"}`}
                src={logo}
                alt=""
              />
            </>
          )}
        </div> */}
        <div className="-mt-5 flex justify-center mx-3">
          {open ? (
            <img className="" src={textlogo} alt="" />
          ) : (
            <img
              className="w-16 invisible"
              src={logo}
              alt=""
              style={{ visibility: "visible" }}
            />
          )}
        </div>
         
        <ul className="pt-9  ">
          {menu.map((menus, index) => (
            
            <li
              key={index}
              className="text-white text-3xl relative  flex items-center gap-x-3 px-8 py-3 cursor-pointer active:bg-[#4778b6] active:font-medium mt-3"
            >
              <span className="text-3xl font-medium block float-lef ">
                {menus.icon ? menus.icon : <RxDashboard />}
              </span>
              <Link as={Link} to={menus.url} className={`text-xl flex-1 font-normal ${!open && "hidden"}`}>
                {menus.title}
              </Link>

              {/* {menus.submenu && (
                <BsChevronDown
                  className={`text-xl ${submenuOpen && "rotate-180"}`}
                  onClick={() => {
                    setSubmenuOpen(!submenuOpen);
                  }}
                />
              )} */}

              {/* {menus.submenu && submenuOpen && open && (
                <ul className="absolute list-disc list-inside leading-10  top-full text-xl font-normal mt-3">
                  {menus.submenuItems.map((submenuItem, subIndex) => (
                    <li
                      className="hover:bg-[#4778b6] hover:rounded-xl hover:font-medium ml-7"
                      key={subIndex}
                    >
                      <Link to={submenuItem.url}>{submenuItem.title}</Link>
                    </li>
                  ))}
                </ul>
              )} */}
            </li>
          ))}
        </ul>
      </div>

      <Outlet />
    </div>
  );
}

export default Sidebar;
