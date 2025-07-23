import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom for navigation

// Mock data for products for demonstration purposes
interface Product {
    id: number;
    title: string;
    author: string;
    price: number;
    prevPrice: number;
    sales: number;
    rating: number; // 1-5
    reviews: number;
    image: string;
}

const mockProducts: Product[] = [
    { id: 1, title: 'SaaS dashboard digital products Title here', author: 'themepix', price: 120, prevPrice: 259, sales: 1200, rating: 5, reviews: 16, image: '/assets/images/thumbs/product-img1.png' },
    { id: 2, title: 'SaaS dashboard digital products Title here', author: 'themepix', price: 129, prevPrice: 236, sales: 100, rating: 5, reviews: 16, image: '/assets/images/thumbs/product-img2.png' },
    { id: 3, title: 'SaaS dashboard digital products Title here', author: 'themepix', price: 79, prevPrice: 99, sales: 900, rating: 5, reviews: 16, image: '/assets/images/thumbs/product-img3.png' },
    { id: 4, title: 'SaaS dashboard digital products Title here', author: 'themepix', price: 59, prevPrice: 129, sales: 1225, rating: 5, reviews: 16, image: '/assets/images/thumbs/product-img4.png' },
    { id: 5, title: 'SaaS dashboard digital products Title here', author: 'themepix', price: 99, prevPrice: 129, sales: 1300, rating: 5, reviews: 16, image: '/assets/images/thumbs/product-img5.png' },
    { id: 6, title: 'SaaS dashboard digital products Title here', author: 'themepix', price: 129, prevPrice: 256, sales: 200, rating: 5, reviews: 16, image: '/assets/images/thumbs/product-img6.png' },
    { id: 7, title: 'SaaS dashboard digital products Title here', author: 'themepix', price: 129, prevPrice: 259, sales: 500, rating: 5, reviews: 16, image: '/assets/images/thumbs/product-img7.png' },
    { id: 8, title: 'SaaS dashboard digital products Title here', author: 'themepix', price: 79, prevPrice: 99, sales: 2100, rating: 5, reviews: 16, image: '/assets/images/thumbs/product-img8.png' },
    { id: 9, title: 'SaaS dashboard digital products Title here', author: 'themepix', price: 79, prevPrice: 99, sales: 2100, rating: 5, reviews: 16, image: '/assets/images/thumbs/product-img9.png' },
    { id: 10, title: 'SaaS dashboard digital products Title here', author: 'themepix', price: 79, prevPrice: 99, sales: 2100, rating: 5, reviews: 16, image: '/assets/images/thumbs/product-img10.png' },
    { id: 11, title: 'SaaS dashboard digital products Title here', author: 'themepix', price: 79, prevPrice: 99, sales: 2100, rating: 5, reviews: 16, image: '/assets/images/thumbs/product-img11.png' },
    { id: 12, title: 'SaaS dashboard digital products Title here', author: 'themepix', price: 79, prevPrice: 99, sales: 2100, rating: 5, reviews: 16, image: '/assets/images/thumbs/product-img12.png' },
];

// Product Item Component
const ProductItem: React.FC<{ product: Product }> = ({ product }) => {
    const [isWishlisted, setIsWishlisted] = useState(false);

    const renderStars = (rating: number) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <li key={i} className="star-rating__item font-11">
                    <i className="fas fa-star"></i>
                </li>
            );
        }
        return stars;
    };

    return (
        <div className="product-item section-bg">
            <div className="product-item__thumb d-flex">
                <Link to="/product-details" className="link w-100">
                    <img src={product.image} alt={product.title} className="cover-img" />
                </Link>
                <button
                    type="button"
                    className={`product-item__wishlist ${isWishlisted ? 'active' : ''}`}
                    onClick={() => setIsWishlisted(!isWishlisted)}
                >
                    <i className="fas fa-heart"></i>
                </button>
            </div>
            <div className="product-item__content">
                <h6 className="product-item__title">
                    <Link to="/product-details" className="link">{product.title}</Link>
                </h6>
                <div className="product-item__info flx-between gap-2">
                    <span className="product-item__author">
                        by
                        <Link to="/profile" className="link hover-text-decoration-underline"> themepix</Link>
                    </span>
                    <div className="flx-align gap-2">
                        <h6 className="product-item__price mb-0">${product.price}</h6>
                        <span className="product-item__prevPrice text-decoration-line-through">${product.prevPrice}</span>
                    </div>
                </div>
                <div className="product-item__bottom flx-between gap-2">
                    <div>
                        <span className="product-item__sales font-14 mb-2">{product.sales} Sales</span>
                        <div className="d-flex align-items-center gap-1">
                            <ul className="star-rating">
                                {renderStars(product.rating)}
                            </ul>
                            <span className="star-rating__text text-heading fw-500 font-14"> ({product.reviews})</span>
                        </div>
                    </div>
                    <Link to="/product-details" className="btn btn-outline-light btn-sm pill">Live Demo</Link>
                </div>
            </div>
        </div>
    );
};

