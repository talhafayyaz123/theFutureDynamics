import React from "react";

const approachContent = [
  {
    title: "Clear Objectives",
    descriptions: `What problem are you trying to solve, and what are the desired outcomes? Setting specific goals provides a clear direction for the project.
    `,
    delayAnimation: "0",
  },
  {
    title: "Data-driven & Customer-centric",
    descriptions: `In our all projects, we use customer-first approach and make it more solid with help of data-driven set of approaches.

    `,
    delayAnimation: "100",
  },
  {
    title: "Technology Selection",
    descriptions: `Choose the right technology stack, tools, and platforms based on project requirements and objectives. Consider scalability, security, and compatibility with existing systems.
    `,
    delayAnimation: "200",
  },
  {
    title: "Agile Methodology",
    descriptions: `Agile allows for flexibility, iterative development, and continuous feedback, which is especially valuable in technology projects.
    `,
    delayAnimation: "300",
  },
];

const TechnologyApproach = () => {
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

export default TechnologyApproach;
