import React, { useState, useEffect } from 'react';

// Import image assets
import logo from '../assets/images/logo/logo.png';
import whiteLogoTwo from '../assets/images/logo/white-logo-two.png';
import favicon from '../assets/images/logo/favicon.png';
import userIcon from '../assets/images/icons/user.svg';
import globeIcon from '../assets/images/icons/globe.svg';
import globeWhiteIcon from '../assets/images/icons/globe-white.svg';
import sidebarIcon1 from '../assets/images/icons/sidebar-icon1.svg';
import sidebarIconActive1 from '../assets/images/icons/sidebar-icon-active1.svg';
import sidebarIcon2 from '../assets/images/icons/sidebar-icon2.svg';
import sidebarIconActive2 from '../assets/images/icons/sidebar-icon-active2.svg';
import sidebarIcon4 from '../assets/images/icons/sidebar-icon4.svg';
import sidebarIconActive4 from '../assets/images/icons/sidebar-icon-active4.svg';
import sidebarIcon5 from '../assets/images/icons/sidebar-icon5.svg';
import sidebarIconActive5 from '../assets/images/icons/sidebar-icon-active5.svg';
import sidebarIcon10 from '../assets/images/icons/sidebar-icon10.svg';
import sidebarIconActive10 from '../assets/images/icons/sidebar-icon-active10.svg';
import sidebarIcon12 from '../assets/images/icons/sidebar-icon12.svg';
import sidebarIconActive12 from '../assets/images/icons/sidebar-icon-active12.svg';
import sidebarIcon11 from '../assets/images/icons/sidebar-icon11.svg';
import sidebarIconActive11 from '../assets/images/icons/sidebar-icon-active11.svg';
import sidebarIcon7 from '../assets/images/icons/sidebar-icon7.svg';
import sidebarIconActive7 from '../assets/images/icons/sidebar-icon-active7.svg';
import sidebarIcon6 from '../assets/images/icons/sidebar-icon6.svg';
import sidebarIconActive6 from '../assets/images/icons/sidebar-icon-active6.svg';
import sidebarIcon8 from '../assets/images/icons/sidebar-icon8.svg';
import sidebarIconActive8 from '../assets/images/icons/sidebar-icon-active8.svg';
import sidebarIcon13 from '../assets/images/icons/sidebar-icon13.svg';
import sidebarIconActive13 from '../assets/images/icons/sidebar-icon-active13.svg';
import angleRightIcon from '../assets/images/icons/angle-right.svg';
import searchDarkIcon from '../assets/images/icons/search-dark.svg';
import searchDarkWhiteIcon from '../assets/images/icons/search-dark-white.svg';
import sunIcon from '../assets/images/icons/sun.svg';
import moonIcon from '../assets/images/icons/moon.svg';
import userProfileThumb from '../assets/images/thumbs/user-profile.png';

// Dummy data for Following items
const dummyFollowers = Array.from({ length: 7 }).map((_, i) => ({
  id: i + 1,
  authorName: 'Oviousdev',
  authorThumb: '/src/assets/images/thumbs/author-details-img.png', // Corrected path
  badges: [
    { id: 1, image: '/src/assets/images/thumbs/badge1.png', info: 'Badge Info' },
    { id: 2, image: '/src/assets/images/thumbs/badge2.png', info: 'Badge Info' },
    { id: 3, image: '/src/assets/images/thumbs/badge3.png', info: 'Badge Info' },
    { id: 4, image: '/src/assets/images/thumbs/badge4.png', info: 'Badge Info' },
    { id: 5, image: '/src/assets/images/thumbs/badge5.png', info: 'Badge Info' },
    { id: 6, image: '/src/assets/images/thumbs/badge6.png', info: 'Badge Info' },
    { id: 7, image: '/src/assets/images/thumbs/badge7.png', info: 'Badge Info' },
    { id: 8, image: '/src/assets/images/thumbs/badge8.png', info: 'Badge Info' },
  ],
  items: 77,
  followersCount: 100,
  memberSince: 'September 2018',
  freelanceAvailable: true,
  sales: 15830,
  rating: 5,
  ratingsCount: 116,
}));

interface FollowItemProps {
  follower: typeof dummyFollowers[0];
}