// Pagination Component
const Pagination: React.FC = () => {
    return (
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
    );
};

// Filter Sidebar Component
const FilterSidebar: React.FC<{ isSidebarOpen: boolean, toggleSidebar: () => void }> = ({ isSidebarOpen, toggleSidebar }) => {
    const [activeCategory, setActiveCategory] = useState<string>('All Categories');
    const [selectedRating, setSelectedRating] = useState<string>('veiwAll');
    const [selectedDate, setSelectedDate] = useState<string>('anyDate');
    const [collapsedSections, setCollapsedSections] = useState<{ [key: string]: boolean }>({
        category: false,
        rating: false,
        dateUpdated: false,
    });

    const toggleSection = (section: string) => {
        setCollapsedSections(prevState => ({
            ...prevState,
            [section]: !prevState[section]
        }));
    };

    return (
        <div className={`filter-sidebar ${isSidebarOpen ? 'show' : ''}`}>
            <button type="button" className="filter-sidebar__close p-2 position-absolute end-0 top-0 z-index-1 text-body hover-text-main font-20 d-lg-none d-block" onClick={toggleSidebar}>
                <i className="las la-times"></i>
            </button>
            <div className="filter-sidebar__item">
                <button
                    type="button"
                    className={`filter-sidebar__button font-16 text-capitalize fw-500 ${collapsedSections.category ? '' : 'active'}`}
                    onClick={() => toggleSection('category')}
                >
                    Category
                </button>
                <div className="filter-sidebar__content" style={{ display: collapsedSections.category ? 'none' : 'block' }}>
                    <ul className="filter-sidebar-list">
                        <li className="filter-sidebar-list__item">
                            <Link to="#" className={`filter-sidebar-list__text ${activeCategory === 'All Categories' ? 'text-main' : ''}`} onClick={() => setActiveCategory('All Categories')}>
                                All Categories <span className="qty">25489</span>
                            </Link>
                        </li>
                        <li className="filter-sidebar-list__item">
                            <Link to="#" className={`filter-sidebar-list__text ${activeCategory === 'Site Template' ? 'text-main' : ''}`} onClick={() => setActiveCategory('Site Template')}>
                                Site Template <span className="qty">12,501</span>
                            </Link>
                        </li>
                        <li className="filter-sidebar-list__item">
                            <Link to="#" className={`filter-sidebar-list__text ${activeCategory === 'WordPress' ? 'text-main' : ''}`} onClick={() => setActiveCategory('WordPress')}>
                                WordPress <span className="qty">1258</span>
                            </Link>
                        </li>
                        <li className="filter-sidebar-list__item">
                            <Link to="#" className={`filter-sidebar-list__text ${activeCategory === 'UI Template' ? 'text-main' : ''}`} onClick={() => setActiveCategory('UI Template')}>
                                UI Template <span className="qty">1520</span>
                            </Link>
                        </li>
                        <li className="filter-sidebar-list__item">
                            <Link to="#" className={`filter-sidebar-list__text ${activeCategory === 'Templates Kits' ? 'text-main' : ''}`} onClick={() => setActiveCategory('Templates Kits')}>
                                Templates Kits <span className="qty">210</span>
                            </Link>
                        </li>
                        <li className="filter-sidebar-list__item">
                            <Link to="#" className={`filter-sidebar-list__text ${activeCategory === 'eCommerce' ? 'text-main' : ''}`} onClick={() => setActiveCategory('eCommerce')}>
                                eCommerce <span className="qty">158</span>
                            </Link>
                        </li>
                        <li className="filter-sidebar-list__item">
                            <Link to="#" className={`filter-sidebar-list__text ${activeCategory === 'Marketing' ? 'text-main' : ''}`} onClick={() => setActiveCategory('Marketing')}>
                                Marketing <span className="qty">178</span>
                            </Link>
                        </li>
                        <li className="filter-sidebar-list__item">
                            <Link to="#" className={`filter-sidebar-list__text ${activeCategory === 'CMS Template' ? 'text-main' : ''}`} onClick={() => setActiveCategory('CMS Template')}>
                                CMS Template <span className="qty">122</span>
                            </Link>
                        </li>
                        <li className="filter-sidebar-list__item">
                            <Link to="#" className={`filter-sidebar-list__text ${activeCategory === 'Muse Themes' ? 'text-main' : ''}`} onClick={() => setActiveCategory('Muse Themes')}>
                                Muse Themes <span className="qty">450</span>
                            </Link>
                        </li>
                        <li className="filter-sidebar-list__item">
                            <Link to="#" className={`filter-sidebar-list__text ${activeCategory === 'Blogging' ? 'text-main' : ''}`} onClick={() => setActiveCategory('Blogging')}>
                                Blogging <span className="qty">155</span>
                            </Link>
                        </li>
                        <li className="filter-sidebar-list__item">
                            <Link to="#" className={`filter-sidebar-list__text ${activeCategory === 'Courses' ? 'text-main' : ''}`} onClick={() => setActiveCategory('Courses')}>
                                Courses <span className="qty">125</span>
                            </Link>
                        </li>
                        <li className="filter-sidebar-list__item">
                            <Link to="#" className={`filter-sidebar-list__text ${activeCategory === 'Forums' ? 'text-main' : ''}`} onClick={() => setActiveCategory('Forums')}>
                                Forums <span className="qty">35</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="filter-sidebar__item">
                <button
                    type="button"
                    className={`filter-sidebar__button font-16 text-capitalize fw-500 ${collapsedSections.rating ? '' : 'active'}`}
                    onClick={() => toggleSection('rating')}
                >
                    Rating
                </button>
                <div className="filter-sidebar__content" style={{ display: collapsedSections.rating ? 'none' : 'block' }}>
                    <ul className="filter-sidebar-list">
                        <li className="filter-sidebar-list__item">
                            <div className="filter-sidebar-list__text">
                                <div className="common-check common-radio">
                                    <input className="form-check-input" type="radio" name="ratingRadio" id="veiwAll" checked={selectedRating === 'veiwAll'} onChange={() => setSelectedRating('veiwAll')} />
                                    <label className="form-check-label" htmlFor="veiwAll"> View All</label>
                                </div>
                                <span className="qty">(1859)</span>
                            </div>
                        </li>
                        <li className="filter-sidebar-list__item">
                            <div className="filter-sidebar-list__text">
                                <div className="common-check common-radio">
                                    <input className="form-check-input" type="radio" name="ratingRadio" id="oneStar" checked={selectedRating === 'oneStar'} onChange={() => setSelectedRating('oneStar')} />
                                    <label className="form-check-label" htmlFor="oneStar"> 1 Star and above</label>
                                </div>
                                <span className="qty">(785)</span>
                            </div>
                        </li>
                        <li className="filter-sidebar-list__item">
                            <div className="filter-sidebar-list__text">
                                <div className="common-check common-radio">
                                    <input className="form-check-input" type="radio" name="ratingRadio" id="twoStar" checked={selectedRating === 'twoStar'} onChange={() => setSelectedRating('twoStar')} />
                                    <label className="form-check-label" htmlFor="twoStar"> 2 Star and above</label>
                                </div>
                                <span className="qty">(1250)</span>
                            </div>
                        </li>
                        <li className="filter-sidebar-list__item">
                            <div className="filter-sidebar-list__text">
                                <div className="common-check common-radio">
                                    <input className="form-check-input" type="radio" name="ratingRadio" id="threeStar" checked={selectedRating === 'threeStar'} onChange={() => setSelectedRating('threeStar')} />
                                    <label className="form-check-label" htmlFor="threeStar"> 3 Star and above</label>
                                </div>
                                <span className="qty">(7580)</span>
                            </div>
                        </li>
                        <li className="filter-sidebar-list__item">
                            <div className="filter-sidebar-list__text">
                                <div className="common-check common-radio">
                                    <input className="form-check-input" type="radio" name="ratingRadio" id="fourStar" checked={selectedRating === 'fourStar'} onChange={() => setSelectedRating('fourStar')} />
                                    <label className="form-check-label" htmlFor="fourStar"> 4 Star and above</label>
                                </div>
                                <span className="qty">(1450)</span>
                            </div>
                        </li>
                        <li className="filter-sidebar-list__item">
                            <div className="filter-sidebar-list__text">
                                <div className="common-check common-radio">
                                    <input className="form-check-input" type="radio" name="ratingRadio" id="fiveStar" checked={selectedRating === 'fiveStar'} onChange={() => setSelectedRating('fiveStar')} />
                                    <label className="form-check-label" htmlFor="fiveStar"> 5 Star Rating</label>
                                </div>
                                <span className="qty">(2530)</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="filter-sidebar__item">
                <button
                    type="button"
                    className={`filter-sidebar__button font-16 text-capitalize fw-500 ${collapsedSections.dateUpdated ? '' : 'active'}`}
                    onClick={() => toggleSection('dateUpdated')}
                >
                    Date Updated
                </button>
                <div className="filter-sidebar__content" style={{ display: collapsedSections.dateUpdated ? 'none' : 'block' }}>
                    <ul className="filter-sidebar-list">
                        <li className="filter-sidebar-list__item">
                            <div className="filter-sidebar-list__text">
                                <div className="common-check common-radio">
                                    <input className="form-check-input" type="radio" name="dateRadio" id="anyDate" checked={selectedDate === 'anyDate'} onChange={() => setSelectedDate('anyDate')} />
                                    <label className="form-check-label" htmlFor="anyDate"> Any Date</label>
                                </div>
                                <span className="qty"> 5,203</span>
                            </div>
                        </li>
                        <li className="filter-sidebar-list__item">
                            <div className="filter-sidebar-list__text">
                                <div className="common-check common-radio">
                                    <input className="form-check-input" type="radio" name="dateRadio" id="lastYear" checked={selectedDate === 'lastYear'} onChange={() => setSelectedDate('lastYear')} />
                                    <label className="form-check-label" htmlFor="lastYear"> In the last year</label>
                                </div>
                                <span className="qty">1,258</span>
                            </div>
                        </li>
                        <li className="filter-sidebar-list__item">
                            <div className="filter-sidebar-list__text">
                                <div className="common-check common-radio">
                                    <input className="form-check-input" type="radio" name="dateRadio" id="lastMonth" checked={selectedDate === 'lastMonth'} onChange={() => setSelectedDate('lastMonth')} />
                                    <label className="form-check-label" htmlFor="lastMonth"> In the last month</label>
                                </div>
                                <span className="qty">2450</span>
                            </div>
                        </li>
                        <li className="filter-sidebar-list__item">
                            <div className="filter-sidebar-list__text">
                                <div className="common-check common-radio">
                                    <input className="form-check-input" type="radio" name="dateRadio" id="LastWeek" checked={selectedDate === 'LastWeek'} onChange={() => setSelectedDate('LastWeek')} />
                                    <label className="form-check-label" htmlFor="LastWeek"> In the last week</label>
                                </div>
                                <span className="qty">325</span>
                            </div>
                        </li>
                        <li className="filter-sidebar-list__item">
                            <div className="filter-sidebar-list__text">
                                <div className="common-check common-radio">
                                    <input className="form-check-input" type="radio" name="dateRadio" id="lastDay" checked={selectedDate === 'lastDay'} onChange={() => setSelectedDate('lastDay')} />
                                    <label className="form-check-label" htmlFor="lastDay"> In the last day</label>
                                </div>
                                <span className="qty">745</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

// Main AllProductPage Component
const AllProductPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState<string>('pills-product');
    const [showFilterForm, setShowFilterForm] = useState<boolean>(false);
    const [isListView, setIsListView] = useState<boolean>(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const sideOverlayRef = useRef<HTMLDivElement>(null);

    const toggleFilterForm = () => {
        setShowFilterForm(prevState => !prevState);
    };

    const toggleListView = () => {
        setIsListView(true);
    };

    const toggleGridView = () => {
        setIsListView(false);
    };

    const toggleSidebar = () => {
        setIsSidebarOpen(prevState => !prevState);
    };

    useEffect(() => {
        // Toggle body scroll-hide class based on sidebar state
        if (isSidebarOpen) {
            document.body.classList.add('scroll-hide-sm');
            // Check if ref is current before accessing classList
            sideOverlayRef.current?.classList.add('show');
        } else {
            document.body.classList.remove('scroll-hide-sm');
            sideOverlayRef.current?.classList.remove('show');
        }

        // Cleanup on unmount
        return () => {
            document.body.classList.remove('scroll-hide-sm');
            sideOverlayRef.current?.classList.remove('show');
        };
    }, [isSidebarOpen]);

    // Dark/Light mode logic (simplified for this component)
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.setAttribute('data-theme', 'light'); // Inverting to match the original CSS logic for `[data-theme=light]`
        } else {
            setIsDarkMode(false);
            document.documentElement.setAttribute('data-theme', 'dark'); // Inverting for `[data-theme=light]` to be the "dark version"
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(!isDarkMode);
        localStorage.setItem('theme', newTheme);
        document.documentElement.setAttribute('data-theme', newTheme === 'dark' ? 'light' : 'dark'); // Invert for consistency with original CSS
    };


    return (
        <div className={`dpmarket-app ${isListView ? 'list-view' : ''}`}>
             {/* Preloader - typically handled globally or removed in React */}
            <div className="loader-mask">
                <div className="loader">
                    <div></div>
                    <div></div>
                </div>
            </div>

            {/* Overlay for mobile/sidebar */}
            <div className="overlay" ref={sideOverlayRef}></div>
            <div className="side-overlay" ref={sideOverlayRef}></div>

            {/* Scroll to Top - typically handled globally or with a React component */}
            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>

            {/* Mobile Menu - should be a separate component */}
            <div className="mobile-menu d-lg-none d-block">
                <button type="button" className="close-button" onClick={() => setIsSidebarOpen(false)}> <i className="las la-times"></i> </button>
                <div className="mobile-menu__inner">
                    <Link to="/" className="mobile-menu__logo">
                        <img src="/assets/images/logo/logo.png" alt="Logo" className="white-version" />
                        <img src="/assets/images/logo/white-logo-two.png" alt="Logo" className="dark-version" />
                    </Link>
                    <div className="mobile-menu__menu">
                        <ul className="nav-menu flx-align nav-menu--mobile">
                            <li className="nav-menu__item has-submenu">
                                <Link to="#">Home</Link>
                                <ul className="nav-submenu">
                                    <li className="nav-submenu__item"><Link to="/"> Home One</Link></li>
                                    <li className="nav-submenu__item"><Link to="/index-two"> Home Two</Link></li>
                                    <li className="nav-submenu__item"><Link to="/index-three"> Home Three</Link></li>
                                </ul>
                            </li>
                            <li className="nav-menu__item has-submenu activePage">
                                <Link to="#">Products</Link>
                                <ul className="nav-submenu">
                                    <li className="nav-submenu__item activePage"><Link to="/all-product"> All Products</Link></li>
                                    <li className="nav-submenu__item"><Link to="/product-details"> Product Details</Link></li>
                                </ul>
                            </li>
                            <li className="nav-menu__item has-submenu">
                                <Link to="#">Pages</Link>
                                <ul className="nav-submenu">
                                    <li className="nav-submenu__item"><Link to="/profile"> Profile</Link></li>
                                    <li className="nav-submenu__item"><Link to="/cart"> Shopping Cart</Link></li>
                                    <li className="nav-submenu__item"><Link to="/cart-personal"> Mailing Address</Link></li>
                                    <li className="nav-submenu__item"><Link to="/cart-payment"> Payment Method</Link></li>
                                    <li className="nav-submenu__item"><Link to="/cart-thank-you"> Preview Order</Link></li>
                                    <li className="nav-submenu__item"><Link to="/dashboard"> Dashboard</Link></li>
                                </ul>
                            </li>
                            <li className="nav-menu__item has-submenu">
                                <Link to="#">Blog</Link>
                                <ul className="nav-submenu">
                                    <li className="nav-submenu__item"><Link to="/blog"> Blog</Link></li>
                                    <li className="nav-submenu__item"><Link to="/blog-details"> Blog Details</Link></li>
                                    <li className="nav-submenu__item"><Link to="/blog-details-sidebar"> Blog Details Sidebar</Link></li>
                                </ul>
                            </li>
                            <li className="nav-menu__item">
                                <Link to="/contact">Contact</Link>
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

            {/* Header - should be a separate component */}
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
                                    <Link to="#">Home</Link>
                                    <ul className="nav-submenu">
                                        <li className="nav-submenu__item"><Link to="/"> Home One</Link></li>
                                        <li className="nav-submenu__item"><Link to="/index-two"> Home Two</Link></li>
                                        <li className="nav-submenu__item"><Link to="/index-three"> Home Three</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-menu__item has-submenu activePage">
                                    <Link to="#">Products</Link>
                                    <ul className="nav-submenu">
                                        <li className="nav-submenu__item activePage"><Link to="/all-product"> All Products</Link></li>
                                        <li className="nav-submenu__item"><Link to="/product-details"> Product Details</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-menu__item has-submenu">
                                    <Link to="#">Pages</Link>
                                    <ul className="nav-submenu">
                                        <li className="nav-submenu__item"><Link to="/profile"> Profile</Link></li>
                                        <li className="nav-submenu__item"><Link to="/cart"> Shopping Cart</Link></li>
                                        <li className="nav-submenu__item"><Link to="/cart-personal"> Mailing Address</Link></li>
                                        <li className="nav-submenu__item"><Link to="/cart-payment"> Payment Method</Link></li>
                                        <li className="nav-submenu__item"><Link to="/cart-thank-you"> Preview Order</Link></li>
                                        <li className="nav-submenu__item"><Link to="/dashboard"> Dashboard</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-menu__item has-submenu">
                                    <Link to="#">Blog</Link>
                                    <ul className="nav-submenu">
                                        <li className="nav-submenu__item"><Link to="/blog"> Blog</Link></li>
                                        <li className="nav-submenu__item"><Link to="/blog-details"> Blog Details</Link></li>
                                        <li className="nav-submenu__item"><Link to="/blog-details-sidebar"> Blog Details Sidebar</Link></li>
                                    </ul>
                                </li>
                                <li className="nav-menu__item">
                                    <Link to="/contact">Contact</Link>
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
                                    <input type="checkbox" className="d-none" id="checkbox" checked={isDarkMode} onChange={toggleTheme} />
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
                            <button type="button" className="toggle-mobileMenu d-lg-none" onClick={() => setIsSidebarOpen(true)}> <i className="las la-bars"></i> </button>
                        </div>
                    </nav>
                </div>
            </header>

            {/* Breadcrumb One Section */}
            <section className="breadcrumb breadcrumb-one padding-y-60 section-bg position-relative z-index-1 overflow-hidden">
                <img src="/assets/images/gradients/breadcrumb-gradient-bg.png" alt="" className="bg--gradient" />
                <img src="/assets/images/shapes/element-moon3.png" alt="" className="element one" />
                <img src="/assets/images/shapes/element-moon1.png" alt="" className="element three" />

                <div className="container container-two">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="breadcrumb-one-content">
                                <h3 className="breadcrumb-one-content__title text-center mb-3 text-capitalize">58,000+ products available for purchase</h3>
                                <p className="breadcrumb-one-content__desc text-center text-black-three">Explore the best premium themes and plugins available for sale. Our unique collection is hand-curated by experts. Find and buy the perfect premium theme.</p>
                                <form action="#" className="search-box">
                                    <input type="text" className="common-input common-input--lg pill shadow-sm" placeholder="Search theme, plugins &amp; more..." />
                                    <button type="submit" className="btn btn-main btn-icon icon border-0">
                                        <img src="/assets/images/icons/search.svg" alt="" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* All Product Section */}
            <section className="all-product padding-y-120">
                <div className="container container-two">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="filter-tab gap-3 flx-between">
                                <button
                                    type="button"
                                    className={`filter-tab__button btn btn-outline-light pill d-flex align-items-center ${showFilterForm ? 'active' : ''}`}
                                    onClick={toggleFilterForm}
                                >
                                    <span className="icon icon-left"><img src="/assets/images/icons/filter.svg" alt="" /></span>
                                    <span className="font-18 fw-500">Filters</span>
                                </button>
                                <ul className="nav common-tab nav-pills mb-0 gap-lg-2 gap-1 ms-lg-auto" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className={`nav-link ${activeTab === 'pills-product' ? 'active' : ''}`} onClick={() => setActiveTab('pills-product')} id="pills-product-tab" data-bs-toggle="pill" data-bs-target="#pills-product" type="button" role="tab" aria-controls="pills-product" aria-selected={activeTab === 'pills-product'}>All Item</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className={`nav-link ${activeTab === 'pills-bestMatch' ? 'active' : ''}`} onClick={() => setActiveTab('pills-bestMatch')} id="pills-bestMatch-tab" data-bs-toggle="pill" data-bs-target="#pills-bestMatch" type="button" role="tab" aria-controls="pills-bestMatch" aria-selected={activeTab === 'pills-bestMatch'}>Best Match</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className={`nav-link ${activeTab === 'pills-bestRating' ? 'active' : ''}`} onClick={() => setActiveTab('pills-bestRating')} id="pills-bestRating-tab" data-bs-toggle="pill" data-bs-target="#pills-bestRating" type="button" role="tab" aria-controls="pills-bestRating" aria-selected={activeTab === 'pills-bestRating'}>Best Rating</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className={`nav-link ${activeTab === 'pills-trending' ? 'active' : ''}`} onClick={() => setActiveTab('pills-trending')} id="pills-trending-tab" data-bs-toggle="pill" data-bs-target="#pills-trending" type="button" role="tab" aria-controls="pills-trending" aria-selected={activeTab === 'pills-trending'}>Site Template</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className={`nav-link ${activeTab === 'pills-bestOffers' ? 'active' : ''}`} onClick={() => setActiveTab('pills-bestOffers')} id="pills-bestOffers-tab" data-bs-toggle="pill" data-bs-target="#pills-bestOffers" type="button" role="tab" aria-controls="pills-bestOffers" aria-selected={activeTab === 'pills-bestOffers'}>Best Offers</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className={`nav-link ${activeTab === 'pills-bestSelling' ? 'active' : ''}`} onClick={() => setActiveTab('pills-bestSelling')} id="pills-bestSelling-tab" data-bs-toggle="pill" data-bs-target="#pills-bestSelling" type="button" role="tab" aria-controls="pills-bestSelling" aria-selected={activeTab === 'pills-bestSelling'}>Best Selling</button>
                                    </li>
                                </ul>
                                <div className="list-grid d-flex align-items-center gap-2">
                                    <button
                                        className={`list-grid__button list-button d-sm-flex d-none text-body ${isListView ? 'active' : ''}`}
                                        onClick={toggleListView}
                                    >
                                        <i className="las la-list"></i>
                                    </button>
                                    <button
                                        className={`list-grid__button grid-button d-sm-flex d-none text-body ${!isListView ? 'active' : ''}`}
                                        onClick={toggleGridView}
                                    >
                                        <i className="las la-border-all"></i>
                                    </button>
                                    <button type="button" className="list-grid__button sidebar-btn text-body d-lg-none d-flex" onClick={toggleSidebar}>
                                        <i className="las la-bars"></i>
                                    </button>
                                </div>
                            </div>
                            <form action="#" className="filter-form pb-4 " style={{ display: showFilterForm ? 'block' : 'none' }}>
                                <div className="row gy-3">
                                    <div className="col-sm-4 col-xs-6">
                                        <div className="flx-between gap-1">
                                            <label htmlFor="tag" className="form-label font-16">Tag</label>
                                            <button type="reset" className="text-body font-14">Clear</button>
                                        </div>
                                        <div className="position-relative">
                                            <input type="text" className="common-input border-gray-five common-input--withLeftIcon" id="tag" placeholder="Search By Tag..." />
                                            <span className="input-icon input-icon--left"><img src="/assets/images/icons/search-two.svg" alt="" /></span>
                                        </div>
                                    </div>
                                    <div className="col-sm-4 col-xs-6">
                                        <div className="flx-between gap-1">
                                            <label htmlFor="Price" className="form-label font-16">Price</label>
                                            <button type="reset" className="text-body font-14">Clear</button>
                                        </div>
                                        <div className="position-relative">
                                            <input type="text" className="common-input border-gray-five" id="Price" placeholder="$7 - $29" />
                                        </div>
                                    </div>
                                    <div className="col-sm-4">
                                        <div className="flx-between gap-1">
                                            <label htmlFor="time" className="form-label font-16">Time Frame</label>
                                            <button type="reset" className="text-body font-14">Clear</button>
                                        </div>
                                        <div className="position-relative select-has-icon">
                                            <select id="time" className="common-input border-gray-five">
                                                <option value="1">Now</option>
                                                <option value="2">Yesterday</option>
                                                <option value="2">1 Month Ago</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-xl-3 col-lg-4">
                            <FilterSidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
                        </div>
                        <div className="col-xl-9 col-lg-8">
                            <div className="tab-content" id="pills-tabContent">
                                {/* Tab Pane for All Item */}
                                <div className={`tab-pane fade ${activeTab === 'pills-product' ? 'show active' : ''}`} id="pills-product" role="tabpanel" aria-labelledby="pills-product-tab" tabIndex={0}>
                                    <div className="row gy-4 list-grid-wrapper">
                                        {mockProducts.map(product => (
                                            <div key={product.id} className="col-xl-4 col-sm-6">
                                                <ProductItem product={product} />
                                            </div>
                                        ))}
                                    </div>
                                    <Pagination />
                                </div>

                                {/* Tab Pane for Best Match (duplicate content for structure) */}
                                <div className={`tab-pane fade ${activeTab === 'pills-bestMatch' ? 'show active' : ''}`} id="pills-bestMatch" role="tabpanel" aria-labelledby="pills-bestMatch-tab" tabIndex={0}>
                                    <div className="row gy-4 list-grid-wrapper">
                                        {mockProducts.slice(0, 9).map(product => ( // Example: show first 9 for other tabs
                                            <div key={product.id} className="col-xl-4 col-sm-6">
                                                <ProductItem product={product} />
                                            </div>
                                        ))}
                                    </div>
                                    <Pagination />
                                </div>

                                {/* Tab Pane for Best Rating (duplicate content for structure) */}
                                <div className={`tab-pane fade ${activeTab === 'pills-bestRating' ? 'show active' : ''}`} id="pills-bestRating" role="tabpanel" aria-labelledby="pills-bestRating-tab" tabIndex={0}>
                                    <div className="row gy-4 list-grid-wrapper">
                                        {mockProducts.slice(0, 9).map(product => (
                                            <div key={product.id} className="col-xl-4 col-sm-6">
                                                <ProductItem product={product} />
                                            </div>
                                        ))}
                                    </div>
                                    <Pagination />
                                </div>

                                {/* Tab Pane for Site Template (duplicate content for structure) */}
                                <div className={`tab-pane fade ${activeTab === 'pills-trending' ? 'show active' : ''}`} id="pills-trending" role="tabpanel" aria-labelledby="pills-trending-tab" tabIndex={0}>
                                    <div className="row gy-4 list-grid-wrapper">
                                        {mockProducts.slice(0, 9).map(product => (
                                            <div key={product.id} className="col-xl-4 col-sm-6">
                                                <ProductItem product={product} />
                                            </div>
                                        ))}
                                    </div>
                                    <Pagination />
                                </div>

                                {/* Tab Pane for Best Offers (duplicate content for structure) */}
                                <div className={`tab-pane fade ${activeTab === 'pills-bestOffers' ? 'show active' : ''}`} id="pills-bestOffers" role="tabpanel" aria-labelledby="pills-bestOffers-tab" tabIndex={0}>
                                    <div className="row gy-4 list-grid-wrapper">
                                        {mockProducts.slice(0, 9).map(product => (
                                            <div key={product.id} className="col-xl-4 col-sm-6">
                                                <ProductItem product={product} />
                                            </div>
                                        ))}
                                    </div>
                                    <Pagination />
                                </div>

                                {/* Tab Pane for Best Selling (duplicate content for structure) */}
                                <div className={`tab-pane fade ${activeTab === 'pills-bestSelling' ? 'show active' : ''}`} id="pills-bestSelling" role="tabpanel" aria-labelledby="pills-bestSelling-tab" tabIndex={0}>
                                    <div className="row gy-4 list-grid-wrapper">
                                        {mockProducts.slice(0, 9).map(product => (
                                            <div key={product.id} className="col-xl-4 col-sm-6">
                                                <ProductItem product={product} />
                                            </div>
                                        ))}
                                    </div>
                                    <Pagination />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Resource Section */}
            <section className="resource style-two padding-y-120 section-bg position-relative z-index-1 overflow-hidden">
                <img src="/assets/images/shapes/element-moon1.png" alt="" className="element one" />
                <img src="/assets/images/shapes/curve-pattern3.png" alt="" className="d-none position-absolute end-0 top-0 z-index--1" />
                <div className="container container-two">
                    <div className="section-heading style-left style-flex flx-between align-items-end gap-3">
                        <div className="section-heading__inner w-lg">
                            <h3 className="section-heading__title">Free Resources</h3>
                            <p className="section-heading__desc">Every month we pick some best products for you. This month's best web themes &amp; templates have arrived, chosen by our content specialists.</p>
                        </div>
                        <Link to="#" className="btn btn-main btn-lg pill">View All Items</Link>
                    </div>
                    <div className="resource-slider gy-4">
                        {/* Note: In a real React app, you'd use a slider library like react-slick here */}
                        {mockProducts.slice(0, 5).map(product => (
                            <div className="product-item shadow-sm" key={`resource-${product.id}`}>
                                <div className="product-item__thumb d-flex">
                                    <Link to="/product-details" className="link w-100">
                                        <img src={product.image} alt="" className="cover-img" />
                                    </Link>
                                    <button type="button" className="product-item__wishlist"><i className="fas fa-heart"></i></button>
                                </div>
                                <div className="product-item__content">
                                    <h6 className="product-item__title">
                                        <Link to="/product-details" className="link">{product.title}</Link>
                                    </h6>
                                    <div className="product-item__info flx-between gap-2">
                                        <span className="product-item__author">
                                            by
                                            <Link to="/profile" className="link hover-text-decoration-underline"> themepix</Link>
                                        </span>
                                        <div className="flx-align gap-2">
                                            <h6 className="product-item__price mb-0">${product.price}</h6>
                                            <span className="product-item__prevPrice text-decoration-line-through">${product.prevPrice}</span>
                                        </div>
                                    </div>
                                    <div className="product-item__bottom flx-between gap-2">
                                        <div>
                                            <span className="product-item__sales font-14 mb-2">{product.sales} Sales</span>
                                            <div className="d-flex align-items-center gap-1">
                                                <ul className="star-rating">
                                                    {Array(product.rating).fill(0).map((_, i) => <li key={i} className="star-rating__item font-11"><i className="fas fa-star"></i></li>)}
                                                </ul>
                                                <span className="star-rating__text text-heading fw-500 font-14"> ({product.reviews})</span>
                                            </div>
                                        </div>
                                        <Link to="/product-details" className="btn btn-outline-light btn-sm pill">Live Demo</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brand Section */}
            <div className="brand margin-t-120">
                <div className="container container">
                    <div className="brand-slider">
                        {/* Note: In a real React app, you'd use a slider library like react-slick here */}
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

            {/* Footer - should be a separate component */}
            <footer className="footer-section ">
                <img src="/assets/images/shapes/pattern.png" alt="" className="bg-pattern" />
                <img src="/assets/images/shapes/element1.png" alt="" className="element one" />
                <img src="/assets/images/shapes/element2.png" alt="" className="element two" />
                <img src="/assets/images/gradients/footer-gradient.png" alt="" className="bg--gradient" />

                <div className="container container-two">
                    <div className="row gy-5">
                        <div className="col-xl-3 col-sm-6">
                            <div className="footer-widget">
                                <div className="footer-widget__logo">
                                    <Link to="/"><img src="/assets/images/logo/white-logo.png" alt="" /></Link>
                                </div>
                                <p className="footer-widget__desc">Lorem consultancy elitsed do eiusmod tempor inci didunt ut labore dolore magna aliqua sed do eiusmod.</p>
                                <div className="footer-widget__social">
                                    <ul className="social-icon-list">
                                        <li className="social-icon-list__item"><Link to="https://www.facebook.com/" className="social-icon-list__link flx-center"><i className="fab fa-facebook-f"></i></Link></li>
                                        <li className="social-icon-list__item"><Link to="https://www.twitter.com/" className="social-icon-list__link flx-center"> <i className="fab fa-twitter"></i></Link></li>
                                        <li className="social-icon-list__item"><Link to="https://www.linkedin.com/" className="social-icon-list__link flx-center"> <i className="fab fa-linkedin-in"></i></Link></li>
                                        <li className="social-icon-list__item"><Link to="https://www.pinterest.com/" className="social-icon-list__link flx-center"> <i className="fab fa-pinterest-p"></i></Link></li>
                                        <li className="social-icon-list__item"><Link to="https://www.youtube.com/" className="social-icon-list__link flx-center"> <i className="fab fa-youtube"></i></Link></li>
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

            <div className="bottom-footer">
                <div className="container container-two">
                    <div className="bottom-footer__inner flx-between gap-3">
                        <p className="bottom-footer__text font-14"> Copyright &copy; 2024 DPmarket, All rights reserved.</p>
                        <div className="footer-links">
                            <Link to="#" className="footer-link font-14">Terms of service</Link>
                            <Link to="#" className="footer-link font-14">Privacy Policy</Link>
                            <Link to="/contact" className="footer-link font-14">cookies</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProductPage;