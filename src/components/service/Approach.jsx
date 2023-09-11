import React from "react";

const approachContent = [
  {
    subTitle: "ONE",
    title: "Research",
    descriptions: `Our User-Centric & Data-Driven start approach starts right at the beginning of our processes, to design or develop solutions for our prestigious clients. It lays solid foundation for informed decision-making and ensures that your project is well-planned and on the right track.`,
    delayAnimation: "0",
  },

  {
    subTitle: "TWO",
    title: "Concept",
    descriptions: `Our team makes sure to have a well-defined concept that serves as the North Star for the project. It provides a clear and concise vision of what we aim to achieve. This clarity ensures that all team members and stakeholders are working toward a common goal.`,
    delayAnimation: "100",
  },
  {
    subTitle: "THREE",
    title: "Strategy",
    descriptions: `Our strategist makes sure a roadmap towards achieving clarity of purpose, informed decision-making, resource optimizations, risk mitigations, adaptation to change, measurable results & finally Scalability.`,
    delayAnimation: "200",
  },
  {
    subTitle: "FOUR",
    title: "Development",
    descriptions: `Our Agile development approach is grounded in a structured and comprehensive process designed to deliver outstanding results.
    Meanwhile we keep a margin for client immediate asked updates & changes.`,
    delayAnimation: "300",
  },
  {
    subTitle: "FIVE",
    title: "Test",
    descriptions: `Our Functional, security and QA team makes sure the reliability, functionality, and user-friendliness of your web or app. It not only minimizes the risk of technical issues but also contributes to success.`,
    delayAnimation: "400",
  },
  {
    subTitle: "SIX",
    title: "Support",
    descriptions: `Our commitment to your company extends far beyond project delivery. We understand that ongoing support is essential to ensure the continued success and optimal performance of your web or app after we hand over your project.`,
    delayAnimation: "500",
  },
];

const Approach = () => {
  return (
    <div
      className="row"
      style={{
        "--bs-gutter-x": "3.75rem",
        "--bs-gutter-y": "7.5rem",
      }}
    >
      {approachContent.map((val, i) => (
        <div className="col-xl-4 col-lg-6" key={i}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay={val.delayAnimation}
          >
            {/* <!--Approach Box--> */}
            <div
              className="ptf-approach-box"
              style={{
                "--ptf-title-color": "var(--ptf-color-white)",
              }}
            >
              <div className="ptf-approach-box__subtitle">{val.subTitle}</div>
              <h3 className="ptf-approach-box__title h1">{val.title}</h3>
              <div className="ptf-approach-box__content">
                <p>{val.descriptions}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Approach;
