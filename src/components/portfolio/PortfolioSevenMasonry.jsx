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
      { img: "work-1", meta: "Web Design", title: "Supro Online Store" ,to:'/mid-star' },
      { img: "work-3", meta: "Web Design, Branding", title: "FG Print Brand" ,to:'/n2go'},
      { img: "work-5", meta: "Web Design", title: "Taskly Dashboard" ,to:'/bhuth'},
      { img: "work-4", meta: "Illustration", title: "LW Poster" ,to:'/hospital'},
      { img: "work-2", meta: "Branding, Motion", title: "Film & Art Festival" ,to:'/continental'},
      { img: "work-6", meta: "Branding, Motion", title: "Dark Wishky Wine" ,to:'/talabat' },
    ],
  },
  {
    tabContent: [
      { img: "work-3", meta: "Illustration", title: "LW Poster" ,to:'/hospital' },
      { img: "work-6", meta: "Branding, Motion", title: "Film & Art Festival"  ,to:'/continental'},
      { img: "work-5", meta: "Branding, Motion", title: "Dark Wishky Wine"  ,to:'/talabat' },
    ],
  },
  {
    tabContent: [
      { img: "work-1", meta: "Web Design", title: "Supro Online Store" ,to:'/mid-star'},
      { img: "work-2", meta: "Web Design, Branding", title: "FG Print Brand" ,to:'/n2go' },
      { img: "work-4", meta: "Web Design", title: "Taskly Dashboard" ,to:'/bhuth' },
    ],
  },
  {
    tabContent: [
      { img: "work-4", meta: "Web Design", title: "Taskly Dashboard" ,to:'/bhuth'},
      { img: "work-3", meta: "Illustration", title: "LW Poster" ,to:'/hospital'},
      { img: "work-6", meta: "Branding, Motion", title: "Film & Art Festival" ,to:'/continental'},
    ],
  },
  {
    tabContent: [
      { img: "work-1", meta: "Web Design", title: "Supro Online Store" ,to:'/mid-star'},
      { img: "work-2", meta: "Web Design, Branding", title: "FG Print Brand" ,to:'/n2go'},
      { img: "work-4", meta: "Web Design", title: "Taskly Dashboard" ,to:'/bhuth' },
    ],
  },
  {
    tabContent: [
      { img: "work-2", meta: "Web Design, Branding", title: "FG Print Brand" ,to:'/n2go'},
      { img: "work-4", meta: "Web Design", title: "Taskly Dashboard" ,to:'/bhuth'},
      { img: "work-1", meta: "Web Design", title: "Supro Online Store" ,to:'/mid-star'},
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
