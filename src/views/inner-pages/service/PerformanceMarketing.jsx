import React, { useState } from "react";
import { Helmet } from "react-helmet";
import MarketingServiceList from "../../../components/list/MarketingServiceList";
import MarketingFaq from "../../../components/faq/MarketingFaq";
import Skills from "../../../components/skill/Skills";
import MarketingApproach from "../../../components/service/MarketingApproach";
import CounterThree from "../../../components/counter/CounterThree";
import CopyRightTwo from "../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../components/footer/FooterTwo";
import HeaderDefault from "../../../components/header/HeaderDefault";
import HubspotForm from "react-hubspot-form";

const ServiceDetails = () => {
  const [showSuccess, setState] = useState(false);
  const [showForm, setFormState] = useState(true);
  const toggleFormVisibility = () => setFormState(!showForm);


  return (
    <div>
      <Helmet>
        <title>Performance Marketing</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderDefault />
      {/* End Header */}

      <div className="ptf-main">
        <div className="ptf-page ptf-page--service-detail">
          <section>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
            <div className="container-xxl">
              <div className="row">
                <div className="col-xl-9">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h1 className="large-heading">Performance Marketing</h1>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2.5rem" }}
                    ></div>

                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                  ></div>
                </div>
                <div className="col-lg-12">
                  {/* <!--Animated Block--> */}
                  <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">

                    <div className="ptf-simple-image">
                      <img
                        src="/assets/img/services/performance-marketing.jpg"
                        alt="service"
                        role="button"
                      />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Top Portion */}

          <section>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
            ></div>
            <div className="container-xxl">
              <div className="row">
                <div className="col-xl-8">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <p className="fz-18">
                      Leveraging our data-driven approach as a firm, and being partners with many data platform including Google, Facebook, local telco’s, Microsoft and HubSpot to name a few. Our Google Blackbelt and regionally google awarded professionals make sure that every single penny of your performance marketing budget generates a revenue and adds value to your business by using the complete google console, including; display & video 360, search ads 360, analytics, analytics 360, data studio, optimize 360, surveys 360, tag manager 360.

                      We ensure our performance marketing campaigns are well designed and executed across all relevant platforms including; google ads, search, display or retargeting to measure everything from brand reach to conversion rate, down to a single ad. We at theFuture DYNAMICS also fulfill the exact requirements of the campaign, whether it’s for brand awareness, lead generation campaign, or ROI (return on investment) driven campaigns. Our custom build dashboard gives an end-to-end overview of the campaign and reports. Those reports can be utilized in your future business forecasting or budget. In theFuture DYNAMICS we always appreciate forward thinking with number backups, and this approach and data-driven marketing provides valuable insight into performance, and also helps optimizing campaigns according to the best CPA (cost per acquisition).

                      With the help of our platforms that are purpose built with a brand-centric approach, made reporting more transparent, and assist us and the client to think beyond branding, to build marketing strategies with proven ROI. Our performance marketing campaigns fulfill the need to decrease cost per acquisition and to increase ROI, meanwhile brand is only charged when a specific action is completed, rather than for impressions or clicks.

                      Performance marketing is best suited for any business from startups to mid & large Enterprises, including b2b, b2c, ecommerce online shop, retail, service and many more.

                    </p>
                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "4.375rem" }}
                  ></div>

                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h3>Google Ads Myths</h3>

                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "1.875rem" }}
                    ></div>
                    <p className="fz-18">
                      We always keep in mind “Serenity of our customers” in whatever we do.
                      We love sharing our expertise and knowledge with our clients to such an extent, where they enjoy being part of what we do. Most importantly, how positively that impacts their businesses.
                    </p>
                  </div>

                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "3.125rem" }}
                  ></div>
                  <div
                    className="row"
                    style={{
                      "--bs-gutter-x": "3.75rem",
                      "--bs-gutter-y": "7.5rem",
                    }}
                  >
                    <CounterThree />
                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "6.875rem" }}
                  ></div>
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h3>Our Skills</h3>
                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "3.75rem" }}
                  ></div>
                  <div className="ptf-skill-box-grid">
                    <Skills />
                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "6.875rem" }}
                  ></div>
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h3>Our Approach</h3>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "1.875rem" }}
                    ></div>
                    <p className="fz-18">
                      Encouraging the use of natural systems and processes in
                      design allows for exposure to nature, and in turn, these
                      design approaches improve health and wellbeing.
                    </p>
                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "5.625rem" }}
                  ></div>
                  {/* <!--Process Steps--> */}
                  <MarketingApproach />
                </div>
                <div className="col-xl-4">
                  <div className="ptf-sidebar ptf-sidebar--right">
                    {/* <!--Widget--> */}
                    <div className="ptf-widget ptf-widget-services-list">
                      {/* <!--Animated Block--> */}
                      <div
                        className="ptf-animated-block"
                        data-aos="fade"
                        data-aos-delay="0"
                      >
                        <h4 className="ptf-widget-title">Services List</h4>
                        <MarketingServiceList />
                      </div>
                    </div>
                    {/* <!--Widget--> */}
                    <div className="ptf-widget ptf-widget-faq">
                      {/* <!--Animated Block--> */}
                      <div
                        className="ptf-animated-block"
                        data-aos="fade"
                        data-aos-delay="0"
                      >
                        <h4 className="ptf-widget-title">FAQs</h4>
                        <MarketingFaq />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="custom-section__container">
                  <div className="row" style={{ width: "100%" }}>
                    <div className="col-12">
                      <div className="copy-grid__item" style={{ width: "100%", display: 'flex', 'justifyContent': 'center' }}>
                        <div className="center-align-content">
                          <button
                            onClick={toggleFormVisibility}
                            className="ptf-btn ptf-btn--secondary"
                          >
                            Ready to turn your idea into reality


                            <span style={{ marginLeft: 10 }}>
                              {showForm ? (
                                <i className="fa fa-chevron-up" />
                              ) : (
                                <i className="fa fa-chevron-down" />
                              )}
                            </span>
                          </button>



                        </div>
                      </div>
                    </div>
                  </div><br></br>
                  <div className="row">
                    {showSuccess && (
                      <div className="col-12">
                        <div className="alert alert-success" role="alert">
                          Your request has been received successfully, our team will
                          contact you shortly.
                        </div>
                      </div>
                    )}
                    {showForm && !showSuccess && (
                      <div className="col-12">
                        <HubspotForm
                          portalId="7083262"
                          formId="ff6b0e3a-39e5-4b30-abe8-79d977349fa9"
                          onSubmit={() => { }}
                          onReady={() => { }}
                          onFormSubmitted={() => {
                            setState(true);
                            setTimeout(() => {
                              setState(false);
                            }, 3000);
                          }}
                          loading={<div>Loading...</div>}
                        />
                      </div>
                    )}
                  </div>
                </div>

              </div>
            </div>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
            ></div>
          </section>
          {/* End .main content with sidebar */}
        </div>
        {/* End .ptf-page */}
      </div>
      {/* End ptf-main */}

      {/*=============================================
        Start Footer
        ============================================== */}
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
  );
};

export default ServiceDetails;
