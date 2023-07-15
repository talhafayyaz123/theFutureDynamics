import React from "react";
import { Link } from "react-router-dom";

const serviceContent = [
  {
    delayAnimation: "0",
    title: "Technology",
    serviceList: [
      "Data Analytics - Power BI",
      "Mobile App Development",
      "Website Development",
      "SEO - Search Engine Optimization",
      "DevOps - AWS/ Azure ",
      "Security & Functionality Testing/ Quality Assurance",
    ],
  },
  {
    delayAnimation: "100",
    title: "Design",
    serviceList: [
      "UI - User Interface",
      "UX - User Experience ",
      "Graphic Design",
      "Digital Content Creation",
    ],
  },
  {
    delayAnimation: "200",
    title: "Business Growth",
    serviceList: [
      "Digital Transformation Roadmapping",
      "Technology Resource Augmentation",
    ],
  },
];

const ServiceTwo = () => {
  return (
    <>
      {serviceContent.map((item, i) => (
        <div className="col-12 col-md-6 col-lg-4" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={item.delayAnimation}
          >
            <h6 className="fz-16 text-uppercase has-3-color fw-normal">
              {item.title}
            </h6>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "2.8125rem" }}
            ></div>
            {/* <!--Services List--> */}
            <ul className="ptf-services-list ptf-services-list--style-2">
              {item.serviceList.map((val, i) => (
                <li key={i}>
                  <Link to="/service-details" style={{fontSize:25}}>{val}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceTwo;
