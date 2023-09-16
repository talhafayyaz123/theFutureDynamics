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
        <title>Digital Content</title>
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
                    <h1 className="large-heading">Digital Content</h1>
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
                        src="/assets/img/services/digital-content.jpg"
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
                    We all must have heard this once in a life “Content Is King”.

            A well-thought-out marketing strategy is not sufficient alone, unless we ensure brand tone is really creating a connection between the brand and consumer/user. This is only possible when we create a content that is very relevant to the target audience. In this era of technology, we all are connected to our devices and with theFuture Dynamics, our data-driven equipped approach has us collecting signals from our audience after every action they perform on digital platforms. And that data actually supports us with what our audience want to see, when they want to see and how they want to see.

            Leveraging the combination of our technology, marketing, SEO, performance marketing experts at theFuture Dynamics, we design a thorough strategy whatever we do. Whether it’s content writing, digital films, product photography, promotional videos for campaigns, live broadcasting or streaming, corporate videos, brand videos or storytelling we make sure we do our best.

            Our in-house team of seasoned Director, DOP, Photography, Animation, Editors and Technical are always excited about what they do and deliver extraordinary content. That actually drives an incredible amount of traffic towards any campaign we run.

                    </p>
                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "4.375rem" }}
                  ></div>

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