const FollowItem: React.FC<FollowItemProps> = ({ follower }) => {
  return (
    <div className="follow-item">
      <div className="follow-item__author">
        <div className="d-flex align-items-start gap-2">
          <div className="author-details__thumb flex-shrink-0">
            <img src={follower.authorThumb} alt="" />
          </div>
          <div className="author-details__content">
            <h6 className="author-details__name font-18 mb-2">{follower.authorName}</h6>
            <ul className="badge-list badge-list--sm flx-align gap-1 mt-3 ms-0">
              {follower.badges.map((badge) => (
                <li key={badge.id} className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title={badge.info}>
                  <img src={badge.image} alt="" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="follow-item__meta">
        <strong className="font-11 fw-600 text-heading">
          {follower.items} Items
          <br />
          {follower.followersCount} Followers
          <br />
          Member Since: {follower.memberSince}
          <br />
          {follower.freelanceAvailable ? 'Available for freelance work' : 'Not available for freelance work'}
        </strong>
      </div>
      <div className="follow-item__sales">
        <div className="sales">
          <span className="sales__text mb-1 font-13 text-heading fw-500">Sales</span>
          <h6 className="sales__amount mb-0 font-body">{follower.sales}</h6>
          <ul className="star-rating mt-2">
            {Array.from({ length: follower.rating }).map((_, i) => (
              <li key={i} className="star-rating__item font-11"><i className="fas fa-star"></i></li>
            ))}
          </ul>
          <span className="star-rating__text text-heading font-12 fw-500"> {follower.ratingsCount} ratings</span>
        </div>
      </div>
      <button type="button" className="btn btn-main pill px-4">Unfollow</button>
    </div>
  );
};

// These would ideally be separate components in a larger application structure
const MobileMenu: React.FC = () => {
    const [isActive, setIsActive] = useState(false);

    const toggleMobileMenu = () => {
        setIsActive(!isActive);
        document.body.classList.toggle('scroll-hide-sm');
    };

    const closeMobileMenu = () => {
        setIsActive(false);
        document.body.classList.remove('scroll-hide-sm');
    };

    return (
        <div className={`mobile-menu d-lg-none d-block ${isActive ? 'active' : ''}`}>
            <button type="button" className="close-button" onClick={closeMobileMenu}> <i className="las la-times"></i> </button>
            <div className="mobile-menu__inner">
                <a href="/index-2.html" className="mobile-menu__logo">
                    <img src={logo} alt="Logo" className="white-version" />
                    <img src={whiteLogoTwo} alt="Logo" className="dark-version" />
                </a>
                <div className="mobile-menu__menu">
                    <ul className="nav-menu flx-align nav-menu--mobile">
                        <li className="nav-menu__item has-submenu">
                            <a href="#" className="nav-menu__link">Home</a>
                            <ul className="nav-submenu">
                                <li className="nav-submenu__item"><a href="/index-2.html" className="nav-submenu__link"> Home One</a></li>
                                <li className="nav-submenu__item"><a href="/index-two.html" className="nav-submenu__link"> Home Two</a></li>
                                <li className="nav-submenu__item"><a href="/index-three.html" className="nav-submenu__link"> Home Three</a></li>
                            </ul>
                        </li>
                        <li className="nav-menu__item has-submenu">
                            <a href="#" className="nav-menu__link">Products</a>
                            <ul className="nav-submenu">
                                <li className="nav-submenu__item"><a href="/all-product.html" className="nav-submenu__link"> All Products</a></li>
                                <li className="nav-submenu__item"><a href="/product-details.html" className="nav-submenu__link"> Product Details</a></li>
                            </ul>
                        </li>
                        <li className="nav-menu__item has-submenu">
                            <a href="#" className="nav-menu__link">Pages</a>
                            <ul className="nav-submenu">
                                <li className="nav-submenu__item"><a href="/profile.html" className="nav-submenu__link"> Profile</a></li>
                                <li className="nav-submenu__item"><a href="/cart.html" className="nav-submenu__link"> Shopping Cart</a></li>
                                <li className="nav-submenu__item"><a href="/cart-personal.html" className="nav-submenu__link"> Mailing Address</a></li>
                                <li className="nav-submenu__item"><a href="/cart-payment.html" className="nav-submenu__link"> Payment Method</a></li>
                                <li className="nav-submenu__item"><a href="/cart-thank-you.html" className="nav-submenu__link"> Preview Order</a></li>
                                <li className="nav-submenu__item"><a href="/dashboard.html" className="nav-submenu__link"> Dashboard</a></li>
                            </ul>
                        </li>
                        <li className="nav-menu__item has-submenu">
                            <a href="#" className="nav-menu__link">Blog</a>
                            <ul className="nav-submenu">
                                <li className="nav-submenu__item"><a href="/blog.html" className="nav-submenu__link"> Blog</a></li>
                                <li className="nav-submenu__item"><a href="/blog-details.html" className="nav-submenu__link"> Blog Details</a></li>
                                <li className="nav-submenu__item"><a href="/blog-details-sidebar.html" className="nav-submenu__link"> Blog Details Sidebar</a></li>
                            </ul>
                        </li>
                        <li className="nav-menu__item"><a href="/contact.html" className="nav-menu__link">Contact</a></li>
                    </ul>
                    <div className="header-right__inner d-lg-none my-3 gap-1 d-flex flx-align">
                        <a href="/register.html" className="btn btn-main pill">
                            <span className="icon-left icon"> <img src={userIcon} alt="" /></span>Create Account
                        </a>
                        <div className="language-select flx-align select-has-icon">
                            <img src={globeIcon} alt="" className="globe-icon white-version" />
                            <img src={globeWhiteIcon} alt="" className="globe-icon dark-version" />
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
            {/* Overlay for mobile menu */}
            <div className={`side-overlay ${isActive ? 'show' : ''}`} onClick={closeMobileMenu}></div>
        </div>
    );
};


const DashboardSidebar: React.FC<{ activePage: string; onClose: () => void }> = ({ activePage, onClose }) => {
  return (
    <div className="dashboard-sidebar">
      <button type="button" className="dashboard-sidebar__close d-lg-none d-flex" onClick={onClose}><i className="las la-times"></i></button>
      <div className="dashboard-sidebar__inner">
        <a href="/" className="logo mb-48">
          <img src={logo} alt="" className="white-version" />
          <img src={whiteLogoTwo} alt="" className="dark-version" />
        </a>
        <a href="/" className="logo favicon mb-48">
          <img src={favicon} alt="" />
        </a>
        <ul className="sidebar-list">
          <li className={`sidebar-list__item ${activePage === 'dashboard' ? 'activePage' : ''}`}>
            <a href="/dashboard.html" className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src={sidebarIcon1} alt="" className="icon" />
                <img src={sidebarIconActive1} alt="" className="icon icon-active" />
              </span>
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li className={`sidebar-list__item ${activePage === 'profile' ? 'activePage' : ''}`}>
            <a href="/dashboard-profile.html" className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src={sidebarIcon2} alt="" className="icon" />
                <img src={sidebarIconActive2} alt="" className="icon icon-active" />
              </span>
              <span className="text">Profile</span>
            </a>
          </li>
          <li className={`sidebar-list__item ${activePage === 'follower' ? 'activePage' : ''}`}>
            <a href="/follower.html" className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src={sidebarIcon4} alt="" className="icon" />
                <img src={sidebarIconActive4} alt="" className="icon icon-active" />
              </span>
              <span className="text">Followers</span>
            </a>
          </li>
          <li className={`sidebar-list__item ${activePage === 'following' ? 'activePage' : ''}`}>
            <a href="/following.html" className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src={sidebarIcon5} alt="" className="icon" />
                <img src={sidebarIconActive5} alt="" className="icon icon-active" />
              </span>
              <span className="text">Followings</span>
            </a>
          </li>
          <li className={`sidebar-list__item ${activePage === 'setting' ? 'activePage' : ''}`}>
            <a href="/setting.html" className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src={sidebarIcon10} alt="" className="icon" />
                <img src={sidebarIconActive10} alt="" className="icon icon-active" />
              </span>
              <span className="text">Settings</span>
            </a>
          </li>
          <li className={`sidebar-list__item ${activePage === 'statement' ? 'activePage' : ''}`}>
            <a href="/statement.html" className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src={sidebarIcon12} alt="" className="icon" />
                <img src={sidebarIconActive12} alt="" className="icon icon-active" />
              </span>
              <span className="text">Statements</span>
            </a>
          </li>
          <li className={`sidebar-list__item ${activePage === 'earning' ? 'activePage' : ''}`}>
            <a href="/earning.html" className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src={sidebarIcon11} alt="" className="icon" />
                <img src={sidebarIconActive11} alt="" className="icon icon-active" />
              </span>
              <span className="text">Earnings</span>
            </a>
          </li>
          <li className={`sidebar-list__item ${activePage === 'review' ? 'activePage' : ''}`}>
            <a href="/review.html" className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src={sidebarIcon7} alt="" className="icon" />
                <img src={sidebarIconActive7} alt="" className="icon icon-active" />
              </span>
              <span className="text">Reviews</span>
            </a>
          </li>
          <li className={`sidebar-list__item ${activePage === 'download' ? 'activePage' : ''}`}>
            <a href="/download.html" className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src={sidebarIcon6} alt="" className="icon" />
                <img src={sidebarIconActive6} alt="" className="icon icon-active" />
              </span>
              <span className="text">Downloads</span>
            </a>
          </li>
          <li className={`sidebar-list__item ${activePage === 'refund' ? 'activePage' : ''}`}>
            <a href="/refund.html" className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src={sidebarIcon8} alt="" className="icon" />
                <img src={sidebarIconActive8} alt="" className="icon icon-active" />
              </span>
              <span className="text">Refunds</span>
            </a>
          </li>
          <li className={`sidebar-list__item ${activePage === 'logout' ? 'activePage' : ''}`}>
            <a href="/login.html" className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src={sidebarIcon13} alt="" className="icon" />
                <img src={sidebarIconActive13} alt="" className="icon icon-active" />
              </span>
              <span className="text">Logout</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

const DashboardNav: React.FC = () => {
    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const [isUserProfileDropdownActive, setIsUserProfileDropdownActive] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            setIsDarkMode(true);
        }

        const handleOutsideClick = (event: MouseEvent) => {
            if (!(event.target as HTMLElement).closest('.user-profile__button') && !(event.target as HTMLElement).closest('.user-profile-dropdown')) {
                setIsUserProfileDropdownActive(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, []);

    const toggleSidebar = () => {
        setIsSidebarActive(!isSidebarActive);
        document.body.classList.toggle('active', !isSidebarActive);
        document.querySelector('.dashboard-sidebar')?.classList.toggle('active', !isSidebarActive);
    };

    const toggleUserProfileDropdown = (event: React.MouseEvent) => {
        event.stopPropagation(); // Prevent the body click listener from immediately closing it
        setIsUserProfileDropdownActive(!isUserProfileDropdownActive);
    };

    const handleThemeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newTheme = event.target.checked ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        setIsDarkMode(event.target.checked);
    };

    return (
        <div className="dashboard-nav bg-white flx-between gap-md-3 gap-2">
            <div className="dashboard-nav__left flx-align gap-md-3 gap-2">
                <button type="button" className="icon-btn bar-icon text-heading bg-gray-seven flx-center" onClick={toggleSidebar}>
                    <i className="las la-bars"></i>
                </button>
                <button type="button" className="icon-btn arrow-icon text-heading bg-gray-seven flx-center" onClick={toggleSidebar}>
                    <img src={angleRightIcon} alt="" />
                </button>
                <form action="#" className="search-input d-sm-block d-none">
                    <span className="icon">
                        <img src={searchDarkIcon} alt="" className="white-version" />
                        <img src={searchDarkWhiteIcon} alt="" className="dark-version" />
                    </span>
                    <input type="text" className="common-input common-input--md common-input--bg pill w-100" placeholder="Search here..." />
                </form>
            </div>
            <div className="dashboard-nav__right">
                <div className="header-right flx-align">
                    <div className="header-right__inner gap-sm-3 gap-2 flx-align d-flex">
                        <div className="theme-switch-wrapper position-relative">
                            <label className="theme-switch" htmlFor="checkbox">
                                <input type="checkbox" className="d-none" id="checkbox" checked={isDarkMode} onChange={handleThemeChange} />
                                <span className="slider text-black header-right__button white-version">
                                    <img src={sunIcon} alt="" />
                                </span>
                                <span className="slider text-black header-right__button dark-version">
                                    <img src={moonIcon} alt="" />
                                </span>
                            </label>
                        </div>
                        <div className="user-profile">
                            <button className="user-profile__button flex-align" onClick={toggleUserProfileDropdown}>
                                <span className="user-profile__thumb">
                                    <img src={userProfileThumb} className="cover-img" alt="" />
                                </span>
                            </button>
                            <ul className={`user-profile-dropdown ${isUserProfileDropdownActive ? 'show' : ''}`}>
                                <li className="sidebar-list__item">
                                    <a href="/dashboard-profile.html" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img src={sidebarIcon2} alt="" className="icon" />
                                            <img src={sidebarIconActive2} alt="" className="icon icon-active" />
                                        </span>
                                        <span className="text">Profile</span>
                                    </a>
                                </li>
                                <li className="sidebar-list__item">
                                    <a href="/setting.html" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img src={sidebarIcon10} alt="" className="icon" />
                                            <img src={sidebarIconActive10} alt="" className="icon icon-active" />
                                        </span>
                                        <span className="text">Settings</span>
                                    </a>
                                </li>
                                <li className="sidebar-list__item">
                                    <a href="/login.html" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img src={sidebarIcon13} alt="" className="icon" />
                                            <img src={sidebarIconActive13} alt="" className="icon icon-active" />
                                        </span>
                                        <span className="text">Logout</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="language-select flx-align select-has-icon">
                            <img src={globeIcon} alt="" className="globe-icon white-version" />
                            <img src={globeWhiteIcon} alt="" className="globe-icon dark-version" />
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
};

const DashboardFooter: React.FC = () => {
  return (
    <div className="dashboard-footer bottom-footer-two mt-32 border-0 bg-white">
      <div className="bottom-footer__inner flx-between gap-3">
        <p className="bottom-footer__text font-14"> Copyright &copy; 2024 DPmarket, All rights reserved.</p>
        <div className="footer-links gap-4">
          <a href="#" className="footer-link hover-text-heading font-14">Terms of service</a>
          <a href="#" className="footer-link hover-text-heading font-14">Privacy Policy</a>
          <a href="#" className="footer-link hover-text-heading font-14">cookies</a>
        </div>
      </div>
    </div>
  );
};

const FollowingPage: React.FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        // This is a placeholder for any JS that would initialize tooltips, etc.
        // In a real React app, you'd use a library like react-bootstrap for tooltips,
        // or a custom hook for Bootstrap's JS functionalities.
        const initTooltips = () => {
            const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
            // @ts-ignore
            if (window.bootstrap && window.bootstrap.Tooltip) {
                // @ts-ignore
                [...tooltipTriggerList].map(tooltipTriggerEl => new window.bootstrap.Tooltip(tooltipTriggerEl))
            }
        };

        // Initialize tooltips when component mounts or data changes
        initTooltips();

        // Cleanup function for tooltips if needed
        return () => {
            const tooltips = document.querySelectorAll('.tooltip');
            tooltips.forEach(tooltip => tooltip.remove());
        };
    }, []); // Empty dependency array means this runs once on mount

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
        document.body.classList.toggle('scroll-hide-sm', !isSidebarOpen);
    };


  return (
    <React.Fragment>
      {/* Preloader, Overlay, Scroll to Top would typically be handled globally or in App.tsx/Layout.tsx */}
      {/* <div className="loader-mask">...</div> */}
      {/* <div className="overlay"></div> */}
      {/* <div className="side-overlay"></div> */}
      {/* <div className="progress-wrap">...</div> */}

      <MobileMenu />

      <section className="dashboard">
        <div className="dashboard__inner d-flex">
          <DashboardSidebar activePage="following" onClose={() => setIsSidebarOpen(false)} />

          <div className="dashboard-body">
            <DashboardNav />

            <div className="dashboard-body__content">
              <div className="card common-card">
                <div className="card-body">
                  <div className="follow-wrapper">
                    {dummyFollowers.map((follower) => (
                      <FollowItem key={follower.id} follower={follower} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <DashboardFooter />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default FollowingPage;