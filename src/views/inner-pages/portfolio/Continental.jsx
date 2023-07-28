import React from "react";
import { Helmet } from "react-helmet";
import HeaderDefault from "../../../components/header/HeaderDefault";
import CopyRightTwo from "../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../components/footer/FooterTwo";
import { Gallery, Item } from "react-photoswipe-gallery";

const imageList = [
  {
    img: "/assets/img/portfolio/single-work/continnental_web_portfolio.png",
    column: "col-lg-12",
    alt: "image 3",
    width: "600",
    height: "400",
  },
];

const caseStudyContent = [
  {
    caseContent: [
      {
        dealyAnimation: "100",
        title: "Platform",
        subTitle1: "Responsive",
        subTitle2: "Desktop Website",
        subTitle3: "",
      },
      {
        dealyAnimation: "200",
        title: "SERVICES",
        subTitle1: `Application Architecture,User Interface/ User Experience,`,
        subTitle2: `Backend Development,Search Engine Development -SEO`,
        subTitle3: "Quality Assurance,Google Analytics Integration",
      },
    ],
  },
  {
    caseContent: [
      {
        dealyAnimation: "300",
        title: "Technique Used",
        subTitle1: `Figma`,
        subTitle2: "Angular js,",
        subTitle3: "Adobe,Bootstrap",
      },
      {
        dealyAnimation: "400",
        title: "Industry",
        subTitle1: `Retail - Continental tires Web Portal - Middle East`,
        subTitle2: "",
        subTitle3: "",
      },
    ],
  },
];

const Continental = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--work-showcase-1">
      <Helmet>
        <title>Continental</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />
        {/* End  HeaderHomeDefault */}

        <div className="main">
          <article className="ptf-page ptf-page--single-work-1">
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container-xxl">
                <div className="row">
                  <div className="col-xl-6">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h1 className="large-heading">
                        Continental Middle East
                      </h1>
                      {/* <!--Spacer--> */}

                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{
                        "--ptf-lg": "4.375rem",
                        "--ptf-md": "2.1875rem",
                      }}
                    ></div>
                  </div>
                  {/* End .col */}
                    {caseStudyContent.map((val, i) => (
                        <div className="col-xl-3" key={i}>
                        {/* <!--Spacer--> */}
                        <div className="ptf-spacer" style={{ "--ptf-xxl": "1.25rem" }}></div>
                        {/* <!--Animated Block--> */}
                        {val.caseContent.map((item, i) => (
                            <div key={i}>
                            <div
                                className="ptf-animated-block mb-70"
                                data-aos="fade"
                                data-aos-delay={item.dealyAnimation}
                            >
                                <h5 className="fz-14 text-uppercase has-3-color fw-normal">
                                {item.title}
                                </h5>
                                {/* <!--Spacer--> */}
                                <div
                                className="ptf-spacer"
                                style={{ "--ptf-xxl": "1.25rem" }}
                                ></div>
                                <p className="fz-20 lh-1p5 has-black-color">
                                {item.subTitle1} <br />
                                {item.subTitle2} <br />
                                {item.subTitle3}
                                </p>
                            </div>
                            {/* <!--Spacer--> */}
                            <div
                                className="ptf-spacer"
                                style={{
                                "--ptf-xxl": " 4.375rem",
                                "--ptf-md": "2.1875rem",
                                }}
                            ></div>
                            </div>
                        ))}
                        </div>
                    ))}
                </div>
              </div>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.25rem", "--ptf-md": "1rem" }}
              ></div>
            </section>

            <section>
              <div className="container-xxl">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  {/* <!--Simple Image--> */}
                      <img
                        src="/assets/img/portfolio/single-work/dealer_locator.png"
                        alt="work"
                        loading="lazy"
                      />


                </div>
              </div>
            </section>

            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "3.125rem" }}
              ></div>

              <div className="container">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <p className=" has-black-color" style={{fontSize:"1.6rem"}}>
                  A leading global manufacturer of innovative and high-performance tires. With a rich heritage spanning over a century, we are committed to delivering cutting-edge tire solutions that provide safety, comfort, and performance for drivers worldwide.
                  </p>
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "4.375rem", "--ptf-md": "2.1875rem" }}
                ></div>

                {/* <!--Divider--> */}
                <div
                  className="ptf-divider"
                  style={{
                    "--ptf-height": "1px",
                    "--ptf-color": "var(--ptf-color-14)",
                  }}
                ></div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2>Project</h2>
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "1.5625rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <p className="fz-18">
                Continental has thousands of registered resellers in Middle East, and it was very challenging for any end-user to find the authorized resellers from their website and the showcase right product according to car rim size, on their website.
                  </p>
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "1.5625rem" }}
                ></div>


                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2>Solution</h2>
                </div>

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "1.5625rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <p className="fz-18">
                 We studies the entire Tire industry in Middle East, understood the buyers purchasing behaviours and preferences while  choosing tire company. The more convenience you show to end-users while choosing a tire will help them to make a decision, we developed a complete search engine that created a lot of ease for users to find out the best possible and suitable tire as per their needs, they just have to share the car model, rim size and Search brings best suitable options from range of products.
                  </p>
                <p>Web Portal development for such organization involves comprehensive and user-friendly UI/UX and quick and better information to its customers on a click of a button, hence our team made sure all the parameters are met. Here’s a process we followed:</p>
                    <br></br>
                    <p>1- Define goals and target audience</p>
                    <p>2- Planning & Requirement Gathering</p>
                    <p>3- User Experience (UX) design</p>
                    <p>4- Highly effective & fast processing back-end development</p>
                    <p>5- Content Management CMS</p>
                    <p>6- Integrations & APIs</p>
                    <p>7- Quality Assurance</p>
                </div>




                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  {/* <!--Gallery--> */}
                  <Gallery>
                <div
                    className="ptf-justified-gallery row"
                    style={{
                    "--bs-gutter-x": "2rem",
                    "--bs-gutter-y": "2rem",
                    }}
                  >
                    {imageList.map((val, i) => (
                    <div className={val.column} key={i}>
                        <div className="ptf-gallery__item">
                        
                            <Item
                            original={val.img}
                            thumbnail={val.img}
                            width={val.width}
                            height={val.height}
                            >
                            {({ ref, open }) => (
                                <img
                                src={val.img}
                                alt="works gallery"
                                role="button"
                                ref={ref}
                                onClick={open}
                                />
                            )}
                            </Item>

                        </div>
                    </div>
                    ))}
                </div>
                </Gallery>
                </div>
              </div>
            </section>
                     <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                ></div>
          </article>
          {/* End .ptf-page */}
        </div>
      </div>
      {/* End .main */}

      {/* <!--Footer--> */}
       <footer className="ptf-footer ptf-footer--style-3">
              <div className="container">
                <div className="row">
                  <div className="col-xl-10 offset-xl-2">
                    <div className="ptf-footer__top">
                      <FooterTwo />
                    </div>
                    {/* End .ptf-footer__top */}

                    <div className="ptf-footer__bottom">
                      <CopyRightTwo />
                    </div>
                    {/* End .ptf-footer__bottom */}
                  </div>
                </div>
              </div>
            </footer>
    </div>
    // End .ptf-is--blog-grid
  );
};

export default Continental;
