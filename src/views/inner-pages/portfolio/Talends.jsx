import React from "react";
import { Helmet } from "react-helmet";
import Social from "../../../components/social/Social";
import HeaderDefault from "../../../components/header/HeaderDefault";
import CopyRightTwo from "../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../components/footer/FooterTwo";
import { Gallery, Item } from "react-photoswipe-gallery";

const imageList = [
  {
    img: "/assets/img/portfolio/single-work/talends_panel.png",
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
        subTitle1: `AWS- DevOps,EC2 Instance,S3 Buckets,Route 53`,
        subTitle2: `Application Architecture,UI/UX,Graphics,Backend Development`,
        subTitle3: "Dashboards design,development ,Data Visualization Dashboards,Analytics",
      },
    ],
  },
  {
    caseContent: [
      {
        dealyAnimation: "300",
        title: "Technique Used",
        subTitle1: `PHP Laravel framework,Microsoft Dynamics 365,`,
        subTitle2: "HubSpot Integrations,",
        subTitle3: "Google Analytics",
      },
      {
        dealyAnimation: "400",
        title: "Industry",
        subTitle1: `Freelance & Agencies Marketplace - worldwide`,
        subTitle2: "",
        subTitle3: "",
      },
    ],
  },
];

const Talends = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--work-showcase-1">
      <Helmet>
        <title>Talends</title>
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
                       Talends.com
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
                        src="/assets/img/portfolio/single-work/talends_portfolio.png"
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
                  MENA's Premium Marketplace Provides Hand-Picked Remote Talent & Pre-vetted Agencies. Cost-Effective & Fastest Way To Deliver Your Projects. One of its kind, developed for individuals and agencies that are very talented and at the same time are tired of unjustified and unfair competition in other freelance marketplaces. Present agencies and individuals profiles to local businesses in GCC region.
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
                  Develop a Freelance Marketplace, itself comes with a huge responsibility of functional and technical workload. We are a technology partners with Talends.com but this time the challenging part was Manage the DevOps.
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
                  Talends.com is a Freelance Marketplace that is very near to us as a project because of its knd and the Future Dynamics shares major responsibility being technology partners with Talends, moreover it gives us the opportunity to pay back to the society. Alongside with its excitement, comes the huge responsibility as this project consist of many critical development.
                  </p><br></br>
                    <p>The whole project consists Application architecture, UI/UX, graphic designs, development of 5 major dashboard, Admin Dashboard, Employer Dashboard, Freelance Dashboard, Interns Dashboards, Agencies Dashboard. The most challenging part was DevOps.</p><br></br>
                    <p>We recommended AWS Cloud, and implemented the complete setup of AWS DevOps, managed EC2 Instance, S3 Buckets, Route 53. Implementing DevOps practices on the Amazon Web Services (AWS) platform streamline software development and deployment processes, increase collaboration, and improve overall efficiency. Here are some steps we carried forward to implement DevOps AWS:</p>

                    <span>1-Infrastructure as Code (IaC):</span>
                     <ul className="fz-18">
                    <li>
                 AWS CloudFormation or AWS CDK (Cloud Development Kit) to define and manage infrastructure as code.
                    </li>
                    </ul>

                    <span>2-Continuous Integration and Continuous Deployment (CI/CD):</span>
                     <ul className="fz-18">
                    <li>
                 Continuous Integration and Continuous Deployment (CI/CD):</li>
                    </ul>

                <span>3-Configuration Management:</span>
                     <ul className="fz-18">
                    <li>
                 Use AWS Systems Manager to manage and automate the configuration of EC2 instances and other AWS resources.
                    </li>
                    <li>
                  Leverage AWS Systems Manager Parameter Store or AWS Secrets Manager to securely store and manage configuration variables and secrets.</li>
                    </ul>

                    <span>4-Continuous Monitoring and Logging:</span>
                     <ul className="fz-18">
                    <li>
                Set up monitoring and logging using AWS CloudWatch.
                    </li>
                    </ul>

                    <span>5-Infrastructure Automation and Orchestration:</span>
                     <ul className="fz-18">
                    <li>
               Implement AWS CloudFormation StackSets or AWS Elastic Beanstalk to automate the provisioning and management of infrastructure across multiple AWS accounts or environments.
                    </li>

                    </ul>


                <span>6-Containerization and Orchestration:</span>
                     <ul className="fz-18">
                    <li>
                Utilize Amazon Elastic Container Service (ECS) or Amazon Elastic Kubernetes Service (EKS) for container orchestration.
                    </li>
                    </ul>


            <span>7-Security and Compliance:</span>
                     <ul className="fz-18">
                    <li>
               Follow AWS security best practices and implement measures like Identity and Access Management (IAM), AWS Key Management Service (KMS), and AWS Security Hub.
                    </li>
                    </ul>


             <span>8-Scalability and High Availability:</span>
                     <ul className="fz-18">
                    <li>
              Leverage AWS auto-scaling capabilities to automatically adjust the capacity of your applications based on demand.
                    </li>
                    <li>
               Use AWS Elastic Load Balancer (ELB) or AWS Application Load Balancer (ALB) to distribute traffic and ensure high availability.
                 </li>

                    </ul>


             <span>9-Gather Requirements and Data:</span>
                     <ul className="fz-18">
                    <li>
              Identify the data sources and gather the necessary data for visualization.
                    </li>
                    <li>
               Determine the data formats and data integration requirements.
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

export default Talends;
