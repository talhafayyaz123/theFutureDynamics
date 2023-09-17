import React from "react";

const skillContent = [
  { logo: "php", title: "PHP", delayAnimation: "0" },
  { logo: "angular", title: "Angular", delayAnimation: "100" },
  { logo: "ios", title: "IOS", delayAnimation: "200" },
  { logo: "android", title: "Android", delayAnimation: "300" },
  { logo: "flutter", title: "Flutter", delayAnimation: "400" },
  { logo: "figma", title: "Figma", delayAnimation: "0" },
  { logo: "ui-ux", title: "UI/Ux", delayAnimation: "100" },
];

const TechnologySkills = () => {
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
                <img style={{width:'92%'}}
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

export default TechnologySkills;
