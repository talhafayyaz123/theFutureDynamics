import React from "react";
import { Link } from "react-router-dom";

const serviceContent = [
  { icon: "lnil-cup",link:'/service/mobile-app-development', val:'mobile-pop-development', name: "Mobile App Development" },
  { icon: "lnil-website-rank", link:'/service/website-development',val:'website-development',name: "Website Development" },
  { icon: "lnil-3d",link:'/service/enterprise-solutions', val:'enterprise-solutions',name: "Enterprise Solutions" },
  { icon: "lnil-video-camera-alt-1",link:'/service/ui-ux',val:'ui-ux' ,name: "UI/UX" },
];

const TechnologyServiceList = () => {

  let url=window.location.pathname.split("/").pop();

  
  return (
    <>
      <ul>
        {serviceContent.map((val, i) => (
          <li key={i}>
            <Link to={`${val.link}`}>
              <i className={`lnil ${val.icon}`}></i> {val.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TechnologyServiceList;
