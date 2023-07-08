import React from "react";
import SocialTwo from "../../social/SocialTwo";

const CopyRightThree = () => {
  return (
    <div className="row align-items-center">
      <div className="col-12 col-md">
        <p className="ptf-footer-copyright has-black-color">
         ©{new Date().getFullYear()}{" "}
          <span>
            {" "}
            <a
              href="https://thefuturedynamics.com"
              rel="noopener noreferrer"
              target="_blank"
            >
               |
            </a>
          </span>
           A Brand Of Dynamics Stream - Microsoft Gold Partners
        </p>
      </div>
      {/* End .col */}

      <div className="col-12 col-md d-none d-xl-block"></div>
      {/* End .col */}

      <div className="col-12 col-lg">
        <div className="ptf-footer-socials has-black-color">
          {/* <!--Social Icon--> */}
          <SocialTwo />
        </div>
      </div>
      {/* End .col */}
    </div>
  );
};

export default CopyRightThree;
