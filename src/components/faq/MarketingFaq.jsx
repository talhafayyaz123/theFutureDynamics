import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FaqContent = [
  {
    title: "How can your marketing services benefit my business?",
    desc: `Our marketing services are designed to increase your brand visibility, drive traffic to your website, generate leads, boost sales, and enhance your online presence.`,
    expand: "a",
  },
  {
    title: "What sets your agency apart from other marketing companies?",
    desc: `Our agency stands out due to our team's expertise, creativity, and commitment to delivering results. We take a personalized approach to every client, offering customized solutions that suit your unique needs.
    `,
    expand: "b",
  },
  {
    title: "How do you determine the right marketing strategy for my business?",
    desc: `We start by conducting a thorough assessment of your business, industry, and competition.`,
    expand: "c",
  },
  {
    title: "Do you work with businesses of all sizes?",
    desc: `Yes, we work with businesses of all sizes, from startups and small businesses to large enterprises.
    `,
    expand: "d",
  },
  {
    title: " How do you measure the success of a marketing campaign?",
    desc: `We use a variety of key performance indicators (KPIs) and analytics tools to track the success of our campaigns. These may include website traffic, conversion rates, click-through rates, lead generation, and return on investment (ROI).
    .`,
    expand: "e",
  },
];

const MarketingFaq = () => {
  return (
    <>
      <dl className="ptf-accordion">
        <Accordion preExpanded={["a"]} allowZeroExpanded>
          {FaqContent.map((item, i) => (
            <AccordionItem key={i} uuid={item.expand}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <dt>{item.title}</dt>
                </AccordionItemButton>
              </AccordionItemHeading>
              {/* Accordion Heading */}
              <AccordionItemPanel>
                <dd>{item.desc}</dd>
              </AccordionItemPanel>
              {/* Accordion Body Content */}
            </AccordionItem>
          ))}
        </Accordion>
      </dl>
    </>
  );
};

export default MarketingFaq;
