import React, { useState } from "react";
import { Helmet } from "react-helmet";
import MarketingServiceList from "../../../components/list/MarketingServiceList";
import Faq from "../../../components/faq/ECommerceFaq";
import EcommerceSkills from "../../../components/skill/EcommerceSkills";
import EcommerceApproach from "../../../components/service/EcommerceApproach";
import EcommerceCounter from "../../../components/counter/EcommerceCounter";
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
        <title>E-Commerce</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderDefault />
      {/* End Header */}

      <div className="ptf-main">
        <div className="ptf-page ptf-page--service-detail">
          <section style={{backgroundColor: 'rgb(249, 112, 0)'}}>
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
                    <h1 className="large-heading" style={{color:'white'}}>E-Commerce</h1>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2.5rem" }}
                    ></div>
                    <p className="fz-18" style={{color:'white'}}>
                    Grow, manage, B2B & B2C commerce with our platform
                    </p>
                  
                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
                  ></div>
                </div>
                {/* <div className="col-lg-12">
                 
                  <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">

                    <div className="ptf-simple-image">
                      <img
                        src="/assets/img/services/digital-content.jpg"
                        alt="service"
                        role="button"
                      />

                    </div>
                  </div>
                </div> */}
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
                    <h3>
                    E-COMMERCE

                    </h3>
                  </div><br></br>
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <p className="fz-18">
                   
                 Do you run a business that’s doing well and you’re wondering how to expand your business locally or on a global scale? If you’re in any kind of retail or are thinking of it, or if that’s where your clients are, there’s never a better time to gain a better understanding of what it takes to sustain an e-commerce business.

                 Many businesses have achieved success with help of e-commerce within very short time period that would’ve taken them years to reach that level without e-commerce. Having an e-commerce always keeps you ahead with many benefits.
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
                    <h3>Advantages</h3>
                 
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "1.875rem" }}
                    ></div>
                    <h3 className="fz-18">
                    FULL-FEATURED CATALOGS & CARTS
                    </h3>
                    <p>Enjoy an unlimited number of products, categories and custom attributes. A fully customizable catalog that lets you sell anything from digital to multi-SKU variant products. Manage stock levels and product-level shipping options.</p>

                    <h3 className="fz-18">
                    SHIPPING TOOLS TO FIT YOUR BUSINESS
                    </h3>
                    <p>Use our enterprise shipping tool to create custom shipping companies and offer localized shipping rates based on country, region, state, city, or zip code location.</p>


                    <h3 className="fz-18">
                    SOPHISTICATED DISCOUNT AND CART RULES
                    </h3>
                    <p>Set promotional pricing and discounts for specific stores, categories, customer groups, or products.</p>

                    <h3 className="fz-18">
                    POWERFUL SEARCH OPTIONS
                    </h3>
                    <p>Robust search options such as drop-down predictive and faceted search, make it easy to find what you need fast.</p>

                   <h3 className="fz-18">
                   MANAGE YOUR ENTIRE INVENTORY
                    </h3>
                    <p>Track stock counts and automatically stop selling products when inventory runs out. Integrate with your ERP system.</p>



                    <h3 className="fz-18">
                    ALL SEO BASICS, AND THEN SOME
                    </h3>
                    <p>From customizable URLs to canonical tagging to image optimization. Everything you need to create SEO-friendly eCommerce sites..</p>
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
                    <EcommerceCounter />
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
                    <EcommerceSkills />
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
                  <EcommerceApproach />
                </div>
                <div className="col-xl-4">
                  <div className="ptf-sidebar ptf-sidebar--right">
                   
                    <div className="ptf-widget ptf-widget-faq">
                      {/* <!--Animated Block--> */}
                      <div
                        className="ptf-animated-block"
                        data-aos="fade"
                        data-aos-delay="0"
                      >
                        <h4 className="ptf-widget-title">FAQs</h4>
                        <Faq />
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
