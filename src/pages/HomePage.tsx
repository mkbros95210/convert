import React, { useState, useEffect } from 'react';

const HomePage: React.FC = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [showSaleOffer, setShowSaleOffer] = useState(true);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('pills-all'); // For Arrival Products tab

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
            if (currentTheme === 'dark') {
                setIsDarkMode(true);
            }
        }
    }, []);

    useEffect(() => {
        // Apply the main class to the body or a wrapper for theme changes
        // For this component, assuming `main` element is the root of the page content.
        const mainElement = document.querySelector('main');
        if (mainElement) {
            mainElement.className = `change-gradient ${isDarkMode ? 'dark-mode-active' : ''}`;
        }
        // This line is redundant if `data-theme` is set in toggleTheme, but ensures initial sync.
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');

    }, [isDarkMode]);

    const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTheme = e.target.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        setIsDarkMode(e.target.checked);
    };

    // Mobile menu toggle helper
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
        // Add/remove scroll-hide-sm and side-overlay classes to body/overlay if needed
        document.body.classList.toggle('scroll-hide-sm', !isMobileMenuOpen);
        document.querySelector('.side-overlay')?.classList.toggle('show', !isMobileMenuOpen);
    };
    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
        document.body.classList.remove('scroll-hide-sm');
        document.querySelector('.side-overlay')?.classList.remove('show');
    };

    // For dynamic `activePage` class on navigation (simple check, full router integration would be better)
    const isNavLinkActive = (pathSegment: string) => window.location.pathname.includes(pathSegment);

    // Function to render star ratings
    const renderStars = (count: number, sizeClass = "font-11") => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <li key={i} className={`star-rating__item ${sizeClass}`}>
                    <i className="fas fa-star"></i>
                </li>
            );
        }
        return <ul className="star-rating">{stars}</ul>;
    };

    // Product data for tabs - simplify repetition
    const products = [
        { id: 1, img: "product-img1.png", title: "SaaS dashboard digital products Title here", author: "themepix", price: "$120", prevPrice: "$259", sales: "1200 Sales" },
        { id: 2, img: "product-img2.png", title: "SaaS dashboard digital products Title here", author: "themepix", price: "$129", prevPrice: "$236", sales: "100 Sales" },
        { id: 3, img: "product-img3.png", title: "SaaS dashboard digital products Title here", author: "themepix", price: "$79", prevPrice: "$99", sales: "900 Sales" },
        { id: 4, img: "product-img4.png", title: "SaaS dashboard digital products Title here", author: "themepix", price: "$59", prevPrice: "$129", sales: "1225 Sales" },
        { id: 5, img: "product-img5.png", title: "SaaS dashboard digital products Title here", author: "themepix", price: "$99", prevPrice: "$129", sales: "1300 Sales" },
        { id: 6, img: "product-img6.png", title: "SaaS dashboard digital products Title here", author: "themepix", price: "$129", prevPrice: "$256", sales: "200 Sales" },
        { id: 7, img: "product-img7.png", title: "SaaS dashboard digital products Title here", author: "themepix", price: "$129", prevPrice: "$259", sales: "500 Sales" },
        { id: 8, img: "product-img8.png", title: "SaaS dashboard digital products Title here", author: "themepix", price: "$79", prevPrice: "$99", sales: "2100 Sales" },
    ];

    const featuredProducts = [
        { id: 9, img: "product-img9.png", title: "SaaS dashboard digital products Title here", author: "themepix", price: "$120", prevPrice: "$259", sales: "1200 Sales" },
        { id: 10, img: "product-img10.png", title: "SaaS dashboard digital products Title here", author: "themepix", price: "$129", prevPrice: "$236", sales: "100 Sales" },
        { id: 11, img: "product-img11.png", title: "SaaS dashboard digital products Title here", author: "themepix", price: "$79", prevPrice: "$99", sales: "900 Sales" },
        { id: 12, img: "product-img4.png", title: "SaaS dashboard digital products Title here", author: "themepix", price: "$59", prevPrice: "$129", sales: "1225 Sales" }, // Duplicated from above, intentional based on HTML
    ];

    const sellingProducts = [
        { id: 13, img: "product-img12.png", title: "Title here digital products new marketplace theme", author: "themepix", price: "$56", prevPrice: "$65", sales: "1230 Sales", starSize: "font-16" },
        { id: 14, img: "product-img13.png", title: "Title here digital products new marketplace theme", author: "themepix", price: "$32", prevPrice: "$40", sales: "1230 Sales", starSize: "font-16" },
        { id: 15, img: "product-img14.png", title: "Title here digital products new marketplace theme", author: "themepix", price: "$90", prevPrice: "$120", sales: "1230 Sales", starSize: "font-16" },
        { id: 16, img: "product-img13.png", title: "Title here digital products new marketplace theme", author: "themepix", price: "$56", prevPrice: "$54", sales: "1230 Sales", starSize: "font-16" },
    ];

    const popularCategories = [
        { name: "WordPress", icon: "popular-icon1.svg", qty: "15,296" },
        { name: "Plugin", icon: "popular-icon2.svg", qty: "15,296" },
        { name: "HTML", icon: "popular-icon3.svg", qty: "15,296" },
        { name: "Java Script", icon: "popular-icon4.svg", qty: "15,296" },
        { name: "Mobile App", icon: "popular-icon5.svg", qty: "15,296" },
        { name: "PHP Script", icon: "popular-icon6.svg", qty: "15,296" },
        { name: "Java Script", icon: "popular-icon4.svg", qty: "15,296" }, // Duplicated in original HTML
    ];

    const techIcons = [
        { name: "WordPress", img: "tech-icon1.png", imgDark: "tech-icon-white1.png" },
        { name: "Laravel", img: "tech-icon2.png", imgDark: null },
        { name: "PHP", img: "tech-icon3.png", imgDark: "tech-icon-white3.png" },
        { name: "HTML", img: "tech-icon4.png", imgDark: null },
        { name: "Sketch", img: "tech-icon5.png", imgDark: null },
        { name: "Figma", img: "tech-icon6.png", imgDark: null },
        { name: "Bootstrap", img: "tech-icon7.png", imgDark: null },
        { name: "Tailwind", img: "tech-icon8.png", imgDark: null },
        { name: "React", img: "tech-icon9.png", imgDark: null },
    ];

    const blogPosts = [
        { id: 1, img: "blog1.png", tag: "Hiring", date: "Jan 17, 2024", title: "How to hire a right business executive for your company" },
        { id: 2, img: "blog2.png", tag: "Workshop", date: "Jan 17, 2024", title: "The Gig Economy: Adapting to a Flexible Workforce" },
        { id: 3, img: "blog3.png", tag: "Project Management", date: "Jan 17, 2024", title: "The Future of Remote Work: Strategies for Success" },
    ];

    const brandLogos = [
        { id: 1, img: "brand-img1.png", imgDark: "brand-white-img1.png" },
        { id: 2, img: "brand-img2.png", imgDark: "brand-white-img2.png" },
        { id: 3, img: "brand-img3.png", imgDark: "brand-white-img3.png" },
        { id: 4, img: "brand-img4.png", imgDark: "brand-white-img4.png" },
        { id: 5, img: "brand-img5.png", imgDark: "brand-white-img5.png" },
        { id: 6, img: "brand-img3.png", imgDark: "brand-white-img3.png" }, // Duplicated
    ];


    // Helper for image paths
    const getImagePath = (imageName: string) => `/assets/images/${imageName}`;


    return (
        <main className="change-gradient">
            {/* Preloader, Overlay, Sidebar Overlay, Scroll to Top - Omitted as they are global UI elements usually handled outside a specific page component */}
            {/* The original HTML includes these directly in the body, before the main content.
                For React, these would typically be in App.tsx or a Layout component. */}

            {/* Sale Offer Start */}
            {showSaleOffer && (
                <div className="sale-offer">
                    <div className="container container-full">
                        <div className="sale-offer__content flx-between position-relative">
                            <div className="sale-offer__countdown">
                                <div className="countdown" data-date="14-10-2026" data-time="12:00">
                                    <div className="day"><span className="num"></span><span className="word"></span></div>
                                    <div className="hour"><span className="num"></span><span className="word"></span></div>
                                    <div className="min"><span className="num"></span><span className="word"></span></div>
                                    <div className="sec"><span className="num"></span><span className="word"></span></div>
                                </div>
                            </div>
                            <div className="sale-offer__discount flx-align gap-2">
                                <span className="sale-offer__text text-heading text-capitalize">New Year Flash Sale Offer</span>
                                <strong className="sale-offer__qty text-heading font-heading">45% OFF</strong>
                                <a href="" className="btn btn-sm btn-white pill fw-500">Shop Now</a>
                            </div>
                            <div className="sale-offer__button">
                                <button type="button" className="sale-offer__close text-heading" onClick={() => setShowSaleOffer(false)}>
                                    <i className="las la-times"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {/* Sale Offer End */}

            {/* Mobile Menu Start Here */}
            <div className={`mobile-menu d-lg-none d-block ${isMobileMenuOpen ? 'active' : ''}`}>
                <button type="button" className="close-button" onClick={closeMobileMenu}> <i className="las la-times"></i> </button>
                <div className="mobile-menu__inner">
                    <a href="" className="mobile-menu__logo">
                        <img src={getImagePath("logo/logo.png")} alt="Logo" className="white-version" />
                        <img src={getImagePath("logo/white-logo-two.png")} alt="Logo" className="dark-version" />
                    </a>
                    <div className="mobile-menu__menu">
                        <ul className="nav-menu flx-align nav-menu--mobile">
                            <li className={`nav-menu__item has-submenu ${isNavLinkActive('index') ? 'activePage' : ''}`}>
                                <a href="" className="nav-menu__link" onClick={(e) => e.preventDefault()}>Home</a>
                                <ul className="nav-submenu">
                                    <li className="nav-submenu__item">
                                        <a href="" className="nav-submenu__link"> Home One</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="" className="nav-submenu__link"> Home Two</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="" className="nav-submenu__link"> Home Three</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-menu__item has-submenu">
                                <a href="" className="nav-menu__link" onClick={(e) => e.preventDefault()}>Products</a>
                                <ul className="nav-submenu">
                                    <li className="nav-submenu__item">
                                        <a href="" className="nav-submenu__link"> All Products</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="" className="nav-submenu__link"> Product Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-menu__item has-submenu">
                                <a href="" className="nav-menu__link" onClick={(e) => e.preventDefault()}>Pages</a>
                                <ul className="nav-submenu">
                                    <li className="nav-submenu__item">
                                        <a href="" className="nav-submenu__link"> Profile</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="" className="nav-submenu__link"> Shopping Cart</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="" className="nav-submenu__link"> Mailing Address</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="" className="nav-submenu__link"> Payment Method</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="" className="nav-submenu__link"> Preview Order</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="" className="nav-submenu__link"> Dashboard</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-menu__item has-submenu">
                                <a href="" className="nav-menu__link" onClick={(e) => e.preventDefault()}>Blog</a>
                                <ul className="nav-submenu">
                                    <li className="nav-submenu__item">
                                        <a href="" className="nav-submenu__link"> Blog</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="" className="nav-submenu__link"> Blog Details</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="" className="nav-submenu__link"> Blog Details Sidebar</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-menu__item">
                                <a href="" className="nav-menu__link">Contact</a>
                            </li>
                        </ul>
                        <div className="header-right__inner d-lg-none my-3 gap-1 d-flex flx-align">
                            <a href="" className="btn btn-main pill">
                                <span className="icon-left icon">
                                    <img src={getImagePath("icons/user.svg")} alt="" />
                                </span>Create Account
                            </a>
                            <div className="language-select flx-align select-has-icon">
                                <img src={getImagePath("icons/globe.svg")} alt="" className="globe-icon white-version" />
                                <img src={getImagePath("icons/globe-white.svg")} alt="" className="globe-icon dark-version" />
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
            {/* Mobile Menu End Here */}

            {/* Header Start Here */}
            <header className="header">
                <div className="container container-full">
                    <nav className="header-inner flx-between">
                        {/* Logo Start */}
                        <div className="logo">
                            <a href="" className="link white-version">
                                <img src={getImagePath("logo/logo-two.png")} alt="Logo" />
                            </a>
                            <a href="" className="link dark-version">
                                <img src={getImagePath("logo/white-logo.png")} alt="Logo" />
                            </a>
                        </div>
                        {/* Logo End */}

                        {/* Menu Start */}
                        <div className="header-menu d-lg-block d-none">
                            <ul className="nav-menu flx-align">
                                <li className={`nav-menu__item has-submenu ${isNavLinkActive('index') ? 'activePage' : ''}`}>
                                    <a href="" className="nav-menu__link" onClick={(e) => e.preventDefault()}>Home</a>
                                    <ul className="nav-submenu">
                                        <li className="nav-submenu__item">
                                            <a href="" className="nav-submenu__link"> Home One</a>
                                        </li>
                                        <li className="nav-submenu__item">
                                            <a href="" className="nav-submenu__link"> Home Two</a>
                                        </li>
                                        <li className="nav-submenu__item">
                                            <a href="" className="nav-submenu__link"> Home Three</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-menu__item has-submenu">
                                    <a href="" className="nav-menu__link" onClick={(e) => e.preventDefault()}>Products</a>
                                    <ul className="nav-submenu">
                                        <li className="nav-submenu__item">
                                            <a href="" className="nav-submenu__link"> All Products</a>
                                        </li>
                                        <li className="nav-submenu__item">
                                            <a href="" className="nav-submenu__link"> Product Details</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-menu__item has-submenu">
                                    <a href="" className="nav-menu__link" onClick={(e) => e.preventDefault()}>Pages</a>
                                    <ul className="nav-submenu">
                                        <li className="nav-submenu__item">
                                            <a href="" className="nav-submenu__link"> Profile</a>
                                        </li>
                                        <li className="nav-submenu__item">
                                            <a href="" className="nav-submenu__link"> Shopping Cart</a>
                                        </li>
                                        <li className="nav-submenu__item">
                                            <a href="" className="nav-submenu__link"> Mailing Address</a>
                                        </li>
                                        <li className="nav-submenu__item">
                                            <a href="" className="nav-submenu__link"> Payment Method</a>
                                        </li>
                                        <li className="nav-submenu__item">
                                            <a href="" className="nav-submenu__link"> Preview Order</a>
                                        </li>
                                        <li className="nav-submenu__item">
                                            <a href="" className="nav-submenu__link"> Dashboard</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-menu__item has-submenu">
                                    <a href="" className="nav-menu__link" onClick={(e) => e.preventDefault()}>Blog</a>
                                    <ul className="nav-submenu">
                                        <li className="nav-submenu__item">
                                            <a href="" className="nav-submenu__link"> Blog</a>
                                        </li>
                                        <li className="nav-submenu__item">
                                            <a href="" className="nav-submenu__link"> Blog Details</a>
                                        </li>
                                        <li className="nav-submenu__item">
                                            <a href="" className="nav-submenu__link"> Blog Details Sidebar</a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-menu__item">
                                    <a href="" className="nav-menu__link">Contact</a>
                                </li>
                            </ul>
                        </div>
                        {/* Menu End */}

                        {/* Header Right start */}
                        <div className="header-right flx-align">
                            <a href="" className="header-right__button cart-btn position-relative">
                                <img src={getImagePath("icons/cart.svg")} alt="" className="white-version" />
                                <img src={getImagePath("icons/cart-white.svg")} alt="" className="dark-version" />
                                <span className="qty-badge font-12">0</span>
                            </a>

                            {/* Light Dark Mode */}
                            <div className="theme-switch-wrapper position-relative">
                                <label className="theme-switch" htmlFor="checkbox">
                                    <input type="checkbox" className="d-none" id="checkbox" checked={isDarkMode} onChange={toggleTheme} />
                                    <span className="slider text-black header-right__button white-version">
                                        <img src={getImagePath("icons/sun.svg")} alt="" />
                                    </span>
                                    <span className="slider text-black header-right__button dark-version">
                                        <img src={getImagePath("icons/moon.svg")} alt="" />
                                    </span>
                                </label>
                            </div>

                            <div className="header-right__inner gap-3 flx-align d-lg-flex d-none">
                                <a href="" className="btn btn-main pill">
                                    <span className="icon-left icon">
                                        <img src={getImagePath("icons/user.svg")} alt="" />
                                    </span>Create Account
                                </a>
                                <div className="language-select flx-align select-has-icon">
                                    <img src={getImagePath("icons/globe.svg")} alt="" className="globe-icon white-version" />
                                    <img src={getImagePath("icons/globe-white.svg")} alt="" className="globe-icon dark-version" />
                                    <select className="select py-0 ps-2 border-0 fw-500">
                                        <option value="1">Eng</option>
                                        <option value="2">Bn</option>
                                        <option value="3">Eur</option>
                                        <option value="4">Urd</option>
                                    </select>
                                </div>
                            </div>
                            <button type="button" className="toggle-mobileMenu d-lg-none" onClick={toggleMobileMenu}> <i className="las la-bars"></i> </button>
                        </div>
                        {/* Header Right End */}
                    </nav>
                </div>
            </header>
            {/* Header End Here */}

            {/* Banner Section Start */}
            <section className="hero section-bg z-index-1">
                <img src={getImagePath("gradients/banner-gradient.png")} alt="" className="bg--gradient white-version" />
                <img src={getImagePath("shapes/element-moon1.png")} alt="" className="element one" />
                <img src={getImagePath("shapes/element-moon2.png")} alt="" className="element two" />

                <div className="container container-two">
                    <div className="row align-items-center gy-sm-5 gy-4">
                        <div className="col-lg-6">
                            <div className="hero-inner position-relative pe-lg-5">
                                <div>
                                    <h1 className="hero-inner__title">2M+ curated digital products</h1>
                                    <p className="hero-inner__desc font-18">Explore the best premium themes and plugins available for sale. Our unique collection is hand-curated by experts. Find and buy the perfect premium theme today.</p>

                                    <div className="position-relative">
                                        <div className="search-box">
                                            <input type="text" className="common-input common-input--lg pill shadow-sm auto-suggestion-input" placeholder="Search theme, plugins & more..." />
                                            <button type="submit" className="btn btn-main btn-icon icon border-0"><img src={getImagePath("icons/search.svg")} alt="" /></button>
                                        </div>

                                        <ul className="auto-suggestion-list">
                                            <li><a href="" className="auto-suggestion-list__item w-100 text-body">Business in HTML</a></li>
                                            <li><a href="" className="auto-suggestion-list__item w-100 text-body">Business in WordPress</a></li>
                                            <li><a href="" className="auto-suggestion-list__item w-100 text-body">Business in CMS</a></li>
                                            <li><a href="" className="auto-suggestion-list__item w-100 text-body">Ecommerce in HTML</a></li>
                                            <li><a href="" className="auto-suggestion-list__item w-100 text-body">Ecommerce in WordPress</a></li>
                                            <li><a href="" className="auto-suggestion-list__item w-100 text-body">Ecommerce in CMS</a></li>
                                        </ul>
                                    </div>
                                    {/* Tech List Start */}
                                    <div className="product-category-list">
                                        {techIcons.map((item) => (
                                            <a key={item.name} href="" className="product-category-list__item" data-bs-toggle="tooltip" data-bs-placement="top" title={item.name}>
                                                <img src={getImagePath(`thumbs/${item.img}`)} alt="" className="white-version" />
                                                {item.imgDark && <img src={getImagePath(`thumbs/${item.imgDark}`)} alt="" className="dark-version" />}
                                            </a>
                                        ))}
                                    </div>
                                    {/* Tech List End */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="hero-thumb">
                                <img src={getImagePath("thumbs/banner-img.png")} alt="" />
                                <img src={getImagePath("shapes/dots.png")} alt="" className="dotted-img white-version" />
                                <img src={getImagePath("shapes/dots-white.png")} alt="" className="dotted-img dark-version" />
                                <img src={getImagePath("shapes/element2.png")} alt="" className="element two end-0" />

                                <div className="statistics animation bg-main text-center">
                                    <h5 className="statistics__amount text-white">50k</h5>
                                    <span className="statistics__text text-white font-14">Customers</span>
                                </div>

                                <div className="statistics style-two bg-white text-center">
                                    <h5 className="statistics__amount statistics__amount-two text-heading">22k</h5>
                                    <span className="statistics__text text-heading font-14">Themes & Plugins</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Banner Section End */}

            {/* Popular Section Start */}
            <section className="popular padding-y-120 overflow-hidden">
                <div className="container container-two">
                    <div className="section-heading style-left mb-64">
                        <h5 className="section-heading__title">Popular Categories</h5>
                    </div>
                    {/* Note: This is a slick slider. In React, you'd use a library like react-slick. */}
                    {/* For now, converting to static elements for demonstration. */}
                    <div className="popular-slider arrow-style-two row gy-4">
                        {popularCategories.map((category, index) => (
                            <div className="col-lg-2" key={index}>
                                <a href="" className="popular-item w-100">
                                    <span className="popular-item__icon">
                                        <img src={getImagePath(`icons/${category.icon}`)} alt="" />
                                    </span>
                                    <h6 className="popular-item__title font-18">{category.name}</h6>
                                    <span className="popular-item__qty text-body">{category.qty}</span>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div className="popular__button text-center">
                        <a href="" className="font-18 fw-600 text-heading hover-text-main text-decoration-underline font-heading">Explore More</a>
                    </div>
                </div>
            </section>
            {/* Popular Section End */}

            {/* Arrival Product Section Start */}
            <section className="arrival-product padding-y-120 section-bg position-relative z-index-1">
                <img src={getImagePath("gradients/product-gradient.png")} alt="" className="bg--gradient white-version" />
                <img src={getImagePath("shapes/element2.png")} alt="" className="element one" />

                <div className="container container-two">
                    <div className="section-heading">
                        <h3 className="section-heading__title">New Arrival Products</h3>
                    </div>

                    <ul className="nav common-tab justify-content-center nav-pills mb-48" id="pills-tab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${activeTab === 'pills-all' ? 'active' : ''}`}
                                id="pills-all-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-all"
                                type="button"
                                role="tab"
                                aria-controls="pills-all"
                                aria-selected={activeTab === 'pills-all'}
                                onClick={() => setActiveTab('pills-all')}
                            >
                                All Item
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${activeTab === 'pills-wordPress' ? 'active' : ''}`}
                                id="pills-wordPress-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-wordPress"
                                type="button"
                                role="tab"
                                aria-controls="pills-wordPress"
                                aria-selected={activeTab === 'pills-wordPress'}
                                onClick={() => setActiveTab('pills-wordPress')}
                            >
                                wordPress
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${activeTab === 'pills-php' ? 'active' : ''}`}
                                id="pills-php-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-php"
                                type="button"
                                role="tab"
                                aria-controls="pills-php"
                                aria-selected={activeTab === 'pills-php'}
                                onClick={() => setActiveTab('pills-php')}
                            >
                                php
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${activeTab === 'pills-siteTemplate' ? 'active' : ''}`}
                                id="pills-siteTemplate-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-siteTemplate"
                                type="button"
                                role="tab"
                                aria-controls="pills-siteTemplate"
                                aria-selected={activeTab === 'pills-siteTemplate'}
                                onClick={() => setActiveTab('pills-siteTemplate')}
                            >
                                site Template
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${activeTab === 'pills-blogging' ? 'active' : ''}`}
                                id="pills-blogging-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-blogging"
                                type="button"
                                role="tab"
                                aria-controls="pills-blogging"
                                aria-selected={activeTab === 'pills-blogging'}
                                onClick={() => setActiveTab('pills-blogging')}
                            >
                                blogging
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${activeTab === 'pills-marketing' ? 'active' : ''}`}
                                id="pills-marketing-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-marketing"
                                type="button"
                                role="tab"
                                aria-controls="pills-marketing"
                                aria-selected={activeTab === 'pills-marketing'}
                                onClick={() => setActiveTab('pills-marketing')}
                            >
                                marketing
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${activeTab === 'pills-plugins' ? 'active' : ''}`}
                                id="pills-plugins-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-plugins"
                                type="button"
                                role="tab"
                                aria-controls="pills-plugins"
                                aria-selected={activeTab === 'pills-plugins'}
                                onClick={() => setActiveTab('pills-plugins')}
                            >
                                plugins
                            </button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button
                                className={`nav-link ${activeTab === 'pills-uiTemplate' ? 'active' : ''}`}
                                id="pills-uiTemplate-tab"
                                data-bs-toggle="pill"
                                data-bs-target="#pills-uiTemplate"
                                type="button"
                                role="tab"
                                aria-controls="pills-uiTemplate"
                                aria-selected={activeTab === 'pills-uiTemplate'}
                                onClick={() => setActiveTab('pills-uiTemplate')}
                            >
                                UI Template
                            </button>
                        </li>
                    </ul>
                    <div className="tab-content" id="pills-tabContent">
                        {['pills-all', 'pills-wordPress', 'pills-php', 'pills-siteTemplate', 'pills-blogging', 'pills-marketing', 'pills-plugins', 'pills-uiTemplate'].map((tabId) => (
                            <div key={tabId} className={`tab-pane fade ${activeTab === tabId ? 'show active' : ''}`} id={tabId} role="tabpanel" aria-labelledby={`${tabId}-tab`} tabIndex={0}>
                                <div className="row gy-4">
                                    {products.map((product) => (
                                        <div className="col-xl-3 col-lg-4 col-sm-6" key={product.id}>
                                            <div className="product-item">
                                                <div className="product-item__thumb d-flex">
                                                    <a href="" className="link w-100">
                                                        <img src={getImagePath(`thumbs/${product.img}`)} alt="" className="cover-img" />
                                                    </a>
                                                    <button type="button" className="product-item__wishlist"><i className="fas fa-heart"></i></button>
                                                </div>
                                                <div className="product-item__content">
                                                    <h6 className="product-item__title">
                                                        <a href="" className="link">{product.title}</a>
                                                    </h6>
                                                    <div className="product-item__info flx-between gap-2">
                                                        <span className="product-item__author">
                                                            by
                                                            <a href="" className="link hover-text-decoration-underline"> {product.author}</a>
                                                        </span>
                                                        <div className="flx-align gap-2">
                                                            <h6 className="product-item__price mb-0">{product.price}</h6>
                                                            <span className="product-item__prevPrice text-decoration-line-through">{product.prevPrice}</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-item__bottom flx-between gap-2">
                                                        <div>
                                                            <span className="product-item__sales font-14 mb-2">{product.sales}</span>
                                                            <div className="d-flex align-items-center gap-1">
                                                                {renderStars(5)}
                                                                <span className="star-rating__text text-heading fw-500 font-14"> (16)</span>
                                                            </div>
                                                        </div>
                                                        <a href="" className="btn btn-outline-light btn-sm pill">Live Demo</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-64">
                        <a href="" className="btn btn-main btn-lg pill fw-300">
                            View All Products
                        </a>
                    </div>
                </div>
            </section>
            {/* Arrival Product Section End */}

            {/* Featured Products Start */}
            <section className="featured-product padding-y-120 position-relative z-index-1">
                <img src={getImagePath("gradients/featured-gradient.png")} alt="" className="bg--gradient white-version" />
                <img src={getImagePath("shapes/spider-net.png")} alt="" className="spider-net position-absolute top-0 end-0 z-index--1 white-version" />
                <img src={getImagePath("shapes/spider-net-white.png")} alt="" className="spider-net position-absolute top-0 end-0 z-index--1 dark-version" />

                <img src={getImagePath("shapes/element1.png")} alt="" className="element two" />

                <div className="container container-two">
                    <div className="row gy-4 flex-wrap-reverse align-items-center">
                        <div className="col-xl-6">
                            <div className="row gy-4 card-wrapper">
                                {featuredProducts.map((product) => (
                                    <div className="col-sm-6" key={product.id}>
                                        <div className="product-item box-shadow">
                                            <div className="product-item__thumb d-flex">
                                                <a href="" className="link w-100">
                                                    <img src={getImagePath(`thumbs/${product.img}`)} alt="" className="cover-img" />
                                                </a>
                                                <button type="button" className="product-item__wishlist"><i className="fas fa-heart"></i></button>
                                            </div>
                                            <div className="product-item__content">
                                                <h6 className="product-item__title">
                                                    <a href="" className="link">{product.title}</a>
                                                </h6>
                                                <div className="product-item__info flx-between gap-2">
                                                    <span className="product-item__author">
                                                        by
                                                        <a href="" className="link hover-text-decoration-underline"> {product.author}</a>
                                                    </span>
                                                    <div className="flx-align gap-2">
                                                        <h6 className="product-item__price mb-0">{product.price}</h6>
                                                        <span className="product-item__prevPrice text-decoration-line-through">{product.prevPrice}</span>
                                                    </div>
                                                </div>
                                                <div className="product-item__bottom flx-between gap-2">
                                                    <div>
                                                        <span className="product-item__sales font-14 mb-2">{product.sales}</span>
                                                        <div className="d-flex align-items-center gap-1">
                                                            {renderStars(5)}
                                                            <span className="star-rating__text text-heading fw-500 font-14"> (16)</span>
                                                        </div>
                                                    </div>
                                                    <a href="" className="btn btn-outline-light btn-sm pill">Live Demo</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="col-xl-1 d-xl-block d-none"></div>
                        <div className="col-xl-5">
                            <div className="section-content">
                                <div className="section-heading style-left">
                                    <h3 className="section-heading__title">Featured Products</h3>
                                    <p className="section-heading__desc font-18 w-sm">Every month we pick some best products for you. This month's best web themes & templates have arrived, chosen by our content specialists.</p>
                                </div>
                                <a href="" className="btn btn-main btn-lg pill fw-300">
                                    View All Items
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Featured Products End */}

            {/* Selling Products Start */}
            <section className="selling-product padding-y-120 position-relative z-index-1 overflow-hidden">
                <img src={getImagePath("gradients/selling-gradient.png")} alt="" className="bg--gradient" />

                <img src={getImagePath("shapes/element2.png")} alt="" className="element one" />
                <img src={getImagePath("shapes/element1.png")} alt="" className="element two" />

                <img src={getImagePath("shapes/curve-pattern1.png")} alt="" className="position-absolute start-0 top-0 z-index--1" />
                <img src={getImagePath("shapes/curve-pattern2.png")} alt="" className="position-absolute end-0 top-0 z-index--1" />

                <div className="container container-two">
                    <div className="section-heading style-left style-white flx-between max-w-unset gap-4">
                        <div>
                            <h3 className="section-heading__title">Weekly Best selling Products</h3>
                            <p className="section-heading__desc font-18">Every month we pick some best products for you. This month's best web themes &amp; templates have arrived, chosen by our content specialists.</p>
                        </div>
                        <a href="" className="btn btn-main btn-lg pill fw-300">
                            View All Items
                        </a>
                    </div>
                    {/* Note: This is a slick slider. In React, you'd use a library like react-slick. */}
                    {/* For now, converting to static elements for demonstration. */}
                    <div className="selling-product-slider">
                        {sellingProducts.map((product) => (
                            <div className="product-item shadow-sm overlay-none" key={product.id}>
                                <div className="product-item__thumb d-flex max-h-unset">
                                    <a href="" className="link w-100">
                                        <img src={getImagePath(`thumbs/${product.img}`)} alt="" className="cover-img" />
                                    </a>
                                </div>
                                <div className="product-item__content">
                                    <h6 className="product-item__title">
                                        <a href="" className="link">{product.title}</a>
                                    </h6>
                                    <div className="product-item__info flx-between gap-2">
                                        <span className="product-item__author">
                                            by
                                            <a href="" className="link hover-text-decoration-underline"> {product.author}</a>
                                        </span>
                                        <div className="flx-align gap-2">
                                            <h6 className="product-item__price mb-0">{product.price}</h6>
                                            <span className="product-item__prevPrice text-decoration-line-through">{product.prevPrice}</span>
                                        </div>
                                    </div>
                                    <div className="product-item__bottom flx-between gap-2">
                                        <div>
                                            <span className="product-item__sales font-16 mb-2">{product.sales}</span>
                                            <ul className="star-rating gap-2">
                                                <li className={`star-rating__item ${product.starSize}`}><i className="fas fa-star"></i></li>
                                                <li className={`star-rating__item ${product.starSize}`}><i className="fas fa-star"></i></li>
                                                <li className={`star-rating__item ${product.starSize}`}><i className="fas fa-star"></i></li>
                                                <li className={`star-rating__item ${product.starSize}`}><i className="fas fa-star"></i></li>
                                                <li className={`star-rating__item ${product.starSize}`}><i className="fas fa-star"></i></li>
                                            </ul>
                                        </div>
                                        <div className="flx-align gap-2">
                                            <a href="" className="btn btn-outline-light download-icon btn-icon btn-icon--sm pill">
                                                <span className="icon">
                                                    <img src={getImagePath("icons/download.svg")} alt="" className="white-version" />
                                                    <img src={getImagePath("icons/download-white.svg")} alt="" className="dark-version" />
                                                </span>
                                            </a>
                                            <a href="" className="btn btn-outline-light pill">Live Demo</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Selling Products End */}

            {/* To Featured Author Start */}
            <section className="top-author padding-y-120 section-bg position-relative z-index-1">
                <img src={getImagePath("gradients/featured-gradient.png")} alt="" className="bg--gradient white-version" />
                <img src={getImagePath("shapes/spider-net.png")} alt="" className="spider-net position-absolute top-0 start-0 z-index--1 white-version" />
                <img src={getImagePath("shapes/spider-net-white2.png")} alt="" className="spider-net position-absolute top-0 start-0 z-index--1 dark-version" />
                <img src={getImagePath("shapes/pattern-curve-three.png")} alt="" className="position-absolute top-0 end-0 z-index--1" />

                <img src={getImagePath("shapes/element1.png")} alt="" className="element two" />

                <div className="container container-two">
                    <div className="row gy-4 align-items-center">
                        <div className="col-xl-5">
                            <div className="section-content">
                                <div className="section-heading style-left">
                                    <h3 className="section-heading__title">Top Featured Author</h3>
                                    <p className="section-heading__desc font-18 w-sm">Every month we pick some best products for you. This month's best web themes & templates have arrived, chosen by our content specialists.</p>
                                </div>
                                <div className="author-info d-flex align-items-center gap-3">
                                    <div className="author-info__thumb">
                                        <img src={getImagePath("thumbs/author-img.png")} alt="" />
                                    </div>
                                    <div className="author-info__content">
                                        <h4 className="author-info__name mb-1">Amplify</h4>
                                        <span className="author-info__text">Member Since 2021</span>
                                    </div>
                                </div>
                                <div className="flx-align gap-2 mt-48">
                                    <a href="" className="btn btn-main btn-lg pill fw-300"> View Profile </a>
                                    <button type="button" className="follow-btn btn btn-outline-light btn-lg pill">Follow</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-1 d-xl-block d-none"></div>
                        <div className="col-xl-6">
                            <div className="circle-content position-relative">
                                <div className="circle static-circle">
                                    <div className="circle__badge">
                                        <img src={getImagePath("icons/featured-badge.png")} alt="" />
                                    </div>
                                    <div className="circle__text">
                                        <p>
                                            DPmarketer Top Featured Author
                                        </p>
                                    </div>
                                </div>
                                <div className="row gy-4 card-wrapper">
                                    {featuredProducts.map((product) => (
                                        <div className="col-sm-6" key={product.id}>
                                            <div className="product-item box-shadow">
                                                <div className="product-item__thumb d-flex">
                                                    <a href="" className="link w-100">
                                                        <img src={getImagePath(`thumbs/${product.img}`)} alt="" className="cover-img" />
                                                    </a>
                                                    <button type="button" className="product-item__wishlist"><i className="fas fa-heart"></i></button>
                                                </div>
                                                <div className="product-item__content">
                                                    <h6 className="product-item__title">
                                                        <a href="" className="link">{product.title}</a>
                                                    </h6>
                                                    <div className="product-item__info flx-between gap-2">
                                                        <span className="product-item__author">
                                                            by
                                                            <a href="" className="link hover-text-decoration-underline"> {product.author}</a>
                                                        </span>
                                                        <div className="flx-align gap-2">
                                                            <h6 className="product-item__price mb-0">{product.price}</h6>
                                                            <span className="product-item__prevPrice text-decoration-line-through">{product.prevPrice}</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-item__bottom flx-between gap-2">
                                                        <div>
                                                            <span className="product-item__sales font-14 mb-2">{product.sales}</span>
                                                            <div className="d-flex align-items-center gap-1">
                                                                {renderStars(5)}
                                                                <span className="star-rating__text text-heading fw-500 font-14"> (16)</span>
                                                            </div>
                                                        </div>
                                                        <a href="" className="btn btn-outline-light btn-sm pill">Live Demo</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* To Featured Author End */}

            {/* Top performance Author Start */}
            <section className="top-performance overflow-hidden padding-y-120 position-relative z-index-1">
                <img src={getImagePath("shapes/spider-net.png")} alt="" className="spider-net position-absolute top-0 end-0 z-index--1 white-version" />
                <img src={getImagePath("shapes/spider-net-white.png")} alt="" className="spider-net position-absolute top-0 end-0 z-index--1 dark-version" />
                <img src={getImagePath("shapes/pattern-curve-four.png")} alt="" className="position-absolute top-0 start-0 z-index--1" />

                <img src={getImagePath("shapes/element2.png")} alt="" className="element two" />

                <div className="container container-two">
                    <div className="row gy-4 align-items-center flex-wrap-reverse">
                        <div className="col-lg-7 pe-lg-5">
                            <div className="position-relative">
                                <div className="circle style-two static-circle">
                                    <div className="circle__badge">
                                        <img src={getImagePath("icons/featured-badge.png")} alt="" />
                                    </div>
                                    <div className="circle__desc circle__text">
                                        <p>
                                            Our Top Performance
                                        </p>
                                    </div>
                                </div>
                                <div className="performance-content">
                                    <div className="performance-content__item">
                                        <span className="performance-content__text font-18">Email Subscription</span>
                                        <h4 className="performance-content__count">49,000+</h4>
                                    </div>
                                    <div className="performance-content__item">
                                        <span className="performance-content__text font-18"> Total Products</span>
                                        <h4 className="performance-content__count">45,000+</h4>
                                    </div>
                                    <div className="performance-content__item">
                                        <span className="performance-content__text font-18"> Total Download</span>
                                        <h4 className="performance-content__count">48,000+</h4>
                                    </div>
                                    <div className="performance-content__item">
                                        <span className="performance-content__text font-18"> Monthly Visitor</span>
                                        <h4 className="performance-content__count">65,000+</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="section-content">
                                <div className="section-heading style-left">
                                    <h3 className="section-heading__title">Top Performance</h3>
                                    <p className="section-heading__desc font-18 w-sm">Every month we pick some best products for you. This month's best web themes & templates have arrived, chosen by our content specialists.</p>
                                </div>
                                <a href="" className="btn btn-main btn-lg pill fw-300"> Get Started </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Top performance Author End */}

            {/* Blog Section Start */}
            <section className="blog padding-y-120 section-bg position-relative z-index-1 overflow-hidden">
                <img src={getImagePath("shapes/pattern-five.png")} className="position-absolute end-0 top-0 z-index--1" alt="" />
                <div className="container container-two">
                    <div className="section-heading style-left style-flex flx-between align-items-end gap-3">
                        <div className="section-heading__inner">
                            <h3 className="section-heading__title">Browse all latest blogs and articles</h3>
                        </div>
                        <a href="" className="btn btn-main btn-lg pill">Browse All Articles </a>
                    </div>
                    <div className="row gy-4">
                        {blogPosts.map((post) => (
                            <div className="col-lg-4 col-sm-6" key={post.id}>
                                <div className="post-item">
                                    <div className="post-item__thumb">
                                        <a href="" className="link">
                                            <img src={getImagePath(`thumbs/${post.img}`)} className="cover-img" alt="" />
                                        </a>
                                    </div>
                                    <div className="post-item__content">
                                        <div className="post-item__top flx-align">
                                            <a href="" className="post-item__tag pill font-14 text-heading fw-500 hover-text-main">{post.tag}</a>
                                            <div className="post-item__date font-14 flx-align gap-2 font-14 text-heading fw-500">
                                                <span className="icon">
                                                    <img src={getImagePath("icons/calendar.svg")} alt="" className="white-version" />
                                                    <img src={getImagePath("icons/calendar-white.svg")} alt="" className="dark-version" />
                                                </span>
                                                <span className="text">{post.date}</span>
                                            </div>
                                        </div>
                                        <h5 className="post-item__title">
                                            <a href="" className="link"> {post.title}</a>
                                        </h5>
                                        <a href="" className="btn btn-outline-light pill fw-600">Read More </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Blog Section End */}

            {/* Become seller section start */}
            <section className="seller padding-y-120">
                <div className="container container-two">
                    <div className="row gy-4">
                        <div className="col-lg-6">
                            <div className="seller-item position-relative z-index-1">
                                <img src={getImagePath("shapes/seller-bg.png")} className="position-absolute start-0 top-0 z-index--1" alt="" />
                                <h3 className="seller-item__title">Earn 75% of the ItemD Price</h3>
                                <p className="seller-item__desc fw-500 text-heading">Sellers receive 75% of the Itemp Price for items Dsold exclusively and 50% for items sold non-exclusively. See detailed informationabout the fee structure on Market.</p>
                                <a href="" className="btn btn-static-outline-black btn-xl pill fw-600">Become a Seller</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="seller-item bg-two position-relative z-index-1">
                                <img src={getImagePath("shapes/seller-bg-two.png")} className="position-absolute start-0 top-0 z-index--1" alt="" />
                                <h3 className="seller-item__title">Earn until 40% commission</h3>
                                <p className="seller-item__desc fw-500 text-heading">Our Market is the world’s largest creative market place, selling millions of digital assets every year. With 30% affiliate commission, earning money has never been easier!</p>
                                <a href="" className="btn btn-static-outline-black btn-xl pill fw-600">Become an Affiliate</a>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="support position-relative z-index-1">
                                <img src={getImagePath("shapes/spider-net-sm.png")} alt="" className="spider-net position-absolute top-0 end-0 z-index--1" />
                                <img src={getImagePath("shapes/arrow-shape.png")} alt="" className="arrow-shape" />
                                <div className="row align-items-center">
                                    <div className="col-lg-1 d-lg-block d-none"></div>
                                    <div className="col-lg-3 col-md-4 d-md-block d-none">
                                        <div className="support-thumb text-center">
                                            <img src={getImagePath("thumbs/support-img.png")} alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 d-lg-block d-none"></div>
                                    <div className="col-lg-5 col-md-8">
                                        <div className="support-content">
                                            <h3 className="support-content__title mb-3">Support 24/7</h3>
                                            <p className="support-content__desc">Wanna talk? Send us a message</p>
                                            <a href="mailto:infomail@office.com" className="btn btn-static-black btn-lg fw-300 pill">infomail@office.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Become seller section End */}

            {/* Brand Section Start */}
            <div className="brand">
                <div className="container container">
                    <div className="brand-slider">
                        {/* Note: This is a slick slider. In React, you'd use a library like react-slick. */}
                        {/* For now, converting to static elements for demonstration. */}
                        {brandLogos.map((brand, index) => (
                            <div className="brand-item d-flex align-items-center justify-content-center" key={index}>
                                <img src={getImagePath(`thumbs/${brand.img}`)} alt="" className="white-version" />
                                {brand.imgDark && <img src={getImagePath(`thumbs/${brand.imgDark}`)} alt="" className="dark-version" />}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Brand Section End */}

            {/* Footer Start Here */}
            <footer className="footer-section">
                <img src={getImagePath("shapes/pattern.png")} alt="" className="bg-pattern" />
                <img src={getImagePath("shapes/element1.png")} alt="" className="element one" />
                <img src={getImagePath("shapes/element2.png")} alt="" className="element two" />
                <img src={getImagePath("gradients/footer-gradient.png")} alt="" className="bg--gradient" />

                <div className="container container-two">
                    <div className="row gy-5">
                        <div className="col-xl-3 col-sm-6">
                            <div className="footer-widget">
                                <div className="footer-widget__logo">
                                    <a href=""> <img src={getImagePath("logo/white-logo.png")} alt="" /></a>
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
                                            <a href="https://www.youtube.com/" className="social-icon-list__link flx-center"> <i className="fab fa-youtube"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-sm-6 col-xs-6">
                            <div className="footer-widget">
                                <h5 className="footer-widget__title text-white">Useful Link</h5>
                                <ul className="footer-lists">
                                    <li className="footer-lists__item"><a href="" className="footer-lists__link">Product </a></li>
                                    <li className="footer-lists__item"><a href="" className="footer-lists__link">Product Details</a></li>
                                    <li className="footer-lists__item"><a href="" className="footer-lists__link">Profile </a></li>
                                    <li className="footer-lists__item"><a href="" className="footer-lists__link">Shopping Cart</a></li>
                                    <li className="footer-lists__item"><a href="" className="footer-lists__link">Dashboard</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 col-xs-6 ps-xl-5">
                            <div className="footer-widget">
                                <h5 className="footer-widget__title text-white">Quick Links</h5>
                                <ul className="footer-lists">
                                    <li className="footer-lists__item"><a href="" className="footer-lists__link">Dashboard </a></li>
                                    <li className="footer-lists__item"><a href="" className="footer-lists__link">Login </a></li>
                                    <li className="footer-lists__item"><a href="" className="footer-lists__link">Register</a></li>
                                    <li className="footer-lists__item"><a href="" className="footer-lists__link">Blog </a></li>
                                    <li className="footer-lists__item"><a href="" className="footer-lists__link">Blog Details</a></li>
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
                        <p className="bottom-footer__text font-14"> Copyright &copy; 2024 DPmarket, All rights reserved.</p>
                        <div className="footer-links">
                            <a href="" className="footer-link font-14">Terms of service</a>
                            <a href="" className="footer-link font-14">Privacy Policy</a>
                            <a href="" className="footer-link font-14">cookies</a>
                        </div>
                    </div>
                </div>
            </div>
            {/* Footer End Here */}
        </main>
    );
};

export default HomePage;