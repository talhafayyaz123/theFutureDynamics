import React from "react";
const iconList = [
  { delayAnimation: "0", icon: "partner1" },
  { delayAnimation: "100", icon: "partner2" },
  { delayAnimation: "200", icon: "partner3" },
  { delayAnimation: "400", icon: "partner5" },
  { delayAnimation: "300", icon: "partner4" },

];

const BrandTwo = () => {
  return (
    <ul
      className="
          ptf-clients-list
          ptf-clients-list--start
          ptf-clients-list--style-1
        "
      data-columns="5"
    >
      {iconList.map((val, i) => (
        <li
          className="ptf-clients-list__item"
          data-aos="fade"
          data-aos-delay={val.delayAnimation}
          key={i}
        >
          <img
            src={`assets/img/root/clients/${val.icon}.png`}
            alt="brand logo"
            loading="lazy"
          />
        </li>
      ))}
    </ul>
  );
};

export default BrandTwo;