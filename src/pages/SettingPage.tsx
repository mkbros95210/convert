```tsx
import React from 'react';
import { Link } from 'react-router-dom';

// Import all necessary images
import userIcon from '../assets/images/icons/user.svg';
import globeIcon from '../assets/images/icons/globe.svg';
import globeWhiteIcon from '../assets/images/icons/globe-white.svg';
import logo from '../assets/images/logo/logo.png';
import whiteLogoTwo from '../assets/images/logo/white-logo-two.png';
import favicon from '../assets/images/logo/favicon.png';

// Sidebar Icons
import sidebarIcon1 from '../assets/images/icons/sidebar-icon1.svg';
import sidebarIconActive1 from '../assets/images/icons/sidebar-icon-active1.svg';
import sidebarIcon2 from '../assets/images/icons/sidebar-icon2.svg';
import sidebarIconActive2 from '../assets/images/icons/sidebar-icon-active2.svg';
import sidebarIcon4 from '../assets/images/icons/sidebar-icon4.svg';
import sidebarIconActive4 from '../assets/images/icons/sidebar-icon-active4.svg';
import sidebarIcon5 from '../assets/images/icons/sidebar-icon5.svg';
import sidebarIconActive5 from '../assets/images/icons/sidebar-icon-active5.svg';
import sidebarIcon6 from '../assets/images/icons/sidebar-icon6.svg';
import sidebarIconActive6 from '../assets/images/icons/sidebar-icon-active6.svg';
import sidebarIcon7 from '../assets/images/icons/sidebar-icon7.svg';
import sidebarIconActive7 from '../assets/images/icons/sidebar-icon-active7.svg';
import sidebarIcon8 from '../assets/images/icons/sidebar-icon8.svg';
import sidebarIconActive8 from '../assets/images/icons/sidebar-icon-active8.svg';
import sidebarIcon10 from '../assets/images/icons/sidebar-icon10.svg';
import sidebarIconActive10 from '../assets/images/icons/sidebar-icon-active10.svg';
import sidebarIcon11 from '../assets/images/icons/sidebar-icon11.svg';
import sidebarIconActive11 from '../assets/images/icons/sidebar-icon-active11.svg';
import sidebarIcon12 from '../assets/images/icons/sidebar-icon12.svg';
import sidebarIconActive12 from '../assets/images/icons/sidebar-icon-active12.svg';
import sidebarIcon13 from '../assets/images/icons/sidebar-icon13.svg';
import sidebarIconActive13 from '../assets/images/icons/sidebar-icon-active13.svg';

// Dashboard Nav Icons
import angleRightIcon from '../assets/images/icons/angle-right.svg';
import searchDarkIcon from '../assets/images/icons/search-dark.svg';
import searchDarkWhiteIcon from '../assets/images/icons/search-dark-white.svg';
import sunIcon from '../assets/images/icons/sun.svg';
import moonIcon from '../assets/images/icons/moon.svg';
import userProfileThumb from '../assets/images/thumbs/user-profile.png';

// Payment Method Images
import paymentMethod1 from '../assets/images/thumbs/payment-method1.png';
import paymentMethod2 from '../assets/images/thumbs/payment-method2.png';
import paymentMethod3 from '../assets/images/thumbs/payment-method3.png';
import paymentMethod4 from '../assets/images/thumbs/payment-method4.png';
import paymentMethod5 from '../assets/images/thumbs/payment-method5.png';
import paymentMethod6 from '../assets/images/thumbs/payment-method6.png';
import paymentMethod7 from '../assets/images/thumbs/payment-method7.png';
import paymentMethod8 from '../assets/images/thumbs/payment-method8.png';
import paymentMethod9 from '../assets/images/thumbs/payment-method9.png';
import paymentMethod10 from '../assets/images/thumbs/payment-method10.png';
import paymentMethod11 from '../assets/images/thumbs/payment-method11.png';
import paymentMethod12 from '../assets/images/thumbs/payment-method12.png';
import paymentMethod13 from '../assets/images/thumbs/payment-method13.png';

const SettingPage: React.FC = () => {
    // Basic handler for internal page anchors.
    // Full scroll spy to highlight active link would require more complex logic (e.g., IntersectionObserver).
    const handleScrollLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="dashboard">
            <div className="dashboard__inner d-flex">
                {/* Dashboard Sidebar */}
                <div className="dashboard-sidebar">
                    <button type="button" className="dashboard-sidebar__close d-lg-none d-flex"><i className="las la-times"></i></button>
                    <div className="dashboard-sidebar__inner">
                        <Link to="/" className="logo mb-48">
                            <img src={logo} alt="Logo" className="white-version" />
                            <img src={whiteLogoTwo} alt="Logo" className="dark-version" />
                        </Link>
                        <Link to="/" className="logo favicon mb-48">
                            <img src={favicon} alt="" />
                        </Link>

                        <ul className="sidebar-list">
                            <li className="sidebar-list__item">
                                <Link to="/dashboard" className="sidebar-list__link">
                                    <span className="sidebar-list__icon">
                                        <img src={sidebarIcon1} alt="" className="icon" />
                                        <img src={sidebarIconActive1} alt="" className="icon icon-active" />
                                    </span>
                                    <span className="text">Dashboard</span>
                                </Link>
                            </li>
                            <li className="sidebar-list__item">
                                <Link to="/dashboard-profile" className="sidebar-list__link">
                                    <span className="sidebar-list__icon">
                                        <img src={sidebarIcon2} alt="" className="icon" />
                                        <img src={sidebarIconActive2} alt="" className="icon icon-active" />
                                    </span>
                                    <span className="text">Profile</span>
                                </Link>
                            </li>
                            <li className="sidebar-list__item">
                                <Link to="/follower" className="sidebar-list__link">
                                    <span className="sidebar-list__icon">
                                        <img src={sidebarIcon4} alt="" className="icon" />
                                        <img src={sidebarIconActive4} alt="" className="icon icon-active" />
                                    </span>
                                    <span className="text">Followers</span>
                                </Link>
                            </li>
                            <li className="sidebar-list__item">
                                <Link to="/following" className="sidebar-list__link">
                                    <span className="sidebar-list__icon">
                                        <img src={sidebarIcon5} alt="" className="icon" />
                                        <img src={sidebarIconActive5} alt="" className="icon icon-active" />
                                    </span>
                                    <span className="text">Followings</span>
                                </Link>
                            </li>
                            <li className="sidebar-list__item activePage"> {/* activePage for current page */}
                                <Link to="/setting" className="sidebar-list__link">
                                    <span className="sidebar-list__icon">
                                        <img src={sidebarIcon10} alt="" className="icon" />
                                        <img src={sidebarIconActive10} alt="" className="icon icon-active" />
                                    </span>
                                    <span className="text">Settings</span>
                                </Link>
                            </li>
                            <li className="sidebar-list__item">
                                <Link to="/statement" className="sidebar-list__link">
                                    <span className="sidebar-list__icon">
                                        <img src={sidebarIcon12} alt="" className="icon" />
                                        <img src={sidebarIconActive12} alt="" className="icon icon-active" />
                                    </span>
                                    <span className="text">Statements</span>
                                </Link>
                            </li>
                            <li className="sidebar-list__item">
                                <Link to="/earning" className="sidebar-list__link">
                                    <span className="sidebar-list__icon">
                                        <img src={sidebarIcon11} alt="" className="icon" />
                                        <img src={sidebarIconActive11} alt="" className="icon icon-active" />
                                    </span>
                                    <span className="text">Earnings</span>
                                </Link>
                            </li>
                            <li className="sidebar-list__item">
                                <Link to="/review" className="sidebar-list__link">
                                    <span className="sidebar-list__icon">
                                        <img src={sidebarIcon7} alt="" className="icon" />
                                        <img src={sidebarIconActive7} alt="" className="icon icon-active" />
                                    </span>
                                    <span className="text">Reviews</span>
                                </Link>
                            </li>
                            <li className="sidebar-list__item">
                                <Link to="/download" className="sidebar-list__link">
                                    <span className="sidebar-list__icon">
                                        <img src={sidebarIcon6} alt="" className="icon" />
                                        <img src={sidebarIconActive6} alt="" className="icon icon-active" />
                                    </span>
                                    <span className="text">Downloads</span>
                                </Link>
                            </li>
                            <li className="sidebar-list__item">
                                <Link to="/refund" className="sidebar-list__link">
                                    <span className="sidebar-list__icon">
                                        <img src={sidebarIcon8} alt="" className="icon" />
                                        <img src={sidebarIconActive8} alt="" className="icon icon-active" />
                                    </span>
                                    <span className="text">Refunds</span>
                                </Link>
                            </li>
                            <li className="sidebar-list__item">
                                <Link to="/login" className="sidebar-list__link">
                                    <span className="sidebar-list__icon">
                                        <img src={sidebarIcon13} alt="" className="icon" />
                                        <img src={sidebarIconActive13} alt="" className="icon icon-active" />
                                    </span>
                                    <span className="text">Logout</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="dashboard-body">
                    {/* Dashboard Nav */}
                    <div className="dashboard-nav bg-white flx-between gap-md-3 gap-2">
                        <div className="dashboard-nav__left flx-align gap-md-3 gap-2">
                            <button type="button" className="icon-btn bar-icon text-heading bg-gray-seven flx-center">
                                <i className="las la-bars"></i>
                            </button>
                            <button type="button" className="icon-btn arrow-icon text-heading bg-gray-seven flx-center">
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
                                            <input type="checkbox" className="d-none" id="checkbox" />
                                            <span className="slider text-black header-right__button white-version">
                                                <img src={sunIcon} alt="" />
                                            </span>
                                            <span className="slider text-black header-right__button dark-version">
                                                <img src={moonIcon} alt="" />
                                            </span>
                                        </label>
                                    </div>

                                    <div className="user-profile">
                                        <button className="user-profile__button flex-align">
                                            <span className="user-profile__thumb">
                                                <img src={userProfileThumb} className="cover-img" alt="" />
                                            </span>
                                        </button>
                                        <ul className="user-profile-dropdown">
                                            <li className="sidebar-list__item">
                                                <Link to="/dashboard-profile" className="sidebar-list__link">
                                                    <span className="sidebar-list__icon">
                                                        <img src={sidebarIcon2} alt="" className="icon" />
                                                        <img src={sidebarIconActive2} alt="" className="icon icon-active" />
                                                    </span>
                                                    <span className="text">Profile</span>
                                                </Link>
                                            </li>
                                            <li className="sidebar-list__item">
                                                <Link to="/setting" className="sidebar-list__link">
                                                    <span className="sidebar-list__icon">
                                                        <img src={sidebarIcon10} alt="" className="icon" />
                                                        <img src={sidebarIconActive10} alt="" className="icon icon-active" />
                                                    </span>
                                                    <span className="text">Settings</span>
                                                </Link>
                                            </li>
                                            <li className="sidebar-list__item">
                                                <Link to="/login" className="sidebar-list__link">
                                                    <span className="sidebar-list__icon">
                                                        <img src={sidebarIcon13} alt="" className="icon" />
                                                        <img src={sidebarIconActive13} alt="" className="icon icon-active" />
                                                    </span>
                                                    <span className="text">Logout</span>
                                                </Link>
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

                    <div className="dashboard-body__content">
                        <div className="card common-card">
                            <div className="card-body">
                                <div className="row gy-4">
                                    <div className="col-lg-4 pe-xl-5">
                                        <div className="setting-sidebar top-24">
                                            <h6 className="setting-sidebar__title">Your Details</h6>
                                            <ul className="setting-sidebar-list" id="sidebar-scroll-spy">
                                                <li className="setting-sidebar-list__item"><a href="#personalInfo" onClick={(e) => handleScrollLinkClick(e, 'personalInfo')} className="setting-sidebar-list__link active">Personal Information</a></li>
                                                <li className="setting-sidebar-list__item"><a href="#profile" onClick={(e) => handleScrollLinkClick(e, 'profile')} className="setting-sidebar-list__link">Profile</a></li>
                                                <li className="setting-sidebar-list__item"><a href="#paymentSystem" onClick={(e) => handleScrollLinkClick(e, 'paymentSystem')} className="setting-sidebar-list__link">Setup Payment System</a></li>
                                                <li className="setting-sidebar-list__item"><a href="#emailSetting" onClick={(e) => handleScrollLinkClick(e, 'emailSetting')} className="setting-sidebar-list__link">Email Setting</a></li>
                                                <li className="setting-sidebar-list__item"><a href="#socialNetwork" onClick={(e) => handleScrollLinkClick(e, 'socialNetwork')} className="setting-sidebar-list__link">Social Networks</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="col-lg-8">
                                        {/* <form action="#"> */}
                                        <div className="setting-content" data-bs-spy="scroll" data-bs-target="#sidebar-scroll-spy">
                                            <div className="card common-card border border-gray-five overflow-hidden mb-24" id="personalInfo">
                                                <div className="card-header">
                                                    <h6 className="title">Personal Information</h6>
                                                </div>
                                                <div className="card-body">
                                                    <div className="row gy-3">
                                                        <div className="col-sm-6 col-xs-6">
                                                            <label htmlFor="fName" className="form-label">First Name</label>
                                                            <input type="text" className="common-input common-input--md border--color-dark bg--white" id="fName" />
                                                        </div>
                                                        <div className="col-sm-6 col-xs-6">
                                                            <label htmlFor="lName" className="form-label">Last Name</label>
                                                            <input type="text" className="common-input common-input--md border--color-dark bg--white" id="lName" />
                                                        </div>
                                                        <div className="col-sm-6 col-xs-6">
                                                            <label htmlFor="country" className="form-label">Country</label>
                                                            <input type="text" className="common-input common-input--md border--color-dark bg--white" id="country" />
                                                        </div>
                                                        <div className="col-sm-6 col-xs-6">
                                                            <label htmlFor="address" className="form-label">Address</label>
                                                            <input type="text" className="common-input common-input--md border--color-dark bg--white" id="address" />
                                                        </div>
                                                        <div className="col-sm-6 col-xs-6">
                                                            <label htmlFor="city" className="form-label">City</label>
                                                            <input type="text" className="common-input common-input--md border--color-dark bg--white" id="city" />
                                                        </div>
                                                        <div className="col-sm-6 col-xs-6">
                                                            <label htmlFor="zipCode" className="form-label">Zip Code</label>
                                                            <input type="text" className="common-input common-input--md border--color-dark bg--white" id="zipCode" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card common-card border border-gray-five overflow-hidden mb-24" id="profile">
                                                <div className="card-header">
                                                    <h6 className="title">Personal Information</h6>
                                                </div>
                                                <div className="card-body">
                                                    <div className="row gy-3">
                                                        <div className="col-sm-6 col-xs-6">
                                                            <label htmlFor="fileUpload" className="form-label">Upload a New Avatar</label>
                                                            <input type="file" className="common-input common-input--md border--color-dark bg--white" id="fileUpload" />
                                                        </div>
                                                        <div className="col-sm-6 col-xs-6">
                                                            <label htmlFor="fileUploadTwo" className="form-label">Upload a New Avatar</label>
                                                            <input type="file" className="common-input common-input--md border--color-dark bg--white" id="fileUploadTwo" />
                                                        </div>
                                                        <div className="col-sm-6 col-xs-6">
                                                            <label htmlFor="ProfileHeading" className="form-label">Profile Heading</label>
                                                            <input type="text" className="common-input common-input--md border--color-dark bg--white" id="ProfileHeading" />
                                                        </div>
                                                        <div className="col-sm-6 col-xs-6">
                                                            <label className="form-label">Show Country on Your</label>
                                                            <div className="flx-align gap-3 mt-2">
                                                                <div className="common-check common-radio mb-0">
                                                                    <input className="form-check-input" type="radio" name="showCountry" id="yes" />
                                                                    <label className="form-check-label ps-2" htmlFor="yes">Yes</label>
                                                                </div>
                                                                <div className="common-check common-radio mb-0">
                                                                    <input className="form-check-input" type="radio" name="showCountry" id="no" />
                                                                    <label className="form-check-label ps-2" htmlFor="no">No</label>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-12">
                                                            <label htmlFor="aboutProfile" className="form-label">Write Something About Your Profile</label>
                                                            <textarea className="common-input common-input--md border--color-dark bg--white" id="aboutProfile"></textarea>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card common-card border border-gray-five overflow-hidden mb-24" id="paymentSystem">
                                                <div className="card-header">
                                                    <h6 className="title">Payment Method</h6>
                                                </div>
                                                <div className="card-body">
                                                    <div className="payment-method mb-0">
                                                        <div className="payment-method__wrapper arrow-sm">
                                                            <div className="payment-method__item">
                                                                <input className="form-check-input" type="radio" name="payment" id="payment1" hidden />
                                                                <label className="form-check-label" htmlFor="payment1">
                                                                    <img src={paymentMethod1} alt="" />
                                                                </label>
                                                            </div>
                                                            <div className="payment-method__item">
                                                                <input className="form-check-input" type="radio" name="payment" id="payment2" hidden defaultChecked />
                                                                <label className="form-check-label" htmlFor="payment2">
                                                                    <img src={paymentMethod2} alt="" />
                                                                </label>
                                                            </div>
                                                            <div className="payment-method__item">
                                                                <input className="form-check-input" type="radio" name="payment" id="payment3" hidden />
                                                                <label className="form-check-label" htmlFor="payment3">
                                                                    <img src={paymentMethod3} alt="" />
                                                                </label>
                                                            </div>
                                                            <div className="payment-method__item">
                                                                <input className="form-check-input" type="radio" name="payment" id="payment4" hidden />
                                                                <label className="form-check-label" htmlFor="payment4">
                                                                    <img src={paymentMethod4} alt="" />
                                                                </label>
                                                            </div>
                                                            <div className="payment-method__item">
                                                                <input className="form-check-input" type="radio" name="payment" id="payment5" hidden />
                                                                <label className="form-check-label" htmlFor="payment5">
                                                                    <img src={paymentMethod5} alt="" />
                                                                </label>
                                                            </div>
                                                            <div className="payment-method__item">
                                                                <input className="form-check-input" type="radio" name="payment" id="payment6" hidden />
                                                                <label className="form-check-label" htmlFor="payment6">
                                                                    <img src={paymentMethod6} alt="" />
                                                                </label>
                                                            </div>
                                                            <div className="payment-method__item">
                                                                <input className="form-check-input" type="radio" name="payment" id="payment7" hidden />
                                                                <label className="form-check-label" htmlFor="payment7">
                                                                    <img src={paymentMethod7} alt="" />
                                                                </label>
                                                            </div>
                                                            <div className="payment-method__item">
                                                                <input className="form-check-input" type="radio" name="payment" id="payment8" hidden />
                                                                <label className="form-check-label" htmlFor="payment8">
                                                                    <img src={paymentMethod8} alt="" />
                                                                </label>
                             X                               </div>
                                                            <div className="payment-method__item">
                                                                <input className="form-check-input" type="radio" name="payment" id="payment9" hidden />
                                                                <label className="form-check-label" htmlFor="payment9">
                                                                    <img src={paymentMethod9} alt="" />
                                                                </label>
                                                            </div>
                                                            <div className="payment-method__item">
                                                                <input className="form-check-input" type="radio" name="payment" id="payment10" hidden />
                                                                <label className="form-check-label" htmlFor="payment10">
                                                                    <img src={paymentMethod10} alt="" />
                                                                </label>
                                                            </div>
                                                            <div className="payment-method__item">
                                                                <input className="form-check-input" type="radio" name="payment" id="payment11" hidden />
                                                                <label className="form-check-label" htmlFor="payment11">
                                                                    <img src={paymentMethod11} alt="" />
                                                                </label>
                                                            </div>
                                                            <div className="payment-method__item">
                                                                <input className="form-check-input" type="radio" name="payment" id="payment12" hidden />
                                                                <label className="form-check-label" htmlFor="payment12">
                                                                    <img src={paymentMethod12} alt="" />
                                                                </label>
                                                            </div>
                                                            <div className="payment-method__item">
                                                                <input className="form-check-input" type="radio" name="payment" id="payment13" hidden />
                                                                <label className="form-check-label" htmlFor="payment13">
                                                                    <img src={paymentMethod13} alt="" />
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card common-card border border-gray-five overflow-hidden mb-24" id="emailSetting">
                                                <div className="card-header">
                                                    <h6 className="title">Email Settings</h6>
                                                </div>
                                                <div className="card-body">
                                                    <div className="row gy-3">
                                                        <div className="col-sm-6 col-xs-6">
                                                            <div className="common-check">
                                                                <input className="form-check-input" type="checkbox" id="ratingReminder" />
                                                                <label className="form-check-label" htmlFor="ratingReminder"> Rating reminder send an email for client rating </label>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xs-6">
                                                            <div className="common-check">
                                                                <input className="form-check-input" type="checkbox" id="reviewNotification" />
                                                                <label className="form-check-label" htmlFor="reviewNotification"> Item review notification</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xs-6">
                                                            <div className="common-check">
                                                                <input className="form-check-input" type="checkbox" id="updateNotification" />
                                                                <label className="form-check-label" htmlFor="updateNotification"> Item update notification</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xs-6">
                                                            <div className="common-check">
                                                                <input className="form-check-input" type="checkbox" id="dailyNootification" />
                                                                <label className="form-check-label" htmlFor="dailyNootification"> Daily update notification</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xs-6">
                                                            <div className="common-check">
                                                                <input className="form-check-input" type="checkbox" id="itemNotification" />
                                                                <label className="form-check-label" htmlFor="itemNotification"> Item Notification</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xs-6">
                                                            <div className="common-check">
                                                                <input className="form-check-input" type="checkbox" id="commentNotification" />
                                                                <label className="form-check-label" htmlFor="commentNotification"> Item comment notification</label>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card common-card border border-gray-five overflow-hidden mb-24" id="socialNetwork">
                                                <div className="card-header">
                                                    <h6 className="title">Social Network Settings</h6>
                                                </div>
                                                <div className="card-body">
                                                    <div className="row gy-3">
                                                        <div className="col-sm-6 col-xs-6">
                                                            <label htmlFor="facebookUrl" className="form-label">Facebook Profile Url</label>
                                                            <div className="position-relative">
                                                                <input type="url" className="common-input common-input--md common-input--withLeftIcon" id="facebookUrl" placeholder="Facebook Profile Url" />
                                                                <span className="input-icon input-icon--left text-main"><i className="fab fa-facebook-f"></i> </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xs-6">
                                                            <label htmlFor="linkedinUrl" className="form-label">Linkedin Profile Url</label>
                                                            <div className="position-relative">
                                                                <input type="url" className="common-input common-input--md common-input--withLeftIcon" id="linkedinUrl" placeholder="Linkedin Profile Url" />
                                                                <span className="input-icon input-icon--left text-main"><i className="fab fa-linkedin-in"></i></span>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xs-6">
                                                            <label htmlFor="behanceUrl" className="form-label">Behance Profile Url</label>
                                                            <div className="position-relative">
                                                                <input type="url" className="common-input common-input--md common-input--withLeftIcon" id="behanceUrl" placeholder="Behance Profile Url" />
                                                                <span className="input-icon input-icon--left text-main"><i className="fab fa-behance"></i> </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 col-xs-6">
                                                            <label htmlFor="dribbleUrl" className="form-label">Dribble Profile Url</label>
                                                            <div className="position-relative">
                                                                <input type="url" className="common-input common-input--md common-input--withLeftIcon" id="dribbleUrl" placeholder="Dribble Profile Url" />
                                                                <span className="input-icon input-icon--left text-main"><i className="fab fa-dribbble"></i> </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <button type="button" className="btn w-100 btn-main btn-md">Save Information</button>
                                        </div>
                                        {/* </form> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dashboard Footer */}
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
                </div>
            </div>
        </section>
    );
};

export default SettingPage;
```