import React from "react";
import SocialTwo from "../../social/SocialTwo";
import { Link } from "react-router-dom";

const logo = "assets/img/root/logo-white-dynamics.png";

const CopyRightTwo = () => {
  return (
    <div className="row align-items-center">
      <div className="col-12 col-md-3">
             <Link className="ptf-navbar-logo" to="/">
                <img
                  src={logo}
                  alt=""
                  //style={{"height": "55px"}}
                  loading="lazy"
                />
                {/* <p style={{"padding-left": "30%",'position':'relative','bottom':'55px'}} >the Future <br/> DYNAMICS</p> */}
              </Link>
      </div>
      {/* End .col */}

      <div className="col-12 col-md-5">
        <p className="ptf-footer-copyright has-3-color">
          ©{new Date().getFullYear()}{" "}
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
      </div>
      {/* End .col */}

      <div className="col-12 col-lg">
        <div className="ptf-footer-socials has-white-color">
          <SocialTwo />
          {/* <!--Social Icon--> */}
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CopyRightTwo;
