import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom for navigation

// Use import.meta.env.BASE_URL for assets if they are in the public folder,
// which is a common practice for Vite projects with static assets.
// This ensures paths work correctly when deployed to a sub-directory.
const PUBLIC_ASSETS_PATH = import.meta.env.BASE_URL;

// Placeholder for DashboardSidebar component
const DashboardSidebar: React.FC = () => {
  return (
    <div className="dashboard-sidebar">
      <button type="button" className="dashboard-sidebar__close d-lg-none d-flex"><i className="las la-times"></i></button>
      <div className="dashboard-sidebar__inner">
        <Link to={`${PUBLIC_ASSETS_PATH}index-2.html`} className="logo mb-48">
          <img src={`${PUBLIC_ASSETS_PATH}assets/images/logo/logo.png`} alt="Logo" className="white-version" />
          <img src={`${PUBLIC_ASSETS_PATH}assets/images/logo/white-logo-two.png`} alt="Logo" className="dark-version" />
        </Link>
        <Link to={`${PUBLIC_ASSETS_PATH}index-2.html`} className="logo favicon mb-48">
          <img src={`${PUBLIC_ASSETS_PATH}assets/images/logo/favicon.png`} alt="" />
        </Link>

        <ul className="sidebar-list">
          <li className="sidebar-list__item">
            <Link to={`${PUBLIC_ASSETS_PATH}dashboard.html`} className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sidebar-icon1.svg`} alt="" className="icon" />
                <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sidebar-icon-active1.svg`} alt="" className="icon icon-active" />
              </span>
              <span className="text">Dashboard</span>
            </Link>
          </li>
          <li className="sidebar-list__item">
            <Link to={`${PUBLIC_ASSETS_PATH}dashboard-profile.html`} className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sidebar-icon2.svg`} alt="" className="icon" />
                <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sidebar-icon-active2.svg`} alt="" className="icon icon-active" />
              </span>
              <span className="text">Profile</span>
            </Link>
          </li>
          <li className="sidebar-list__item">
            <Link to={`${PUBLIC_ASSETS_PATH}follower.html`} className="sidebar-list__link activePage">
              <span className="sidebar-list__icon">
                <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sidebar-icon4.svg`} alt="" className="icon" />
                <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sidebar-icon-active4.svg`} alt="" className="icon icon-active" />
              </span>
              <span className="text">Followers</span>
            </Link>
          </li>
          <li className="sidebar-list__item">
            <Link to={`${PUBLIC_ASSETS_PATH}following.html`} className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sidebar-icon5.svg`} alt="" className="icon" />
                <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sidebar-icon-active5.svg`} alt="" className="icon icon-active" />
              </span>
              <span className="text">Followings</span>
            </Link>
          </li>
          <li className="sidebar-list__item">
            <Link to={`${PUBLIC_ASSETS_PATH}setting.html`} className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sidebar-icon10.svg`} alt="" className="icon" />
                <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sidebar-icon-active10.svg`} alt="" className="icon icon-active" />
              </span>
              <span className="text">Settings</span>
            </Link>
          </li>
          <li className="sidebar-list__item">
            <Link to={`${PUBLIC_ASSETS_PATH}statement.html`} className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sidebar-icon12.svg`} alt="" className="icon" />
                <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sidebar-icon-active12.svg`} alt="" className="icon icon-active" />
              </span>
              <span className="text">Statements</span>
            </Link>
          </li>
          <li className="sidebar-list__item">
            <Link to={`${PUBLIC_ASSETS_PATH}earning.html`} className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sidebar-icon11.svg`} alt="" className="icon" />
                <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sidebar-icon-active11.svg`} alt="" className="icon icon-active" />
              </span>
              <span className="text">Earnings</span>
            </Link>
          </li>
          <li className="sidebar-list__item">
            <Link to={`${PUBLIC_ASSETS_PATH}review.html`} className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sidebar-icon7.svg`} alt="" className="icon" />
                <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sidebar-icon-active7.svg`} alt="" className="icon icon-active" />
              </span>
              <span className="text">Reviews</span>
            </Link>
          </li>

          <li className="sidebar-list__item">
            <Link to={`${PUBLIC_ASSETS_PATH}download.html`} className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sidebar-icon6.svg`} alt="" className="icon" />
                <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sidebar-icon-active6.svg`} alt="" className="icon icon-active" />
              </span>
              <span className="text">Downloads</span>
            </Link>
          </li>
          <li className="sidebar-list__item">
            <Link to={`${PUBLIC_ASSETS_PATH}refund.html`} className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sidebar-icon8.svg`} alt="" className="icon" />
                <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sidebar-icon-active8.svg`} alt="" className="icon icon-active" />
              </span>
              <span className="text">Refunds</span>
            </Link>
          </li>
          <li className="sidebar-list__item">
            <Link to={`${PUBLIC_ASSETS_PATH}login.html`} className="sidebar-list__link">
              <span className="sidebar-list__icon">
                <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sidebar-icon13.svg`} alt="" className="icon" />
                <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sidebar-icon-active13.svg`} alt="" className="icon icon-active" />
              </span>
              <span className="text">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Placeholder for DashboardNav component
