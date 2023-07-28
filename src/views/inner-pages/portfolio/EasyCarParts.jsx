import React from "react";
import { Helmet } from "react-helmet";
import HeaderDefault from "../../../components/header/HeaderDefault";
import CopyRightTwo from "../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../components/footer/FooterTwo";
import { Gallery, Item } from "react-photoswipe-gallery";


const caseStudyContent = [
  {
    caseContent: [
      {
        dealyAnimation: "100",
        title: "Platform",
        subTitle1: "Desktop Application",
        subTitle2: "",
        subTitle3: "",
      },
      {
        dealyAnimation: "200",
        title: "SERVICES",
        subTitle1: `Application Architecture,Hosting Management`,
        subTitle2: `UI/UX,Backend Development,Online Store`,
        subTitle3: "eCommerce Development",
      },
    ],
  },
  {
    caseContent: [
      {
        dealyAnimation: "300",
        title: "Technique Used",
        subTitle1: `PHP,`,
        subTitle2: "Figma,",
        subTitle3: "Google Analytics",
      },
      {
        dealyAnimation: "400",
        title: "Industry",
        subTitle1: "Online Store - Autoparts",
        subTitle2: "",
        subTitle3: "",
      },
    ],
  },
];

const EasyCarParts = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--work-showcase-1">
      <Helmet>
        <title>Easy Car Parts</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />
        {/* End  HeaderHomeDefault */}

        <div className="main">
          <article className="ptf-page ptf-page--single-work-1">
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-6">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading">
                       Easy Car Parts
                      </h1>
                      {/* <!--Spacer--> */}

                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{
                        "--ptf-lg": "4.375rem",
                        "--ptf-md": "2.1875rem",
                      }}
                    ></div>
                  </div>
                  {/* End .col */}
                    {caseStudyContent.map((val, i) => (
                        <div className="col-xl-3" key={i}>
                        {/* <!--Spacer--> */}
                        <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
                        {/* <!--Animated Block--> */}
                        {val.caseContent.map((item, i) => (
                            <div key={i}>
                            <div
                                className="ptf-animated-block mb-70"
                                data-aos="fade"
                                data-aos-delay={item.dealyAnimation}
                            >
                                <h5 className="fz-14 text-uppercase has-3-color fw-normal">
                                {item.title}
                                </h5>
                                {/* <!--Spacer--> */}
                                <div
                                className="ptf-spacer"
                                style={{ "--ptf-xxl": "1.25rem" }}
                                ></div>
                                <p className="fz-20 lh-1p5 has-black-color">
                                {item.subTitle1} <br />
                                {item.subTitle2} <br />
                                {item.subTitle3}
                                </p>
                            </div>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                style={{
                                "--ptf-xxl": " 4.375rem",
                                "--ptf-md": "2.1875rem",
                                }}
                            ></div>
                            </div>
                        ))}
                        </div>
                    ))}
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.25rem", "--ptf-md": "1rem" }}
              ></div>
            </section>

            <section>
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  {/* <!--Simple Image--> */}
                  
                      <img
                        src="/assets/img/portfolio/single-work/eCommerce.png"
                        alt="work"
                        loading="lazy"
                      />


                </div>
              </div>
            </section>

            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "3.125rem" }}
              ></div>

              <div className="container">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <p className="has-black-color" style={{fontSize:"1.6rem"}}>
                 EASY CAR PARTS is a Online store for all your car needs.
                  </p>

                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "4.375rem", "--ptf-md": "2.1875rem" }}
                ></div>

                {/* <!--Divider--> */}
                <div
                  className="ptf-divider"
                  style={{
                    "--ptf-height": "1px",
                    "--ptf-color": "var(--ptf-color-14)",
                  }}
                ></div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2>Project</h2>
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "1.5625rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <p className="fz-18">
                 Client wanted to develop an eCommerce/ Online store for his business. Main challenge was to deliver this project within 1 week.
                  </p>
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "1.5625rem" }}
                ></div>


                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2>Solution</h2>
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "1.5625rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <p className="fz-18">
                 We decided to go with Shopify, a trusted platform to start your online store. Implementing an online store using Shopify involved several steps to set up, customize, and launch clients e-commerce. Here's an overview of the process we followed:
                  </p><br></br>

                    <span>1-Set Up a Store for easy car parts:</span>
                     <ul className="fz-18">
                    <li>
                  Customize  store's appearance by uploading own custom design.
                    </li>
                    <li>
                   Configured essential settings such as currency, payment gateways, shipping options, taxes, and legal policies.
                    </li>
                    </ul>

                    <span>2-Add Products:</span>

                  <ul className="fz-18">
                    <li>
                  Added and manage  products like title, description, images, variants, pricing, and inventory information.
                    </li>
                    <li>
                  Organized products into collections or categories to help customers navigate your store.
                    </li>
                    </ul>

                <span>3-Extend Functionality with Apps:</span>
                     <ul className="fz-18">
                    <li>
                Installed apps to add additional functionality to store such as marketing, customer support, inventory management, analytics, or integrations with other platforms.
                    </li>
                    </ul>

                    <span>4-Set Up Payment Gateway and Shipping:</span>
                     <ul className="fz-18">
                    <li>
                Configured & Integrated payment gateways to accept customer payments securely.
                    </li>
                <li>
              Set up shipping options and rates based on business requirements.
                    </li>
                    </ul>

                    <span>5-Launched Store:</span>
                     <ul className="fz-18">
                    <li>
               Configured domain settings
                    </li>
                    <li>
            Set up SSL encryption to secure customer data during transactions.
                    </li>
                <li>
            Enabled search engine optimization (SEO) settings to improve store's visibility in search results.
                    </li>
                    </ul>


            <span>7-Ongoing Maintenance and Support:</span>
                     <ul className="fz-18">
                    <li>
               Regularly updates product inventory, prices, and promotions.
                    </li>
                <li>
               Monitor store performance, track sales analytics, and identify areas for improvement.
                    </li>
                <li>
              Stay updated with Shopify updates and new features to leverage the platform's capabilities effectively.
                    </li>
                    </ul>

              </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >

                </div>
              </div>
            </section>
                     <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                ></div>
          </article>
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

export default EasyCarParts;
