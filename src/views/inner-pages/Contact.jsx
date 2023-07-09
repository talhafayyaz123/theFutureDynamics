import React ,{useState} from "react";
import { Helmet } from "react-helmet";
import HeaderDefault from "../../components/header/HeaderDefault";
import CopyRightTwo from "../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../components/footer/FooterTwo";
import Social from "../../components/social/Social";
import ContactForm from "../../components/ContactForm";
import Address from "../../components/Address";
import HubspotForm from "react-hubspot-form";

const Contact = () => {
  const [state,setState]=useState(false);
 const handleClick = () => setState(!state);

  return (

    <div>
      <Helmet>
        <title>Contact</title>
      </Helmet>
      {/* End Page SEO Content */}

      <HeaderDefault />
      {/* End Header */}

      <div className="ptf-main">
        <div className="ptf-page ptf-page--contact">
          <section>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>

            <div className="container-xxl">
              <div className="row">
                <div className="col-xl-10">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <h1 className="large-heading">
                      Let's get Contact an <br />
                      estimate
                    </h1>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "3rem", "--ptf-md": "2.5rem" }}
                    ></div>

                    <Social />
                    {/* <!--Social Icon--> */}
                  </div>
                </div>
              </div>
              {/* End .row */}
            </div>
            {/* Contact top portion */}

            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
            ></div>
          </section>
          {/* End section contact header */}

          <section>
            <div className="container-xxl">
              <div className="row">
                <div className="col-lg-4">
                  <Address />
                </div>
                {/* End .col */}

                <div className="col-lg-8">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="300"
                  >
                    <h5 className="fz-14 text-uppercase has-3-color fw-normal">
                      Tell us about your project and goals.
                    </h5>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "3.125rem" }}
                    ></div>
                    {/* <ContactForm /> */}
                                 {state && (
                            <div className="col-12">
                              <div className="alert alert-success" role="alert">
                                Your request has been received successfully, our
                                team will contact you shortly.
                              </div>
                            </div>
                          )}

                            {!state && (
                              <HubspotForm
                                portalId="7083262"
                                formId="162e1858-d687-49e5-8f2c-585316882a54"
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
                            )}

                    {/* End ContactForm */}
                  </div>
                </div>
                {/* End .col */}
              </div>
            </div>
            {/* <!--Spacer--> */}
            <div
              className="ptf-spacer"
              style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
            ></div>
          </section>
        </div>
      </div>

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

export default Contact;
