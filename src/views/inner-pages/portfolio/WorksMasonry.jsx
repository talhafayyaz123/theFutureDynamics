import React from "react";
import { Helmet } from "react-helmet";
import PortfolioSevenMasonry from "../../../components/portfolio/PortfolioSevenMasonry";
import CopyRightTwo from "../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../components/footer/FooterTwo";
import HeaderDefault from "../../../components/header/HeaderDefault";
import BrandTwo from "../../../components/brand/BrandTwo";
import { Link } from "react-router-dom";

const WorksMasonry = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--works-masonry">
      <Helmet>
        <title> Works/Portfolio</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />
        {/* End  HeaderHomeDefault */}

        <div className="main">
          <div className="ptf-page ptf-page--portfolio-masonry">
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>

              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-10">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading" style={{fontSize: '3.5rem'}}>
                      Dive into Our Portfolio, "Where Our Success Stories Shine Bright".
                      </h1>
                    </div>
                  </div>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "4.375rem" }}
                ></div>
              </div>
              {/* End .container-xxl */}
            </section>

            {/*=============================================
            Start Portfolio More
            ============================================== */}
            <section>
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <div
                    className="ptf-isotope-grid row"
                    style={{
                      "--bs-gutter-x": "4rem",
                      "--bs-gutter-y": "5.75rem",
                    }}
                  >
                    <PortfolioSevenMasonry />
                  </div>
                </div>
                {/* <!--Spacer--> */}
                <div className="text-center">
                  {/* <!--Animated Block--> */}
                  {/* <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <a className="ptf-load-more" href="#">
                      More
                    </a>
                  </div> */}
                </div>
              </div>

              {/* <!--Spacer--> */}

            </section>


   {/*=============================================
          Start Our Crew/Team section
          ============================================== */}
     <section>
              <div className="container">
                {/* <!--Divider--> */}
                <div
                  className="ptf-divider"
                  style={{
                    "--ptf-color": "var(--ptf-color-14)",
                    "--ptf-height": "1px",
                  }}
                ></div>
              </div>
            </section>
           <section>

              <div className="container">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1 large-heading has-secondary-font fw-normal">
                    Our Partners
                  </h2>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "7.5rem", "--ptf-md": "3.75rem" }}
                ></div>
                {/* <!--Clients List--> */}
                <BrandTwo />
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            <section>
              <div className="container">
                {/* <!--Divider--> */}
                <div
                  className="ptf-divider"
                  style={{
                    "--ptf-color": "var(--ptf-color-14)",
                    "--ptf-height": "1px",
                  }}
                ></div>
              </div>
            </section>
            {/* End section devider */}


            <section>
              {/* <!--Spacer--> */}

              <div className="container text-center">
                <div className="d-inline-flex text-start">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <div className="fz-30">Describe your project</div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "1.25rem" }}
                    ></div>
                    <div
                      className="
                        fz-130
                        fz-90--md
                        has-black-color has-secondary-font
                        fw-normal
                        lh-1p1
                      "
                    >
                      <Link className="ptf-filled-link" to="/contact">
                        Call The Future Dynamics
                      </Link>
                    </div>
                    <div className="fz-80 has-black-color">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        style={{ height: "1em" }}
                        viewBox="0 0 17 17"
                      >
                        <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            <section>
              <div className="container-xxl">
                {/* <!--Divider--> */}
                <div
                  className="ptf-divider"
                  style={{
                    "--ptf-color": "var(--ptf-color-14)",
                    "--ptf-height": "1px",
                  }}
                ></div>
              </div>
            </section>

          </div>
          {/* End .ptf-page */}
        </div>
      </div>
      {/* End .main */}

      {/* <!--Footer--> */}
     <footer className="ptf-footer ptf-footer--style-3">
              <div className="container">
                <div className="row">
                  <div className="col-xl-10 offset-xl-2">
                    <div className="ptf-footer__top">
                      <FooterTwo />
                    </div>
                    {/* End .ptf-footer__top */}

                    <div className="ptf-footer__bottom">
                      <CopyRightTwo />
                    </div>
                    {/* End .ptf-footer__bottom */}
                  </div>
                </div>
              </div>
            </footer>
    </div>
    // End .ptf-is--blog-grid
  );
};

export default WorksMasonry;
