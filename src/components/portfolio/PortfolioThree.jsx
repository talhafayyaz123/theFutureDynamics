import React from "react";
import { Link } from "react-router-dom";

const portfolioContent = [
 { img: "work-1", meta: "Web Design", title: "Mid Star" ,to:'/work/mid-star' },
      { img: "work-3", meta: "Web Design, Branding", title: "NG20" ,to:'/work/n2go'},
      { img: "work-5", meta: "Web Design", title: "Bhuth" ,to:'/work/bhuth'},
      { img: "work-4", meta: "Illustration", title: "American Hospital" ,to:'/work/hospital'},
      { img: "work-2", meta: "Branding, Motion", title: "Continental" ,to:'/work/continental'},
      { img: "work-6", meta: "Branding, Motion", title: "Talabat" ,to:'/work/talabat' },
     ];

const PortfolioThree = () => {
  return (
    <>
      {portfolioContent.map((val, i) => (
        <div className="col-lg-6" key={i}>
          <div className=" grid-item filter-1 filter-4 filter-7">
            {/* <!--Portfolio Item--> */}
            <article className="ptf-work ptf-work--style-6">
              <div className="ptf-work__media">
                <img
                  src={`assets/img/home/studio/${val.img}.png`}
                  alt={val.title}
                  loading="lazy"
                />
              </div>
              <Link className="ptf-work__meta" to={val.to}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  style={{ height: "1em" }}
                  viewBox="0 0 17 17"
                >
                  <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
                </svg>
                <div className="ptf-work__category">{val.categorie}</div>
                <h4 className="ptf-work__title">{val.title}</h4>
              </Link>
            </article>
          </div>
        </div>
      ))}
    </>
  );
};

export default PortfolioThree;
