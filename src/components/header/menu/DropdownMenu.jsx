import React from "react";
import { Link } from "react-router-dom";

/* const menuContent = [
  {
    name: "Home",
    activeClass: "sf-with-ul",
    menuClass: "two-columns current-menu-item",
    dropDownItems: [
      {
        name: "Home",
        routerPath: "/",
      }

    ],
  },
  {
    name: "Portfolio",
    activeClass: "",
    menuClass: "",
    dropDownItems: [
      {
        name: "Works Grid",
        routerPath: "/works-grid",
      },
      {
        name: "Works Masonry",
        routerPath: "/works-masonry",
      },
      {
        name: "Works Listing",
        routerPath: "/works-listing",
      },
      {
        name: "Works Carousel",
        routerPath: "/works-carousel",
      },
      {
        name: "Works Showcase",
        routerPath: "/works-showcase",
      },
    ],
  },
  {
    name: "Blog",
    activeClass: "",
    menuClass: "",
    dropDownItems: [
      {
        name: "Blog Grid",
        routerPath: "/blog-grid",
      },
      {
        name: "Blog Masonry",
        routerPath: "/blog-masonry",
      },
      {
        name: "Blog Sidebar",
        routerPath: "/blog-sidebar",
      },
      {
        name: "Blog Details",
        routerPath: "/blog-details",
      },
      {
        name: "Blog Details Sidebar",
        routerPath: "/blog-details-sidebar",
      },
    ],
  },
  {
    name: "Pages",
    activeClass: "",
    menuClass: "two-columns",
    dropDownItems: [
      {
        name: "About Us",
        routerPath: "/about-us",
      },
      {
        name: "About Me",
        routerPath: "/about-me",
      },
      {
        name: "Services",
        routerPath: "/service",
      },
      {
        name: "Service Details",
        routerPath: "/service-details",
      },
      {
        name: "Pricing",
        routerPath: "/pricing",
      },
      {
        name: "Team",
        routerPath: "/team",
      },
      {
        name: "FAQ",
        routerPath: "/faq",
      },
      {
        name: "Contact",
        routerPath: "/contact",
      },
      {
        name: "Page 404",
        routerPath: "/404",
      },
      {
        name: "Coming Soon",
        routerPath: "/coming-soon",
      },
    ],
  },
]; */
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
     routerPath: "/works-masonry",
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
