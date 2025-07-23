import React, { useState } from 'react';

// Import images specific to the unique content of this page
import SearchIcon from '../assets/images/icons/search.svg';
import Rejected1 from '../assets/images/thumbs/rejected1.png';
import Rejected2 from '../assets/images/thumbs/rejected2.png';

// Define a type for download items to structure the data
interface DownloadItemData {
  id: string; // A unique identifier for React's key prop
  imageSrc: string;
  title: string;
  license: string;
  notifiedCheckboxId: string; // The original ID from HTML for checkbox state management
}

// Data for the download items displayed on the page
const downloadItemsData: DownloadItemData[] = [
  {
    id: '1',
    imageSrc: Rejected1,
    title: 'CityScape - Real Estate HTML Template',
    license: 'Tools License',
    notifiedCheckboxId: 'notifiedd',
  },
  {
    id: '2',
    imageSrc: Rejected2,
    title: 'FixTurbo - Car Repairing HTML Template',
    license: 'Tools License',
    notifiedCheckboxId: 'notified',
  },
  {
    id: '3',
    imageSrc: Rejected1,
    title: 'CityScape - Real Estate HTML Template',
    license: 'Tools License',
    notifiedCheckboxId: 'notifiedddd',
  },
  {
    id: '4',
    imageSrc: Rejected2,
    title: 'FixTurbo - Car Repairing HTML Template',
    license: 'Tools License',
    notifiedCheckboxId: 'notifieds',
  },
];

