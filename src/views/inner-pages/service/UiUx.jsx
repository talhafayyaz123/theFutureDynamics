import React  ,{useState}from "react";
import { Helmet } from "react-helmet";
import TechnologyServiceList from "../../../components/list/TechnologyServiceList";
import Faq from "../../../components/faq/Faq";
import Skills from "../../../components/skill/Skills";
import TechnologyApproach from "../../../components/service/TechnologyApproach";
import CounterThree from "../../../components/counter/CounterThree";
import CopyRightTwo from "../../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../../components/footer/FooterTwo";
import HeaderDefault from "../../../components/header/HeaderDefault";
import HubspotForm from "react-hubspot-form";

const ServiceDetails = () => {
  const [showSuccess,setState]=useState(false);
  const [showForm,setFormState]=useState(true);
   const toggleFormVisibility = () => setFormState(!showForm);


  return (
    <div>
      <Helmet>
        <title>UI/UX</title>
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
                    <h1 className="large-heading">UI/UX Solution</h1>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "2.5rem" }}
                    ></div>
                    <p className="fz-18">
                    User Experience & User Interface
                    </p>
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
                            src="/assets/img/services/ui-ux.png"
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
                    Leveraging our human-centered approach as an organisation, we are firm believers of the human to human approach. We always educate our clients to no longer think of a website as just a presentation of your business, but consider it a platform that can actually add real value to your business. At theFuture DYNAMICS, we design all services based on what the user’s needs are, and how a website can give the user an experience that will fulfil their needs effortlessly. Our team of experts thoroughly research the subject's requirements to design and implement a flawless user-experience and user-interface.

Our data-driven technology research enables us to create an entire user journey related to the problem. Our solutions connect users and brand at every stage of interactivity. Whether it’s an ecommerce, for a service business, a website for any size of Enterprise, we create seamless solutions.

For your start-up, expansion of your existing business on digital, or an Enterprise looking for an application to achieve long-term success, we always make sure your UI/UX (user interface/user experience) design works for you. In partnership with Dynamics Stream - Certified Microsoft Gold Partners, our marketing and technology teams are always equipped with the finest data-driven and user-centric solutions to help organizations create better and even more successful businesses.
                    </p>
                  </div>
                  {/* <!--Spacer--> */}
                  <div
                    className="ptf-spacer"
                    style={{ "--ptf-xxl": "4.375rem" }}
                  ></div>
                
                  {/* <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h3>Specialization</h3>
                 
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "1.875rem" }}
                    ></div>
                    <p className="fz-18">
                      Encouraging the use of natural systems and processes in
                      design allows for exposure to nature, and in turn, these
                      design approaches improve health and wellbeing.
                    </p>
                  </div> */}
                  
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
                  <TechnologyApproach />
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
                        <TechnologyServiceList />
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
                        <Faq />
                      </div>
                    </div>
                  </div>
                </div>

                    <div className="custom-section__container">
              <div className="row" style={{ width: "100%" }}>
                <div className="col-12">
                  <div className="copy-grid__item" style={{ width: "100%" ,display: 'flex','justifyContent':'center'}}>
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
                      onSubmit={() => {}}
                      onReady={() => {}}
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
