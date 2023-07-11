import React from "react";
import { Link } from "react-router-dom";

const serviceContent = [
  {
    icon: "lnil lnil-cup",
    titlePart1: "Business",
    titlePart2: "Consulting",
    descriptions: `We provide business consultancy in UAE.`,
  },
  {
    icon: "lnil lnil-website-rank",
    titlePart1: "Virtual",
    titlePart2: "Reality",
    descriptions: `We provide trainings with Virtual Reality.`,
  },
  {
    icon: "lnil lnil-3d",
    titlePart1: "Marketing",
    titlePart2: "",
    descriptions: `We Provide Digital Content ,Search Engine Optimization,Performance Marketing.`,
  },
  {
    icon: "lnil lnil-website-rank",
    titlePart1: "Technology",
    titlePart2: "",
    descriptions: `We provide UI/UX,Website Development,Mobile App Development,Enterprise Solutions.`,
  },
];

const ServiceOne = () => {
  return (
    <>
      {serviceContent.map((val, i) => (
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="0"
          key={i}
        >
          {/* <!--Services Box--> */}
          <div className="ptf-service-box">
            <Link
              to="/service-details"
              className="ptf-service-box__link"
            ></Link>
            <div className="ptf-service-box__icon">
              <i className={val.icon}></i>
            </div>
            <h5 className="ptf-service-box__title">
              {val.titlePart1} <br />
              {val.titlePart2}
            </h5>
            <div className="ptf-service-box__content">
              <p>{val.descriptions}</p>
            </div>
            <div className="ptf-service-box__arrow">
              <i className="lnil lnil-chevron-right"></i>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ServiceOne;
