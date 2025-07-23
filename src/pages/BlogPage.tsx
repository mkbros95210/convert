import React from 'react';
import { Link } from 'react-router-dom';

// Import images
import logoWhiteVersion from '../assets/images/logo/logo.png';
import logoDarkVersion from '../assets/images/logo/white-logo-two.png';
import logoHeaderWhite from '../assets/images/logo/logo.png';
import logoHeaderDark from '../assets/images/logo/white-logo.png';
import userIcon from '../assets/images/icons/user.svg';
import globeIcon from '../assets/images/icons/globe.svg';
import globeIconWhite from '../assets/images/icons/globe-white.svg';
import cartIcon from '../assets/images/icons/cart.svg';
import cartIconWhite from '../assets/images/icons/cart-white.svg';
import sunIcon from '../assets/images/icons/sun.svg';
import moonIcon from '../assets/images/icons/moon.svg';
import breadcrumbGradient from '../assets/images/gradients/breadcrumb-gradient-bg.png';
import patternFive from '../assets/images/shapes/pattern-five.png';
import blog1 from '../assets/images/thumbs/blog1.png';
import blog2 from '../assets/images/thumbs/blog2.png';
import blog3 from '../assets/images/thumbs/blog3.png';
import calendarIcon from '../assets/images/icons/calendar.svg';
import calendarIconWhite from '../assets/images/icons/calendar-white.svg';
import brandImg1 from '../assets/images/thumbs/brand-img1.png';
import brandImg2 from '../assets/images/thumbs/brand-img2.png';
import brandImg3 from '../assets/images/thumbs/brand-img3.png';
import brandImg4 from '../assets/images/thumbs/brand-img4.png';
import brandImg5 from '../assets/images/thumbs/brand-img5.png';
import brandWhiteImg1 from '../assets/images/thumbs/brand-white-img1.png';
import brandWhiteImg2 from '../assets/images/thumbs/brand-white-img2.png';
import brandWhiteImg3 from '../assets/images/thumbs/brand-white-img3.png';
import brandWhiteImg4 from '../assets/images/thumbs/brand-white-img4.png';
import brandWhiteImg5 from '../assets/images/thumbs/brand-white-img5.png';
import footerPattern from '../assets/images/shapes/pattern.png';
import element1 from '../assets/images/shapes/element1.png';
import element2 from '../assets/images/shapes/element2.png';
import footerGradient from '../assets/images/gradients/footer-gradient.png';
import footerLogoWhite from '../assets/images/logo/white-logo.png';

