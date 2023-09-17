import React from "react";

const skillContent = [
  { logo: "finance", title: "Financial Consulting", delayAnimation: "0" },
  { logo: "dubai-business", title: "  Expand Business in Dubai", delayAnimation: "100" },
  { logo: "london-business", title: "  Expand Business in London", delayAnimation: "200" },
  { logo: "strategic-planning", title: "Strategic Planning", delayAnimation: "300" },
  { logo: "register", title: "Registration", delayAnimation: "400" },
  { logo: "marketing", title: "Marketing", delayAnimation: "0" },
  { logo: "portfolio", title: "Portfolio Management", delayAnimation: "100" },
];

const FinanceSkills = () => {
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
              <h6 className="ptf-skill-box__title"  style={{textAlign: 'center',fontSize:'92%' }}>{item.title}</h6>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default FinanceSkills;
