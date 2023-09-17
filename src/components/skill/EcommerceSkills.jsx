import React from "react";

const skillContent = [
  { logo: "store", title: "Custom Store", delayAnimation: "0" },
  { logo: "magento", title: "Magento", delayAnimation: "100" },
  { logo: "woocommerce", title: "Woocommerce", delayAnimation: "200" },
  { logo: "image-3", title: "Shopify", delayAnimation: "300" },
  { logo: "design", title: "Design", delayAnimation: "400" },
  { logo: "image-6", title: "Figma", delayAnimation: "0" },
];

const EcommerceSkills = () => {
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

export default EcommerceSkills;
