import React, { useState } from "react";
import { Helmet } from "react-helmet";
import MarketingServiceList from "../../../components/list/MarketingServiceList";
import MarketingFaq from "../../../components/faq/MarketingFaq";
import MarketingSkills from "../../../components/skill/MarketingSkills";
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
        <title>Search Engine Optimization</title>
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
                    <h1 className="large-heading">SEO</h1>
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
                        src="/assets/img/services/seo.jpg"
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
                    First step to start your business is to invest in a quality website design and development and a professionally done SEO (search engine optimization).

              Business can’t just continue without having a legacy of reaching out their right audience continuously with organic ways.

              Google receives over 63,000 searches per second on any given day, which translates into at least 5.6 billion searches per day and 228 million searches per hour. Bringing your website on top of the chart will surely have huge impact on your business.

              Search engine optimization (SEO) uses specific keywords to help to boost the number of people that visit your website. This helps it to rank higher in major search engine results pages or SERP. Our in-house technology and SEO techniques make sure that your website appears on top of the SERP whenever a potential customer types in a particular keyword, ideally the one related to your business products or services.

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
                    <h3>Not Your Standard Seo</h3>

                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "1.875rem" }}
                    ></div>
                    <p className="fz-18">
                    We don’t do meaningless SEO; we’ve taken the mystery out of SEO with simple strategies driven by facts and proven methods.

                    We do in-depth research on your competition in terms of visibility coverage and keywords. And based on that we do thorough website analysis with our in-house technology experts and make sure website meets important SEO standards in the first place. Google crawling is the name of the game, so we make sure when it does crawl, our on-page optimization is completely as per google standards. Google rewards efficient websites with high rankings.

                    Off-page is an equally important factor and most websites off-page links really suck. We say goodbye to spam links building and use cleanest approach towards off-page optimization. Our link building method always keeps a track of our links and removes broken links with relevant and authoritative domains. Meanwhile our link building process makes sure that anchor text portfolio is optimized based on our keyword research and generates meaningful outcomes.
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
                    <MarketingSkills />
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
