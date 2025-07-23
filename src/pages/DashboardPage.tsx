```tsx
import React, { useState, useEffect } from 'react';
import ApexCharts from 'apexcharts'; // Assuming apexcharts is installed and imported for chart rendering

// Import images (assuming they are in public/assets or handled by Vite's asset bundling)
// For demonstration, direct string paths are used, implying they are in the public folder.
const LOGO_WHITE = '/assets/images/logo/logo.png';
const LOGO_DARK = '/assets/images/logo/white-logo-two.png';
const FAVICON = '/assets/images/logo/favicon.png';
const USER_ICON = '/assets/images/icons/user.svg';
const GLOBE_ICON_WHITE = '/assets/images/icons/globe.svg';
const GLOBE_ICON_DARK = '/assets/images/icons/globe-white.svg';
const SIDEBAR_ICON1 = '/assets/images/icons/sidebar-icon1.svg';
const SIDEBAR_ICON_ACTIVE1 = '/assets/images/icons/sidebar-icon-active1.svg';
const SIDEBAR_ICON2 = '/assets/images/icons/sidebar-icon2.svg';
const SIDEBAR_ICON_ACTIVE2 = '/assets/images/icons/sidebar-icon-active2.svg';
const SIDEBAR_ICON4 = '/assets/images/icons/sidebar-icon4.svg';
const SIDEBAR_ICON_ACTIVE4 = '/assets/images/icons/sidebar-icon-active4.svg';
const SIDEBAR_ICON5 = '/assets/images/icons/sidebar-icon5.svg';
const SIDEBAR_ICON_ACTIVE5 = '/assets/images/icons/sidebar-icon-active5.svg';
const SIDEBAR_ICON10 = '/assets/images/icons/sidebar-icon10.svg';
const SIDEBAR_ICON_ACTIVE10 = '/assets/images/icons/sidebar-icon-active10.svg';
const SIDEBAR_ICON12 = '/assets/images/icons/sidebar-icon12.svg';
const SIDEBAR_ICON_ACTIVE12 = '/assets/images/icons/sidebar-icon-active12.svg';
const SIDEBAR_ICON11 = '/assets/images/icons/sidebar-icon11.svg';
const SIDEBAR_ICON_ACTIVE11 = '/assets/images/icons/sidebar-icon-active11.svg';
const SIDEBAR_ICON7 = '/assets/images/icons/sidebar-icon7.svg';
const SIDEBAR_ICON_ACTIVE7 = '/assets/images/icons/sidebar-icon-active7.svg';
const SIDEBAR_ICON6 = '/assets/images/icons/sidebar-icon6.svg';
const SIDEBAR_ICON_ACTIVE6 = '/assets/images/icons/sidebar-icon-active6.svg';
const SIDEBAR_ICON8 = '/assets/images/icons/sidebar-icon8.svg';
const SIDEBAR_ICON_ACTIVE8 = '/assets/images/icons/sidebar-icon-active8.svg';
const SIDEBAR_ICON13 = '/assets/images/icons/sidebar-icon13.svg';
const SIDEBAR_ICON_ACTIVE13 = '/assets/images/icons/sidebar-icon-active13.svg';
const ANGLE_RIGHT_ICON = '/assets/images/icons/angle-right.svg';
const SEARCH_DARK_ICON = '/assets/images/icons/search-dark.svg';
const SEARCH_DARK_WHITE_ICON = '/assets/images/icons/search-dark-white.svg';
const SUN_ICON = '/assets/images/icons/sun.svg';
const MOON_ICON = '/assets/images/icons/moon.svg';
const USER_PROFILE_THUMB = '/assets/images/thumbs/user-profile.png';
const WIDGET_SHAPE1 = '/assets/images/shapes/widget-shape1.png';
const WIDGET_SHAPE2 = '/assets/images/shapes/widget-shape2.png';
const DASHBOARD_WIDGET_ICON1 = '/assets/images/icons/dashboard-widget-icon1.svg';
const CHART_ICON = '/assets/images/icons/chart-icon.svg';
const DASHBOARD_WIDGET_ICON2 = '/assets/images/icons/dashboard-widget-icon2.svg';
const DASHBOARD_WIDGET_ICON3 = '/assets/images/icons/dashboard-widget-icon3.svg';
const DASHBOARD_WIDGET_ICON4 = '/assets/images/icons/dashboard-widget-icon4.svg';
const FLAG1 = '/assets/images/thumbs/flag1.png';
const FLAG2 = '/assets/images/thumbs/flag2.png';
const FLAG3 = '/assets/images/thumbs/flag3.png';
const FLAG4 = '/assets/images/thumbs/flag4.png';
const FLAG5 = '/assets/images/thumbs/flag5.png';
const FLAG6 = '/assets/images/thumbs/flag6.png';
const FLAG7 = '/assets/images/thumbs/flag7.png';
const FLAG8 = '/assets/images/thumbs/flag8.png';
const FLAG9 = '/assets/images/thumbs/flag9.png';
const FLAG10 = '/assets/images/thumbs/flag10.png';
const FLAG11 = '/assets/images/thumbs/flag11.png';
const FLAG12 = '/assets/images/thumbs/flag12.png';

const DashboardPage: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isDashboardSidebarOpen, setIsDashboardSidebarOpen] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(() => {
        // Initialize from localStorage or default to false
        return localStorage.getItem('theme') === 'dark';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }, [isDarkMode]);

    // Effect for the Apex Chart
    useEffect(() => {
        const chartElement = document.querySelector("#chart");
        if (chartElement) {
            const options = {
                series: [{
                    name: 'Earning: $200',
                    data: [31, 40, 28, 51, 42, 109, 100]
                }, {
                    name: 'Downloads: 52',
                    data: [11, 32, 45, 32, 34, 52, 41]
                }],
                chart: {
                    height: 486,
                    type: 'area',
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                },
                xaxis: {
                    type: 'datetime',
                    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                },
            };

            const chart = new ApexCharts(chartElement, options);
            chart.render();

            // Cleanup function for ApexCharts
            return () => {
                chart.destroy();
            };
        }
    }, []); // Empty dependency array means this runs once on mount


    return (
        <>
            {/* Preloader - typically handled globally or removed in React SPA */}
            {/* <div className="loader-mask">
                <div className="loader">
                    <div></div>
                    <div></div>
                </div>
            </div> */}

            {/* Overlay */}
            <div className={`overlay ${isMobileMenuOpen || isDashboardSidebarOpen ? 'show-overlay' : ''}`} onClick={() => {
                setIsMobileMenuOpen(false);
                setIsDashboardSidebarOpen(false);
            }}></div>

            {/* Sidebar Overlay - specific to mobile sidebar */}
            <div className={`side-overlay ${isMobileMenuOpen || isDashboardSidebarOpen ? 'show' : ''}`} onClick={() => {
                setIsMobileMenuOpen(false);
                setIsDashboardSidebarOpen(false);
            }}></div>

            {/* Scroll to Top - can be a separate component */}
            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>

            {/* Mobile Menu */}
            <div className={`mobile-menu d-lg-none d-block ${isMobileMenuOpen ? 'active' : ''}`}>
                <button type="button" className="close-button" onClick={() => setIsMobileMenuOpen(false)}>
                    <i className="las la-times"></i>
                </button>
                <div className="mobile-menu__inner">
                    <a href="index-2.html" className="mobile-menu__logo">
                        <img src={LOGO_WHITE} alt="Logo" className="white-version" />
                        <img src={LOGO_DARK} alt="Logo" className="dark-version" />
                    </a>
                    <div className="mobile-menu__menu">
                        <ul className="nav-menu flx-align nav-menu--mobile">
                            <li className="nav-menu__item has-submenu">
                                <a href="javascript:void(0)" className="nav-menu__link">Home</a>
                                <ul className="nav-submenu">
                                    <li className="nav-submenu__item">
                                        <a href="index-2.html" className="nav-submenu__link"> Home One</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="index-two.html" className="nav-submenu__link"> Home Two</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="index-three.html" className="nav-submenu__link"> Home Three</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-menu__item has-submenu">
                                <a href="javascript:void(0)" className="nav-menu__link">Products</a>
                                <ul className="nav-submenu">
                                    <li className="nav-submenu__item">
                                        <a href="all-product.html" className="nav-submenu__link"> All Products</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="product-details.html" className="nav-submenu__link"> Product Details</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-menu__item has-submenu activePage">
                                <a href="javascript:void(0)" className="nav-menu__link">Pages</a>
                                <ul className="nav-submenu">
                                    <li className="nav-submenu__item">
                                        <a href="profile.html" className="nav-submenu__link"> Profile</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="cart.html" className="nav-submenu__link"> Shopping Cart</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="cart-personal.html" className="nav-submenu__link"> Mailing Address</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="cart-payment.html" className="nav-submenu__link"> Payment Method</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="cart-thank-you.html" className="nav-submenu__link"> Preview Order</a>
                                    </li>
                                    <li className="nav-submenu__item activePage">
                                        <a href="dashboard.html" className="nav-submenu__link"> Dashboard</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-menu__item has-submenu">
                                <a href="javascript:void(0)" className="nav-menu__link">Blog</a>
                                <ul className="nav-submenu">
                                    <li className="nav-submenu__item">
                                        <a href="blog.html" className="nav-submenu__link"> Blog</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="blog-details.html" className="nav-submenu__link"> Blog Details</a>
                                    </li>
                                    <li className="nav-submenu__item">
                                        <a href="blog-details-sidebar.html" className="nav-submenu__link"> Blog Details Sidebar</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-menu__item">
                                <a href="contact.html" className="nav-menu__link">Contact</a>
                            </li>
                        </ul>
                        <div className="header-right__inner d-lg-none my-3 gap-1 d-flex flx-align">
                            <a href="register.html" className="btn btn-main pill">
                                <span className="icon-left icon">
                                    <img src={USER_ICON} alt="" />
                                </span>Create Account
                            </a>
                            <div className="language-select flx-align select-has-icon">
                                <img src={GLOBE_ICON_WHITE} alt="" className="globe-icon white-version" />
                                <img src={GLOBE_ICON_DARK} alt="" className="globe-icon dark-version" />
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

            {/* Dashboard Section */}
            <section className={`dashboard ${isDashboardSidebarOpen ? 'active' : ''}`}>
                <div className="dashboard__inner d-flex">

                    {/* Dashboard Sidebar */}
                    <div className={`dashboard-sidebar ${isDashboardSidebarOpen ? 'active' : ''}`}>
                        <button type="button" className="dashboard-sidebar__close d-lg-none d-flex" onClick={() => setIsDashboardSidebarOpen(false)}><i className="las la-times"></i></button>
                        <div className="dashboard-sidebar__inner">
                            <a href="index-2.html" className="logo mb-48">
                                <img src={LOGO_WHITE} alt="" className="white-version" />
                                <img src={LOGO_DARK} alt="" className="dark-version" />
                            </a>
                            <a href="index-2.html" className="logo favicon mb-48">
                                <img src={FAVICON} alt="" />
                            </a>

                            <ul className="sidebar-list">
                                <li className="sidebar-list__item activePage">
                                    <a href="dashboard.html" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img src={SIDEBAR_ICON1} alt="" className="icon" />
                                            <img src={SIDEBAR_ICON_ACTIVE1} alt="" className="icon icon-active" />
                                        </span>
                                        <span className="text">Dashboard</span>
                                    </a>
                                </li>
                                <li className="sidebar-list__item">
                                    <a href="dashboard-profile.html" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img src={SIDEBAR_ICON2} alt="" className="icon" />
                                            <img src={SIDEBAR_ICON_ACTIVE2} alt="" className="icon icon-active" />
                                        </span>
                                        <span className="text">Profile</span>
                                    </a>
                                </li>
                                <li className="sidebar-list__item">
                                    <a href="follower.html" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img src={SIDEBAR_ICON4} alt="" className="icon" />
                                            <img src={SIDEBAR_ICON_ACTIVE4} alt="" className="icon icon-active" />
                                        </span>
                                        <span className="text">Followers</span>
                                    </a>
                                </li>
                                <li className="sidebar-list__item">
                                    <a href="following.html" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img src={SIDEBAR_ICON5} alt="" className="icon" />
                                            <img src={SIDEBAR_ICON_ACTIVE5} alt="" className="icon icon-active" />
                                        </span>
                                        <span className="text">Followings</span>
                                    </a>
                                </li>
                                <li className="sidebar-list__item">
                                    <a href="setting.html" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img src={SIDEBAR_ICON10} alt="" className="icon" />
                                            <img src={SIDEBAR_ICON_ACTIVE10} alt="" className="icon icon-active" />
                                        </span>
                                        <span className="text">Settings</span>
                                    </a>
                                </li>
                                <li className="sidebar-list__item">
                                    <a href="statement.html" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img src={SIDEBAR_ICON12} alt="" className="icon" />
                                            <img src={SIDEBAR_ICON_ACTIVE12} alt="" className="icon icon-active" />
                                        </span>
                                        <span className="text">Statements</span>
                                    </a>
                                </li>
                                <li className="sidebar-list__item">
                                    <a href="earning.html" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img src={SIDEBAR_ICON11} alt="" className="icon" />
                                            <img src={SIDEBAR_ICON_ACTIVE11} alt="" className="icon icon-active" />
                                        </span>
                                        <span className="text">Earnings</span>
                                    </a>
                                </li>
                                <li className="sidebar-list__item">
                                    <a href="review.html" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img src={SIDEBAR_ICON7} alt="" className="icon" />
                                            <img src={SIDEBAR_ICON_ACTIVE7} alt="" className="icon icon-active" />
                                        </span>
                                        <span className="text">Reviews</span>
                                    </a>
                                </li>
                                <li className="sidebar-list__item">
                                    <a href="download.html" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img src={SIDEBAR_ICON6} alt="" className="icon" />
                                            <img src={SIDEBAR_ICON_ACTIVE6} alt="" className="icon icon-active" />
                                        </span>
                                        <span className="text">Downloads</span>
                                    </a>
                                </li>
                                <li className="sidebar-list__item">
                                    <a href="refund.html" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img src={SIDEBAR_ICON8} alt="" className="icon" />
                                            <img src={SIDEBAR_ICON_ACTIVE8} alt="" className="icon icon-active" />
                                        </span>
                                        <span className="text">Refunds</span>
                                    </a>
                                </li>
                                <li className="sidebar-list__item">
                                    <a href="login.html" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img src={SIDEBAR_ICON13} alt="" className="icon" />
                                            <img src={SIDEBAR_ICON_ACTIVE13} alt="" className="icon icon-active" />
                                        </span>
                                        <span className="text">Logout</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="dashboard-body">

                        {/* Dashboard Nav */}
                        <div className="dashboard-nav bg-white flx-between gap-md-3 gap-2">
                            <div className="dashboard-nav__left flx-align gap-md-3 gap-2">
                                <button type="button" className="icon-btn bar-icon text-heading bg-gray-seven flx-center" onClick={() => setIsDashboardSidebarOpen(true)}>
                                    <i className="las la-bars"></i>
                                </button>
                                <button type="button" className="icon-btn arrow-icon text-heading bg-gray-seven flx-center" onClick={() => setIsDashboardSidebarOpen(false)}>
                                    <img src={ANGLE_RIGHT_ICON} alt="" />
                                </button>
                                <form action="#" className="search-input d-sm-block d-none">
                                    <span className="icon">
                                        <img src={SEARCH_DARK_ICON} alt="" className="white-version" />
                                        <img src={SEARCH_DARK_WHITE_ICON} alt="" className="dark-version" />
                                    </span>
                                    <input type="text" className="common-input common-input--md common-input--bg pill w-100" placeholder="Search here..." />
                                </form>
                            </div>
                            <div className="dashboard-nav__right">
                                <div className="header-right flx-align">
                                    <div className="header-right__inner gap-sm-3 gap-2 flx-align d-flex">

                                        {/* Light Dark Mode */}
                                        <div className="theme-switch-wrapper position-relative">
                                            <label className="theme-switch" htmlFor="checkbox">
                                                <input type="checkbox" className="d-none" id="checkbox" checked={isDarkMode} onChange={() => setIsDarkMode(!isDarkMode)} />
                                                <span className="slider text-black header-right__button white-version">
                                                    <img src={SUN_ICON} alt="" />
                                                </span>
                                                <span className="slider text-black header-right__button dark-version">
                                                    <img src={MOON_ICON} alt="" />
                                                </span>
                                            </label>
                                        </div>

                                        <div className="user-profile">
                                            <button className="user-profile__button flex-align" onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}>
                                                <span className="user-profile__thumb">
                                                    <img src={USER_PROFILE_THUMB} className="cover-img" alt="" />
                                                </span>
                                            </button>
                                            <ul className={`user-profile-dropdown ${isUserDropdownOpen ? 'show' : ''}`}>
                                                <li className="sidebar-list__item">
                                                    <a href="dashboard-profile.html" className="sidebar-list__link">
                                                        <span className="sidebar-list__icon">
                                                            <img src={SIDEBAR_ICON2} alt="" className="icon" />
                                                            <img src={SIDEBAR_ICON_ACTIVE2} alt="" className="icon icon-active" />
                                                        </span>
                                                        <span className="text">Profile</span>
                                                    </a>
                                                </li>
                                                <li className="sidebar-list__item">
                                                    <a href="setting.html" className="sidebar-list__link">
                                                        <span className="sidebar-list__icon">
                                                            <img src={SIDEBAR_ICON10} alt="" className="icon" />
                                                            <img src={SIDEBAR_ICON_ACTIVE10} alt="" className="icon icon-active" />
                                                        </span>
                                                        <span className="text">Settings</span>
                                                    </a>
                                                </li>
                                                <li className="sidebar-list__item">
                                                    <a href="login.html" className="sidebar-list__link">
                                                        <span className="sidebar-list__icon">
                                                            <img src={SIDEBAR_ICON13} alt="" className="icon" />
                                                            <img src={SIDEBAR_ICON_ACTIVE13} alt="" className="icon icon-active" />
                                                        </span>
                                                        <span className="text">Logout</span>
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="language-select flx-align select-has-icon">
                                            <img src={GLOBE_ICON_WHITE} alt="" className="globe-icon white-version" />
                                            <img src={GLOBE_ICON_DARK} alt="" className="globe-icon dark-version" />
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

                        <div className="dashboard-body__content">

                            {/* welcome balance Content Start */}
                            <div className="welcome-balance mt-2 mb-40 flx-between gap-2">
                                <div className="welcome-balance__left">
                                    <h4 className="welcome-balance__title mb-0">Welcome back! Michel</h4>
                                </div>
                                <div className="welcome-balance__right flx-align gap-2">
                                    <span className="welcome-balance__text fw-500 text-heading">Available Balance:</span>
                                    <h4 className="welcome-balance__balance mb-0">$580.00</h4>
                                </div>
                            </div>

                            <div className="dashboard-body__item-wrapper">

                                {/* dashboard body Item Start */}
                                <div className="dashboard-body__item">
                                    <div className="row gy-4">
                                        <div className="col-xl-3 col-sm-6">
                                            <div className="dashboard-widget">
                                                <img src={WIDGET_SHAPE1} alt="" className="dashboard-widget__shape one" />
                                                <img src={WIDGET_SHAPE2} alt="" className="dashboard-widget__shape two" />
                                                <span className="dashboard-widget__icon">
                                                    <img src={DASHBOARD_WIDGET_ICON1} alt="" />
                                                </span>
                                                <div className="dashboard-widget__content flx-between gap-1 align-items-end">
                                                    <div>
                                                        <h4 className="dashboard-widget__number mb-1 mt-3">2M+</h4>
                                                        <span className="dashboard-widget__text font-14">Total Products</span>
                                                    </div>
                                                    <img src={CHART_ICON} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-sm-6">
                                            <div className="dashboard-widget">
                                                <img src={WIDGET_SHAPE1} alt="" className="dashboard-widget__shape one" />
                                                <img src={WIDGET_SHAPE2} alt="" className="dashboard-widget__shape two" />
                                                <span className="dashboard-widget__icon">
                                                    <img src={DASHBOARD_WIDGET_ICON2} alt="" />
                                                </span>
                                                <div className="dashboard-widget__content flx-between gap-1 align-items-end">
                                                    <div>
                                                        <h4 className="dashboard-widget__number mb-1 mt-3">$5289.00</h4>
                                                        <span className="dashboard-widget__text font-14">Total Earnings</span>
                                                    </div>
                                                    <img src={CHART_ICON} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-sm-6">
                                            <div className="dashboard-widget">
                                                <img src={WIDGET_SHAPE1} alt="" className="dashboard-widget__shape one" />
                                                <img src={WIDGET_SHAPE2} alt="" className="dashboard-widget__shape two" />
                                                <span className="dashboard-widget__icon">
                                                    <img src={DASHBOARD_WIDGET_ICON3} alt="" />
                                                </span>
                                                <div className="dashboard-widget__content flx-between gap-1 align-items-end">
                                                    <div>
                                                        <h4 className="dashboard-widget__number mb-1 mt-3">5,2458</h4>
                                                        <span className="dashboard-widget__text font-14">Total Downloads</span>
                                                    </div>
                                                    <img src={CHART_ICON} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-3 col-sm-6">
                                            <div className="dashboard-widget">
                                                <img src={WIDGET_SHAPE1} alt="" className="dashboard-widget__shape one" />
                                                <img src={WIDGET_SHAPE2} alt="" className="dashboard-widget__shape two" />
                                                <span className="dashboard-widget__icon">
                                                    <img src={DASHBOARD_WIDGET_ICON4} alt="" />
                                                </span>
                                                <div className="dashboard-widget__content flx-between gap-1 align-items-end">
                                                    <div>
                                                        <h4 className="dashboard-widget__number mb-1 mt-3">2,589</h4>
                                                        <span className="dashboard-widget__text font-14">Total Sales</span>
                                                    </div>
                                                    <img src={CHART_ICON} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* dashboard body Item Start */}
                                <div className="dashboard-body__item">
                                    <div className="row gy-4">
                                        <div className="col-xl-8">
                                            <div className="dashboard-card">
                                                <div className="dashboard-card__header flx-between gap-2">
                                                    <h6 className="dashboard-card__title mb-0">Sales History</h6>
                                                    <div className="select-has-icon d-inline-block">
                                                        <select className="select common-input select-sm">
                                                            <option value="1">Monthly</option>
                                                            <option value="2">Daily</option>
                                                            <option value="3">Yearly</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="dashboard-card__chart">
                                                    <div id="chart"></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-4">
                                            <div className="dashboard-card">
                                                <div className="dashboard-card__header">
                                                    <h6 className="dashboard-card__title mb-0">Top Countries</h6>
                                                </div>
                                                <ul className="country-list">
                                                    <li className="country-list__item flx-between gap-2">
                                                        <div className="country-list__content flx-align gap-2">
                                                            <span className="country-list__flag"><img src={FLAG1} alt="" /></span>
                                                            <span className="country-list__name">United States</span>
                                                        </div>
                                                        <span className="country-list__amount">$58.00</span>
                                                    </li>
                                                    <li className="country-list__item flx-between gap-2">
                                                        <div className="country-list__content flx-align gap-2">
                                                            <span className="country-list__flag"><img src={FLAG2} alt="" /></span>
                                                            <span className="country-list__name">Maxico</span>
                                                        </div>
                                                        <span className="country-list__amount">$69.00</span>
                                                    </li>
                                                    <li className="country-list__item flx-between gap-2">
                                                        <div className="country-list__content flx-align gap-2">
                                                            <span className="country-list__flag"><img src={FLAG3} alt="" /></span>
                                                            <span className="country-list__name">Brazil</span>
                                                        </div>
                                                        <span className="country-list__amount">$120.00</span>
                                                    </li>
                                                    <li className="country-list__item flx-between gap-2">
                                                        <div className="country-list__content flx-align gap-2">
                                                            <span className="country-list__flag"><img src={FLAG4} alt="" /></span>
                                                            <span className="country-list__name">Canada</span>
                                                        </div>
                                                        <span className="country-list__amount">$25.00</span>
                                                    </li>
                                                    <li className="country-list__item flx-between gap-2">
                                                        <div className="country-list__content flx-align gap-2">
                                                            <span className="country-list__flag"><img src={FLAG5} alt="" /></span>
                                                            <span className="country-list__name">Ireland</span>
                                                        </div>
                                                        <span className="country-list__amount">$85.00</span>
                                                    </li>
                                                    <li className="country-list__item flx-between gap-2">
                                                        <div className="country-list__content flx-align gap-2">
                                                            <span className="country-list__flag"><img src={FLAG6} alt="" /></span>
                                                            <span className="country-list__name">Newzealand</span>
                                                        </div>
                                                        <span className="country-list__amount">$99.00</span>
                                                    </li>
                                                    <li className="country-list__item flx-between gap-2">
                                                        <div className="country-list__content flx-align gap-2">
                                                            <span className="country-list__flag"><img src={FLAG7} alt="" /></span>
                                                            <span className="country-list__name">Spain</span>
                                                        </div>
                                                        <span className="country-list__amount">$89.00</span>
                                                    </li>
                                                    <li className="country-list__item flx-between gap-2">
                                                        <div className="country-list__content flx-align gap-2">
                                                            <span className="country-list__flag"><img src={FLAG8} alt="" /></span>
                                                            <span className="country-list__name">Turkey</span>
                                                        </div>
                                                        <span className="country-list__amount">$72.00</span>
                                                    </li>
                                                    <li className="country-list__item flx-between gap-2">
                                                        <div className="country-list__content flx-align gap-2">
                                                            <span className="country-list__flag"><img src={FLAG9} alt="" /></span>
                                                            <span className="country-list__name">Italy</span>
                                                        </div>
                                                        <span className="country-list__amount">$465.00</span>
                                                    </li>
                                                    <li className="country-list__item flx-between gap-2">
                                                        <div className="country-list__content flx-align gap-2">
                                                            <span className="country-list__flag"><img src={FLAG10} alt="" /></span>
                                                            <span className="country-list__name">Argentina</span>
                                                        </div>
                                                        <span className="country-list__amount">$45.00</span>
                                                    </li>
                                                    <li className="country-list__item flx-between gap-2">
                                                        <div className="country-list__content flx-align gap-2">
                                                            <span className="country-list__flag"><img src={FLAG11} alt="" /></span>
                                                            <span className="country-list__name">Maxico</span>
                                                        </div>
                                                        <span className="country-list__amount">$42.00</span>
                                                    </li>
                                                    <li className="country-list__item flx-between gap-2">
                                                        <div className="country-list__content flx-align gap-2">
                                                            <span className="country-list__flag"><img src={FLAG12} alt="" /></span>
                                                            <span className="country-list__name">Newzealand</span>
                                                        </div>
                                                        <span className="country-list__amount">$89.00</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* dashboard body Item Start */}
                                <div className="dashboard-body__item">
                                    <div className="table-responsive">
                                        <table className="table style-two">
                                            <thead>
                                                <tr>
                                                    <th>Date</th>
                                                    <th>Item Sales</th>
                                                    <th>Earning</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td> Saturday, 10</td>
                                                    <td> 2</td>
                                                    <td> $89.00</td>
                                                </tr>
                                                <tr>
                                                    <td> Sunday, 11</td>
                                                    <td> 3</td>
                                                    <td>$150.00</td>
                                                </tr>
                                                <tr>
                                                    <td> Monday, 12</td>
                                                    <td> 2</td>
                                                    <td>$15.00</td>
                                                </tr>
                                                <tr>
                                                    <td> Tuesday, 15</td>
                                                    <td> 2</td>
                                                    <td>$25.00</td>
                                                </tr>
                                                <tr>
                                                    <td> Wednesday, 16</td>
                                                    <td> 5</td>
                                                    <td>$20.00</td>
                                                </tr>
                                                <tr>
                                                    <td> Thursday, 17</td>
                                                    <td> 3</td>
                                                    <td>$35.00</td>
                                                </tr>
                                                <tr>
                                                    <td> Wednesday, 18</td>
                                                    <td> 1</td>
                                                    <td>$15.00</td>
                                                </tr>
                                                <tr>
                                                    <td> Thursday, 20</td>
                                                    <td> 5</td>
                                                    <td>$22.00</td>
                                                </tr>
                                                <tr>
                                                    <td> Wednesday, 22</td>
                                                    <td> 8</td>
                                                    <td>$10.00</td>
                                                </tr>
                                                <tr>
                                                    <td> Tuesday, 23</td>
                                                    <td> 6</td>
                                                    <td>$125.00</td>
                                                </tr>
                                                <tr>
                                                    <td> Wednesday, 24</td>
                                                    <td> 3</td>
                                                    <td>$15.00</td>
                                                </tr>
                                                <tr>
                                                    <td> Tuesday, 23</td>
                                                    <td> 9</td>
                                                    <td>$15.00</td>
                                                </tr>
                                                <tr>
                                                    <td>Wednesday, 24</td>
                                                    <td> 5</td>
                                                    <td>$23.00</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Dashboard Footer */}
                        <div className="dashboard-footer bottom-footer-two mt-32 border-0 bg-white">
                            <div className="bottom-footer__inner flx-between gap-3">
                                <p className="bottom-footer__text font-14"> Copyright © 2024 DPmarket, All rights reserved.</p>
                                <div className="footer-links gap-4">
                                    <a href="#" className="footer-link hover-text-heading font-14">Terms of service</a>
                                    <a href="#" className="footer-link hover-text-heading font-14">Privacy Policy</a>
                                    <a href="#" className="footer-link hover-text-heading font-14">cookies</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DashboardPage;
```