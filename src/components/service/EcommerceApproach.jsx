import React from "react";

const approachContent = [
  {
    title: "Understands your Objectives",
    descriptions: `Whether it's increased sales, market expansion, or brand visibility, 
    having clear goals is essential, we help you get there!.`,
    delayAnimation: "0",
  },
  {
    title: "Market Research",
    descriptions: `We Study your competitors' online stores to identify strengths and weaknesses. What can you do differently to stand out?
    `,
    delayAnimation: "100",
  },
  {
    title: "Choose the Right Platform",
    descriptions: `Select a reliable e-commerce platform that suits your business needs. We rather customized or use options include Shopify, WooCommerce, Magento, and BigCommerce`,
    delayAnimation: "200",
  },
  {
    title: "Website Design",
    descriptions: ` User-Centric Design: Create a user-friendly and visually appealing design that focuses on the user experience (UX). Ensure responsive design for mobile devices.`,
    delayAnimation: "300",
  },
];

const EcommerceApproach = () => {
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

export default EcommerceApproach;
