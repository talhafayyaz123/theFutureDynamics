import React from "react";
import { Helmet } from "react-helmet";
import HeaderDefault from "../../../components/header/HeaderDefault";
import CopyRightTwo from "../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../components/footer/FooterTwo";
import { Gallery, Item } from "react-photoswipe-gallery";

const imageList = [
  {
    img: "/assets/img/portfolio/single-work/N2Go-App-Protfolio.png",
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
        subTitle1: "iOS & Android",
        subTitle2: "",
        subTitle3: "",
      },
      {
        dealyAnimation: "200",
        title: "SERVICES",
        subTitle1: `Application Architecture,User Interface/ User Experience,`,
        subTitle2: "Backend Development,Quality Assurance,",
        subTitle3: "Security & Functional Testing",
      },
    ],
  },
  {
    caseContent: [
      {
        dealyAnimation: "300",
        title: "Technique Used",
        subTitle1: `UIKit`,
        subTitle2: "Core Graphics,",
        subTitle3: "Native,Flutter",
      },
      {
        dealyAnimation: "400",
        title: "Industry",
        subTitle1: `Online, eCommerce & Retail - DIFC Dubai- Mobile App Design & Development`,
        subTitle2: "",
        subTitle3: "",
      },
    ],
  },
];
const N2go = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--work-showcase-1">
      <Helmet>
        <title>N2GO</title>
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
                       N2GO
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
                        src="/assets/img/portfolio/single-work/N2GO.png"
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
                  <p className="has-black-color" style={{fontSize:"1.6rem"}}>
                 Midstar is industry’s recognized leader in the agricultural industry by having a significant impact on the food and feed supply through innovative trade and logistics solutions.realized through synchronized and innovative solutions to supply chain management.
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
                  N2GO is a Successful Salon based in Dubai, they approached us to transform their organization on digital platforms and we offered then to grow their business with a Booking App where people schedule  relaxing time & tailored Makeup, Facial, Nails, Hair, and other parlor services at their home, with a click of a button.
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
                  The project aimed to develop an online salon services booking application for both Android and iOS platforms, providing users with a convenient way to book appointments at salons. The development team consisted of many members: UI/UX, Designers, Android developer & proficient iOS developer. They collaborated closely throughout the project to ensure a seamless experience across both platforms.
                    The project began with a comprehensive analysis of the salon industry and user preferences. The team conducted market research, studied existing salon booking apps, and gathered feedback from salon owners and customers. This research formed the basis for creating a unique and user-friendly app concept.<br></br>
                    Alex focused on developing the Android version of the app, using Java and Kotlin within the Android Studio IDE. Simultaneously worked on the iOS version, utilizing Swift in the Xcode IDE, adhering to Apple's design guidelines and human interface principles. They maintained consistent communication to align the user experience and design elements across both platforms.<br></br>
                    The development process involved creating a robust backend system to manage salon profiles, services, and appointment scheduling. We integrated APIs for location-based services, secure payment processing, and real-time availability updates.
                    The app featured a visually appealing interface, intuitive navigation, and personalized user profiles. Users could browse salon listings, view service menus, check availability, and book appointments at their preferred salons. Push notifications were implemented to send reminders and updates to both users and salon owners.<br></br>
                    Extensive testing was conducted to ensure the app's stability, responsiveness, and compatibility with different devices and operating system versions. The project encompassed market research, backend development, API integration, testing, user feedback incorporation, and successful deployment on the app stores, resulting in a convenient and efficient solution for users seeking salon services.
                  </p>

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

export default N2go;