const DashboardNav: React.FC = () => {
  return (
    <div className="dashboard-nav bg-white flx-between gap-md-3 gap-2">
      <div className="dashboard-nav__left flx-align gap-md-3 gap-2">
        <button type="button" className="icon-btn bar-icon text-heading bg-gray-seven flx-center">
          <i className="las la-bars"></i>
        </button>
        <button type="button" className="icon-btn arrow-icon text-heading bg-gray-seven flx-center">
          <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/angle-right.svg`} alt="" />
        </button>
        <form action="#" className="search-input d-sm-block d-none">
          <span className="icon">
            <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/search-dark.svg`} alt="" className="white-version" />
            <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/search-dark-white.svg`} alt="" className="dark-version" />
          </span>
          <input type="text" className="common-input common-input--md common-input--bg pill w-100" placeholder="Search here..." />
        </form>
      </div>
      <div className="dashboard-nav__right">
        <div className="header-right flx-align">
          <div className="header-right__inner gap-sm-3 gap-2 flx-align d-flex">
            {/* Light Dark Mode Toggle - Note: Requires global state management in a real app */}
            <div className="theme-switch-wrapper position-relative">
              <label className="theme-switch" htmlFor="checkbox">
                <input type="checkbox" className="d-none" id="checkbox" />
                <span className="slider text-black header-right__button white-version">
                  <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sun.svg`} alt="" />
                </span>
                <span className="slider text-black header-right__button dark-version">
                  <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/moon.svg`} alt="" />
                </span>
              </label>
            </div>

            <div className="user-profile">
              <button className="user-profile__button flex-align">
                <span className="user-profile__thumb">
                  <img src={`${PUBLIC_ASSETS_PATH}assets/images/thumbs/user-profile.png`} className="cover-img" alt="" />
                </span>
              </button>
              <ul className="user-profile-dropdown">
                <li className="sidebar-list__item">
                  <Link to={`${PUBLIC_ASSETS_PATH}dashboard-profile.html`} className="sidebar-list__link">
                    <span className="sidebar-list__icon">
                      <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sidebar-icon2.svg`} alt="" className="icon" />
                      <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sidebar-icon-active2.svg`} alt="" className="icon icon-active" />
                    </span>
                    <span className="text">Profile</span>
                  </Link>
                </li>

                <li className="sidebar-list__item">
                  <Link to={`${PUBLIC_ASSETS_PATH}setting.html`} className="sidebar-list__link">
                    <span className="sidebar-list__icon">
                      <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sidebar-icon10.svg`} alt="" className="icon" />
                      <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sidebar-icon-active10.svg`} alt="" className="icon icon-active" />
                    </span>
                    <span className="text">Settings</span>
                  </Link>
                </li>
                <li className="sidebar-list__item">
                  <Link to={`${PUBLIC_ASSETS_PATH}login.html`} className="sidebar-list__link">
                    <span className="sidebar-list__icon">
                      <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sidebar-icon13.svg`} alt="" className="icon" />
                      <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/sidebar-icon-active13.svg`} alt="" className="icon icon-active" />
                    </span>
                    <span className="text">Logout</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="language-select flx-align select-has-icon">
              <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/globe.svg`} alt="" className="globe-icon white-version" />
              <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/globe-white.svg`} alt="" className="globe-icon dark-version" />
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

// Placeholder for DashboardFooter component
const DashboardFooter: React.FC = () => {
  return (
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
  );
};


// Component for a single follower item
interface FollowerItemProps {
  authorName: string;
  avatarSrc: string;
  badges: string[]; // Array of badge image paths
  itemsCount: number;
  followersCount: number;
  memberSince: string;
  freelanceAvailable: boolean;
  sales: number;
  ratings: number;
}

const FollowerItem: React.FC<FollowerItemProps> = ({
  authorName,
  avatarSrc,
  badges,
  itemsCount,
  followersCount,
  memberSince,
  freelanceAvailable,
  sales,
  ratings,
}) => {
  return (
    <div className="follow-item">
      <div className="follow-item__author">
        <div className="d-flex align-items-start gap-2">
          <div className="author-details__thumb flex-shrink-0">
            <img src={`${PUBLIC_ASSETS_PATH}${avatarSrc}`} alt={authorName} />
          </div>
          <div className="author-details__content">
            <h6 className="author-details__name font-18 mb-2">{authorName}</h6>
            <ul className="badge-list badge-list--sm flx-align gap-1 mt-3 ms-0">
              {badges.map((badgeSrc, index) => (
                // data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info" attributes would require Bootstrap JS
                <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info" key={index}>
                  <img src={`${PUBLIC_ASSETS_PATH}${badgeSrc}`} alt={`Badge ${index + 1}`} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="follow-item__meta">
        <strong className="font-11 fw-600 text-heading">
          {itemsCount} Items
          <br />
          {followersCount} Followers
          <br />
          Member Since: {memberSince}
          <br />
          {freelanceAvailable ? 'Available for freelance work' : 'Not available for freelance work'}
        </strong>
      </div>
      <div className="follow-item__sales">
        <div className="sales">
          <span className="sales__text mb-1 font-13 text-heading fw-500">Sales</span>
          <h6 className="sales__amount mb-0 font-body">{sales.toLocaleString()}</h6>
          <ul className="star-rating mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <li className="star-rating__item font-11" key={i}>
                <i className="fas fa-star"></i>
              </li>
            ))}
          </ul>
          <span className="star-rating__text text-heading font-12 fw-500"> {ratings} ratings</span>
        </div>
      </div>
      <button type="button" className="btn btn-main pill px-4">Follow</button>
    </div>
  );
};


const FollowerPage: React.FC = () => {
    // Dummy data for follower items based on the HTML structure
    const followersData: FollowerItemProps[] = Array(7).fill({
        authorName: "Oviousdev",
        avatarSrc: "assets/images/thumbs/author-details-img.png",
        badges: [
            "assets/images/thumbs/badge1.png",
            "assets/images/thumbs/badge2.png",
            "assets/images/thumbs/badge3.png",
            "assets/images/thumbs/badge4.png",
            "assets/images/thumbs/badge5.png",
            "assets/images/thumbs/badge6.png",
            "assets/images/thumbs/badge7.png",
            "assets/images/thumbs/badge8.png",
        ],
        itemsCount: 77,
        followersCount: 100,
        memberSince: "September 2018",
        freelanceAvailable: true,
        sales: 15830,
        ratings: 116,
    });


  return (
    <>
      {/* Preloader - In a real app, this would be managed globally, e.g., in App.tsx */}
      <div className="loader-mask">
        <div className="loader">
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Overlay - for mobile menu, etc. Managed by JS in original, needs React state/context */}
      <div className="overlay"></div>
      <div className="side-overlay"></div>

      {/* Scroll to Top - needs JS functionality, can be a dedicated React component */}
      <div className="progress-wrap">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>

      {/* Mobile Menu - typically part of a global layout component */}
      <div className="mobile-menu d-lg-none d-block">
        <button type="button" className="close-button"> <i className="las la-times"></i> </button>
        <div className="mobile-menu__inner">
          <Link to={`${PUBLIC_ASSETS_PATH}index-2.html`} className="mobile-menu__logo">
            <img src={`${PUBLIC_ASSETS_PATH}assets/images/logo/logo.png`} alt="Logo" className="white-version" />
            <img src={`${PUBLIC_ASSETS_PATH}assets/images/logo/white-logo-two.png`} alt="Logo" className="dark-version" />
          </Link>
          <div className="mobile-menu__menu">
            <ul className="nav-menu flx-align nav-menu--mobile">
              <li className="nav-menu__item has-submenu">
                <a href="#" onClick={(e) => e.preventDefault()} className="nav-menu__link">Home</a> {/* Use # or proper routing */}
                <ul className="nav-submenu">
                  <li className="nav-submenu__item">
                    <Link to={`${PUBLIC_ASSETS_PATH}index-2.html`} className="nav-submenu__link"> Home One</Link>
                  </li>
                  <li className="nav-submenu__item">
                    <Link to={`${PUBLIC_ASSETS_PATH}index-two.html`} className="nav-submenu__link"> Home Two</Link>
                  </li>
                  <li className="nav-submenu__item">
                    <Link to={`${PUBLIC_ASSETS_PATH}index-three.html`} className="nav-submenu__link"> Home Three</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-menu__item has-submenu">
                <a href="#" onClick={(e) => e.preventDefault()} className="nav-menu__link">Products</a>
                <ul className="nav-submenu">
                  <li className="nav-submenu__item">
                    <Link to={`${PUBLIC_ASSETS_PATH}all-product.html`} className="nav-submenu__link"> All Products</Link>
                  </li>
                  <li className="nav-submenu__item">
                    <Link to={`${PUBLIC_ASSETS_PATH}product-details.html`} className="nav-submenu__link"> Product Details</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-menu__item has-submenu">
                <a href="#" onClick={(e) => e.preventDefault()} className="nav-menu__link">Pages</a>
                <ul className="nav-submenu">
                  <li className="nav-submenu__item">
                    <Link to={`${PUBLIC_ASSETS_PATH}profile.html`} className="nav-submenu__link"> Profile</Link>
                  </li>
                  <li className="nav-submenu__item">
                    <Link to={`${PUBLIC_ASSETS_PATH}cart.html`} className="nav-submenu__link"> Shopping Cart</Link>
                  </li>
                  <li className="nav-submenu__item">
                    <Link to={`${PUBLIC_ASSETS_PATH}cart-personal.html`} className="nav-submenu__link"> Mailing Address</Link>
                  </li>
                  <li className="nav-submenu__item">
                    <Link to={`${PUBLIC_ASSETS_PATH}cart-payment.html`} className="nav-submenu__link"> Payment Method</Link>
                  </li>
                  <li className="nav-submenu__item">
                    <Link to={`${PUBLIC_ASSETS_PATH}cart-thank-you.html`} className="nav-submenu__link"> Preview Order</Link>
                  </li>
                  <li className="nav-submenu__item">
                    <Link to={`${PUBLIC_ASSETS_PATH}dashboard.html`} className="nav-submenu__link"> Dashboard</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-menu__item has-submenu">
                <a href="#" onClick={(e) => e.preventDefault()} className="nav-menu__link">Blog</a>
                <ul className="nav-submenu">
                  <li className="nav-submenu__item">
                    <Link to={`${PUBLIC_ASSETS_PATH}blog.html`} className="nav-submenu__link"> Blog</Link>
                  </li>
                  <li className="nav-submenu__item">
                    <Link to={`${PUBLIC_ASSETS_PATH}blog-details.html`} className="nav-submenu__link"> Blog Details</Link>
                  </li>
                  <li className="nav-submenu__item">
                    <Link to={`${PUBLIC_ASSETS_PATH}blog-details-sidebar.html`} className="nav-submenu__link"> Blog Details Sidebar</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-menu__item">
                <Link to={`${PUBLIC_ASSETS_PATH}contact.html`} className="nav-menu__link">Contact</Link>
              </li>
            </ul>
            <div className="header-right__inner d-lg-none my-3 gap-1 d-flex flx-align">
              <Link to={`${PUBLIC_ASSETS_PATH}register.html`} className="btn btn-main pill">
                <span className="icon-left icon">
                  <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/user.svg`} alt="" />
                </span>Create Account
              </Link>
              <div className="language-select flx-align select-has-icon">
                <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/globe.svg`} alt="" className="globe-icon white-version" />
                <img src={`${PUBLIC_ASSETS_PATH}assets/images/icons/globe-white.svg`} alt="" className="globe-icon dark-version" />
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

      <section className="dashboard">
        <div className="dashboard__inner d-flex">
          <DashboardSidebar />

          <div className="dashboard-body">
            <DashboardNav />

            <div className="dashboard-body__content">
              <div className="card common-card">
                <div className="card-body">
                  <div className="follow-wrapper">
                    {followersData.map((follower, index) => (
                      <FollowerItem key={index} {...follower} />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <DashboardFooter />
          </div>
        </div>
      </section>
    </>
  );
};

export default FollowerPage;