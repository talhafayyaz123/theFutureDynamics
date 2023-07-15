import React from "react";
import { Helmet } from "react-helmet";
import Social from "../../../components/social/Social";
import HeaderDefault from "../../../components/header/HeaderDefault";
import CopyRightTwo from "../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../components/footer/FooterTwo";
import { Gallery, Item } from "react-photoswipe-gallery";

const imageList = [
  {
    img: "/assets/img/portfolio/single-work/ewt.png",
    column: "col-lg-12",
    alt: "image 3",
    width: "600",
    height: "400",
  },
];


const caseStudyContent = [
  {
    caseContent: [
      {
        dealyAnimation: "100",
        title: "Platform",
        subTitle1: "Digital Transformation,Digital success Roadmapping",
        subTitle2: "Web Portal Design",
        subTitle3: "Desktop Application",
      },
      {
        dealyAnimation: "200",
        title: "SERVICES",
        subTitle1: `Application Architecture,Hosting Management`,
        subTitle2: `UI/UX,Graphics,Backend Development`,
        subTitle3: "Dashboards design & development",
      },
    ],
  },
  {
    caseContent: [
      {
        dealyAnimation: "300",
        title: "Technique Used",
        subTitle1: `PHP,Figma,Google Analytics`,
        subTitle2: "HubSpot Integrations,",
        subTitle3: "Wordpress",
      },
      {
        dealyAnimation: "400",
        title: "Industry",
        subTitle1: "E-Learning Platform - Education ",
        subTitle2: "",
        subTitle3: "",
      },
    ],
  },
];

const Ewt = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--work-showcase-1">
      <Helmet>
        <title>Ewt</title>
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
                       Ewt
                      </h1>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "4rem", "--ptf-md": "2.5rem" }}
                      ></div>
                      <Social />
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
                  <div className="ptf-simple-image">
                      <img
                        src="/assets/img/portfolio/single-work/perfect_mob_app.png"
                        alt="work"
                        loading="lazy"
                      />

                  </div>
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
                  <p className="fz-30 has-black-color">
                  Expertise Windows Training (EWTraining) provides tailored Training and development solutions which address specific gaps in many areas of soft skills, leadership, finance, banking, human resources, selling skills, retail and insurance and much more
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
                 Client was doing an amazing Training business but complete business strategy was based on offline business model. Client wanted to transform their organization digitally and needed assistance.
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
                 Digital transformation refers to the integration of digital technologies and practices into various aspects of an organization to drive significant improvements in efficiency, customer experience, and business outcomes. Here's a high-level overview of the processes of digital transformation that we implemented:
                  </p><br></br>

                    <span>1-Vision and Strategy:</span>
                     <ul className="fz-18">
                    <li>
                Defined the digital transformation vision and its alignment with the overall business strategy.
                    </li>
                    <li>
                   Defined the digital transformation vision and its alignment with the overall business strategy.
                    </li>
                    </ul>

                    <span>2-Assessment and Gap Analysis:</span>

                <span>3-Technology Infrastructure::</span>
                     <ul className="fz-18">
                    <li>
                Assess the existing technology infrastructure and identify areas that need upgrading or modernization.
                    </li>
                    <li>
                  Determine the need for cloud computing, cybersecurity, data storage, and scalability solutions.
                    </li>
                    <li>Establish a roadmap for implementing new technologies and integrating them into existing systems.</li>
                    </ul>

                    <span>4-Data and Analytics:</span>
                     <ul className="fz-18">
                    <li>
                Developed a data strategy that encompasses data collection, storage, governance, and analytics.
                    </li>
                <li>
                Identify sources of valuable data and establish mechanisms for data capture and integration.
                    </li>
                <li>
               Implemented Power BI for Data visualization.
                    </li>
                    </ul>

                    <span>5-Customer Experience Enhancement:</span>
                     <ul className="fz-18">
                    <li>
               Identified customer touch-points and develop a customer-centric approach to digital transformation.
                    </li>
                    <li>
              Leveraged digital channels to enhance customer engagement, personalization, and self-service capabilities.
                    </li>
                <li>
             Implemented customer relationship management (Microsoft Dynamics 365 CRM) systems and improve customer data management.
                    </li>
                    </ul>


                <span>6-Process Optimization::</span>


            <span>7-Talent Development:</span>
                     <ul className="fz-18">
                    <li>
               Trained employees to upscale the workforce.
                    </li>
                    </ul>


             <span>8-Continuous Improvement and Evaluation:</span>
                     <ul className="fz-18">
                    <li>
              Monitored and measure the impact of digital transformation initiatives against predefined KPIs.
                    </li>
                    <li>
                Continuously evaluated the effectiveness of implemented technologies, processes, and strategies.
                 </li>
                <li>
            Iterate and refine the transformation approach based on feedback and evolving business needs.
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
                  {/* <!--Gallery--> */}
                  <Gallery>
                <div
                    className="ptf-justified-gallery row"
                    style={{
                    "--bs-gutter-x": "2rem",
                    "--bs-gutter-y": "2rem",
                    }}
                  >
                    {imageList.map((val, i) => (
                    <div className={val.column} key={i}>
                        <div className="ptf-gallery__item">
                        <div className="ptf-simple-image">
                            <Item
                            original={val.img}
                            thumbnail={val.img}
                            width={val.width}
                            height={val.height}
                            >
                            {({ ref, open }) => (
                                <img
                                src={val.img}
                                alt="works gallery"
                                role="button"
                                ref={ref}
                                onClick={open}
                                />
                            )}
                            </Item>
                        </div>
                        </div>
                    </div>
                    ))}
                </div>
                </Gallery>
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

export default Ewt;
