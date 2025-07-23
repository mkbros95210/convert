import React, { useState, useEffect, useRef } from 'react';

// Import specific assets that are used as default/initial images
import logoWhite from '../../assets/images/logo/logo.png';
import logoDark from '../../assets/images/logo/white-logo-two.png';
import favicon from '../../assets/images/logo/favicon.png';
import userProfileImg from '../../assets/images/thumbs/user-profile.png';
import coverPhotoDefaultImg from '../../assets/images/thumbs/cover-photo.png'; // Renamed to avoid conflict if `coverPhoto` is state
import profileInfoDefaultImg from '../../assets/images/thumbs/profile-info-img.png'; // Renamed for clarity

const DashboardProfilePage: React.FC = () => {
    // State for active tab
    const [activeTab, setActiveTab] = useState<'personalInfo' | 'payouts' | 'changePassword'>('personalInfo');

    // State for form inputs (example for Personal Info)
    const [firstName, setFirstName] = useState('Michel');
    const [lastName, setLastName] = useState('Smith');
    const [phone, setPhone] = useState('+880 15589 236 45');
    const [email, setEmail] = useState('michel15@gmail.com');
    const [city, setCity] = useState('Dhaka');
    const [stateRegion, setStateRegion] = useState('USA');
    const [postcode, setPostcode] = useState('1219');
    const [country, setCountry] = useState('USA');

    // State for payout form inputs
    const [payoutFullName, setPayoutFullName] = useState('Michel');
    const [payoutPhone, setPayoutPhone] = useState('+880 15589 236 45');
    const [payoutEmail, setPayoutEmail] = useState('michel15@gmail.com');
    const [payoutCity, setPayoutCity] = useState('Dhaka');

    // State for password change form inputs
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // State for image previews
    const [profileImage, setProfileImage] = useState<string | null>(null);
    const [coverImage, setCoverImage] = useState<string | null>(null);

    // State for sidebar/mobile menu visibility
    const [isSidebarActive, setIsSidebarActive] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserProfileDropdownOpen, setIsUserProfileDropdownOpen] = useState(false);

    // Refs for password inputs to toggle type
    const currentPasswordRef = useRef<HTMLInputElement>(null);
    const newPasswordRef = useRef<HTMLInputElement>(null);
    const confirmPasswordRef = useRef<HTMLInputElement>(null);

    // State for password visibility icons
    const [currentPasswordIcon, setCurrentPasswordIcon] = useState('fas fa-eye');
    const [newPasswordIcon, setNewPasswordIcon] = useState('fas fa-eye');
    const [confirmPasswordIcon, setConfirmPasswordIcon] = useState('fas fa-eye');

    // Image upload handler
    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>, setImageState: React.Dispatch<React.SetStateAction<string | null>>) => {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target?.result) {
                    setImageState(e.target.result.toString());
                }
            };
            reader.readAsDataURL(event.target.files[0]);
        }
    };

    // Handle password visibility toggle
    const togglePasswordVisibility = (ref: React.RefObject<HTMLInputElement>, setIconClass: React.Dispatch<React.SetStateAction<string>>) => {
        if (ref.current) {
            if (ref.current.type === 'password') {
                ref.current.type = 'text';
                setIconClass('fas fa-eye-slash'); // Change to eye-slash when visible
            } else {
                ref.current.type = 'password';
                setIconClass('fas fa-eye'); // Change back to eye when hidden
            }
        }
    };

    // Theme toggle logic (extracted from main.js)
    const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    };

    useEffect(() => {
        // Set initial theme from localStorage
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            document.documentElement.setAttribute('data-theme', storedTheme);
            const checkbox = document.getElementById('checkbox') as HTMLInputElement;
            if (checkbox) {
                checkbox.checked = storedTheme === 'dark';
            }
        } else {
            document.documentElement.setAttribute('data-theme', 'light'); // Default to light if not set
        }
    }, []);

    // Handle overlay click to close sidebar/mobile menu
    const handleOverlayClick = () => {
        setIsSidebarActive(false);
        setIsMobileMenuOpen(false);
        setIsUserProfileDropdownOpen(false); // Also close user profile dropdown
    };

    // Effect for scroll-hide-sm class on body
    useEffect(() => {
        if (isMobileMenuOpen || isSidebarActive) {
            document.body.classList.add('scroll-hide-sm');
        } else {
            document.body.classList.remove('scroll-hide-sm');
        }
    }, [isMobileMenuOpen, isSidebarActive]);

    // Dummy form submission handlers
    const handlePersonalInfoSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Personal Info Updated:', { firstName, lastName, phone, email, city, stateRegion, postcode, country });
        alert('Personal Info Updated!');
    };

    const handlePayoutsSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Payouts Submitted:', { payoutFullName, payoutPhone, payoutEmail, payoutCity });
        alert('Payouts Processed!');
    };

    const handleChangePasswordSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            alert('New password and confirm password do not match!');
            return;
        }
        console.log('Password Changed:', { currentPassword, newPassword });
        alert('Password Changed!');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
    };

    return (
        <>
            {/* Preloader - typically handled globally in a real app */}
            <div className="loader-mask">
                <div className="loader">
                    <div></div>
                    <div></div>
                </div>
            </div>

            {/* Overlay - for mobile menu/sidebar, managed by state */}
            {(isMobileMenuOpen || isSidebarActive || isUserProfileDropdownOpen) && (
                <div className="overlay show-overlay" onClick={handleOverlayClick}></div>
            )}
            {(isMobileMenuOpen || isSidebarActive) && ( // Sidebar overlay is separate in original
                <div className="side-overlay show" onClick={handleOverlayClick}></div>
            )}

            {/* Scroll to Top - typically handled globally in a real app */}
            <div className="progress-wrap">
                <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
                    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                </svg>
            </div>

            {/* Mobile Menu - typically a global component in a real app */}
            <div className={`mobile-menu d-lg-none d-block ${isMobileMenuOpen ? 'active' : ''}`}>
                <button type="button" className="close-button" onClick={() => setIsMobileMenuOpen(false)}>
                    <i className="las la-times"></i>
                </button>
                <div className="mobile-menu__inner">
                    <a href="/" className="mobile-menu__logo">
                        <img src={logoWhite} alt="Logo" className="white-version" />
                        <img src={logoDark} alt="Logo" className="dark-version" />
                    </a>
                    <div className="mobile-menu__menu">
                        <ul className="nav-menu flx-align nav-menu--mobile">
                            <li className="nav-menu__item has-submenu">
                                <a href="#" className="nav-menu__link">Home</a>
                                <ul className="nav-submenu">
                                    <li className="nav-submenu__item"><a href="/" className="nav-submenu__link"> Home One</a></li>
                                    <li className="nav-submenu__item"><a href="/index-two" className="nav-submenu__link"> Home Two</a></li>
                                    <li className="nav-submenu__item"><a href="/index-three" className="nav-submenu__link"> Home Three</a></li>
                                </ul>
                            </li>
                            <li className="nav-menu__item has-submenu">
                                <a href="#" className="nav-menu__link">Products</a>
                                <ul className="nav-submenu">
                                    <li className="nav-submenu__item"><a href="/all-product" className="nav-submenu__link"> All Products</a></li>
                                    <li className="nav-submenu__item"><a href="/product-details" className="nav-submenu__link"> Product Details</a></li>
                                </ul>
                            </li>
                            <li className="nav-menu__item has-submenu">
                                <a href="#" className="nav-menu__link">Pages</a>
                                <ul className="nav-submenu">
                                    <li className="nav-submenu__item"><a href="/profile" className="nav-submenu__link"> Profile</a></li>
                                    <li className="nav-submenu__item"><a href="/cart" className="nav-submenu__link"> Shopping Cart</a></li>
                                    <li className="nav-submenu__item"><a href="/cart-personal" className="nav-submenu__link"> Mailing Address</a></li>
                                    <li className="nav-submenu__item"><a href="/cart-payment" className="nav-submenu__link"> Payment Method</a></li>
                                    <li className="nav-submenu__item"><a href="/cart-thank-you" className="nav-submenu__link"> Preview Order</a></li>
                                    <li className="nav-submenu__item"><a href="/dashboard" className="nav-submenu__link"> Dashboard</a></li>
                                </ul>
                            </li>
                            <li className="nav-menu__item has-submenu">
                                <a href="#" className="nav-menu__link">Blog</a>
                                <ul className="nav-submenu">
                                    <li className="nav-submenu__item"><a href="/blog" className="nav-submenu__link"> Blog</a></li>
                                    <li className="nav-submenu__item"><a href="/blog-details" className="nav-submenu__link"> Blog Details</a></li>
                                    <li className="nav-submenu__item"><a href="/blog-details-sidebar" className="nav-submenu__link"> Blog Details Sidebar</a></li>
                                </ul>
                            </li>
                            <li className="nav-menu__item">
                                <a href="/contact" className="nav-menu__link">Contact</a>
                            </li>
                        </ul>
                        <div className="header-right__inner d-lg-none my-3 gap-1 d-flex flx-align">
                            <a href="/register" className="btn btn-main pill">
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

            <section className="dashboard">
                <div className="dashboard__inner d-flex">
                    {/* Dashboard Sidebar */}
                    <div className={`dashboard-sidebar ${isSidebarActive ? 'active' : ''}`}>
                        <button type="button" className="dashboard-sidebar__close d-lg-none d-flex" onClick={() => setIsSidebarActive(false)}>
                            <i className="las la-times"></i>
                        </button>
                        <div className="dashboard-sidebar__inner">
                            <a href="/" className="logo mb-48">
                                <img src={logoWhite} alt="" className="white-version" />
                                <img src={logoDark} alt="" className="dark-version" />
                            </a>
                            <a href="/" className="logo favicon mb-48">
                                <img src={favicon} alt="" />
                            </a>

                            <ul className="sidebar-list">
                                <li className="sidebar-list__item">
                                    <a href="/dashboard" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img src="/assets/images/icons/sidebar-icon1.svg" alt="" className="icon" />
                                            <img src="/assets/images/icons/sidebar-icon-active1.svg" alt="" className="icon icon-active" />
                                        </span>
                                        <span className="text">Dashboard</span>
                                    </a>
                                </li>
                                <li className="sidebar-list__item activePage">
                                    <a href="/dashboard-profile" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img src="/assets/images/icons/sidebar-icon2.svg" alt="" className="icon" />
                                            <img src="/assets/images/icons/sidebar-icon-active2.svg" alt="" className="icon icon-active" />
                                        </span>
                                        <span className="text">Profile</span>
                                    </a>
                                </li>
                                <li className="sidebar-list__item">
                                    <a href="/follower" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img src="/assets/images/icons/sidebar-icon4.svg" alt="" className="icon" />
                                            <img src="/assets/images/icons/sidebar-icon-active4.svg" alt="" className="icon icon-active" />
                                        </span>
                                        <span className="text">Followers</span>
                                    </a>
                                </li>
                                <li className="sidebar-list__item">
                                    <a href="/following" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img src="/assets/images/icons/sidebar-icon5.svg" alt="" className="icon" />
                                            <img src="/assets/images/icons/sidebar-icon-active5.svg" alt="" className="icon icon-active" />
                                        </span>
                                        <span className="text">Followings</span>
                                    </a>
                                </li>
                                <li className="sidebar-list__item">
                                    <a href="/setting" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img src="/assets/images/icons/sidebar-icon10.svg" alt="" className="icon" />
                                            <img src="/assets/images/icons/sidebar-icon-active10.svg" alt="" className="icon icon-active" />
                                        </span>
                                        <span className="text">Settings</span>
                                    </a>
                                </li>
                                <li className="sidebar-list__item">
                                    <a href="/statement" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img src="/assets/images/icons/sidebar-icon12.svg" alt="" className="icon" />
                                            <img src="/assets/images/icons/sidebar-icon-active12.svg" alt="" className="icon icon-active" />
                                        </span>
                                        <span className="text">Statements</span>
                                    </a>
                                </li>
                                <li className="sidebar-list__item">
                                    <a href="/earning" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img src="/assets/images/icons/sidebar-icon11.svg" alt="" className="icon" />
                                            <img src="/assets/images/icons/sidebar-icon-active11.svg" alt="" className="icon icon-active" />
                                        </span>
                                        <span className="text">Earnings</span>
                                    </a>
                                </li>
                                <li className="sidebar-list__item">
                                    <a href="/review" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img src="/assets/images/icons/sidebar-icon7.svg" alt="" className="icon" />
                                            <img src="/assets/images/icons/sidebar-icon-active7.svg" alt="" className="icon icon-active" />
                                        </span>
                                        <span className="text">Reviews</span>
                                    </a>
                                </li>
                                <li className="sidebar-list__item">
                                    <a href="/download" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img src="/assets/images/icons/sidebar-icon6.svg" alt="" className="icon" />
                                            <img src="/assets/images/icons/sidebar-icon-active6.svg" alt="" className="icon icon-active" />
                                        </span>
                                        <span className="text">Downloads</span>
                                    </a>
                                </li>
                                <li className="sidebar-list__item">
                                    <a href="/refund" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img src="/assets/images/icons/sidebar-icon8.svg" alt="" className="icon" />
                                            <img src="/assets/images/icons/sidebar-icon-active8.svg" alt="" className="icon icon-active" />
                                        </span>
                                        <span className="text">Refunds</span>
                                    </a>
                                </li>
                                <li className="sidebar-list__item">
                                    <a href="/login" className="sidebar-list__link">
                                        <span className="sidebar-list__icon">
                                            <img src="/assets/images/icons/sidebar-icon13.svg" alt="" className="icon" />
                                            <img src="/assets/images/icons/sidebar-icon-active13.svg" alt="" className="icon icon-active" />
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
                                <button type="button" className="icon-btn bar-icon text-heading bg-gray-seven flx-center" onClick={() => setIsSidebarActive(true)}>
                                    <i className="las la-bars"></i>
                                </button>
                                <button type="button" className="icon-btn arrow-icon text-heading bg-gray-seven flx-center" onClick={() => setIsSidebarActive(false)}>
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
                                                <input type="checkbox" className="d-none" id="checkbox" onChange={toggleTheme} />
                                                <span className="slider text-black header-right__button white-version">
                                                    <img src="/assets/images/icons/sun.svg" alt="" />
                                                </span>
                                                <span className="slider text-black header-right__button dark-version">
                                                    <img src="/assets/images/icons/moon.svg" alt="" />
                                                </span>
                                            </label>
                                        </div>

                                        <div className="user-profile">
                                            <button className="user-profile__button flex-align" onClick={() => setIsUserProfileDropdownOpen(!isUserProfileDropdownOpen)}>
                                                <span className="user-profile__thumb">
                                                    <img src={userProfileImg} className="cover-img" alt="" />
                                                </span>
                                            </button>
                                            <ul className={`user-profile-dropdown ${isUserProfileDropdownOpen ? 'show' : ''}`}>
                                                <li className="sidebar-list__item">
                                                    <a href="/dashboard-profile" className="sidebar-list__link">
                                                        <span className="sidebar-list__icon">
                                                            <img src="/assets/images/icons/sidebar-icon2.svg" alt="" className="icon" />
                                                            <img src="/assets/images/icons/sidebar-icon-active2.svg" alt="" className="icon icon-active" />
                                                        </span>
                                                        <span className="text">Profile</span>
                                                    </a>
                                                </li>
                                                <li className="sidebar-list__item">
                                                    <a href="/setting" className="sidebar-list__link">
                                                        <span className="sidebar-list__icon">
                                                            <img src="/assets/images/icons/sidebar-icon10.svg" alt="" className="icon" />
                                                            <img src="/assets/images/icons/sidebar-icon-active10.svg" alt="" className="icon icon-active" />
                                                        </span>
                                                        <span className="text">Settings</span>
                                                    </a>
                                                </li>
                                                <li className="sidebar-list__item">
                                                    <a href="/login" className="sidebar-list__link">
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

                        {/* Cover Photo Start */}
                        <div className="cover-photo position-relative z-index-1 overflow-hidden">
                            <div className="avatar-upload">
                                <div className="avatar-edit">
                                    <input type="file" id="imageUploadTwo" accept=".png, .jpg, .jpeg" onChange={(e) => handleImageUpload(e, setCoverImage)} />
                                    <label htmlFor="imageUploadTwo">
                                        <span className="icon"> <img src="/assets/images/icons/camera-two.svg" alt="" /> </span>
                                        <span className="text">Change Cover</span>
                                    </label>
                                </div>
                                <div className="avatar-preview">
                                    <div id="imagePreviewTwo" style={{ backgroundImage: coverImage ? `url(${coverImage})` : `url(${coverPhotoDefaultImg})` }}>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Cover Photo End */}

                        <div className="dashboard-body__content profile-content-wrapper z-index-1 position-relative mt--100">
                            {/* Profile Content Start */}
                            <div className="profile">
                                <div className="row gy-4">
                                    <div className="col-xxl-3 col-xl-4">
                                        <div className="profile-info">
                                            <div className="profile-info__inner mb-40 text-center">
                                                <div className="avatar-upload mb-24">
                                                    <div className="avatar-edit">
                                                        <input type="file" id="imageUpload" accept=".png, .jpg, .jpeg" onChange={(e) => handleImageUpload(e, setProfileImage)} />
                                                        <label htmlFor="imageUpload">
                                                            <img src="/assets/images/icons/camera.svg" alt="" />
                                                        </label>
                                                    </div>
                                                    <div className="avatar-preview">
                                                        <div id="imagePreview" style={{ backgroundImage: profileImage ? `url(${profileImage})` : `url(${profileInfoDefaultImg})` }}>
                                                        </div>
                                                    </div>
                                                </div>
                                                <h5 className="profile-info__name mb-1">Michel Smith</h5>
                                                <span className="profile-info__designation font-14">Exclusive Author</span>
                                            </div>

                                            <ul className="profile-info-list">
                                                <li className="profile-info-list__item">
                                                    <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                                                        <img src="/assets/images/icons/profile-info-icon1.svg" alt="" className="icon" />
                                                        <span className="text text-heading fw-500">Username</span>
                                                    </span>
                                                    <span className="profile-info-list__info">michel15</span>
                                                </li>
                                                <li className="profile-info-list__item">
                                                    <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                                                        <img src="/assets/images/icons/profile-info-icon2.svg" alt="" className="icon" />
                                                        <span className="text text-heading fw-500">Email</span>
                                                    </span>
                                                    <span className="profile-info-list__info">michel15@gmail.com</span>
                                                </li>
                                                <li className="profile-info-list__item">
                                                    <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                                                        <img src="/assets/images/icons/profile-info-icon3.svg" alt="" className="icon" />
                                                        <span className="text text-heading fw-500">Phone</span>
                                                    </span>
                                                    <span className="profile-info-list__info">+880 15589 236 45</span>
                                                </li>
                                                <li className="profile-info-list__item">
                                                    <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                                                        <img src="/assets/images/icons/profile-info-icon4.svg" alt="" className="icon" />
                                                        <span className="text text-heading fw-500">Country</span>
                                                    </span>
                                                    <span className="profile-info-list__info">Bangladesh</span>
                                                </li>
                                                <li className="profile-info-list__item">
                                                    <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                                                        <img src="/assets/images/icons/profile-info-icon5.svg" alt="" className="icon" />
                                                        <span className="text text-heading fw-500">Balance</span>
                                                    </span>
                                                    <span className="profile-info-list__info">$0.00 USD</span>
                                                </li>
                                                <li className="profile-info-list__item">
                                                    <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                                                        <img src="/assets/images/icons/profile-info-icon6.svg" alt="" className="icon" />
                                                        <span className="text text-heading fw-500">Member Since</span>
                                                    </span>
                                                    <span className="profile-info-list__info">Jan, 01, 2024</span>
                                                </li>
                                                <li className="profile-info-list__item">
                                                    <span className="profile-info-list__content flx-align flex-nowrap gap-2">
                                                        <img src="/assets/images/icons/profile-info-icon7.svg" alt="" className="icon" />
                                                        <span className="text text-heading fw-500">Purchased</span>
                                                    </span>
                                                    <span className="profile-info-list__info">0 items</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-xxl-9 col-xl-8">
                                        <div className="dashboard-card">
                                            <div className="dashboard-card__header pb-0">
                                                <ul className="nav tab-bordered nav-pills" id="pills-tab" role="tablist">
                                                    <li className="nav-item" role="presentation">
                                                        <button
                                                            className={`nav-link font-18 font-heading ${activeTab === 'personalInfo' ? 'active' : ''}`}
                                                            onClick={() => setActiveTab('personalInfo')}
                                                            type="button"
                                                            role="tab"
                                                            aria-controls="pills-personalInfo"
                                                            aria-selected={activeTab === 'personalInfo'}
                                                        >
                                                            Personal Info
                                                        </button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button
                                                            className={`nav-link font-18 font-heading ${activeTab === 'payouts' ? 'active' : ''}`}
                                                            onClick={() => setActiveTab('payouts')}
                                                            type="button"
                                                            role="tab"
                                                            aria-controls="pills-payouts"
                                                            aria-selected={activeTab === 'payouts'}
                                                        >
                                                            Payouts
                                                        </button>
                                                    </li>
                                                    <li className="nav-item" role="presentation">
                                                        <button
                                                            className={`nav-link font-18 font-heading ${activeTab === 'changePassword' ? 'active' : ''}`}
                                                            onClick={() => setActiveTab('changePassword')}
                                                            type="button"
                                                            role="tab"
                                                            aria-controls="pills-changePassword"
                                                            aria-selected={activeTab === 'changePassword'}
                                                        >
                                                            Change Password
                                                        </button>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="profile-info-content">
                                                <div className="tab-content" id="pills-tabContent">
                                                    {activeTab === 'personalInfo' && (
                                                        <div className="tab-pane fade show active" id="pills-personalInfo" role="tabpanel" aria-labelledby="pills-personalInfo-tab" tabIndex={0}>
                                                            <form onSubmit={handlePersonalInfoSubmit} autoComplete="off">
                                                                <div className="row gy-4">
                                                                    <div className="col-sm-6 col-xs-6">
                                                                        <label htmlFor="fName" className="form-label mb-2 font-18 font-heading fw-600">First Name</label>
                                                                        <input type="text" className="common-input border" id="fName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="First Name" />
                                                                    </div>
                                                                    <div className="col-sm-6 col-xs-6">
                                                                        <label htmlFor="lastNamee" className="form-label mb-2 font-18 font-heading fw-600">Last Name</label>
                                                                        <input type="text" className="common-input border" id="lastNamee" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Last Name" />
                                                                    </div>
                                                                    <div className="col-sm-6 col-xs-6">
                                                                        <label htmlFor="phonee" className="form-label mb-2 font-18 font-heading fw-600">Phone Number</label>
                                                                        <input type="tel" className="common-input border" id="phonee" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Phone Number" />
                                                                    </div>
                                                                    <div className="col-sm-6 col-xs-6">
                                                                        <label htmlFor="emailAdddd" className="form-label mb-2 font-18 font-heading fw-600">Email Address</label>
                                                                        <input type="email" className="common-input border" id="emailAdddd" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                                                                    </div>
                                                                    <div className="col-sm-6 col-xs-6">
                                                                        <label htmlFor="cityyy" className="form-label mb-2 font-18 font-heading fw-600">City</label>
                                                                        <div className="select-has-icon">
                                                                            <select className="common-input border" id="cityyy" value={city} onChange={(e) => setCity(e.target.value)}>
                                                                                <option value="Dhaka">Dhaka</option>
                                                                                <option value="Chandpur">Chandpur</option>
                                                                                <option value="Comilla">Comilla</option>
                                                                                <option value="Rangpur">Rangpur</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-6 col-xs-6">
                                                                        <label htmlFor="Stateee" className="form-label mb-2 font-18 font-heading fw-600">State/Region</label>
                                                                        <div className="select-has-icon">
                                                                            <select className="common-input border" id="Stateee" value={stateRegion} onChange={(e) => setStateRegion(e.target.value)}>
                                                                                <option value="USA">USA</option>
                                                                                <option value="Bangladesh">Bangladesh</option>
                                                                                <option value="India">India</option>
                                                                                <option value="Pakistan">Pakistan</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-6 col-xs-6">
                                                                        <label htmlFor="Postcodeee" className="form-label mb-2 font-18 font-heading fw-600">Postcode</label>
                                                                        <input type="text" className="common-input border" id="Postcodeee" value={postcode} onChange={(e) => setPostcode(e.target.value)} placeholder="Post Code" />
                                                                    </div>
                                                                    <div className="col-sm-6 col-xs-6">
                                                                        <label htmlFor="Countryyy" className="form-label mb-2 font-18 font-heading fw-600">Country</label>
                                                                        <div className="select-has-icon">
                                                                            <select className="common-input border" id="Countryyy" value={country} onChange={(e) => setCountry(e.target.value)}>
                                                                                <option value="USA">USA</option>
                                                                                <option value="Bangladesh">Bangladesh</option>
                                                                                <option value="India">India</option>
                                                                                <option value="Pakistan">Pakistan</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-12 text-end">
                                                                        <button type="submit" className="btn btn-main btn-lg pill mt-4"> Update Profile</button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    )}

                                                    {activeTab === 'payouts' && (
                                                        <div className="tab-pane fade show active" id="pills-payouts" role="tabpanel" aria-labelledby="pills-payouts-tab" tabIndex={0}>
                                                            <form onSubmit={handlePayoutsSubmit} autoComplete="off">
                                                                <div className="row gy-4">
                                                                    <div className="col-sm-6 col-xs-6">
                                                                        <label htmlFor="name" className="form-label mb-2 font-18 font-heading fw-600">Full Name</label>
                                                                        <input type="text" className="common-input border" id="name" value={payoutFullName} onChange={(e) => setPayoutFullName(e.target.value)} placeholder="Full Name" />
                                                                    </div>
                                                                    <div className="col-sm-6 col-xs-6">
                                                                        <label htmlFor="phone" className="form-label mb-2 font-18 font-heading fw-600">Phone Number</label>
                                                                        <input type="tel" className="common-input border" id="phone" value={payoutPhone} onChange={(e) => setPayoutPhone(e.target.value)} placeholder="Phone Number" />
                                                                    </div>
                                                                    <div className="col-sm-6 col-xs-6">
                                                                        <label htmlFor="emailAdd" className="form-label mb-2 font-18 font-heading fw-600">Email Address</label>
                                                                        <input type="email" className="common-input border" id="emailAdd" value={payoutEmail} onChange={(e) => setPayoutEmail(e.target.value)} placeholder="Email Address" />
                                                                    </div>
                                                                    <div className="col-sm-6 col-xs-6">
                                                                        <label htmlFor="city" className="form-label mb-2 font-18 font-heading fw-600">City</label>
                                                                        <div className="select-has-icon">
                                                                            <select className="common-input border" id="city" value={payoutCity} onChange={(e) => setPayoutCity(e.target.value)}>
                                                                                <option value="Dhaka">Dhaka</option>
                                                                                <option value="Chandpur">Chandpur</option>
                                                                                <option value="Comilla">Comilla</option>
                                                                                <option value="Rangpur">Rangpur</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-12 text-end">
                                                                        <button type="submit" className="btn btn-main btn-lg pill mt-4"> Pay Now</button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    )}

                                                    {activeTab === 'changePassword' && (
                                                        <div className="tab-pane fade show active" id="pills-changePassword" role="tabpanel" aria-labelledby="pills-changePassword-tab" tabIndex={0}>
                                                            <form onSubmit={handleChangePasswordSubmit} autoComplete="off">
                                                                <div className="row gy-4">
                                                                    <div className="col-12">
                                                                        <label htmlFor="current-password" className="form-label mb-2 font-18 font-heading fw-600">Current Password</label>
                                                                        <div className="position-relative">
                                                                            <input type="password" className="common-input common-input--withIcon common-input--withLeftIcon" id="current-password" placeholder="************" value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} ref={currentPasswordRef} />
                                                                            <span className="input-icon input-icon--left"><img src="/assets/images/icons/key-icon.svg" alt="" /></span>
                                                                            <span className={`input-icon password-show-hide ${currentPasswordIcon}`} onClick={() => togglePasswordVisibility(currentPasswordRef, setCurrentPasswordIcon)}></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-6 col-xs-6">
                                                                        <label htmlFor="new-password" className="form-label mb-2 font-18 font-heading fw-600">New Password</label>
                                                                        <div className="position-relative">
                                                                            <input type="password" className="common-input common-input--withIcon common-input--withLeftIcon" id="new-password" placeholder="************" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} ref={newPasswordRef} />
                                                                            <span className="input-icon input-icon--left"><img src="/assets/images/icons/lock-two.svg" alt="" /></span>
                                                                            <span className={`input-icon password-show-hide ${newPasswordIcon}`} onClick={() => togglePasswordVisibility(newPasswordRef, setNewPasswordIcon)}></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-6 col-xs-6">
                                                                        <label htmlFor="confirm-password" className="form-label mb-2 font-18 font-heading fw-600">Confirm Password</label>
                                                                        <div className="position-relative">
                                                                            <input type="password" className="common-input common-input--withIcon common-input--withLeftIcon" id="confirm-password" placeholder="************" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} ref={confirmPasswordRef} />
                                                                            <span className="input-icon input-icon--left"><img src="/assets/images/icons/lock-two.svg" alt="" /></span>
                                                                            <span className={`input-icon password-show-hide ${confirmPasswordIcon}`} onClick={() => togglePasswordVisibility(confirmPasswordRef, setConfirmPasswordIcon)}></span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm-12 text-end">
                                                                        <button type="submit" className="btn btn-main btn-lg pill mt-4"> Update Password</button>
                                                                    </div>
                                                                </div>
                                                            </form>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Profile Content End */}

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
            </>
    );
};

export default DashboardProfilePage;