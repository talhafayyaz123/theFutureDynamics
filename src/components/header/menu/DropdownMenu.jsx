import React from "react";
import { Link } from "react-router-dom";

const menuContent = [
  {
    name: "About Us",
    routerPath: "/about-us",
    activeClass: "sf-with-ul",
    menuClass: "",

  },
  {
    name: "Services",
    activeClass: "",
    menuClass: "",
    routerPath: "/service",
  },
  {
    name: "Portfolio",
    activeClass: "",
    menuClass: "",
     routerPath: "/work",
  },

{
    name: "Connect",
    activeClass: "",
    menuClass: "",
    routerPath: "/contact",
  },
];
const DropdownMenu = () => {
  return (
    <ul className="sf-menu">
      {menuContent.map((item, i) => (
        <li className={`menu-item-has-children ${item.menuClass}`} key={i}>

                  <Link to={item.routerPath}  className={item.activeClass}>  <span>{item.name}</span></Link>
          {/* <ul className="sub-menu mega">
            {item.map((val, i) => (
              <li key={i}>
                <Link to={val.routerPath}>
                  {" "}
                  <span>{val.name}</span>
                </Link>
              </li>
            ))}
          </ul> */}
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