const BlogPage: React.FC = () => {
    // Note: The original HTML contains extensive JavaScript for dynamic
    // behavior (mobile menus, sliders, tooltips, counters, light/dark mode, etc.).
    // This React component focuses on the JSX structure and static content.
    // Dynamic functionalities would typically be implemented using React state,
    // hooks (e.g., useState, useEffect), and dedicated component libraries
    // (e.g., for carousels, modals, form validation, theming).
    // The `main.js` logic related to DOM manipulation, Slick sliders,
    // and theme switching is *not* ported here. Instead, CSS classes for
    // dark/light mode are retained, assuming a global theme context handles them.

    // A mock array for blog posts to demonstrate iteration
    const blogPosts = [
        {
            id: 1,
            tag: 'Hiring',
            date: 'Jan 17, 2024',
            image: blog1,
            title: 'How to hire a right business executive for your company',
            link: 'blog-details'
        },
        {
            id: 2,
            tag: 'Workshop',
            date: 'Jan 17, 2024',
            image: blog2,
            title: 'The Gig Economy: Adapting to a Flexible Workforce',
            link: 'blog-details'
        },
        {
            id: 3,
            tag: 'Project Management',
            date: 'Jan 17, 2024',
            image: blog3,
            title: 'The Future of Remote Work: Strategies for Success',
            link: 'blog-details'
        },
        {
            id: 4,
            tag: 'Project Management',
            date: 'Jan 17, 2024',
            image: blog3,
            title: 'The Future of Remote Work: Strategies for Success',
            link: 'blog-details'
        },
        {
            id: 5,
            tag: 'Hiring',
            date: 'Jan 17, 2024',
            image: blog1,
            title: 'How to hire a right business executive for your company',
            link: 'blog-details'
        },
        {
            id: 6,
            tag: 'Workshop',
            date: 'Jan 17, 2024',
            image: blog2,
            title: 'The Gig Economy: Adapting to a Flexible Workforce',
            link: 'blog-details'
        },
        {
            id: 7,
            tag: 'Hiring',
            date: 'Jan 17, 2024',
            image: blog1,
            title: 'How to hire a right business executive for your company',
            link: 'blog-details'
        },
        {
            id: 8,
            tag: 'Workshop',
            date: 'Jan 17, 2024',
            image: blog2,
            title: 'The Gig Economy: Adapting to a Flexible Workforce',
            link: 'blog-details'
        },
        {
            id: 9,
            tag: 'Project Management',
            date: 'Jan 17, 2024',
            image: blog3,
            title: 'The Future of Remote Work: Strategies for Success',
            link: 'blog-details'
        },
    ];

    return (
        <>
            {/* Preloader - Removed as it's typically handled by global app loading state */}
            {/* Overlay - Removed, would be part of a global modal/sidebar system */}
            {/* Scroll to Top - Removed, would be a global component with JS */}

            {/* ==================== Mobile Menu Start Here ==================== */}
            <div className="mobile-menu d-lg-none d-block">
                <button type="button" className="close-button"> <i className="las la-times"></i> </button>
                <div className="mobile-menu__inner">
                    <Link to="/" className="mobile-menu__logo">
                        <img src={logoWhiteVersion} alt="Logo" className="white-version" />
                        <img src={logoDarkVersion} alt="Logo" className="dark-version" />
                    </Link>
                    <div className="mobile-menu__menu">
                        <ul className="nav-menu flx-align nav-menu--mobile">
                            <li className="nav-menu__item has-submenu">
                                <Link to="#" className="nav-menu__link">Home</Link>
                                <ul className="nav-submenu">
                                    <li className="nav-submenu__item">
                                        <Link to="/" className="nav-submenu__link"> Home One</Link>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <Link to="/home-two" className="nav-submenu__link"> Home Two</Link>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <Link to="/home-three" className="nav-submenu__link"> Home Three</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-menu__item has-submenu">
                                <Link to="#" className="nav-menu__link">Products</Link>
                                <ul className="nav-submenu">
                                    <li className="nav-submenu__item">
                                        <Link to="/all-product" className="nav-submenu__link"> All Products</Link>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <Link to="/product-details" className="nav-submenu__link"> Product Details</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-menu__item has-submenu">
                                <Link to="#" className="nav-menu__link">Pages</Link>
                                <ul className="nav-submenu">
                                    <li className="nav-submenu__item">
                                        <Link to="/profile" className="nav-submenu__link"> Profile</Link>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <Link to="/cart" className="nav-submenu__link"> Shopping Cart</Link>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <Link to="/cart-personal" className="nav-submenu__link"> Mailing Address</Link>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <Link to="/cart-payment" className="nav-submenu__link"> Payment Method</Link>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <Link to="/cart-thank-you" className="nav-submenu__link"> Preview Order</Link>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <Link to="/dashboard" className="nav-submenu__link"> Dashboard</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-menu__item has-submenu">
                                <Link to="#" className="nav-menu__link">Blog</Link>
                                <ul className="nav-submenu">
                                    <li className="nav-submenu__item">
                                        <Link to="/blog" className="nav-submenu__link"> Blog</Link>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <Link to="/blog-details" className="nav-submenu__link"> Blog Details</Link>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <Link to="/blog-details-sidebar" className="nav-submenu__link"> Blog Details Sidebar</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-menu__item">
                                <Link to="/contact" className="nav-menu__link">Contact</Link>
                            </li>
                        </ul>
                        <div className="header-right__inner d-lg-none my-3 gap-1 d-flex flx-align">

                            <Link to="/register" className="btn btn-main pill">
                                <span className="icon-left icon">
                                    <img src={userIcon} alt="" />
                                </span>Create Account
                            </Link>
                            <div className="language-select flx-align select-has-icon">
                                <img src={globeIcon} alt="" className="globe-icon white-version" />
                                <img src={globeIconWhite} alt="" className="globe-icon dark-version" />
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
            {/* ==================== Mobile Menu End Here ==================== */}

            {/* ==================== Header Start Here ==================== */}
            <header className="header">
                <div className="container container-full">
                    <nav className="header-inner flx-between">
                        {/* Logo Start */}
                        <div className="logo">
                            <Link to="/" className="link white-version">
                                <img src={logoHeaderWhite} alt="Logo" />
                            </Link>
                            <Link to="/" className="link dark-version">
                                <img src={logoHeaderDark} alt="Logo" />
                            </Link>
                        </div>
                        {/* Logo End  */}

                        {/* Menu Start  */}
                        <div className="header-menu d-lg-block d-none">
                            <ul className="nav-menu flx-align ">
                                <li className="nav-menu__item has-submenu">
                                    <Link to="#" className="nav-menu__link">Home</Link>
                                    <ul className="nav-submenu">
                                        <li className="nav-submenu__item">
                                            <Link to="/" className="nav-submenu__link"> Home One</Link>
                                        </li>
                                        <li className="nav-submenu__item">
                                            <Link to="/home-two" className="nav-submenu__link"> Home Two</Link>
                                        </li>
                                        <li className="nav-submenu__item">
                                            <Link to="/home-three" className="nav-submenu__link"> Home Three</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-menu__item has-submenu">
                                    <Link to="#" className="nav-menu__link">Products</Link>
                                    <ul className="nav-submenu">
                                        <li className="nav-submenu__item">
                                            <Link to="/all-product" className="nav-submenu__link"> All Products</Link>
                                        </li>
                                        <li className="nav-submenu__item">
                                            <Link to="/product-details" className="nav-submenu__link"> Product Details</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-menu__item has-submenu">
                                    <Link to="#" className="nav-menu__link">Pages</Link>
                                    <ul className="nav-submenu">
                                        <li className="nav-submenu__item">
                                            <Link to="/profile" className="nav-submenu__link"> Profile</Link>
                                        </li>
                                        <li className="nav-submenu__item">
                                            <Link to="/cart" className="nav-submenu__link"> Shopping Cart</Link>
                                        </li>
                                        <li className="nav-submenu__item">
                                            <Link to="/cart-personal" className="nav-submenu__link"> Mailing Address</Link>
                                        </li>
                                        <li className="nav-submenu__item">
                                            <Link to="/cart-payment" className="nav-submenu__link"> Payment Method</Link>
                                        </li>
                                        <li className="nav-submenu__item">
                                            <Link to="/cart-thank-you" className="nav-submenu__link"> Preview Order</Link>
                                        </li>
                                        <li className="nav-submenu__item">
                                            <Link to="/dashboard" className="nav-submenu__link"> Dashboard</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-menu__item has-submenu">
                                    <Link to="#" className="nav-menu__link">Blog</Link>
                                    <ul className="nav-submenu">
                                        <li className="nav-submenu__item">
                                            <Link to="/blog" className="nav-submenu__link"> Blog</Link>
                                        </li>
                                        <li className="nav-submenu__item">
                                            <Link to="/blog-details" className="nav-submenu__link"> Blog Details</Link>
                                        </li>
                                        <li className="nav-submenu__item">
                                            <Link to="/blog-details-sidebar" className="nav-submenu__link"> Blog Details Sidebar</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-menu__item">
                                    <Link to="/contact" className="nav-menu__link">Contact</Link>
                                </li>
                            </ul>
                        </div>
                        {/* Menu End  */}

                        {/* Header Right start */}
                        <div className="header-right flx-align">
                            <Link to="/cart" className="header-right__button cart-btn position-relative">
                                <img src={cartIcon} alt="" className="white-version" />
                                <img src={cartIconWhite} alt="" className="dark-version" />
                                <span className="qty-badge font-12">0</span>
                            </Link>

                            {/* Light Dark Mode */}
                            <div className="theme-switch-wrapper position-relative">
                                <label className="theme-switch" htmlFor="checkbox">
                                    <input type="checkbox" className="d-none" id="checkbox" />
                                    <span className="slider text-black header-right__button white-version">
                                        <img src={sunIcon} alt="" />
                                    </span>
                                    <span className="slider text-black header-right__button dark-version">
                                        <img src={moonIcon} alt="" />
                                    </span>
                                </label>
                            </div>

                            <div className="header-right__inner gap-3 flx-align d-lg-flex d-none">

                                <Link to="/register" className="btn btn-main pill">
                                    <span className="icon-left icon">
                                        <img src={userIcon} alt="" />
                                    </span>Create Account
                                </Link>
                                <div className="language-select flx-align select-has-icon">
                                    <img src={globeIcon} alt="" className="globe-icon white-version" />
                                    <img src={globeIconWhite} alt="" className="globe-icon dark-version" />
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
                        {/* Header Right End  */}
                    </nav>
                </div>
            </header>
            {/* ==================== Header End Here ==================== */}

            {/* ======================== Breadcrumb Two Section Start ===================== */}
            <section className="breadcrumb border-bottom p-0 d-block section-bg position-relative z-index-1">
                <div className="breadcrumb-two">
                    <img src={breadcrumbGradient} alt="" className="bg--gradient" />
                    <div className="container container-two">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="breadcrumb-two-content text-center">

                                    <ul className="breadcrumb-list flx-align gap-2 mb-2 justify-content-center">
                                        <li className="breadcrumb-list__item font-14 text-body">
                                            <Link to="/" className="breadcrumb-list__link text-body hover-text-main">Home</Link>
                                        </li>
                                        <li className="breadcrumb-list__item font-14 text-body">
                                            <span className="breadcrumb-list__icon font-10"><i className="fas fa-chevron-right"></i></span>
                                        </li>
                                        <li className="breadcrumb-list__item font-14 text-body">
                                            <span className="breadcrumb-list__text">Blog</span>
                                        </li>
                                    </ul>

                                    <h3 className="breadcrumb-two-content__title mb-0 text-capitalize">Latest Blogs And Articles</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* ======================== Breadcrumb Two Section End ===================== */}

            {/* =========================== Blog Section Start ========================== */}
            <section className="blog padding-y-120 section-bg position-relative z-index-1 overflow-hidden">
                <img src={patternFive} className="position-absolute end-0 top-0 z-index--1" alt="" />
                <div className="container container-two">
                    <div className="row gy-4">
                        {blogPosts.map(post => (
                            <div className="col-lg-4 col-sm-6" key={post.id}>
                                <div className="post-item">
                                    <div className="post-item__thumb">
                                        <Link to={`/${post.link}`} className="link">
                                            <img src={post.image} className="cover-img" alt="" />
                                        </Link>
                                    </div>
                                    <div className="post-item__content">
                                        <div className="post-item__top flx-align">
                                            <Link to="/blog" className="post-item__tag pill font-14 text-heading fw-500 hover-text-main">{post.tag}</Link>
                                            <div className="post-item__date font-14 flx-align gap-2 font-14 text-heading fw-500">
                                                <span className="icon">
                                                    <img src={calendarIcon} alt="" className="white-version" />
                                                    <img src={calendarIconWhite} alt="" className="dark-version" />
                                                </span>
                                                <span className="text">{post.date}</span>
                                            </div>
                                        </div>
                                        <h5 className="post-item__title">
                                            <Link to={`/${post.link}`} className="link">{post.title}</Link>
                                        </h5>
                                        <Link to={`/${post.link}`} className="btn btn-outline-light pill fw-600">Read More </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Pagination Start */}
                    <nav aria-label="Page navigation example">
                        <ul className="pagination common-pagination">
                            <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">4</Link></li>
                            <li className="page-item"><Link className="page-link" to="#">5</Link></li>
                            <li className="page-item">
                                <Link className="page-link flx-align gap-2 flex-nowrap" to="#">Next
                                    <span className="icon line-height-1 font-20"><i className="las la-arrow-right"></i></span>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    {/* Pagination End */}
                </div>
            </section>
            {/* =========================== Blog Section End ========================== */}

            {/* ======================== Brand Section Start ========================= */}
            <div className="brand ">
                <div className="container container">
                    {/* Note: Original uses slick slider; this is a static representation */}
                    <div className="brand-slider">
                        <div className="brand-item d-flex align-items-center justify-content-center">
                            <img src={brandImg1} alt="" className="white-version" />
                            <img src={brandWhiteImg1} alt="" className="dark-version" />
                        </div>
                        <div className="brand-item d-flex align-items-center justify-content-center">
                            <img src={brandImg2} alt="" className="white-version" />
                            <img src={brandWhiteImg2} alt="" className="dark-version" />
                        </div>
                        <div className="brand-item d-flex align-items-center justify-content-center">
                            <img src={brandImg3} alt="" className="white-version" />
                            <img src={brandWhiteImg3} alt="" className="dark-version" />
                        </div>
                        <div className="brand-item d-flex align-items-center justify-content-center">
                            <img src={brandImg4} alt="" className="white-version" />
                            <img src={brandWhiteImg4} alt="" className="dark-version" />
                        </div>
                        <div className="brand-item d-flex align-items-center justify-content-center">
                            <img src={brandImg5} alt="" className="white-version" />
                            <img src={brandWhiteImg5} alt="" className="dark-version" />
                        </div>
                        <div className="brand-item d-flex align-items-center justify-content-center">
                            <img src={brandImg3} alt="" className="white-version" />
                            <img src={brandWhiteImg3} alt="" className="dark-version" />
                        </div>
                    </div>
                </div>
            </div>
            {/* ======================== Brand Section End ========================= */}

            {/* ==================== Footer Start Here ==================== */}
            <footer className="footer-section section-bg">
                <img src={footerPattern} alt="" className="bg-pattern" />
                <img src={element1} alt="" className="element one" />
                <img src={element2} alt="" className="element two" />
                <img src={footerGradient} alt="" className="bg--gradient" />

                <div className="container container-two">
                    <div className="row gy-5">
                        <div className="col-xl-3 col-sm-6">
                            <div className="footer-widget">
                                <div className="footer-widget__logo">
                                    <Link to="/"> <img src={footerLogoWhite} alt="" /></Link>
                                </div>
                                <p className="footer-widget__desc">Lorem consultancy elitsed do eiusmod tempor inci didunt ut labore dolore magna aliqua sed do eiusmod.</p>
                                <div className="footer-widget__social">
                                    <ul className="social-icon-list">
                                        <li className="social-icon-list__item">
                                            <Link to="https://www.facebook.com/" className="social-icon-list__link flx-center"><i className="fab fa-facebook-f"></i></Link>
                                        </li>
                                        <li className="social-icon-list__item">
                                            <Link to="https://www.twitter.com/" className="social-icon-list__link flx-center"> <i className="fab fa-twitter"></i></Link>
                                        </li>
                                        <li className="social-icon-list__item">
                                            <Link to="https://www.linkedin.com/" className="social-icon-list__link flx-center"> <i className="fab fa-linkedin-in"></i></Link>
                                        </li>
                                        <li className="social-icon-list__item">
                                            <Link to="https://www.pinterest.com/" className="social-icon-list__link flx-center"> <i className="fab fa-pinterest-p"></i></Link>
                                        </li>
                                        <li className="social-icon-list__item">
                                            <Link to="https://www.youtube.com/" className="social-icon-list__link flx-center"> <i className="fab fa-youtube"></i></Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-sm-6 col-xs-6">
                            <div className="footer-widget">
                                <h5 className="footer-widget__title text-white">Useful Link</h5>
                                <ul className="footer-lists">
                                    <li className="footer-lists__item"><Link to="/all-product" className="footer-lists__link">Product </Link></li>
                                    <li className="footer-lists__item"><Link to="/product-details" className="footer-lists__link">Product Details</Link></li>
                                    <li className="footer-lists__item"><Link to="/profile" className="footer-lists__link">Profile </Link></li>
                                    <li className="footer-lists__item"><Link to="/cart" className="footer-lists__link">Shopping Cart</Link></li>
                                    <li className="footer-lists__item"><Link to="/dashboard" className="footer-lists__link">Dashboard</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-xs-6 ps-xl-5">
                            <div className="footer-widget">
                                <h5 className="footer-widget__title text-white">Quick Links</h5>
                                <ul className="footer-lists">
                                    <li className="footer-lists__item"><Link to="/dashboard" className="footer-lists__link">Dashboard </Link></li>
                                    <li className="footer-lists__item"><Link to="/login" className="footer-lists__link">Login </Link></li>
                                    <li className="footer-lists__item"><Link to="/register" className="footer-lists__link">Register</Link></li>
                                    <li className="footer-lists__item"><Link to="/blog" className="footer-lists__link">Blog </Link></li>
                                    <li className="footer-lists__item"><Link to="/blog-details" className="footer-lists__link">Blog Details</Link></li>
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

            {/* bottom Footer */}
            <div className="bottom-footer">
                <div className="container container-two">
                    <div className="bottom-footer__inner flx-between gap-3">
                        <p className="bottom-footer__text font-14"> Copyright &copy; {new Date().getFullYear()} DPmarket, All rights reserved.</p>
                        <div className="footer-links">
                            <Link to="#" className="footer-link font-14">Terms of service</Link>
                            <Link to="#" className="footer-link font-14">Privacy Policy</Link>
                            <Link to="/contact" className="footer-link font-14">cookies</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* ==================== Footer End Here ==================== */}
        </>
    );
};

export default BlogPage;