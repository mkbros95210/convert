import React from 'react';
import { Link } from 'react-router-dom';

const CartPersonalPage: React.FC = () => {
  return (
    <>
      {/* ======================== Breadcrumb Four Section Start ===================== */}
      <section className="breadcrumb breadcrumb-four padding-static-y-60 section-bg position-relative z-index-1 overflow-hidden">
        <img src="/assets/images/gradients/breadcrumb-gradient-bg.png" alt="" className="bg--gradient" />
        <img src="/assets/images/shapes/element-moon3.png" alt="" className="element one" />
        <img src="/assets/images/shapes/element-moon1.png" alt="" className="element three" />

        <div className="container container-two">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="breadcrumb-four-content">
                <h3 className="breadcrumb-four-content__title text-center mb-3 text-capitalize">Shopping Cart</h3>
                <ul className="breadcrumb-list flx-align justify-content-center gap-2 mb-2">
                  <li className="breadcrumb-list__item font-14 text-body">
                    <Link to="/" className="breadcrumb-list__link text-body hover-text-main">Home</Link>
                  </li>
                  <li className="breadcrumb-list__item font-14 text-body">
                    <span className="breadcrumb-list__icon font-10"><i className="fas fa-chevron-right"></i></span>
                  </li>
                  <li className="breadcrumb-list__item font-14 text-body">
                    <span className="breadcrumb-list__text">My Shopping Cart</span>
                  </li>
                </ul>

                <ul className="process-list">
                  <li className="process-list__item activePage">
                    <Link to="/cart" className="process-list__link">
                      <div className="icons">
                        <span className="icon white"><img src="/assets/images/icons/process-white1.svg" alt="" /></span>
                      </div>
                      <span className="text">Shopping Cart</span>
                    </Link>
                  </li>
                  <li className="process-list__item activePage">
                    <Link to="/cart-personal" className="process-list__link">
                      <div className="icons">
                        <span className="icon white"><img src="/assets/images/icons/process-white2.svg" alt="" /></span>
                        <span className="icon colored"><img src="/assets/images/icons/process2.svg" alt="" /></span>
                      </div>
                      <span className="text">Mailing Address</span>
                    </Link>
                  </li>
                  <li className="process-list__item ">
                    <Link to="/cart-payment" className="process-list__link">
                      <div className="icons">
                        <span className="icon white"><img src="/assets/images/icons/process-white3.svg" alt="" /></span>
                        <span className="icon colored"><img src="/assets/images/icons/process3.svg" alt="" /></span>
                      </div>
                      <span className="text">Payment Methods</span>
                    </Link>
                  </li>
                  <li className="process-list__item">
                    <Link to="/cart-thank-you" className="process-list__link">
                      <div className="icons">
                        <span className="icon white"><img src="/assets/images/icons/process-white4.svg" alt="" /></span>
                        <span className="icon colored"><img src="/assets/images/icons/process4.svg" alt="" /></span>
                      </div>
                      <span className="text">Preview Order</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======================== Breadcrumb Four Section End ===================== */}

      {/* ====================== Cart Personal Info Start ============================ */}
      <section className="cart-personal padding-y-120">
        <div className="container container-two">
          <div className="row gy-5">
            <div className="col-lg-8 pe-sm-5">
              <div className="cart-personal__content">
                <h5 className="cart-personal__title mb-32">Personal information</h5>
                <form action="#">
                  <div className="mb-4">
                    <label htmlFor="email" className="form-label font-18 mb-2 fw-500 font-heading">Email Address <span className="text-danger">*</span> </label>
                    <span className="text d-block mb-2">We will send the purchase receipt to this address.</span>
                    <input type="email" className="common-input" id="email" placeholder="Email address" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="name" className="form-label font-18 mb-2 fw-500 font-heading">First Name <span className="text-danger">*</span> </label>
                    <span className="text d-block mb-2">We will use this to personalize your account experience.</span>
                    <input type="text" className="common-input" id="name" placeholder="First name" />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="lastName" className="form-label font-18 mb-2 fw-500 font-heading">Last name <span className="text-danger">*</span> </label>
                    <span className="text d-block mb-2">We will use this to personalize your account experience.</span>
                    <input type="text" className="common-input" id="lastName" placeholder="Last name" />
                  </div>
                  <div className="mt-32 mb-32">
                    <div className="common-check">
                      <input className="form-check-input" type="checkbox" name="checkbox" id="agree" />
                      <label className="form-check-label mb-0" htmlFor="agree">Agree To Terms</label>
                    </div>
                    <div className="common-check mb-0">
                      <input className="form-check-input" type="checkbox" name="checkbox" id="privacy" />
                      <label className="form-check-label mb-0" htmlFor="privacy">Agree To Privacy Policy</label>
                    </div>
                  </div>
                </form>
              </div>

              <form action="#" className="apply-coupon flx-align gap-3">
                <input type="text" className="common-input common-input--md w-auto pill" placeholder="Coupon code" />
                <button type="submit" className="btn btn-main btn-md py-3 px-sm-5 px-4 flx-align gap-2 pill fw-300"> Apply</button>
              </form>

              {/* Payment Method Start */}
              <div className="card common-card shadow mt-4">
                <div className="card-header p-4 bg-white">
                  <h6 className="mb-0">Payment Method</h6>
                </div>
                <div className="card-body p-4">
                  <div className="payment-select-card-wrapper">
                    <div className="payment-select-card mb-4">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-3">
                          <div className="common-check common-radio mb-0">
                            <input className="form-check-input" type="radio" name="radio" id="paypal" />
                            <label className="form-check-label" htmlFor="paypal"> </label>
                          </div>
                          <div className="">
                            <h6 className="font-16 mb-0">Paypal </h6>
                            <p className="font-14">Lorem ipsum dolor sit amet.</p>
                          </div>
                        </div>
                        <div className="payment-select-card__logo">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/800px-PayPal.svg.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="payment-select-card mb-4">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-3">
                          <div className="common-check common-radio mb-0">
                            <input className="form-check-input" type="radio" name="radio" id="paypal2" />
                            <label className="form-check-label" htmlFor="paypal2"> </label>
                          </div>
                          <div className="">
                            <h6 className="font-16 mb-0">Paypal </h6>
                            <p className="font-14">Lorem ipsum dolor sit amet.</p>
                          </div>
                        </div>
                        <div className="payment-select-card__logo">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/800px-PayPal.svg.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="payment-select-card mb-4">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-3">
                          <div className="common-check common-radio mb-0">
                            <input className="form-check-input" type="radio" name="radio" id="paypal3" />
                            <label className="form-check-label" htmlFor="paypal3"> </label>
                          </div>
                          <div className="">
                            <h6 className="font-16 mb-0">Paypal </h6>
                            <p className="font-14">Lorem ipsum dolor sit amet.</p>
                          </div>
                        </div>
                        <div className="payment-select-card__logo">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/800px-PayPal.svg.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="payment-select-card mb-4">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-3">
                          <div className="common-check common-radio mb-0">
                            <input className="form-check-input" type="radio" name="radio" id="paypal4" />
                            <label className="form-check-label" htmlFor="paypal4"> </label>
                          </div>
                          <div className="">
                            <h6 className="font-16 mb-0">Paypal </h6>
                            <p className="font-14">Lorem ipsum dolor sit amet.</p>
                          </div>
                        </div>
                        <div className="payment-select-card__logo">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/800px-PayPal.svg.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="payment-select-card mb-4">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-3">
                          <div className="common-check common-radio mb-0">
                            <input className="form-check-input" type="radio" name="radio" id="paypal5" />
                            <label className="form-check-label" htmlFor="paypal5"> </label>
                          </div>
                          <div className="">
                            <h6 className="font-16 mb-0">Paypal </h6>
                            <p className="font-14">Lorem ipsum dolor sit amet.</p>
                          </div>
                        </div>
                        <div className="payment-select-card__logo">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/800px-PayPal.svg.png" alt="" />
                        </div>
                      </div>
                    </div>
                    <div className="payment-select-card">
                      <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-3">
                          <div className="common-check common-radio mb-0">
                            <input className="form-check-input" type="radio" name="radio" id="paypal6" />
                            <label className="form-check-label" htmlFor="paypal6"> </label>
                          </div>
                          <div className="">
                            <h6 className="font-16 mb-0">Paypal </h6>
                            <p className="font-14">Lorem ipsum dolor sit amet.</p>
                          </div>
                        </div>
                        <div className="payment-select-card__logo">
                          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/800px-PayPal.svg.png" alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Payment Method End */}

              <div className="cart-content__bottom flx-between gap-2">
                <Link to="/cart" className="btn btn-outline-light flx-align gap-2 pill btn-lg">
                  <span className="icon line-height-1 font-20"><i className="las la-arrow-left"></i></span>
                  Back
                </Link>
                <Link to="/cart-payment" className="btn btn-main flx-align gap-2 pill btn-lg">
                  Proceed To Payment
                </Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="order-summary">
                <h5 className="order-summary__title mb-32">Order Summary</h5>
                <ul className="billing-list">
                  <li className="billing-list__item flx-between">
                    <span className="text text-heading fw-500">You have 3 items</span>
                    <span className="amount text-heading fw-500">$259.00</span>
                  </li>
                  <li className="billing-list__item flx-between">
                    <span className="text text-heading fw-500">Discount</span>
                    <span className="amount text-body">$00.00</span>
                  </li>
                  <li className="billing-list__item flx-between">
                    <span className="text text-heading fw-500">Handling Fee</span>
                    <span className="amount text-body">$15.00</span>
                  </li>
                  <li className="billing-list__item flx-between">
                    <span className="text text-heading fw-500">Subtotal</span>
                    <span className="amount text-body">$15.00</span>
                  </li>
                  <li className="billing-list__item flx-between">
                    <span className="text text-heading font-20 fw-500 font-heading">Total</span>
                    <span className="amount text-heading font-20 fw-500 font-heading">$274.00</span>
                  </li>
                </ul>
                <button type="submit" className="btn btn-outline-light pill btn-lg w-100 mt-32">
                  <span className="icon icon-left">
                    <img src="/assets/images/icons/cart-reverse.svg" alt="" className="white-version" />
                    <img src="/assets/images/icons/cart-white.svg" alt="" className="dark-version" />
                  </span>
                  Purchased Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====================== Cart Personal Info End ============================ */}

      {/* ======================== Brand Section Start ========================= */}
      <div className="brand ">
        <div className="container container">
          <div className="brand-slider">
            <div className="brand-item d-flex align-items-center justify-content-center">
              <img src="/assets/images/thumbs/brand-img1.png" alt="" className="white-version" />
              <img src="/assets/images/thumbs/brand-white-img1.png" alt="" className="dark-version" />
            </div>
            <div className="brand-item d-flex align-items-center justify-content-center">
              <img src="/assets/images/thumbs/brand-img2.png" alt="" className="white-version" />
              <img src="/assets/images/thumbs/brand-white-img2.png" alt="" className="dark-version" />
            </div>
            <div className="brand-item d-flex align-items-center justify-content-center">
              <img src="/assets/images/thumbs/brand-img3.png" alt="" className="white-version" />
              <img src="/assets/images/thumbs/brand-white-img3.png" alt="" className="dark-version" />
            </div>
            <div className="brand-item d-flex align-items-center justify-content-center">
              <img src="/assets/images/thumbs/brand-img4.png" alt="" className="white-version" />
              <img src="/assets/images/thumbs/brand-white-img4.png" alt="" className="dark-version" />
            </div>
            <div className="brand-item d-flex align-items-center justify-content-center">
              <img src="/assets/images/thumbs/brand-img5.png" alt="" className="white-version" />
              <img src="/assets/images/thumbs/brand-white-img5.png" alt="" className="dark-version" />
            </div>
            <div className="brand-item d-flex align-items-center justify-content-center">
              <img src="/assets/images/thumbs/brand-img3.png" alt="" className="white-version" />
              <img src="/assets/images/thumbs/brand-white-img3.png" alt="" className="dark-version" />
            </div>
          </div>
        </div>
      </div>
      {/* ======================== Brand Section End ========================= */}
    </>
  );
};

export default CartPersonalPage;