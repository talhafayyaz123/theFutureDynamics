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
    title: " How much time & cost involved?",
    desc: `We've customized and plug & play solutions, if you want to sell your product or services online or 
    want to create a marketplace. We charge very reasonable amounts, and cost is completely dependent on 
    your chosen solution.`,
    expand: "a",
  },
  {
    title: "Do you do Payment integration?",
    desc: `Yes, we do all kind of third-party integrations, that helps your business operations, 
    financials etc.`,
    expand: "b",
  },
  {
    title: "How you keep my Online store payment information secure?",
    desc: `We run complete Quality assurance checks before going live.`,
    expand: "c",
  },
  {
    title: "Do I will be able to manage my store myself?",
    desc: `Yes, our easy-to-use CMS make sure you manage your store yourself, weather it's stock, sales, 
    order or tracking your orders.`,
    expand: "d",
  },
  {
    title: "Do you provide after sales service?",
    desc: `Yes, we provide our customers with Annual Maintenance, 
    so they can focus on their business & leave this to us as tech partners.`,
    expand: "e",
  },
];

const Faq = () => {
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

export default Faq;
