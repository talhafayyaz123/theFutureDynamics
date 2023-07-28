import React from "react";
import { Helmet } from "react-helmet";
import HeaderDefault from "../../../components/header/HeaderDefault";
import CopyRightTwo from "../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../components/footer/FooterTwo";
import { Gallery, Item } from "react-photoswipe-gallery";

const imageList = [
  {
    img: "/assets/img/portfolio/single-work/bhuth-web.png",
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
        subTitle2: `Backend Development,`,
        subTitle3: "Quality Assurance,Maintenance",
      },
    ],
  },
  {
    caseContent: [
      {
        dealyAnimation: "300",
        title: "Technique Used",
        subTitle1: `Figma`,
        subTitle2: "PHP,",
        subTitle3: "Adobe",
      },
      {
        dealyAnimation: "400",
        title: "Industry",
        subTitle1: `Semi-Government Research Center - Dubai`,
        subTitle2: "",
        subTitle3: "",
      },
    ],
  },
];

const Bhuth = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--work-showcase-1">
      <Helmet>
        <title>Bhuth</title>
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
                        Bhuth
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
                        src="/assets/img/portfolio/single-work/bhuth.png"
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
                  b’huth is an independent public policy research Centre founded in Dubai, UAE in 2002, that focuses on International Affairs, Geo-strategic Affairs, Public Policy Studies and Public Opinion Research. We bring together experts in all these areas to work with us, to learn from one another and to foster creative thinking. Our scholars & Analysts develop practical policy recommendations and offer them to policymakers and stakeholders for political and social improvement as we strive to always bring forward 'actionable knowledge'. Quite often, b’huth is involved in implementing this recommendation.
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
                   being a research center, b’huth has a lot to share with their audience on a daily basis. Many articles, pulishings and research paers, they approached us to create a web solution that can absorb all such info on a daily basis, yet be very user-friendly so their user can read everything they publish on daily basis.
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
                   Building a website for a research center requires careful planning and consideration to ensure it effectively communicates the center's mission, showcases research activities, and provides valuable resources to visitors. We followed step-by-step journey to develop a website for b’huth.
                  </p><br></br>
                     <ul className="fz-18" style={{ lineHeight: 2 }}>
                    <li>
                    Define goals and target audience: Start by identifying the goals of the research center's website. Determine what you want to achieve through the website, whether it's promoting research initiatives, attracting collaborators, disseminating findings, or providing educational resources. Understand your target audience, including researchers, students, industry professionals, and the general public.
                    </li>
                    <li>
                     Conduct research and gather content: Research and collect all relevant information and content for the website.
                    </li>
                    <li>Plan the website structure and navigation: Create a clear and intuitive website structure to help visitors easily navigate and find the information they need. Consider organizing the content into sections such as About Us, Research Areas, Faculty/Staff, Publications, Events, Resources, and Contact. Develop a sitemap to visualize the structure and ensure logical navigation.</li>
                    <li>Design and branding: Develop a visual design that aligns with the research center's branding and creates a professional and engaging user experience. </li>
                    <li>Choose a content management system (CMS): We considered PHP a suitable CMS platform that allowed them  to easily manage and update the website's content. </li>
                    <li>Test and optimize: Thoroughly test the website's functionality, usability, and performance. Check for broken links, ensure proper display across different browsers and devices, and assess loading speed. Gather feedback from internal stakeholders and target audience members to identify any areas for improvement. </li>
                  </ul>
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

export default Bhuth;
