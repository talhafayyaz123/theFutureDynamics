import React from "react";

const skillContent = [
  { logo: "campaign", title: "Campaign Design", delayAnimation: "0" },
  { logo: "marketing", title: "Marketing", delayAnimation: "100" },
  { logo: "content", title: "Content Creation", delayAnimation: "200" },
  { logo: "analytics", title: "Analytics", delayAnimation: "300" },
  { logo: "creativity", title: "Creativity", delayAnimation: "400" },
  { logo: "automation", title: "Automation", delayAnimation: "0" },
  { logo: "thinking", title: "Strategic Thinking", delayAnimation: "0" },
];

const MarketingSkills = () => {
  return (
    <>
      {skillContent.map((item, i) => (
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay={item.delayAnimation}
          key={i}
        >
          {/* <!--Skill Box--> */}
          <div className="ptf-skill-box">
            <div className="ptf-skill-box__content">
              <div className="ptf-skill-box__image">
                <img
                  src={`/assets/img/root/skills/${item.logo}.png`}
                  alt="HTML/CSS"
                  loading="lazy"
                />
              </div>
              <h6 className="ptf-skill-box__title"  style={{textAlign: 'center' }}>{item.title}</h6>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default MarketingSkills;
