import React, { useState } from "react";
import { Link } from "react-router-dom";
import Search from "../form/Search";
import DropdownMenu from "./menu/DropdownMenu";
import MobileMenu from "./menu/MobileMenu";

const HeaderAgency = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [click1, setClick1] = useState(false);
  const handleClick1 = () => setClick1(!click1);

  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <>
      <header className="ptf-header ptf-header--style-1">
        <div
           className={
            navbar
              ? "ptf-navbar ptf-navbar--main ptf-navbar--sticky ptf-navbar--transparent ptf-navbar--white-text-on-top ptf-navbar--fixed ptf-navbar--solid"
              : "ptf-navbar ptf-navbar--main ptf-navbar--sticky ptf-navbar--transparent ptf-navbar--white-text-on-top"
          }
        >
          <div className="container-xxl">
            <div className="ptf-navbar-inner">
              {/* <!--Logo--> */}
              <Link className="ptf-navbar-logo" to="/">
                <img
                  className="black"
                  src="assets/img/root/logo-black.png"
                  alt=""
                  loading="lazy"
                  //  style={{"height": "45px"}}
                />
                <img
                  className="white"
                  src="assets/img/root/logo-white-dynamics.png"
                  alt=""
                //   style={{"height": "46px"}}
                  loading="lazy"
                />
               {/* <span className="pt-1"  style={{"padding-left": "13%"}} >the Future <br/> DYNAMICS</span> */}
              </Link>
              {/* <!--Navigation--> */}
              <nav className="ptf-nav ptf-nav--default">
                {/* <!--Menu--> */}
                <DropdownMenu />
              </nav>
              {/* <!--Buttons--> */}

              {/* <!--Navbar Search--> */}
              <div
                className={
                  click ? "ptf-navbar-search is-open" : "ptf-navbar-search header_search_bar"
                }
              >

                <div
                  className="ptf-navbar-search__toggle header_phone_no_toogle"

                >
              <div><a href="tel:+971527684867">+971 52 768 4867</a></div>
                </div>

              </div>
              {/* <!--Offcanvas Menu Toggle--> */}

               <div
                className={
                  click ? "ptf-navbar-search is-open" : "ptf-navbar-search "
                }
                
              >
                <div className="ptf-navbar-search__wrapper">
                  <Search />
                </div>

                <div
                  className="ptf-navbar-search__toggle"
                  onClick={handleClick}
                >
                  <i className="lnir lnir-search-alt"></i>
                  <i className="lnir lnir-close"></i>
                </div>

              </div>

              <div
                className="ptf-offcanvas-menu-icon js-offcanvas-menu-toggle bar right"
                onClick={handleClick1}
              >
                <i className="lnir lnir-menu-alt-5"></i>
              </div>
              {/* Toggle bar icon */}
            </div>
          </div>
        </div>
      </header>
      {/* End header */}

      <div
        className={
          click1 ? "ptf-offcanvas-menu is-open" : "ptf-offcanvas-menu "
        }
      >
        <div className="ptf-offcanvas-menu__header">
          <div className="ptf-language-switcher">
           
          </div>
          <span
            className="ptf-offcanvas-menu-icon js-offcanvas-menu-toggle"
            onClick={handleClick1}
          >
            <i className="lnir lnir-close"></i>
          </span>
        </div>
        {/* End .ptf-offcanvas-menu__header */}

        <MobileMenu />
      </div>
      {/* End sidebar menu */}
    </>
  );
};

export default HeaderAgency;
