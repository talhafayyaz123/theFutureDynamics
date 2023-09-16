import React from "react";

const approachContent = [
  {
    title: "Initial Assessment",
    descriptions: ` We begin with an in-depth assessment of your business, including its current state, challenges, and opportunities. `,
    delayAnimation: "0",
  },
  {
    title: "Customized Strategy",
    descriptions: `Our strategy outlines the specific steps, tactics, and timelines required to meet your goals. It serves as the roadmap for our engagement.
    `,
    delayAnimation: "100",
  },
  {
    title: " Implementation",
    descriptions: ` Our team of experienced consultants works collaboratively with your organization to implement the strategies and solutions outlined in the customized plan.  `,
    delayAnimation: "200",
  },
  {
    title: "Measurable Results",
    descriptions: ` Our ultimate goal is to deliver measurable results. We provide regular reports and performance metrics to demonstrate the impact of our consulting services. 

    .`,
    delayAnimation: "300",
  },
];

const BusinessConsultingApproach = () => {
  return (
    <ul className="ptf-process-steps">
      {approachContent.map((val, i) => (
        <li
          className="ptf-process-item"
          data-aos="fade"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          <h6 className="ptf-process-item__title">{val.title}</h6>
          <p className="ptf-process-item__text">{val.descriptions}</p>
        </li>
      ))}
    </ul>
  );
};

export default BusinessConsultingApproach;
