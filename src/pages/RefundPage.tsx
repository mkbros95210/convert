import React from 'react';
import { Link } from 'react-router-dom';

const RefundPage: React.FC = () => {
  return (
    <section className="dashboard">
      <div className="dashboard__inner d-flex">

        {/* ===================== Dashboard Sidebar Start ======================= */}
        <div className="dashboard-sidebar">
          <button type="button" className="dashboard-sidebar__close d-lg-none d-flex"><i className="las la-times"></i></button>
          <div className="dashboard-sidebar__inner">
            <Link to="/" className="logo mb-48">
              <img src="/assets/images/logo/logo.png" alt="Logo" className="white-version" />
              <img src="/assets/images/logo/white-logo-two.png" alt="Logo" className="dark-version" />
            </Link>
            <Link to="/" className="logo favicon mb-48">
              <img src="/assets/images/logo/favicon.png" alt="" />
            </Link>

            {/* Sidebar List Start */}
            <ul className="sidebar-list">
              <li className="sidebar-list__item">
                <Link to="/dashboard" className="sidebar-list__link">
                  <span className="sidebar-list__icon">
                    <img src="/assets/images/icons/sidebar-icon1.svg" alt="" className="icon" />
                    <img src="/assets/images/icons/sidebar-icon-active1.svg" alt="" className="icon icon-active" />
                  </span>
                  <span className="text">Dashboard</span>
                </Link>
              </li>
              <li className="sidebar-list__item">
                <Link to="/dashboard-profile" className="sidebar-list__link">
                  <span className="sidebar-list__icon">
                    <img src="/assets/images/icons/sidebar-icon2.svg" alt="" className="icon" />
                    <img src="/assets/images/icons/sidebar-icon-active2.svg" alt="" className="icon icon-active" />
                  </span>
                  <span className="text">Profile</span>
                </Link>
              </li>
              <li className="sidebar-list__item">
                <Link to="/follower" className="sidebar-list__link">
                  <span className="sidebar-list__icon">
                    <img src="/assets/images/icons/sidebar-icon4.svg" alt="" className="icon" />
                    <img src="/assets/images/icons/sidebar-icon-active4.svg" alt="" className="icon icon-active" />
                  </span>
                  <span className="text">Followers</span>
                </Link>
              </li>
              <li className="sidebar-list__item">
                <Link to="/following" className="sidebar-list__link">
                  <span className="sidebar-list__icon">
                    <img src="/assets/images/icons/sidebar-icon5.svg" alt="" className="icon" />
                    <img src="/assets/images/icons/sidebar-icon-active5.svg" alt="" className="icon icon-active" />
                  </span>
                  <span className="text">Followings</span>
                </Link>
              </li>
              <li className="sidebar-list__item">
                <Link to="/setting" className="sidebar-list__link">
                  <span className="sidebar-list__icon">
                    <img src="/assets/images/icons/sidebar-icon10.svg" alt="" className="icon" />
                    <img src="/assets/images/icons/sidebar-icon-active10.svg" alt="" className="icon icon-active" />
                  </span>
                  <span className="text">Settings</span>
                </Link>
              </li>
              <li className="sidebar-list__item">
                <Link to="/statement" className="sidebar-list__link">
                  <span className="sidebar-list__icon">
                    <img src="/assets/images/icons/sidebar-icon12.svg" alt="" className="icon" />
                    <img src="/assets/images/icons/sidebar-icon-active12.svg" alt="" className="icon icon-active" />
                  </span>
                  <span className="text">Statements</span>
                </Link>
              </li>
              <li className="sidebar-list__item">
                <Link to="/earning" className="sidebar-list__link">
                  <span className="sidebar-list__icon">
                    <img src="/assets/images/icons/sidebar-icon11.svg" alt="" className="icon" />
                    <img src="/assets/images/icons/sidebar-icon-active11.svg" alt="" className="icon icon-active" />
                  </span>
                  <span className="text">Earnings</span>
                </Link>
              </li>
              <li className="sidebar-list__item">
                <Link to="/review" className="sidebar-list__link">
                  <span className="sidebar-list__icon">
                    <img src="/assets/images/icons/sidebar-icon7.svg" alt="" className="icon" />
                    <img src="/assets/images/icons/sidebar-icon-active7.svg" alt="" className="icon icon-active" />
                  </span>
                  <span className="text">Reviews</span>
                </Link>
              </li>
            
              <li className="sidebar-list__item">
                <Link to="/download" className="sidebar-list__link">
                  <span className="sidebar-list__icon">
                    <img src="/assets/images/icons/sidebar-icon6.svg" alt="" className="icon" />
                    <img src="/assets/images/icons/sidebar-icon-active6.svg" alt="" className="icon icon-active" />
                  </span>
                  <span className="text">Downloads</span>
                </Link>
              </li>
              <li className="sidebar-list__item">
                <Link to="/refund" className="sidebar-list__link activePage">
                  <span className="sidebar-list__icon">
                    <img src="/assets/images/icons/sidebar-icon8.svg" alt="" className="icon" />
                    <img src="/assets/images/icons/sidebar-icon-active8.svg" alt="" className="icon icon-active" />
                  </span>
                  <span className="text">Refunds</span>
                </Link>
              </li>
              <li className="sidebar-list__item">
                <Link to="/login" className="sidebar-list__link">
                  <span className="sidebar-list__icon">
                    <img src="/assets/images/icons/sidebar-icon13.svg" alt="" className="icon" />
                    <img src="/assets/images/icons/sidebar-icon-active13.svg" alt="" className="icon icon-active" />
                  </span>
                  <span className="text">Logout</span>
                </Link>
              </li>
            </ul>
            {/* Sidebar List End */}
            
          </div>
        </div>
        {/* ===================== Dashboard Sidebar End ======================= */}
        
        <div className="dashboard-body">
            
          {/* Dashboard Nav Start */}
          <div className="dashboard-nav bg-white flx-between gap-md-3 gap-2">
            <div className="dashboard-nav__left flx-align gap-md-3 gap-2">
              <button type="button" className="icon-btn bar-icon text-heading bg-gray-seven flx-center">
                <i className="las la-bars"></i>
              </button>
              <button type="button" className="icon-btn arrow-icon text-heading bg-gray-seven flx-center">
                <img src="/assets/images/icons/angle-right.svg" alt="" />
              </button>
              <form action="#" className="search-input d-sm-block d-none">
                <span className="icon">
                  <img src="/assets/images/icons/search-dark.svg" alt="" className="white-version" />
                  <img src="/assets/images/icons/search-dark-white.svg" alt="" className="dark-version" />
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
                      <input type="checkbox" className="d-none" id="checkbox" />
                      <span className="slider text-black header-right__button white-version">
                        <img src="/assets/images/icons/sun.svg" alt="" />
                      </span>
                      <span className="slider text-black header-right__button dark-version">
                        <img src="/assets/images/icons/moon.svg" alt="" />
                      </span>
                    </label>
                  </div>

                  <div className="user-profile">
                    <button className="user-profile__button flex-align">
                      <span className="user-profile__thumb">
                        <img src="/assets/images/thumbs/user-profile.png" className="cover-img" alt="" />
                      </span>
                    </button>
                    <ul className="user-profile-dropdown">
                      <li className="sidebar-list__item">
                        <Link to="/dashboard-profile" className="sidebar-list__link">
                          <span className="sidebar-list__icon">
                            <img src="/assets/images/icons/sidebar-icon2.svg" alt="" className="icon" />
                            <img src="/assets/images/icons/sidebar-icon-active2.svg" alt="" className="icon icon-active" />
                          </span>
                          <span className="text">Profile</span>
                        </Link>
                      </li>
                      
                      <li className="sidebar-list__item">
                        <Link to="/setting" className="sidebar-list__link">
                          <span className="sidebar-list__icon">
                            <img src="/assets/images/icons/sidebar-icon10.svg" alt="" className="icon" />
                            <img src="/assets/images/icons/sidebar-icon-active10.svg" alt="" className="icon icon-active" />
                          </span>
                          <span className="text">Settings</span>
                        </Link>
                      </li>
                      <li className="sidebar-list__item">
                        <Link to="/login" className="sidebar-list__link">
                          <span className="sidebar-list__icon">
                            <img src="/assets/images/icons/sidebar-icon13.svg" alt="" className="icon" />
                            <img src="/assets/images/icons/sidebar-icon-active13.svg" alt="" className="icon icon-active" />
                          </span>
                          <span className="text">Logout</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
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
          {/* Dashboard Nav End */}

            
          <div className="dashboard-body__content">
            {/* =========================== Refund Section Start ========================= */}
            <div className="row gy-4">
                <div className="col-lg-8">
                    <div className="refund-feedback">
                        <h5 className="refund-feedback__title">Refund requests made against items you sold</h5>
                        <p className="refund-feedback__desc">There are no open refund requests at the moment.</p>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="profile-sidebar">
                        <div className="profile-sidebar__item">
                            <h6 className="title font-body">Open Request</h6>
                            <div className="select-has-icon">
                                <select className="common-input">
                                    <option value="1">Open Requests</option>
                                    <option value="1">Open Requests</option>
                                    <option value="1">Open Requests</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* =========================== Refund Section End ========================= */}
          </div>
                       
          {/* ====================== Dashboard Footer Start ======================== */}
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
          {/* ====================== Dashboard Footer End ======================== */}

            
        </div>
      </div>
    </section>
  );
};

export default RefundPage;