const DownloadPage: React.FC = () => {
  // State for the search input in the main content area
  const [searchTerm, setSearchTerm] = useState('');

  // State for managing the 'Get notified' checkboxes.
  // Using a Record to map original HTML IDs to boolean checked states.
  const [notifiedStatus, setNotifiedStatus] = useState<Record<string, boolean>>(() => {
    const initialState: Record<string, boolean> = {};
    downloadItemsData.forEach(item => {
      initialState[item.notifiedCheckboxId] = false; // All checkboxes start unchecked
    });
    return initialState;
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleNotifiedChange = (id: string, checked: boolean) => {
    setNotifiedStatus(prevStatus => ({
      ...prevStatus,
      [id]: checked,
    }));
  };

  // Internal component for a single download item.
  // Defined here to keep all code within the single requested file.
  const DownloadItem: React.FC<{ item: DownloadItemData; onNotifiedChange: (id: string, checked: boolean) => void; isNotified: boolean }> = ({ item, onNotifiedChange, isNotified }) => (
    <div className="download-item flx-between gap-3">
      <div className="download-item__content flx-align flex-nowrap gap-3 flex-grow-1">
        <div className="download-item__thumb flex-shrink-0">
          <img src={item.imageSrc} alt={item.title} />
        </div>
        <div className="download-item__info">
          <h6 className="download-item__title mb-1">
            {/* The original HTML had href="#" for all links, keeping it for now */}
            <a href="#" className="link">{item.title}</a>
          </h6>
          <a href="#" className="download-item__text text-main mb-3 font-12 hover-text-decoration-underline">{item.license}</a>
          <div className="common-check">
            <input
              className="form-check-input"
              type="checkbox"
              name={item.notifiedCheckboxId} // Use original HTML ID for name
              id={item.notifiedCheckboxId}   // Use original HTML ID for ID
              checked={isNotified}
              onChange={(e) => onNotifiedChange(item.notifiedCheckboxId, e.target.checked)}
            />
            <label className="form-check-label text-body fw-400 mb-0" htmlFor={item.notifiedCheckboxId}>Get notified by email if this item is updated</label>
          </div>
        </div>
      </div>
      <div className="download-item__right flex-shrink-0 d-inline-flex flex-column gap-2 align-items-center">
        <button type="button" className="btn btn-main pill px-4">
          Download <span className="icon-right icon ms-0"> <i className="las la-download"></i></span>
        </button>
        <div className="bg-white py-1 px-2 rounded d-inline-block">
          <ul className="star-rating justify-content-center">
            {/* Static stars as per original HTML */}
            <li className="star-rating__item font-14"><i className="fas fa-star"></i></li>
            <li className="star-rating__item font-14"><i className="fas fa-star"></i></li>
            <li className="star-rating__item font-14"><i className="fas fa-star"></i></li>
            <li className="star-rating__item font-14"><i className="fas fa-star"></i></li>
            <li className="star-rating__item font-14"><i className="fas fa-star"></i></li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* ==================== Mobile Menu Start Here ==================== */}
      <div className="mobile-menu d-lg-none d-block">
        <button type="button" className="close-button"> <i className="las la-times"></i> </button>
        <div className="mobile-menu__inner">
          <a href="index-2.html" className="mobile-menu__logo">
            {/* Paths for logo images assumed to be in the public folder */}
            <img src="/assets/images/logo/logo.png" alt="Logo" className="white-version" />
            <img src="/assets/images/logo/white-logo-two.png" alt="Logo" className="dark-version" />
          </a>
          <div className="mobile-menu__menu">
            {/* Navigation links - these would ideally be a separate Nav component */}
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
              <li className="nav-menu__item has-submenu">
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
                  <li className="nav-submenu__item">
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
                  <img src="/assets/images/icons/user.svg" alt="" />
                </span>Create Account
              </a>
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
      {/* ==================== Mobile Menu End Here ==================== */}

      {/* ================================== Dashboard Start =========================== */}
      <section className="dashboard">
        <div className="dashboard__inner d-flex">

          {/* ===================== Dashboard Sidebar Start ======================= */}
          <div className="dashboard-sidebar">
            <button type="button" className="dashboard-sidebar__close d-lg-none d-flex"><i className="las la-times"></i></button>
            <div className="dashboard-sidebar__inner">
              <a href="index-2.html" className="logo mb-48">
                <img src="/assets/images/logo/logo.png" alt="" className="white-version" />
                <img src="/assets/images/logo/white-logo-two.png" alt="" className="dark-version" />
              </a>
              <a href="index-2.html" className="logo favicon mb-48">
                <img src="/assets/images/logo/favicon.png" alt="" />
              </a>

              {/* Sidebar List Start */}
              <ul className="sidebar-list">
                <li className="sidebar-list__item">
                  <a href="dashboard.html" className="sidebar-list__link">
                    <span className="sidebar-list__icon">
                      <img src="/assets/images/icons/sidebar-icon1.svg" alt="" className="icon" />
                      <img src="/assets/images/icons/sidebar-icon-active1.svg" alt="" className="icon icon-active" />
                    </span>
                    <span className="text">Dashboard</span>
                  </a>
                </li>
                <li className="sidebar-list__item">
                  <a href="dashboard-profile.html" className="sidebar-list__link">
                    <span className="sidebar-list__icon">
                      <img src="/assets/images/icons/sidebar-icon2.svg" alt="" className="icon" />
                      <img src="/assets/images/icons/sidebar-icon-active2.svg" alt="" className="icon icon-active" />
                    </span>
                    <span className="text">Profile</span>
                  </a>
                </li>
                <li className="sidebar-list__item">
                  <a href="follower.html" className="sidebar-list__link">
                    <span className="sidebar-list__icon">
                      <img src="/assets/images/icons/sidebar-icon4.svg" alt="" className="icon" />
                      <img src="/assets/images/icons/sidebar-icon-active4.svg" alt="" className="icon icon-active" />
                    </span>
                    <span className="text">Followers</span>
                  </a>
                </li>
                <li className="sidebar-list__item">
                  <a href="following.html" className="sidebar-list__link">
                    <span className="sidebar-list__icon">
                      <img src="/assets/images/icons/sidebar-icon5.svg" alt="" className="icon" />
                      <img src="/assets/images/icons/sidebar-icon-active5.svg" alt="" className="icon icon-active" />
                    </span>
                    <span className="text">Followings</span>
                  </a>
                </li>
                <li className="sidebar-list__item">
                  <a href="setting.html" className="sidebar-list__link">
                    <span className="sidebar-list__icon">
                      <img src="/assets/images/icons/sidebar-icon10.svg" alt="" className="icon" />
                      <img src="/assets/images/icons/sidebar-icon-active10.svg" alt="" className="icon icon-active" />
                    </span>
                    <span className="text">Settings</span>
                  </a>
                </li>
                <li className="sidebar-list__item">
                  <a href="statement.html" className="sidebar-list__link">
                    <span className="sidebar-list__icon">
                      <img src="/assets/images/icons/sidebar-icon12.svg" alt="" className="icon" />
                      <img src="/assets/images/icons/sidebar-icon-active12.svg" alt="" className="icon icon-active" />
                    </span>
                    <span className="text">Statements</span>
                  </a>
                </li>
                <li className="sidebar-list__item">
                  <a href="earning.html" className="sidebar-list__link">
                    <span className="sidebar-list__icon">
                      <img src="/assets/images/icons/sidebar-icon11.svg" alt="" className="icon" />
                      <img src="/assets/images/icons/sidebar-icon-active11.svg" alt="" className="icon icon-active" />
                    </span>
                    <span className="text">Earnings</span>
                  </a>
                </li>
                <li className="sidebar-list__item">
                  <a href="review.html" className="sidebar-list__link">
                    <span className="sidebar-list__icon">
                      <img src="/assets/images/icons/sidebar-icon7.svg" alt="" className="icon" />
                      <img src="/assets/images/icons/sidebar-icon-active7.svg" alt="" className="icon icon-active" />
                    </span>
                    <span className="text">Reviews</span>
                  </a>
                </li>

                <li className="sidebar-list__item activePage">
                  <a href="download.html" className="sidebar-list__link">
                    <span className="sidebar-list__icon">
                      <img src="/assets/images/icons/sidebar-icon6.svg" alt="" className="icon" />
                      <img src="/assets/images/icons/sidebar-icon-active6.svg" alt="" className="icon icon-active" />
                    </span>
                    <span className="text">Downloads</span>
                  </a>
                </li>
                <li className="sidebar-list__item">
                  <a href="refund.html" className="sidebar-list__link">
                    <span className="sidebar-list__icon">
                      <img src="/assets/images/icons/sidebar-icon8.svg" alt="" className="icon" />
                      <img src="/assets/images/icons/sidebar-icon-active8.svg" alt="" className="icon icon-active" />
                    </span>
                    <span className="text">Refunds</span>
                  </a>
                </li>
                <li className="sidebar-list__item">
                  <a href="login.html" className="sidebar-list__link">
                    <span className="sidebar-list__icon">
                      <img src="/assets/images/icons/sidebar-icon13.svg" alt="" className="icon" />
                      <img src="/assets/images/icons/sidebar-icon-active13.svg" alt="" className="icon icon-active" />
                    </span>
                    <span className="text">Logout</span>
                  </a>
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
                          <a href="dashboard-profile.html" className="sidebar-list__link">
                            <span className="sidebar-list__icon">
                              <img src="/assets/images/icons/sidebar-icon2.svg" alt="" className="icon" />
                              <img src="/assets/images/icons/sidebar-icon-active2.svg" alt="" className="icon icon-active" />
                            </span>
                            <span className="text">Profile</span>
                          </a>
                        </li>

                        <li className="sidebar-list__item">
                          <a href="setting.html" className="sidebar-list__link">
                            <span className="sidebar-list__icon">
                              <img src="/assets/images/icons/sidebar-icon10.svg" alt="" className="icon" />
                              <img src="/assets/images/icons/sidebar-icon-active10.svg" alt="" className="icon icon-active" />
                            </span>
                            <span className="text">Settings</span>
                          </a>
                        </li>
                        <li className="sidebar-list__item">
                          <a href="login.html" className="sidebar-list__link">
                            <span className="sidebar-list__icon">
                              <img src="/assets/images/icons/sidebar-icon13.svg" alt="" className="icon" />
                              <img src="/assets/images/icons/sidebar-icon-active13.svg" alt="" className="icon icon-active" />
                            </span>
                            <span className="text">Logout</span>
                          </a>
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

              {/* ========================= Download Section Start ====================== */}
              <div className="row gy-4">
                <div className="col-lg-12">
                  <div className="search-box">
                    <input
                      type="text"
                      className="common-input common-input--lg pill border border-gray-five"
                      placeholder="Search Your Downloads"
                      value={searchTerm}
                      onChange={handleSearchChange}
                    />
                    <button type="submit" className="btn btn-main btn-icon icon border-0">
                      <img src={SearchIcon} alt="Search" />
                    </button>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="download-wrapper bg-white border border-gray-five">
                    {downloadItemsData.map((item) => (
                      <DownloadItem
                        key={item.id}
                        item={item}
                        onNotifiedChange={handleNotifiedChange}
                        isNotified={notifiedStatus[item.notifiedCheckboxId]}
                      />
                    ))}
                  </div>
                </div>
              </div>
              {/* ========================= Download Section End ====================== */}

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
      {/* ================================== Dashboard End =========================== */}
    </>
  );
};

export default DownloadPage;