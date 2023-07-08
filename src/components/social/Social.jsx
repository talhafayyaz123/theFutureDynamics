import React from "react";

const SocialShare = [
  {
    iconName: "socicon-linkedin",
    link: "https://www.linkedin.com/company/the-future-dynamics",
  },
  {
    iconName: "socicon-youtube",
    link: "https://www.youtube.com/channel/UCRYG9NsTDnGETvb7y2hw5JA/",
  } ,
   {
    iconName: "socicon-instagram",
    link: "https://www.instagram.com/digitalfuturedynamics/?igshid=OGQ5ZDc2ODk2ZA==",
  },
];
const Social = () => {
  return (
    <div className="ptf-offcanvas-menu__socials">
      {/* <!--Social Icon--> */}
      {SocialShare.map((icon, i) => (
        <a
          className={`ptf-social-icon ptf-social-icon--style-3  ${icon.iconClass}`}
          href={icon.link}
          target="_blank"
          rel="noopener noreferrer"
          key={i}
        >
          <i className={icon.iconName}></i>
        </a>
      ))}
    </div>
  );
};

export default Social;
