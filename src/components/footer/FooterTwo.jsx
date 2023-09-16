import React from "react";
import FooterList from "../list/FooterList";


const FooterTwo = () => {
  return (
    <div className="row">
      <div className="col-12 col-lg-7">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <div className="ptf-widget ptf-widget-contacts has-white-color">
            <ul>
              <li>
                <span>Address</span>
                <p>
                 1803 Metropolis Tower Business Bay Dubai
                <br></br>
                 Stembridge Road, SE20 London
                </p>
               
              </li>
              <li>
                <span>Phone</span>
                  <a href="tel:+971527684867">+971 52 768 4867</a>
              </li>

               <li>
               <span></span>
                  <a href="tel:+447444545152">+447 44 454 5152</a>
              </li>

              <li>
                <span>Email</span>
                <a href="mailto:mazhar@dynamicsstream.com">
                 mazhar@dynamicsstream.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* End .col */}

      <div className="col-12 col-lg-5">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          <div className="ptf-widget ptf-widget-links has-white-color">
            <FooterList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterTwo;