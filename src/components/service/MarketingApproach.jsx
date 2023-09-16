import React from "react";

const approachContent = [
  {
    title: "Market Research",
    descriptions: `We conducting thorough market research to understand customer behavior, market trends, strategy, analytics and competitors. This information informs marketing strategies and tactics.`,
    delayAnimation: "0",
  },
  {
    title: "Content Creation",
    descriptions: ` Writing and creating engaging and relevant content is essential for digital marketing. This includes blog posts, social media updates, email campaigns, and more.`,
    delayAnimation: "100",
  },
  {
    title: "Marketing",
    descriptions: `We understands principles and practices helps to improve your website's visibility in search engine, driving organic traffic.`,
    delayAnimation: "200",
  },
  {
    title: "ROI",
    descriptions: `We believe in designing and running only Return On Investment`,
    delayAnimation: "300",
  },
];

const MarketingApproach = () => {
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

export default MarketingApproach;
