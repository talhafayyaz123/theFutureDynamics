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
    title: " How much does website cost?",
    desc: `Alienum phaedrum torquatos nec eu, detr periculis ex, nihil expe ndismei. Meian
    pericula euripidis hinc partem eiest. Eos ei nisl graecis, vixisester aperiri con sequat an. Eius lorem.
    2- How about payment?
    3- How long support that i get?
    4- If i not satify with your service, can i get a refund?
    5- Do you provide NDA Agreement?
    `,
    expand: "a",
  },
  {
    title: "What does a business consultant do?",
    desc: `We provide expert advice and solutions to help businesses overcome challenges, improve operations, strategic guidance, market insights, and problem-solving expertise.`,
    expand: "b",
  },
  {
    title: "What types of businesses can benefit from consulting services?",
    desc: `Whether you're a startup looking for guidance or an established company seeking to optimize operations, a business consultant can add value.
    `,
    expand: "c",
  },
  {
    title: " What specific areas do you specialize in?",
    desc: `We specialize in strategic planning, market research, financial analysis, marketing strategy, operations improvement, and organizational development. Our services are tailored to meet your unique needs.
    `,
    expand: "d",
  },
  {
    title: " How do you approach a consulting project?",
    desc: `We then develop a customized strategy, implement solutions, and provide ongoing support and monitoring to ensure success.`,
    expand: "e",
  },
];

const BusinessConsultingFaq = () => {
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

export default BusinessConsultingFaq;
