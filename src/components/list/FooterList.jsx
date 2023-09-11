import React from "react";
import { Link } from "react-router-dom";

const footerItems = [
  { itemName: "Term & Conditions", link: "/terms" },
  { itemName: "Help", link: "/contact" },
  { itemName: "Work", link: "/work" },
  { itemName: " Our Story", link: "/about-us" },
];

const FooterList = () => {
  return (
    <ul>
      {footerItems.map((item, i) => (
        <li key={i}>
          <Link to={item.link}>{item.itemName}</Link>
        </li>
      ))}
        <li>
          <a
              href="https://medium.com/@futuredynamics2020"
              rel="noopener noreferrer"
              target="_blank"
            >
              Blog
            </a>
        </li>
    </ul>
  );
};

export default FooterList;
