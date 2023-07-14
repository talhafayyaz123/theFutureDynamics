import React from "react";
import { Helmet } from "react-helmet";
import Social from "../../../components/social/Social";
import HeaderDefault from "../../../components/header/HeaderDefault";
import CopyRightTwo from "../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../components/footer/FooterTwo";
import { Gallery, Item } from "react-photoswipe-gallery";

const imageList = [
  {
    img: "assets/img/portfolio/single-work/data_visualization.png",
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
        subTitle1: "Desktop Application",
        subTitle2: "",
        subTitle3: "",
      },
      {
        dealyAnimation: "200",
        title: "SERVICES",
        subTitle1: `Data Dashboards,`,
        subTitle2: `Data Visualization Dashboards,Power BI`,
        subTitle3: "Analytics",
      },
    ],
  },
  {
    caseContent: [
      {
        dealyAnimation: "300",
        title: "Technique Used",
        subTitle1: `.NET`,
        subTitle2: "Microsoft Dynamics 365,",
        subTitle3: "",
      },
      {
        dealyAnimation: "400",
        title: "Industry",
        subTitle1: `Online Food Delivery - Data Visualization - Middle East`,
        subTitle2: "",
        subTitle3: "",
      },
    ],
  },
];

const Talabat = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--work-showcase-1">
      <Helmet>
        <title>Talabat</title>
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
                       Talabat
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
                        src="assets/img/portfolio/single-work/power_bi.png"
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
                  Talabat is an online food ordering company founded in Kuwait in 2004. As of April 2021, Talabat operates in Kuwait, Saudi Arabia, Bahrain, the United Arab Emirates, Oman, Qatar, Jordan, Egypt, and Iraq.In August 2021, Talabat was selected as the official food delivery provider for Expo Kitchen, and their pavilion would display technological innovations for food delivery, such the cloud kitchen concept, whilst representing multiple food brands. In September 2021, Talabat partnered with Terminus Group, who is also an official premier partner for Expo 2020, to launch ten autonomous, last-mile food-delivery robots for Expo visitors.
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
                  Talabat is an online food ordering company founded in Kuwait in 2004. As of April 2021, Talabat operates in Kuwait, Saudi Arabia, Bahrain, the United Arab Emirates, Oman, Qatar, Jordan, Egypt, and Iraq. In August 2021, Talabat was selected as the official food delivery provider for Expo Kitchen, and their pavilion would display technological innovations for food delivery, such the cloud kitchen concept, whilst representing multiple food brands. In September 2021, Talabat partnered with Terminus Group, who is also an official premier partner for Expo 2020, to launch ten autonomous, last-mile food-delivery robots for Expo visitors.
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
                  Dynamics Stream is Microsoft Gold Partners and we being their sister company always has a leverage to serve our customers best. Power BI is a very amazing platform offered by Microsoft to visualize the data in such a way that any critical decision can be made on spot after having a look on dashboards.
                  </p><br></br>
                <p>With help of Data visualization dashboards we made sure that our client can foresee things that really matters to grow their business. Data visualization dashboards play a vital role in presenting complex data in a visually appealing and easily understandable format. Here's an overview of the development process for creating a data visualization dashboard:</p>
                    <p>1-Define Objectives and Scope:</p>
                     <ul className="fz-18">
                    <li>
                  Determine the purpose and goals of the dashboard.
                    </li>
                    <li>
                   Identify the target audience and their specific data visualization needs.
                    </li>
                    <li>Define the scope of the dashboard, including the types of data to be visualized and the key metrics to be displayed.</li>
                    </ul>

                    <span>2-Gather Requirements and Data:</span>
                     <ul className="fz-18">
                    <li>
                 Identify the data sources and gather the necessary data for visualization.
                    </li>
                    <li>
                   Determine the data formats and data integration requirements.
                    </li>
                    <li>Collaborate with stakeholders to understand their specific visualization requirements and desired insights.</li>
                    </ul>

                <span>3-Design the Dashboard Layout:</span>
                     <ul className="fz-18">
                    <li>
                 Plan the layout and organization of the dashboard components.
                    </li>
                    <li>
                  Identify the key visualizations, such as charts, graphs, tables, and maps, that will effectively represent the data.
                    </li>
                    <li>Consider the user experience and ensure the dashboard is intuitive and user-friendly.</li>
                    </ul>

                    <span>4-Select a Technology Stack:</span>
                     <ul className="fz-18">
                    <li>
                Choose appropriate data visualization tools and frameworks based on the project requirements and we choose Power BI & Custom dashboard development in .NET
                    </li>
                    </ul>

                    <span>5-Develop Data Integration and Processing:</span>
                     <ul className="fz-18">
                    <li>
                Prepare and preprocess the data to be visualized, ensuring it is accurate and properly structured.
                    </li>
                    <li>
               Create data pipelines to extract, transform, and load data from various sources into the visualization framework.
                    </li>
                <li>
              Implement data aggregation, filtering, and transformation as needed to provide meaningful insights.
                    </li>
                    </ul>


                <span>6-Implement Visualizations:</span>
                     <ul className="fz-18">
                    <li>
                Develop interactive visualizations based on the chosen technology stack and design principles.
                    </li>
                    <li>
               Utilize appropriate chart types, graphs, and maps to effectively represent the data.
                    </li>
                <li>
              Apply best practices for data visualization, such as choosing appropri.
                    </li>
                <li>
              Utilize appropriate chart types, graphs, and maps to effectively represent the data.
                    </li>
                    <li>
              Apply best practices for data visualization, such as choosing appropriate colors, labels, and data scales.
                    </li>
                <li>
                Ensure the visualizations are responsive, allowing users to interact and explore the data.
                    </li>
                    </ul>


            <span>7-Integrate Interactivity and User Controls:</span>
                     <ul className="fz-18">
                    <li>
               Implement user controls, filters, and parameters to allow users to customize and drill down into the data.
                    </li>
                    <li>
               Enable interactive features such as tooltips, drill-through capabilities, and linked visualizations.
                    </li>
                <li>
             Incorporate features for exporting or sharing visualizations and data.
                    </li>
                    </ul>


             <span>8-Test and Refine:</span>
                     <ul className="fz-18">
                    <li>
               Conduct thorough testing of the dashboard's functionality, performance, and responsiveness.
                    </li>
                    <li>
                Validate the accuracy of the data displayed in the visualizations.
                 </li>
                <li>
              Gather feedback from users and stakeholders to identify areas for improvement and refine the visualizations.
                    </li>
                    </ul>


             <span>8-Deploy and Maintain:</span>
                     <ul className="fz-18">
                    <li>
               Deploy the dashboard to the desired hosting environment, whether it's on-premises or cloud-based.
                    </li>
                    <li>
                Ensure the security and access control measures are in place to protect sensitive data.
                 </li>
                <li>
            Monitor the dashboard's performance and user engagement, making regular updates and improvements as needed.
                    </li>
                    </ul>

                    <span>9-Provide User Training and Support:</span>
                     <ul className="fz-18">
                    <li>
                we Offered training sessions or documentation to help users navigate and utilize the dashboard effectively.

                    </li>
                    <li>
                Provide ongoing support to address any user queries or technical issues that may arise.

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

export default Talabat;
