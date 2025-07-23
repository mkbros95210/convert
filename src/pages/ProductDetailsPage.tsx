import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
// Depending on your project's Bootstrap setup, you might import Bootstrap JS here:
// import * as bootstrap from 'bootstrap'; 
// If Bootstrap JS is globally available (e.g., from CDN in index.html),
// the `bootstrap.Tooltip` call below will work. Otherwise, you'd use a React-specific
// tooltip library or manage state for tooltips manually.

const ProductDetailsPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('product-details');
    const [showSocialShare, setShowSocialShare] = useState(false);
    const [showLicenseDropdown, setShowLicenseDropdown] = useState(false);
    const [selectedLicense, setSelectedLicense] = useState('Regular License');
    const [extendedSupportChecked, setExtendedSupportChecked] = useState(false);

    const socialShareRef = useRef<HTMLDivElement>(null);
    const licenseDropdownRef = useRef<HTMLDivElement>(null);

    // Effect for initializing Bootstrap tooltips (requires Bootstrap JS to be loaded)
    useEffect(() => {
        const tooltipTriggerList = Array.from(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
        const tooltipList = tooltipTriggerList.map(tooltipTriggerEl => new (window as any).bootstrap.Tooltip(tooltipTriggerEl));

        // Cleanup function to destroy tooltips when component unmounts
        return () => {
            tooltipList.forEach(tooltip => tooltip.dispose());
        };
    }, []);

    // Effect for handling clicks outside dropdowns
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (socialShareRef.current && !socialShareRef.current.contains(event.target as Node)) {
                setShowSocialShare(false);
            }
            if (licenseDropdownRef.current && !licenseDropdownRef.current.contains(event.target as Node)) {
                setShowLicenseDropdown(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleTabChange = (tabId: string) => {
        setActiveTab(tabId);
    };

    const handleScreenshotClick = (e: React.MouseEvent) => {
        e.preventDefault();
        // In a real application, you would integrate a React-friendly lightbox here.
        // For example, using a state to control the lightbox visibility and pass image data.
        alert('Showing product screenshots!');
        // const images = JSON.parse(e.currentTarget.getAttribute('data-images') || '[]');
        // console.log('Screenshots:', images);
        // Implement your lightbox logic here.
    };

    const handleLicenseSelect = (licenseName: string) => {
        setSelectedLicense(licenseName);
        setShowLicenseDropdown(false);
    };

    const handleExtendedSupportChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setExtendedSupportChecked(e.target.checked);
    };

    return (
        <>
            {/* Preloader - Typically handled globally in a React app */}
            {/*
            <div className="loader-mask">
                <div className="loader">
                    <div></div>
                    <div></div>
                </div>
            </div>
            */}

            {/* Overlay - Typically handled globally in a React app */}
            {/* <div className="overlay"></div> */}
            {/* <div className="side-overlay"></div> */}

            {/* Scroll to Top - Typically handled globally in a React app */}
            {/*
            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>
            */}

            {/* Mobile Menu - Typically handled by a global Header/Layout component */}
            <div className="mobile-menu d-lg-none d-block">
                <button type="button" className="close-button"> <i className="las la-times"></i> </button>
                <div className="mobile-menu__inner">
                    <Link to="/" className="mobile-menu__logo">
                        <img src="/assets/images/logo/logo.png" alt="Logo" className="white-version" />
                        <img src="/assets/images/logo/white-logo-two.png" alt="Logo" className="dark-version" />
                    </Link>
                    <div className="mobile-menu__menu">
                        <ul className="nav-menu flx-align nav-menu--mobile">
                            <li className="nav-menu__item has-submenu">
                                <a href="javascript:void(0)" className="nav-menu__link">Home</a>
                                <ul className="nav-submenu">
                                    <li className="nav-submenu__item">
                                        <Link to="/" className="nav-submenu__link"> Home One</Link>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <Link to="/index-two" className="nav-submenu__link"> Home Two</Link>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <Link to="/index-three" className="nav-submenu__link"> Home Three</Link>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-menu__item has-submenu">
                                <a href="javascript:void(0)" className="nav-menu__link">Products</a>
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
                                <a href="javascript:void(0)" className="nav-menu__link">Pages</a>
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
                                <a href="javascript:void(0)" className="nav-menu__link">Blog</a>
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
                                    <img src="/assets/images/icons/user.svg" alt="" />
                                </span>Create Account
                            </Link>
                            <div className="language-select flx-align select-has-icon">
                                <img src="/assets/images/icons/globe.svg" alt="" className="globe-icon white-version" />
                                <img src="/assets/images/icons/globe-white.svg" alt="" className="globe-icon dark-version" />
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

            {/* Header - Typically handled by a global Header/Layout component */}
            <header className="header">
                <div className="container container-full">
                    <nav className="header-inner flx-between">
                        <div className="logo">
                            <Link to="/" className="link white-version">
                                <img src="/assets/images/logo/logo.png" alt="Logo" />
                            </Link>
                            <Link to="/" className="link dark-version">
                                <img src="/assets/images/logo/white-logo.png" alt="Logo" />
                            </Link>
                        </div>

                        <div className="header-menu d-lg-block d-none">
                            <ul className="nav-menu flx-align ">
                                <li className="nav-menu__item has-submenu">
                                    <a href="javascript:void(0)" className="nav-menu__link">Home</a>
                                    <ul className="nav-submenu">
                                        <li className="nav-submenu__item">
                                            <Link to="/" className="nav-submenu__link"> Home One</Link>
                                        </li>
                                        <li className="nav-submenu__item">
                                            <Link to="/index-two" className="nav-submenu__link"> Home Two</Link>
                                        </li>
                                        <li className="nav-submenu__item">
                                            <Link to="/index-three" className="nav-submenu__link"> Home Three</Link>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-menu__item has-submenu">
                                    <a href="javascript:void(0)" className="nav-menu__link">Products</a>
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
                                    <a href="javascript:void(0)" className="nav-menu__link">Pages</a>
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
                                    <a href="javascript:void(0)" className="nav-menu__link">Blog</a>
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

                        <div className="header-right flx-align">
                            <Link to="/cart" className="header-right__button cart-btn position-relative">
                                <img src="/assets/images/icons/cart.svg" alt="" className="white-version" />
                                <img src="/assets/images/icons/cart-white.svg" alt="" className="dark-version" />
                                <span className="qty-badge font-12">0</span>
                            </Link>

                            <div className="theme-switch-wrapper position-relative">
                                <label className="theme-switch" htmlFor="checkbox">
                                    <input type="checkbox" className="d-none" id="checkbox" />
                                    <span className="slider text-black header-right__button white-version">
                                        <img src="/assets/images/icons/sun.svg" alt="" />
                                    </span>
                                    <span className="slider text-black header-right__button dark-version">
                                        <img src="/assets/images/icons/moon.svg" alt="" />
                                    </span>
                                </label>
                            </div>

                            <div className="header-right__inner gap-3 flx-align d-lg-flex d-none">
                                <Link to="/register" className="btn btn-main pill">
                                    <span className="icon-left icon">
                                        <img src="/assets/images/icons/user.svg" alt="" />
                                    </span>Create Account
                                </Link>
                                <div className="language-select flx-align select-has-icon">
                                    <img src="/assets/images/icons/globe.svg" alt="" className="globe-icon white-version" />
                                    <img src="/assets/images/icons/globe-white.svg" alt="" className="globe-icon dark-version" />
                                    <select className="select py-0 ps-2 border-0 fw-500">
                                        <option value="1">Eng</option>
                                        <option value="2">Bn</option>
                                        <option value="3">Eur</option>
                                        <option value="4">Urd</option>
                                    </select>
                                </div>
                            </div>
                            <button type="button" className="toggle-mobileMenu d-lg-none"> <i className="las la-bars"></i> </button>
                        </nav>
                    </div>
            </header>

            {/* Breadcrumb Two Section Start */}
            <section className="breadcrumb border-bottom p-0 d-block section-bg position-relative z-index-1">
                <div className="breadcrumb-two">
                    <img src="/assets/images/gradients/breadcrumb-gradient-bg.png" alt="" className="bg--gradient" />
                    <div className="container container-two">
                        <div className="row justify-content-center">
                            <div className="col-lg-12">
                                <div className="breadcrumb-two-content">
                                    <ul className="breadcrumb-list flx-align gap-2 mb-2">
                                        <li className="breadcrumb-list__item font-14 text-body">
                                            <Link to="/" className="breadcrumb-list__link text-body hover-text-main">Home</Link>
                                        </li>
                                        <li className="breadcrumb-list__item font-14 text-body">
                                            <span className="breadcrumb-list__icon font-10"><i className="fas fa-chevron-right"></i></span>
                                        </li>
                                        <li className="breadcrumb-list__item font-14 text-body">
                                            <Link to="/all-product" className="breadcrumb-list__link text-body hover-text-main">Products</Link>
                                        </li>
                                        <li className="breadcrumb-list__item font-14 text-body">
                                            <span className="breadcrumb-list__icon font-10"><i className="fas fa-chevron-right"></i></span>
                                        </li>
                                        <li className="breadcrumb-list__item font-14 text-body">
                                            <span className="breadcrumb-list__text">SaaS</span>
                                        </li>
                                    </ul>
                                    <h3 className="breadcrumb-two-content__title mb-3 text-capitalize">Quantum: SaaS Landing Page WordPress Theme</h3>
                                    <div className="breadcrumb-content flx-align gap-3">
                                        <div className="breadcrumb-content__item text-heading fw-500 flx-align gap-2">
                                            <span className="text">By <a href="#" className="link text-main fw-600">Oviousdev</a> </span>
                                        </div>
                                        <div className="breadcrumb-content__item text-heading fw-500 flx-align gap-2">
                                            <span className="icon">
                                                <img src="/assets/images/icons/cart-icon.svg" alt="" className="white-version" />
                                                <img src="/assets/images/icons/cart-white.svg" alt="" className="dark-version w-20" />
                                            </span>
                                            <span className="text">158 sales</span>
                                        </div>
                                        <div className="breadcrumb-content__item text-heading fw-500 flx-align gap-2">
                                            <span className="icon">
                                                <img src="/assets/images/icons/check-icon.svg" alt="" className="white-version" />
                                                <img src="/assets/images/icons/check-icon-white.svg" alt="" className="dark-version" />
                                            </span>
                                            <span className="text">Recently Updated</span>
                                        </div>
                                        <div className="breadcrumb-content__item text-heading fw-500 flx-align gap-2">
                                            <span className="icon">
                                                <img src="/assets/images/icons/check-icon.svg" alt="" className="white-version" />
                                                <img src="/assets/images/icons/check-icon-white.svg" alt="" className="dark-version" />
                                            </span>
                                            <span className="text">Well Documented</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container container-two">
                    <div className="breadcrumb-tab flx-wrap align-items-start gap-lg-4 gap-2">
                        <ul className="nav tab-bordered nav-pills" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === 'product-details' ? 'active' : ''}`}
                                    onClick={() => handleTabChange('product-details')}
                                    id="pills-product-details-tab"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-product-details"
                                    aria-selected={activeTab === 'product-details'}
                                >
                                    Product Details
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === 'rating' ? 'active' : ''}`}
                                    onClick={() => handleTabChange('rating')}
                                    id="pills-rating-tab"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-rating"
                                    aria-selected={activeTab === 'rating'}
                                >
                                    <span className="d-flex align-items-center gap-1">
                                        <span className="star-rating">
                                            <span className="star-rating__item font-11"><i className="fas fa-star"></i></span>
                                            <span className="star-rating__item font-11"><i className="fas fa-star"></i></span>
                                            <span className="star-rating__item font-11"><i className="fas fa-star"></i></span>
                                            <span className="star-rating__item font-11"><i className="fas fa-star"></i></span>
                                            <span className="star-rating__item font-11"><i className="fas fa-star"></i></span>
                                        </span>
                                        <span className="star-rating__text text-body"> 5.0</span>
                                        <span className="star-rating__text text-body"> (180)</span>
                                    </span>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeTab === 'comments' ? 'active' : ''}`}
                                    onClick={() => handleTabChange('comments')}
                                    id="pills-comments-tab"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-comments"
                                    aria-selected={activeTab === 'comments'}
                                >
                                    Comments (50)
                                </button>
                            </li>
                        </ul>
                        <div className="social-share" ref={socialShareRef}>
                            <button type="button" className="social-share__button" onClick={() => setShowSocialShare(!showSocialShare)}>
                                <img src="/assets/images/icons/share-icon.svg" alt="" />
                            </button>
                            <div className={`social-share__icons ${showSocialShare ? 'show' : ''}`}>
                                <ul className="social-icon-list colorful-style">
                                    <li className="social-icon-list__item">
                                        <a href="https://www.facebook.com/" className="social-icon-list__link text-body flex-center" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li className="social-icon-list__item">
                                        <a href="https://www.twitter.com/" className="social-icon-list__link text-body flex-center" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin-in"></i></a>
                                    </li>
                                    <li className="social-icon-list__item">
                                        <a href="https://www.google.com/" className="social-icon-list__link text-body flex-center" target="_blank" rel="noopener noreferrer"> <i className="fab fa-twitter"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Breadcrumb Two Section End */}

            {/* Product Details Section Start */}
            <div className="product-details mt-32 padding-b-120">
                <div className="container container-two">
                    <div className="row gy-4">
                        <div className="col-lg-8">
                            <div className="tab-content" id="pills-tabContent">
                                {activeTab === 'product-details' && (
                                    <div className="tab-pane fade show active" id="pills-product-details" role="tabpanel" aria-labelledby="pills-product-details-tab" tabIndex={0}>
                                        <div className="product-details">
                                            <div className="product-details__thumb">
                                                <img src="/assets/images/thumbs/product-details.png" alt="" />
                                            </div>
                                            <div className="product-details__buttons flx-align justify-content-center gap-3">
                                                <a href="#" className="btn btn-main d-inline-flex align-items-center gap-2 pill px-sm-5 justify-content-center">Live Preview
                                                    <img src="/assets/images/icons/eye-outline.svg" alt="" />
                                                </a>
                                                <a href="#" className="screenshot-btn btn btn-white pill px-sm-5" data-images='["/assets/images/thumbs/product-details.png", "/assets/images/thumbs/product-details.png"]' onClick={handleScreenshotClick}>Screenshot</a>
                                            </div>

                                            <p className="product-details__desc">System management saas products, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>

                                            <div className="product-details__item">
                                                <h5 className="product-details__title mb-3">Template Features</h5>
                                                <ul className="product-list">
                                                    <li className="product-list__item">Modern and Professional design</li>
                                                    <li className="product-list__item">Built with Elementor Pro</li>
                                                    <li className="product-list__item">100% Responsive & mobile-friendly</li>
                                                    <li className="product-list__item">12+ pre-built templates</li>
                                                    <li className="product-list__item">Easy to customize</li>
                                                    <li className="product-list__item">Fully responsive website</li>
                                                </ul>
                                            </div>
                                            <div className="product-details__item">
                                                <h5 className="product-details__title mb-3">Layout Features</h5>
                                                <ul className="product-list">
                                                    <li className="product-list__item">One-Click demo import</li>
                                                    <li className="product-list__item">Unlimited color style</li>
                                                    <li className="product-list__item">850+ google fonts</li>
                                                    <li className="product-list__item">Powered by dpmarket</li>
                                                    <li className="product-list__item">Hight resolution images</li>
                                                    <li className="product-list__item">Easy to customize</li>
                                                </ul>
                                            </div>
                                            <div className="product-details__item">
                                                <h5 className="product-details__title mb-3">Font Family</h5>
                                                <ul className="product-list">
                                                    <li className="product-list__item text-heading">
                                                        <a href="https://fonts.google.com/specimen/Fira+Sans?query=fira" className="link text-body hover-text-main hover-text-decoration-underline" target="_blank" rel="noopener noreferrer">Fira Sans</a>
                                                    </li>
                                                    <li className="product-list__item text-heading">
                                                        <a href="https://fonts.google.com/specimen/Inter?query=inter" className="link text-body hover-text-main hover-text-decoration-underline" target="_blank" rel="noopener noreferrer">Inter</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-details__item">
                                                <h5 className="product-details__title mb-3">Support</h5>
                                                <p className="product-details__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                                            </div>

                                            <div className="more-item">
                                                <div className="flx-between mb-4">
                                                    <h5 className="more-item__title">More Items</h5>
                                                    <Link to="/profile" className="text-heading fw-500 hover-text-decoration-underline">View Author Profile</Link>
                                                </div>
                                                <div className="more-item__content flx-align">
                                                    <div className="more-item__item">
                                                        <Link to="/all-product" className="link w-100 h-100 d-block">
                                                            <img src="/assets/images/thumbs/more-item1.png" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="more-item__item">
                                                        <Link to="/all-product" className="link w-100 h-100 d-block">
                                                            <img src="/assets/images/thumbs/more-item2.png" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="more-item__item">
                                                        <Link to="/all-product" className="link w-100 h-100 d-block">
                                                            <img src="/assets/images/thumbs/more-item3.png" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="more-item__item">
                                                        <Link to="/all-product" className="link w-100 h-100 d-block">
                                                            <img src="/assets/images/thumbs/more-item4.png" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="more-item__item">
                                                        <Link to="/all-product" className="link w-100 h-100 d-block">
                                                            <img src="/assets/images/thumbs/more-item5.png" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="more-item__item">
                                                        <Link to="/all-product" className="link w-100 h-100 d-block">
                                                            <img src="/assets/images/thumbs/more-item6.png" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="more-item__item">
                                                        <Link to="/all-product" className="link w-100 h-100 d-block">
                                                            <img src="/assets/images/thumbs/more-item7.png" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="more-item__item">
                                                        <Link to="/all-product" className="link w-100 h-100 d-block">
                                                            <img src="/assets/images/thumbs/more-item8.png" alt="" />
                                                        </Link>
                                                    </div>
                                                    <div className="more-item__item">
                                                        <Link to="/all-product" className="link w-100 h-100 d-block">
                                                            <img src="/assets/images/thumbs/more-item9.png" alt="" />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'rating' && (
                                    <div className="tab-pane fade show active" id="pills-rating" role="tabpanel" aria-labelledby="pills-rating-tab" tabIndex={0}>
                                        <div className="product-review-wrapper">
                                            <div className="product-review">
                                                <div className="product-review__top flx-between">
                                                    <div className="product-review__rating flx-align">
                                                        <div className="d-flex align-items-center gap-1">
                                                            <ul className="star-rating">
                                                                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                            </ul>
                                                            <span className="star-rating__text text-body"> 5.0</span>
                                                        </div>
                                                        <span className="product-review__reason">For <span className="product-review__subject">Customer Support</span> </span>
                                                    </div>
                                                    <div className="product-review__date">
                                                        by <a href="#" className="product-review__user text--base">John Doe </a> 2 month ago
                                                    </div>
                                                </div>
                                                <div className="product-review__body">
                                                    <p className="product-review__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam itaque vitae ex possimus delectus? Voluptas expedita accusantium aperiam quo quod dolore dignissimos rerum praesentium deserunt libero recusandae quisquam est accusamus eos dolorum sit explicabo, sapiente pariatur voluptates veniam aut veritatis, magnam velit similique! Ex similique magni labore aperiam, eius quas molestiae accusantium porro eaque esse minus amet doloribus quo odit illo doloremque.</p>
                                                </div>
                                            </div>
                                            <div className="product-review">
                                                <div className="product-review__top flx-between">
                                                    <div className="product-review__rating flx-align">
                                                        <div className="d-flex align-items-center gap-1">
                                                            <ul className="star-rating">
                                                                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                            </ul>
                                                            <span className="star-rating__text text-body"> 5.0</span>
                                                        </div>
                                                        <span className="product-review__reason">For <span className="product-review__subject">Customer Support</span> </span>
                                                    </div>
                                                    <div className="product-review__date">
                                                        by <a href="#" className="product-review__user text--base">John Doe </a> 2 month ago
                                                    </div>
                                                </div>
                                                <div className="product-review__body">
                                                    <p className="product-review__desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam itaque vitae ex possimus delectus? Voluptas expedita accusantium aperiam quo quod dolore dignissimos rerum praesentium deserunt libero recusandae quisquam est accusamus eos dolorum sit explicabo, sapiente pariatur voluptates veniam aut veritatis, magnam velit similique! Ex similique magni labore aperiam, eius quas molestiae accusantium porro eaque esse minus amet doloribus quo odit illo doloremque.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === 'comments' && (
                                    <div className="tab-pane fade show active" id="pills-comments" role="tabpanel" aria-labelledby="pills-comments-tab" tabIndex={0}>
                                        <div className="comment mt-64 mb-64">
                                            <h5 className="mb-32">2 Comments</h5>
                                            <ul className="comment-list">
                                                <li className="comment-list__item d-flex align-items-start gap-sm-4 gap-3">
                                                    <div className="comment-list__thumb flex-shrink-0">
                                                        <img src="/assets/images/thumbs/comment1.png" className="cover-img" alt="" />
                                                    </div>
                                                    <div className="comment-list__content">
                                                        <div className="flx-between gap-2 align-items-start">
                                                            <div>
                                                                <h6 className="comment-list__name font-18 mb-sm-2 mb-1">Jenny Wilson</h6>
                                                                <span className="comment-list__date font-14">Jan 21, 2024 at 11:25 pm</span>
                                                            </div>
                                                            <a className="comment-list__reply fw-500 flx-align gap-2 hover-text-decoration-underline" href="#comment-box">
                                                                Reply
                                                                <span className="icon"><img src="/assets/images/icons/reply-icon.svg" alt="" /></span>
                                                            </a>
                                                        </div>
                                                        <p className="comment-list__desc mt-3">Lorem ipsum dolor sit amet consectetur. Nec nunc pellentesque massa pretium. Quam sapien nec venenatis vivamus sed cras faucibus mi viverra. Quam faucibus morbi cras vitae neque. Necnunc pellentesque massa pretium.</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <ul className="comment-list comment-list--two">
                                                        <li className="comment-list__item d-flex align-items-start gap-sm-4 gap-3">
                                                            <div className="comment-list__thumb flex-shrink-0">
                                                                <img src="/assets/images/thumbs/comment2.png" className="cover-img" alt="" />
                                                            </div>
                                                            <div className="comment-list__content">
                                                                <div className="flx-between gap-2 align-items-start">
                                                                    <div>
                                                                        <h6 className="comment-list__name font-18 mb-sm-2 mb-1">Courtney Henry</h6>
                                                                        <span className="comment-list__date font-14">Jan 21, 2024 at 11:25 pm</span>
                                                                    </div>
                                                                    <a className="comment-list__reply fw-500 flx-align gap-2 hover-text-decoration-underline" href="#comment-box">
                                                                        Reply
                                                                        <span className="icon"><img src="/assets/images/icons/reply-icon.svg" alt="" /></span>
                                                                    </a>
                                                                </div>
                                                                <p className="comment-list__desc mt-3">Lorem ipsum dolor sit amet consectetur. Nec nunc pellentesque massa pretium. Quam sapien nec venenatis vivamus sed cras faucibus.</p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="product-sidebar section-bg">
                                <div className="product-sidebar__top position-relative flx-between gap-1">
                                    <button
                                        type="button"
                                        className="btn-has-dropdown font-heading font-18"
                                        onClick={() => setShowLicenseDropdown(!showLicenseDropdown)}
                                    >
                                        {selectedLicense}
                                    </button>
                                    <div className={`license-dropdown ${showLicenseDropdown ? 'active' : ''}`} ref={licenseDropdownRef}>
                                        <div
                                            className={`license-dropdown__item cursor-pointer mb-3 pb-3 border-bottom ${selectedLicense === 'Regular License' ? 'activeSelectItem' : ''}`}
                                            onClick={() => handleLicenseSelect('Regular License')}
                                        >
                                            <h6 className="license-dropdown__title font-body mb-1 font-16">Regular License</h6>
                                            <p className="license-dropdown__desc font-13">Use, by you or one client, in a solitary finished result which end clients are not charged for. The complete cost incorporates the thing cost and a purchaser expense..</p>
                                        </div>
                                        <div
                                            className={`license-dropdown__item cursor-pointer ${selectedLicense === 'Extended License' ? 'activeSelectItem' : ''}`}
                                            onClick={() => handleLicenseSelect('Extended License')}
                                        >
                                            <h6 className="license-dropdown__title font-body mb-1 font-16">Extended License</h6>
                                            <p className="license-dropdown__desc font-13">Use, by you or one client, in a solitary final result which end clients can be charged for. The all out cost incorporates the thing cost and a purchaser expense.</p>
                                        </div>
                                        <div className="mt-3 pt-2 border-top text-center ">
                                            <a href="#" className="link hover-text-decoration-underline font-14 text-main fw-500">View License Details</a>
                                        </div>
                                    </div>
                                    <h6 className="product-sidebar__title">$1580.00</h6>
                                </div>

                                <ul className="sidebar-list">
                                    <li className="sidebar-list__item flx-align gap-2 font-14 fw-300 mb-2">
                                        <span className="icon"><img src="/assets/images/icons/check-cirlce.svg" alt="" /></span>
                                        <span className="text">Quality verified</span>
                                    </li>
                                    <li className="sidebar-list__item flx-align gap-2 font-14 fw-300 mb-2">
                                        <span className="icon"><img src="/assets/images/icons/check-cirlce.svg" alt="" /></span>
                                        <span className="text">Use for a single project</span>
                                    </li>
                                    <li className="sidebar-list__item flx-align gap-2 font-14 fw-300">
                                        <span className="icon"><img src="/assets/images/icons/check-cirlce.svg" alt="" /></span>
                                        <span className="text">Non-paying users only</span>
                                    </li>
                                </ul>

                                <div className="flx-between mt-3">
                                    <div className="common-check mb-0">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="extendedSupport"
                                            id="extended"
                                            checked={extendedSupportChecked}
                                            onChange={handleExtendedSupportChange}
                                        />
                                        <label className="form-check-label mb-0 fw-300 text-body" htmlFor="extended">Extended support 12 month</label>
                                    </div>
                                    <div className="flx-align gap-2">
                                        <span className="product-item__prevPrice text-decoration-line-through">$12</span>
                                        <h6 className="product-item__price mb-0 font-14 fw-500">$7.25</h6>
                                    </div>
                                </div>
                                <button type="button" className="btn btn-main d-flex w-100 justify-content-center align-items-center gap-2 pill px-sm-5 mt-32">
                                    <img src="/assets/images/icons/add-to-cart.svg" alt="" />
                                    Add To Cart
                                </button>

                                <div className="author-details">
                                    <div className="d-flex align-items-center gap-2">
                                        <div className="author-details__thumb flex-shrink-0">
                                            <img src="/assets/images/thumbs/author-details-img.png" alt="" />
                                        </div>
                                        <div className="author-details__content">
                                            <h6 className="author-details__name font-18 mb-2"><Link to="/profile" className="link hover-text-main">Oviousdev</Link></h6>
                                            <span className="d-flex align-items-center gap-1">
                                                <span className="star-rating">
                                                    <span className="star-rating__item font-11"><i className="fas fa-star"></i></span>
                                                    <span className="star-rating__item font-11"><i className="fas fa-star"></i></span>
                                                    <span className="star-rating__item font-11"><i className="fas fa-star"></i></span>
                                                    <span className="star-rating__item font-11"><i className="fas fa-star"></i></span>
                                                    <span className="star-rating__item font-11"><i className="fas fa-star"></i></span>
                                                </span>
                                                <span className="star-rating__text text-body"> 5.0</span>
                                            </span>
                                        </div>
                                    </div>

                                    <ul className="badge-list flx-align gap-2 mt-3">
                                        <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                            <img src="/assets/images/thumbs/badge1.png" alt="" />
                                        </li>
                                        <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                            <img src="/assets/images/thumbs/badge2.png" alt="" />
                                        </li>
                                        <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                            <img src="/assets/images/thumbs/badge3.png" alt="" />
                                        </li>
                                        <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                            <img src="/assets/images/thumbs/badge4.png" alt="" />
                                        </li>
                                        <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                            <img src="/assets/images/thumbs/badge5.png" alt="" />
                                        </li>
                                        <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                            <img src="/assets/images/thumbs/badge6.png" alt="" />
                                        </li>
                                        <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                            <img src="/assets/images/thumbs/badge7.png" alt="" />
                                        </li>
                                        <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                            <img src="/assets/images/thumbs/badge8.png" alt="" />
                                        </li>
                                    </ul>
                                    <Link to="/profile" className="btn btn-outline-light w-100 pill mt-32">View Portfolio</Link>
                                </div>

                                <ul className="meta-attribute">
                                    <li className="meta-attribute__item">
                                        <span className="name">Last Update</span>
                                        <span className="details">Feb 21, 2024</span>
                                    </li>
                                    <li className="meta-attribute__item">
                                        <span className="name">Published</span>
                                        <span className="details">Feb 15, 2024</span>
                                    </li>
                                    <li className="meta-attribute__item">
                                        <span className="name">Category</span>
                                        <span className="details">Themes</span>
                                    </li>
                                    <li className="meta-attribute__item">
                                        <span className="name">Widget Ready</span>
                                        <span className="details">Yes</span>
                                    </li>
                                    <li className="meta-attribute__item">
                                        <span className="name">High Resolution</span>
                                        <span className="details">Yes</span>
                                    </li>
                                    <li className="meta-attribute__item">
                                        <span className="name">Copatible with</span>
                                        <span className="details">
                                            <a href="#" className="hover-text-decoration-underline">Contact Form 7,</a>
                                            <a href="#" className="hover-text-decoration-underline"> Calendar,</a>
                                            <a href="#" className="hover-text-decoration-underline"> Elementor,</a>
                                            <a href="#" className="hover-text-decoration-underline"> Elementor Pro,</a>
                                            <a href="#" className="hover-text-decoration-underline"> WooCommerce 8.x.x</a>
                                        </span>
                                    </li>
                                    <li className="meta-attribute__item">
                                        <span className="name">File size</span>
                                        <span className="details">85 MB</span>
                                    </li>
                                    <li className="meta-attribute__item">
                                        <span className="name">Framework</span>
                                        <span className="details">Underscores</span>
                                    </li>
                                    <li className="meta-attribute__item">
                                        <span className="name">Software Version</span>
                                        <span className="details">
                                            <a href="#" className="hover-text-decoration-underline">WordPress 6.3.x,</a>
                                            <a href="#" className="hover-text-decoration-underline">WordPress 6.2.x,</a>
                                            <a href="#" className="hover-text-decoration-underline">WordPress 6.1.x,</a>
                                            <a href="#" className="hover-text-decoration-underline">WordPress 6.0.x,</a>
                                            <a href="#" className="hover-text-decoration-underline">WordPress 5.9.x,</a>
                                        </span>
                                    </li>
                                    <li className="meta-attribute__item">
                                        <span className="name">Marketplace Files Included</span>
                                        <span className="details">
                                            <a href="#" className="hover-text-decoration-underline">PHP Files,</a>
                                            <a href="#" className="hover-text-decoration-underline">CSS Files,</a>
                                            <a href="#" className="hover-text-decoration-underline">SCSS Files,</a>
                                            <a href="#" className="hover-text-decoration-underline">JS Files,</a>
                                        </span>
                                    </li>
                                    <li className="meta-attribute__item">
                                        <span className="name">Layout</span>
                                        <span className="details">Responsive</span>
                                    </li>
                                    <li className="meta-attribute__item">
                                        <span className="name">Tags</span>
                                        <span className="details">
                                            <a href="#" className="hover-text-decoration-underline">theme,</a>
                                            <a href="#" className="hover-text-decoration-underline">web design,</a>
                                            <a href="#" className="hover-text-decoration-underline">minimal design,</a>
                                            <a href="#" className="hover-text-decoration-underline">trendy,</a>
                                            <a href="#" className="hover-text-decoration-underline">responsive,</a>
                                            <a href="#" className="hover-text-decoration-underline">wordpress,</a>
                                            <a href="#" className="hover-text-decoration-underline">saas,</a>
                                            <a href="#" className="hover-text-decoration-underline">dashboard,</a>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Product Details Section End */}

            {/* Brand Section Start - Uses Slick Slider in original, static content here */}
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
            {/* Brand Section End */}

            {/* Footer Start Here - Typically handled by a global Footer component */}
            <footer className="footer-section">
                <img src="/assets/images/shapes/pattern.png" alt="" className="bg-pattern" />
                <img src="/assets/images/shapes/element1.png" alt="" className="element one" />
                <img src="/assets/images/shapes/element2.png" alt="" className="element two" />
                <img src="/assets/images/gradients/footer-gradient.png" alt="" className="bg--gradient" />

                <div className="container container-two">
                    <div className="row gy-5">
                        <div className="col-xl-3 col-sm-6">
                            <div className="footer-widget">
                                <div className="footer-widget__logo">
                                    <Link to="/"> <img src="/assets/images/logo/white-logo.png" alt="" /></Link>
                                </div>
                                <p className="footer-widget__desc">Lorem consultancy elitsed do eiusmod tempor inci didunt ut labore dolore magna aliqua sed do eiusmod.</p>
                                <div className="footer-widget__social">
                                    <ul className="social-icon-list">
                                        <li className="social-icon-list__item">
                                            <a href="https://www.facebook.com/" className="social-icon-list__link flx-center" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li className="social-icon-list__item">
                                            <a href="https://www.twitter.com/" className="social-icon-list__link flx-center" target="_blank" rel="noopener noreferrer"> <i className="fab fa-twitter"></i></a>
                                        </li>
                                        <li className="social-icon-list__item">
                                            <a href="https://www.linkedin.com/" className="social-icon-list__link flx-center" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin-in"></i></a>
                                        </li>
                                        <li className="social-icon-list__item">
                                            <a href="https://www.pinterest.com/" className="social-icon-list__link flx-center" target="_blank" rel="noopener noreferrer"> <i className="fab fa-pinterest-p"></i></a>
                                        </li>
                                        <li className="social-icon-list__item">
                                            <a href="https://www.youtube.com/" className="social-icon-list__link flx-center" target="_blank" rel="noopener noreferrer"> <i className="fab fa-youtube"></i></a>
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

            {/* Bottom Footer */}
            <div className="bottom-footer">
                <div className="container container-two">
                    <div className="bottom-footer__inner flx-between gap-3">
                        <p className="bottom-footer__text font-14"> Copyright &copy; 2024 DPmarket, All rights reserved.</p>
                        <div className="footer-links">
                            <a href="#" className="footer-link font-14">Terms of service</a>
                            <a href="#" className="footer-link font-14">Privacy Policy</a>
                            <Link to="/contact" className="footer-link font-14">cookies</Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End Here */}
        </>
    );
};

export default ProductDetailsPage;