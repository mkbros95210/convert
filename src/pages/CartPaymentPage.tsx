import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

// Assume assets are moved to src/assets and imported as needed or served from public
// For simplicity and direct path conversion as requested, using absolute paths from root.
// In a real project, these would be imported: import image from '../assets/images/path/to/image.png';

const CartPaymentPage: React.FC = () => {
    // State for form inputs to make them controlled components
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expireDate, setExpireDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [saveDetails, setSaveDetails] = useState(false);

    // Slick slider settings for payment methods
    const paymentMethodSliderSettings = {
        slidesToShow: 10,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        speed: 1500,
        dots: false,
        pauseOnHover: true,
        arrows: true,
        draggable: true,
        infinite: true,
        prevArrow: <button type="button" className="slick-prev"><i className="las la-arrow-left"></i></button>,
        nextArrow: <button type="button" className="slick-next"><i className="las la-arrow-right"></i></button>,
        responsive: [
            { breakpoint: 1299, settings: { slidesToShow: 8 } },
            { breakpoint: 1199, settings: { slidesToShow: 6 } },
            { breakpoint: 767, settings: { slidesToShow: 4 } },
            { breakpoint: 575, settings: { slidesToShow: 4 } },
            { breakpoint: 425, settings: { slidesToShow: 3 } },
        ],
    };

    // Slick slider settings for brand section
    const brandSliderSettings = {
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 1500,
        dots: false,
        pauseOnHover: true,
        arrows: false,
        draggable: true,
        infinite: true,
        responsive: [
            { breakpoint: 1199, settings: { slidesToShow: 4 } },
            { breakpoint: 991, settings: { slidesToShow: 4 } },
            { breakpoint: 767, settings: { slidesToShow: 3 } },
            { breakpoint: 575, settings: { slidesToShow: 2 } },
        ],
    };

    // Helper to determine active class for process list
    const getProcessItemClass = (step: number) => {
        // Based on the HTML, Shopping Cart, Mailing Address, and Payment Methods are 'activePage'
        return `process-list__item ${step <= 3 ? 'activePage' : ''}`;
    };

    // Placeholder for MobileMenu, in a real app this would be a separate component
    const MobileMenu = () => (
        <div className="mobile-menu d-lg-none d-block">
            <button type="button" className="close-button"> <i className="las la-times"></i> </button>
            <div className="mobile-menu__inner">
                <a href="/index-2.html" className="mobile-menu__logo">
                    <img src="/src/assets/images/logo/logo.png" alt="Logo" className="white-version" />
                    <img src="/src/assets/images/logo/white-logo-two.png" alt="Logo" className="dark-version" />
                </a>
                <div className="mobile-menu__menu">
                    <ul className="nav-menu flx-align nav-menu--mobile">
                        <li className="nav-menu__item has-submenu">
                            <a href="#" className="nav-menu__link">Home</a>
                            <ul className="nav-submenu">
                                <li className="nav-submenu__item">
                                    <a href="/index-2.html" className="nav-submenu__link"> Home One</a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="/index-two.html" className="nav-submenu__link"> Home Two</a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="/index-three.html" className="nav-submenu__link"> Home Three</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-menu__item has-submenu">
                            <a href="#" className="nav-menu__link">Products</a>
                            <ul className="nav-submenu">
                                <li className="nav-submenu__item">
                                    <a href="/all-product.html" className="nav-submenu__link"> All Products</a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="/product-details.html" className="nav-submenu__link"> Product Details</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-menu__item has-submenu">
                            <a href="#" className="nav-menu__link">Pages</a>
                            <ul className="nav-submenu">
                                <li className="nav-submenu__item">
                                    <a href="/profile.html" className="nav-submenu__link"> Profile</a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="/cart.html" className="nav-submenu__link"> Shopping Cart</a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="/cart-personal.html" className="nav-submenu__link"> Mailing Address</a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="/cart-payment.html" className="nav-submenu__link"> Payment Method</a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="/cart-thank-you.html" className="nav-submenu__link"> Preview Order</a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="/dashboard.html" className="nav-submenu__link"> Dashboard</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-menu__item has-submenu">
                            <a href="#" className="nav-menu__link">Blog</a>
                            <ul className="nav-submenu">
                                <li className="nav-submenu__item">
                                    <a href="/blog.html" className="nav-submenu__link"> Blog</a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="/blog-details.html" className="nav-submenu__link"> Blog Details</a>
                                </li>
                                <li className="nav-submenu__item">
                                    <a href="/blog-details-sidebar.html" className="nav-submenu__link"> Blog Details Sidebar</a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-menu__item">
                            <a href="/contact.html" className="nav-menu__link">Contact</a>
                        </li>
                    </ul>
                    <div className="header-right__inner d-lg-none my-3 gap-1 d-flex flx-align">
                        <a href="/register.html" className="btn btn-main pill">
                            <span className="icon-left icon">
                                <img src="/src/assets/images/icons/user.svg" alt="" />
                            </span>Create Account
                        </a>
                        <div className="language-select flx-align select-has-icon">
                            <img src="/src/assets/images/icons/globe.svg" alt="" className="globe-icon white-version" />
                            <img src="/src/assets/images/icons/globe-white.svg" alt="" className="globe-icon dark-version" />
                            <select className="select py-0 ps-2 border-0 fw-500">
                                <option value="1">Eng</option>
                                <option value="2">Bn</option>
                                <option value="3">Eur</option>
                                <option value="4">Urd</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

    // Placeholder for Header, in a real app this would be a separate component
    const Header = () => (
        <header className="header">
            <div className="container container-full">
                <nav className="header-inner flx-between">
                    <div className="logo">
                        <a href="/index-2.html" className="link white-version">
                            <img src="/src/assets/images/logo/logo.png" alt="Logo" />
                        </a>
                        <a href="/index-2.html" className="link dark-version">
                            <img src="/src/assets/images/logo/white-logo.png" alt="Logo" />
                        </a>
                    </div>
                    <div className="header-menu d-lg-block d-none">
                        <ul className="nav-menu flx-align ">
                            <li className="nav-menu__item has-submenu">
                                <a href="#" className="nav-menu__link">Home</a>
                                <ul className="nav-submenu">
                                    <li className="nav-submenu__item">
                                        <a href="/index-2.html" className="nav-submenu__link"> Home One</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="/index-two.html" className="nav-submenu__link"> Home Two</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="/index-three.html" className="nav-submenu__link"> Home Three</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-menu__item has-submenu">
                                <a href="#" className="nav-menu__link">Products</a>
                                <ul className="nav-submenu">
                                    <li className="nav-submenu__item">
                                        <a href="/all-product.html" className="nav-submenu__link"> All Products</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="/product-details.html" className="nav-submenu__link"> Product Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-menu__item has-submenu">
                                <a href="#" className="nav-menu__link">Pages</a>
                                <ul className="nav-submenu">
                                    <li className="nav-submenu__item">
                                        <a href="/profile.html" className="nav-submenu__link"> Profile</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="/cart.html" className="nav-submenu__link"> Shopping Cart</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="/cart-personal.html" className="nav-submenu__link"> Mailing Address</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="/cart-payment.html" className="nav-submenu__link"> Payment Method</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="/cart-thank-you.html" className="nav-submenu__link"> Preview Order</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="/dashboard.html" className="nav-submenu__link"> Dashboard</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-menu__item has-submenu">
                                <a href="#" className="nav-menu__link">Blog</a>
                                <ul className="nav-submenu">
                                    <li className="nav-submenu__item">
                                        <a href="/blog.html" className="nav-submenu__link"> Blog</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="/blog-details.html" className="nav-submenu__link"> Blog Details</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="/blog-details-sidebar.html" className="nav-submenu__link"> Blog Details Sidebar</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-menu__item">
                                <a href="/contact.html" className="nav-menu__link">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="header-right flx-align">
                        <a href="/cart.html" className="header-right__button cart-btn position-relative">
                            <img src="/src/assets/images/icons/cart.svg" alt="" className="white-version" />
                            <img src="/src/assets/images/icons/cart-white.svg" alt="" className="dark-version" />
                            <span className="qty-badge font-12">0</span>
                        </a>
                        <div className="theme-switch-wrapper position-relative">
                            <label className="theme-switch" htmlFor="checkbox">
                                <input type="checkbox" className="d-none" id="checkbox" />
                                <span className="slider text-black header-right__button white-version">
                                    <img src="/src/assets/images/icons/sun.svg" alt="" />
                                </span>
                                <span className="slider text-black header-right__button dark-version">
                                    <img src="/src/assets/images/icons/moon.svg" alt="" />
                                </span>
                            </label>
                        </div>
                        <div className="header-right__inner gap-3 flx-align d-lg-flex d-none">
                            <a href="/register.html" className="btn btn-main pill">
                                <span className="icon-left icon">
                                    <img src="/src/assets/images/icons/user.svg" alt="" />
                                </span>Create Account
                            </a>
                            <div className="language-select flx-align select-has-icon">
                                <img src="/src/assets/images/icons/globe.svg" alt="" className="globe-icon white-version" />
                                <img src="/src/assets/images/icons/globe-white.svg" alt="" className="globe-icon dark-version" />
                                <select className="select py-0 ps-2 border-0 fw-500">
                                    <option value="1">Eng</option>
                                    <option value="2">Bn</option>
                                    <option value="3">Eur</option>
                                    <option value="4">Urd</option>
                                </select>
                            </div>
                        </div>
                        <button type="button" className="toggle-mobileMenu d-lg-none"> <i className="las la-bars"></i> </button>
                    </div>
                </nav>
            </div>
        </header>
    );

    // Placeholder for Footer, in a real app this would be a separate component
    const Footer = () => (
        <footer className="footer-section ">
            <img src="/src/assets/images/shapes/pattern.png" alt="" className="bg-pattern" />
            <img src="/src/assets/images/shapes/element1.png" alt="" className="element one" />
            <img src="/src/assets/images/shapes/element2.png" alt="" className="element two" />
            <img src="/src/assets/images/gradients/footer-gradient.png" alt="" className="bg--gradient" />

            <div className="container container-two">
                <div className="row gy-5">
                    <div className="col-xl-3 col-sm-6">
                        <div className="footer-widget">
                            <div className="footer-widget__logo">
                                <a href="/index-2.html"> <img src="/src/assets/images/logo/white-logo.png" alt="" /></a>
                            </div>
                            <p className="footer-widget__desc">Lorem consultancy elitsed do eiusmod tempor inci didunt ut labore dolore magna aliqua sed do eiusmod.</p>
                            <div className="footer-widget__social">
                                <ul className="social-icon-list">
                                    <li className="social-icon-list__item">
                                        <a href="https://www.facebook.com/" className="social-icon-list__link flx-center"><i className="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li className="social-icon-list__item">
                                        <a href="https://www.twitter.com/" className="social-icon-list__link flx-center"> <i className="fab fa-twitter"></i></a>
                                    </li>
                                    <li className="social-icon-list__item">
                                        <a href="https://www.linkedin.com/" className="social-icon-list__link flx-center"> <i className="fab fa-linkedin-in"></i></a>
                                    </li>
                                    <li className="social-icon-list__item">
                                        <a href="https://www.pinterest.com/" className="social-icon-list__link flx-center"> <i className="fab fa-pinterest-p"></i></a>
                                    </li>
                                    <li className="social-icon-list__item">
                                        <a href="https://www.pinterest.com/" className="social-icon-list__link flx-center"> <i className="fab fa-youtube"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-sm-6 col-xs-6">
                        <div className="footer-widget">
                            <h5 className="footer-widget__title text-white">Useful Link</h5>
                            <ul className="footer-lists">
                                <li className="footer-lists__item"><a href="/all-product.html" className="footer-lists__link">Product </a></li>
                                <li className="footer-lists__item"><a href="/product-details.html" className="footer-lists__link">Product Details</a></li>
                                <li className="footer-lists__item"><a href="/profile.html" className="footer-lists__link">Profile </a></li>
                                <li className="footer-lists__item"><a href="/cart.html" className="footer-lists__link">Shopping Cart</a></li>
                                <li className="footer-lists__item"><a href="/dashboard.html" className="footer-lists__link">Dashboard</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-xs-6 ps-xl-5">
                        <div className="footer-widget">
                            <h5 className="footer-widget__title text-white">Quick Links</h5>
                            <ul className="footer-lists">
                                <li className="footer-lists__item"><a href="/dashboard.html" className="footer-lists__link">Dashboard </a></li>
                                <li className="footer-lists__item"><a href="/login.html" className="footer-lists__link">Login </a></li>
                                <li className="footer-lists__item"><a href="/register.html" className="footer-lists__link">Register</a></li>
                                <li className="footer-lists__item"><a href="/blog.html" className="footer-lists__link">Blog </a></li>
                                <li className="footer-lists__item"><a href="/blog-details.html" className="footer-lists__link">Blog Details</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-sm-6">
                        <div className="footer-widget">
                            <h5 className="footer-widget__title text-white">Subscribe</h5>
                            <p className="footer-widget__desc">Subscribe our newsletter to get updated the latest news</p>
                            <form action="#" className="mt-4 subscribe-box d-flex align-items-center flex-column gap-2">
                                <input type="text" className="form-control common-input pill text-white" placeholder="Enter Mail" />
                                <button type="submit" className="btn btn-main btn-lg w-100 pill">Subscribe Now</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );

    return (
        <>
            {/* Preloader, Overlay, Scroll to Top are typically handled globally or as separate components */}
            {/* <div className="loader-mask">...</div> */}
            {/* <div className="overlay"></div> */}
            {/* <div className="side-overlay"></div> */}
            {/* <div className="progress-wrap">...</div> */}

            <MobileMenu />
            <Header />

            {/* Breadcrumb Four Section Start */}
            <section className="breadcrumb breadcrumb-four padding-static-y-60 section-bg position-relative z-index-1 overflow-hidden">
                <img src="/src/assets/images/gradients/breadcrumb-gradient-bg.png" alt="" className="bg--gradient" />
                <img src="/src/assets/images/shapes/element-moon3.png" alt="" className="element one" />
                <img src="/src/assets/images/shapes/element-moon1.png" alt="" className="element three" />

                <div className="container container-two">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="breadcrumb-four-content">
                                <h3 className="breadcrumb-four-content__title text-center mb-3 text-capitalize">Shopping Cart</h3>
                                <ul className="breadcrumb-list flx-align justify-content-center gap-2 mb-2">
                                    <li className="breadcrumb-list__item font-14 text-body">
                                        <a href="/index-2.html" className="breadcrumb-list__link text-body hover-text-main">Home</a>
                                    </li>
                                    <li className="breadcrumb-list__item font-14 text-body">
                                        <span className="breadcrumb-list__icon font-10"><i className="fas fa-chevron-right"></i></span>
                                    </li>
                                    <li className="breadcrumb-list__item font-14 text-body">
                                        <span className="breadcrumb-list__text">My Shopping Cart</span>
                                    </li>
                                </ul>

                                <ul className="process-list">
                                    <li className={getProcessItemClass(1)}>
                                        <a href="/cart.html" className="process-list__link">
                                            <div className="icons">
                                                <span className="icon white"><img src="/src/assets/images/icons/process-white1.svg" alt="" /></span>
                                            </div>
                                            <span className="text">Shopping Cart</span>
                                        </a>
                                    </li>
                                    <li className={getProcessItemClass(2)}>
                                        <a href="/cart-personal.html" className="process-list__link">
                                            <div className="icons">
                                                <span className="icon white"><img src="/src/assets/images/icons/process-white2.svg" alt="" /></span>
                                                <span className="icon colored"><img src="/src/assets/images/icons/process2.svg" alt="" /></span>
                                            </div>
                                            <span className="text">Mailing Address</span>
                                        </a>
                                    </li>
                                    <li className={getProcessItemClass(3)}>
                                        <a href="/cart-payment.html" className="process-list__link">
                                            <div className="icons">
                                                <span className="icon white"><img src="/src/assets/images/icons/process-white3.svg" alt="" /></span>
                                                <span className="icon colored"><img src="/src/assets/images/icons/process3.svg" alt="" /></span>
                                            </div>
                                            <span className="text">Payment Methods</span>
                                        </a>
                                    </li>
                                    <li className={getProcessItemClass(4)}>
                                        <a href="/cart-thank-you.html" className="process-list__link">
                                            <div className="icons">
                                                <span className="icon white"><img src="/src/assets/images/icons/process-white4.svg" alt="" /></span>
                                                <span className="icon colored"><img src="/src/assets/images/icons/process4.svg" alt="" /></span>
                                            </div>
                                            <span className="text">Preview Order</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Four Section End */}

            {/* Cart Payment Section Start */}
            <section className="cart-payment padding-y-120 overflow-hidden">
                <div className="container container-two">
                    <div className="payment-method">
                        <h5 className="payment-method__title mb-4">Payment Method</h5>
                        <div className="payment-method__slider arrow-sm">
                            <Slider {...paymentMethodSliderSettings}>
                                {/* Payment method items */}
                                {[...Array(13)].map((_, i) => (
                                    <div className="payment-method__item" key={i}>
                                        <input className="form-check-input" type="radio" name="payment" id={`payment${i + 1}`} hidden />
                                        <label className="form-check-label" htmlFor={`payment${i + 1}`}>
                                            <img src={`/src/assets/images/thumbs/payment-method${i + 1}.png`} alt="" />
                                        </label>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>

                    <div className="cart-payment__box position-relative z-index-1 overflow-hidden">
                        <img src="/src/assets/images/shapes/pattern-curve-six.png" alt="" className="position-absolute end-0 top-0 z-index--1" />
                        <img src="/src/assets/images/shapes/pattern-curve-five.png" alt="" className="position-absolute start-0 top-0 z-index--1" />

                        <div className="row justify-content-center">
                            <div className="col-lg-8 col-sm-10">
                                <h5 className="cart-payment__title mb-4">Card Details</h5>
                                <div className="cart-payment-card">
                                    <form onSubmit={(e) => e.preventDefault()}> {/* Added onSubmit to prevent default form submission */}
                                        <div className="row gy-4">
                                            <div className="col-lg-12">
                                                <label htmlFor="nmbr" className="form-label mb-2 font-18 font-heading fw-600">Card Number</label>
                                                <div className="position-relative">
                                                    <input
                                                        type="text"
                                                        className="common-input common-input--bg common-input--withIcon"
                                                        id="nmbr"
                                                        placeholder="5896  1456  0040   2558"
                                                        value={cardNumber}
                                                        onChange={(e) => setCardNumber(e.target.value)}
                                                    />
                                                    <span className="input-icon"><img src="/src/assets/images/icons/check-cirlce.svg" alt="" /></span>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <label htmlFor="holder" className="form-label mb-2 font-18 font-heading fw-600">Card Holder</label>
                                                <div className="position-relative">
                                                    <input
                                                        type="text"
                                                        className="common-input common-input--bg common-input--withIcon"
                                                        id="holder"
                                                        placeholder="Michel John"
                                                        value={cardHolder}
                                                        onChange={(e) => setCardHolder(e.target.value)}
                                                    />
                                                    <span className="input-icon"><img src="/src/assets/images/icons/check-cirlce.svg" alt="" /></span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <label htmlFor="expire" className="form-label mb-2 font-18 font-heading fw-600">Expire Date</label>
                                                <div className="position-relative">
                                                    <input
                                                        type="text"
                                                        className="common-input common-input--bg common-input--withIcon"
                                                        id="expire"
                                                        placeholder="09/26"
                                                        value={expireDate}
                                                        onChange={(e) => setExpireDate(e.target.value)}
                                                    />
                                                    <span className="input-icon"><img src="/src/assets/images/icons/check-cirlce.svg" alt="" /></span>
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <label htmlFor="CVV" className="form-label mb-2 font-18 font-heading fw-600">CVV</label>
                                                <div className="position-relative">
                                                    <input
                                                        type="text"
                                                        className="common-input common-input--bg common-input--withIcon"
                                                        id="CVV"
                                                        placeholder="853"
                                                        value={cvv}
                                                        onChange={(e) => setCvv(e.target.value)}
                                                    />
                                                    <span className="input-icon"><img src="/src/assets/images/icons/check-cirlce.svg" alt="" /></span>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="common-check my-2">
                                                    <input
                                                        className="form-check-input"
                                                        type="checkbox"
                                                        name="checkbox"
                                                        id="agree"
                                                        checked={saveDetails}
                                                        onChange={(e) => setSaveDetails(e.target.checked)}
                                                    />
                                                    <label className="form-check-label mb-0 fw-400 font-16 text-body" htmlFor="agree">Save my details for future purchase</label>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="total-bill flx-between">
                                                    <span className="text text-heading font-20 fw-500 font-heading">Total Amount</span>
                                                    <span className="amount text-heading font-20 fw-500 font-heading">$274.00</span>
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <a href="/cart-thank-you.html" className="btn btn-main btn-lg w-100 pill"> Confirm Payment</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cart-content__bottom flx-between gap-2">
                        <a href="/cart-personal.html" className="btn btn-outline-light flx-align gap-2 pill btn-lg">
                            <span className="icon line-height-1 font-20"><i className="las la-arrow-left"></i></span>
                            Back
                        </a>
                    </div>
                </div>
            </section>
            {/* Cart Payment Section End */}

            {/* Brand Section Start */}
            <div className="brand ">
                <div className="container container">
                    <div className="brand-slider">
                        <Slider {...brandSliderSettings}>
                            <div className="brand-item d-flex align-items-center justify-content-center">
                                <img src="/src/assets/images/thumbs/brand-img1.png" alt="" className="white-version" />
                                <img src="/src/assets/images/thumbs/brand-white-img1.png" alt="" className="dark-version" />
                            </div>
                            <div className="brand-item d-flex align-items-center justify-content-center">
                                <img src="/src/assets/images/thumbs/brand-img2.png" alt="" className="white-version" />
                                <img src="/src/assets/images/thumbs/brand-white-img2.png" alt="" className="dark-version" />
                            </div>
                            <div className="brand-item d-flex align-items-center justify-content-center">
                                <img src="/src/assets/images/thumbs/brand-img3.png" alt="" className="white-version" />
                                <img src="/src/assets/images/thumbs/brand-white-img3.png" alt="" className="dark-version" />
                            </div>
                            <div className="brand-item d-flex align-items-center justify-content-center">
                                <img src="/src/assets/images/thumbs/brand-img4.png" alt="" className="white-version" />
                                <img src="/src/assets/images/thumbs/brand-white-img4.png" alt="" className="dark-version" />
                            </div>
                            <div className="brand-item d-flex align-items-center justify-content-center">
                                <img src="/src/assets/images/thumbs/brand-img5.png" alt="" className="white-version" />
                                <img src="/src/assets/images/thumbs/brand-white-img5.png" alt="" className="dark-version" />
                            </div>
                            <div className="brand-item d-flex align-items-center justify-content-center">
                                <img src="/src/assets/images/thumbs/brand-img3.png" alt="" className="white-version" />
                                <img src="/src/assets/images/thumbs/brand-white-img3.png" alt="" className="dark-version" />
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            {/* Brand Section End */}

            <Footer />
        </>
    );
};

export default CartPaymentPage;