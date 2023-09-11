import React from "react";
import { Link } from "react-router-dom";



const serviceContent = [
  { icon: "lnil-cup",  link:'/service/performance-marketing',val:'performance-marketing', name: "Performance Marketing" },
  { icon: "lnil-website-rank",link:'/service/seo', val:'seo',name: "Search Engine Optimization" },
  { icon: "lnil-3d", link:'/service/digital-content',val:'digital-content',name: "Digital Content" },
];

const MarketingServiceList = () => {  
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

export default MarketingServiceList;
