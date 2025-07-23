import React from 'react';

// Import images
import breadcrumbGradientBg from '../assets/images/gradients/breadcrumb-gradient-bg.png';
import bannerTwoGradient from '../assets/images/gradients/banner-two-gradient.png';
import patternFive from '../assets/images/shapes/pattern-five.png';

const ContactPage: React.FC = () => {
  return (
    <>
      {/* ======================== Breadcrumb Two Section Start ===================== */}
      <section className="breadcrumb border-bottom p-0 d-block section-bg position-relative z-index-1">
        <div className="breadcrumb-two">
          <img src={breadcrumbGradientBg} alt="" className="bg--gradient" />
          <div className="container container-two">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="breadcrumb-two-content text-center">
                  <ul className="breadcrumb-list flx-align gap-2 mb-2 justify-content-center">
                    <li className="breadcrumb-list__item font-14 text-body">
                      {/* Assuming home route is '/' */}
                      <a href="/" className="breadcrumb-list__link text-body hover-text-main">Home</a>
                    </li>
                    <li className="breadcrumb-list__item font-14 text-body">
                      <span className="breadcrumb-list__icon font-10"><i className="fas fa-chevron-right"></i></span>
                    </li>
                    <li className="breadcrumb-list__item font-14 text-body">
                      <span className="breadcrumb-list__text">Contact</span>
                    </li>
                  </ul>
                  <h3 className="breadcrumb-two-content__title mb-0 text-capitalize">Contact Us</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======================== Breadcrumb Two Section End ===================== */}

      {/* =========================== Contact Section Start ========================== */}
      <section className="contact padding-t-120 padding-b-60 section-bg position-relative z-index-1 overflow-hidden">
        <img src={bannerTwoGradient} alt="" className="bg--gradient" />
        <img src={patternFive} className="position-absolute end-0 top-0 z-index--1" alt="" />

        <div className="container container-two">
          <div className="row gy-4">
            <div className="col-lg-5">
              <div className="contact-info">
                <h3 className="contact-info__title">Get in touch with us today</h3>
                <p className="contact-info__desc">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum rem facere labore cupiditate sint? Animi quis illo suscipit autem cum.</p>

                <div className="contact-info__item-wrapper flx-between gap-4">
                  <div className="contact-info__item">
                    <span className="contact-info__text text-capitalize d-block mb-1">Give Us A Call</span>
                    <a href="tel:01812345678" className="contact-info__link font-24 fw-500 text-heading hover-text-main">01812345678</a>
                  </div>
                  <div className="contact-info__item">
                    <span className="contact-info__text text-capitalize d-block mb-1">Give Us An Email</span>
                    <a href="mailto:dpmarket@gmail.com" className="contact-info__link font-24 fw-500 text-heading hover-text-main">dpmarket@gmail.com</a>
                  </div>
                </div>

                <div className="mt-24">
                  <ul className="social-icon-list">
                    <li className="social-icon-list__item">
                      <a href="https://www.facebook.com/" className="social-icon-list__link text-heading flx-center" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                    </li>
                    <li className="social-icon-list__item">
                      <a href="https://www.twitter.com/" className="social-icon-list__link text-heading flx-center" target="_blank" rel="noopener noreferrer"> <i className="fab fa-twitter"></i></a>
                    </li>
                    <li className="social-icon-list__item">
                      <a href="https://www.linkedin.com/" className="social-icon-list__link text-heading flx-center" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin-in"></i></a>
                    </li>
                    <li className="social-icon-list__item">
                      <a href="https://www.pinterest.com/" className="social-icon-list__link text-heading flx-center" target="_blank" rel="noopener noreferrer"> <i className="fab fa-pinterest-p"></i></a>
                    </li>
                    <li className="social-icon-list__item">
                      <a href="https://www.youtube.com/" className="social-icon-list__link text-heading flx-center" target="_blank" rel="noopener noreferrer"> <i className="fab fa-youtube"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-7 ps-lg-5">
              <div className="card common-card p-sm-4">
                <div className="card-body">
                  <form action="#" autoComplete="off">
                    <div className="row gy-4">
                      <div className="col-sm-6 col-xs-6">
                        <label htmlFor="name" className="form-label mb-2 font-18 font-heading fw-600">Full Name</label>
                        <input type="text" className="common-input common-input--grayBg border" id="name" placeholder="Your name here" />
                      </div>
                      <div className="col-sm-6 col-xs-6">
                        <label htmlFor="email" className="form-label mb-2 font-18 font-heading fw-600">Your Mail</label>
                        <input type="email" className="common-input common-input--grayBg border" id="email" placeholder="Your email here " />
                      </div>  
                      <div className="col-sm-12">
                        <label htmlFor="message" className="form-label mb-2 font-18 font-heading fw-600">Your Message</label>
                        <textarea className="common-input common-input--grayBg border" id="message" placeholder="Write Your Message Here"></textarea>
                      </div>
                      <div className="col-sm-12">
                        <button type="submit" className="btn btn-main btn-lg pill w-100"> Submit Now </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =========================== Contact Section End ========================== */}
    </>
  );
};

export default ContactPage;