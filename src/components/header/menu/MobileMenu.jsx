import React from "react";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import Social from "../../social/Social";

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
const MobileMenu = () => {
  return (
    <>
      <div className="ptf-offcanvas-menu__navigation">
        <ProSidebar>
          <SidebarContent>
            <Menu className="sidebar-menu_wrapper">
              {menuContent.map((item, i) => (
                <SubMenu title={item.name} key={i}>
                    <Link to={item.routerPath}>{item.name}</Link>
                </SubMenu>
              ))}
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
      {/* End .ptf-offcanvas-menu__navigation */}

      <div className="ptf-offcanvas-menu__footer">
        <p className="ptf-offcanvas-menu__copyright">
      The Future Dynamics   ©{new Date().getFullYear()}{" "}
          <span className="has-white-color">
            <a
              href="https://thefuturedynamics.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              | &nbsp;
            </a>
          </span>
             Brand Of Dynamics Stream - Microsoft Gold Partners
        </p>
        <Social />
      </div>
      {/* End .ptf-offcanvas-menu__footer */}
    </>
  );
};

export default MobileMenu;
