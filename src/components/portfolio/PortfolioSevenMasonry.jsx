import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
  default: 2,
  1100: 2,
  768: 2,
  500: 1,
};

const portfolioMenu = [
  "All",
  "Branding",
  "Packaging",
  "Illustration",
  "Motion",
  "Animation",
];

const portfolioContent = [
  {
    tabContent: [
      { img: "work-1", meta: "Web Design", title: "Mid Star" ,to:'/work/mid-star' },
      { img: "work-3", meta: "Web Design, Branding", title: "NG20" ,to:'/work/n2go'},
      { img: "work-5", meta: "Web Design", title: "Bhuth" ,to:'/work/bhuth'},
      { img: "work-4", meta: "Illustration", title: "American Hospital" ,to:'/work/hospital'},
      { img: "work-2", meta: "Branding, Motion", title: "Continental" ,to:'/work/continental'},
      { img: "work-6", meta: "Branding, Motion", title: "Talabat" ,to:'/work/talabat' },
      { img: "talends", meta: "Branding, Motion", title: "Talends" ,to:'/work/talends' },
      { img: "iBnk.io", meta: "Branding, Motion", title: "iBnk.io" ,to:'/work/ibnk' },
      { img: "ewt", meta: "Branding, Motion", title: "EWT" ,to:'/work/ewt' },
      { img: "easyCar", meta: "Branding, Motion", title: "Easy Car Parts" ,to:'/work/easy-car-parts' },
      { img: "frame", meta: "Illustration", title: "Christy Dawn" ,to:'/work/frame' },
    ],
  },
  {
    tabContent: [
      { img: "work-4", meta: "Illustration", title: "American Hospital" ,to:'/work/hospital'},
      { img: "work-2", meta: "Branding, Motion", title: "Continental" ,to:'/work/continental'},
      { img: "work-6", meta: "Branding, Motion", title: "Talabat" ,to:'/work/talabat' },
    ],
  },
  {
    tabContent: [
      { img: "work-1", meta: "Web Design", title: "Mid Star" ,to:'/work/mid-star' },
      { img: "work-3", meta: "Web Design, Branding", title: "NG20" ,to:'/work/n2go'},
      { img: "work-5", meta: "Web Design", title: "Bhuth" ,to:'/work/bhuth'},
    ],
  },
  {
    tabContent: [
      { img: "work-5", meta: "Web Design", title: "Bhuth" ,to:'/work/bhuth'},
      { img: "work-4", meta: "Illustration", title: "American Hospital" ,to:'/work/hospital'},
      { img: "work-2", meta: "Branding, Motion", title: "Continental" ,to:'/work/continental'},
    ],
  },
  {
    tabContent: [
      { img: "work-1", meta: "Web Design", title: "Mid Star" ,to:'/work/mid-star' },
      { img: "work-3", meta: "Web Design, Branding", title: "NG20" ,to:'/work/n2go'},
      { img: "work-5", meta: "Web Design", title: "Bhuth" ,to:'/work/bhuth'},,
    ],
  },
  {
    tabContent: [
      { img: "work-3", meta: "Web Design, Branding", title: "NG20" ,to:'/work/n2go'},
      { img: "work-4", meta: "Web Design", title: "Bhuth" ,to:'/work/bhuth'},
      { img: "work-1", meta: "Web Design", title: "Mid Star" ,to:'/work/mid-star' },
    ],
  },
];

const PortfolioSevenMasonry = () => {
  return (
    <>
      <Tabs>
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <TabList className="ptf-filters ptf-filters--style-1">
            {portfolioMenu.map((item, i) => (
              <Tab className="filter-item " key={i}>
                {item}
              </Tab>
            ))}
          </TabList>
        </div>

        {/* <!--Spacer--> */}
        <div
          className="ptf-spacer"
          style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
        ></div>

        {portfolioContent.map((item, i) => (
          <TabPanel key={i}>
            {/* {/* <!--Animated Block--> */}
            <div
              className="ptf-animated-block"
              data-aos="fade"
              data-aos-delay="0"
            >
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid ptf-isotope-grid portfolio-isotope"
                columnClassName="my-masonry-grid_column"
              >
                {item.tabContent.map((singleItem, i) => (

                  <article className="ptf-work ptf-work--style-1" key={i}>
                    <div className="ptf-work__media">
                      <Link
                        className="ptf-work__link"
                        to={singleItem.to}
                      ></Link>
                      <img
                        src={`assets/img/portfolio/masonry/${singleItem.img}.png`}
                        alt=""
                        loading="lazy"
                      />
                    </div>
                    <div className="ptf-work__meta">
                      <div className="ptf-work__category">
                        {singleItem.meta}
                      </div>
                      <h4 className="ptf-work__title">
                        <Link to={singleItem.to}>{singleItem.title}</Link>
                      </h4>
                    </div>
                  </article>
                ))}
                {/* End .col */}
              </Masonry>
            </div>

            {/* End portfolio */}
          </TabPanel>
        ))}
      </Tabs>
    </>
  );
};

export default PortfolioSevenMasonry;
