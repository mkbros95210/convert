import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Image imports
import logo from '../assets/images/logo/logo.png';
import whiteLogo from '../assets/images/logo/white-logo.png';
import whiteLogoTwo from '../assets/images/logo/white-logo-two.png';
import userIcon from '../assets/images/icons/user.svg';
import globeIcon from '../assets/images/icons/globe.svg';
import globeWhiteIcon from '../assets/images/icons/globe-white.svg';
import cartIcon from '../assets/images/icons/cart.svg';
import cartWhiteIcon from '../assets/images/icons/cart-white.svg';
import sunIcon from '../assets/images/icons/sun.svg';
import moonIcon from '../assets/images/icons/moon.svg';
import breadcrumbGradientBg from '../assets/images/gradients/breadcrumb-gradient-bg.png';
import elementMoon3 from '../assets/images/shapes/element-moon3.png';
import elementMoon1 from '../assets/images/shapes/element-moon1.png';
import authorProfile from '../assets/images/thumbs/author-profile.png';
import badge1 from '../assets/images/thumbs/badge1.png';
import badge2 from '../assets/images/thumbs/badge2.png';
import badge3 from '../assets/images/thumbs/badge3.png';
import badge4 from '../assets/images/thumbs/badge4.png';
import badge5 from '../assets/images/thumbs/badge5.png';
import badge6 from '../assets/images/thumbs/badge6.png';
import badge7 from '../assets/images/thumbs/badge7.png';
import badge8 from '../assets/images/thumbs/badge8.png';
import profileImg from '../assets/images/thumbs/profile-img.png';
import follower1 from '../assets/images/thumbs/follower1.png';
import follower2 from '../assets/images/thumbs/follower2.png';
import follower3 from '../assets/images/thumbs/follower3.png';
import follower4 from '../assets/images/thumbs/follower4.png';
import follower5 from '../assets/images/thumbs/follower5.png';
import follower6 from '../assets/images/thumbs/follower6.png';
import follower7 from '../assets/images/thumbs/follower7.png';
import follower8 from '../assets/images/thumbs/follower8.png';
import featuredItemImg from '../assets/images/thumbs/featured-item-img.png';
import authorDetailsImg from '../assets/images/thumbs/author-details-img.png';
import searchIcon from '../assets/images/icons/search.svg';
import productImg1 from '../assets/images/thumbs/product-img1.png';
import productImg2 from '../assets/images/thumbs/product-img2.png';
import productImg3 from '../assets/images/thumbs/product-img3.png';
import productImg4 from '../assets/images/thumbs/product-img4.png';
import productImg5 from '../assets/images/thumbs/product-img5.png';
import productImg6 from '../assets/images/thumbs/product-img6.png';
import productImg7 from '../assets/images/thumbs/product-img7.png';
import productImg8 from '../assets/images/thumbs/product-img8.png';
import productImg9 from '../assets/images/thumbs/product-img9.png';
import productImg10 from '../assets/images/thumbs/product-img10.png';
import productImg11 from '../assets/images/thumbs/product-img11.png';
import productImg12 from '../assets/images/thumbs/product-img12.png';
import client3 from '../assets/images/thumbs/client3.png';
import rejected1 from '../assets/images/thumbs/rejected1.png';
import rejected2 from '../assets/images/thumbs/rejected2.png';
import testimonialBg from '../assets/images/gradients/testimonial-bg.png';
import flag1 from '../assets/images/thumbs/flag1.png';
import flag2 from '../assets/images/thumbs/flag2.png';
import flag3 from '../assets/images/thumbs/flag3.png';
import flag4 from '../assets/images/thumbs/flag4.png';
import flag5 from '../assets/images/thumbs/flag5.png';
import flag6 from '../assets/images/thumbs/flag6.png';
import flag7 from '../assets/images/thumbs/flag7.png';
import flag8 from '../assets/images/thumbs/flag8.png';
import flag9 from '../assets/images/thumbs/flag9.png';
import flag10 from '../assets/images/thumbs/flag10.png';
import flag11 from '../assets/images/thumbs/flag11.png';
import flag12 from '../assets/images/thumbs/flag12.png';
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
import pattern from '../assets/images/shapes/pattern.png';
import element1 from '../assets/images/shapes/element1.png';
import element2 from '../assets/images/shapes/element2.png';
import footerBg from '../assets/images/shapes/footer-bg.png'; // Assuming a background image
import footerGradient from '../assets/images/gradients/footer-gradient.png';


const ProfilePage: React.FC = () => {
    // State for main tabs
    const [activeMainTab, setActiveMainTab] = useState('profile');

    // State for portfolio tabs
    const [activePortfolioTab, setActivePortfolioTab] = useState('product');
    const [isListView, setIsListView] = useState(false); // State for list/grid view

    const handleMainTabClick = (tabId: string) => {
        setActiveMainTab(tabId);
    };

    const handlePortfolioTabClick = (tabId: string) => {
        setActivePortfolioTab(tabId);
    };

    const handleListViewClick = () => {
        setIsListView(true);
    };

    const handleGridViewClick = () => {
        setIsListView(false);
    };

    // State for follow button
    const [isFollowing, setIsFollowing] = useState(false);
    const toggleFollow = () => {
        setIsFollowing(prev => !prev);
    };

    // State for settings sidebar navigation (manual scroll spy replacement)
    const [activeSettingSection, setActiveSettingSection] = useState('personalInfo');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['personalInfo', 'profile', 'paymentSystem', 'emailSetting', 'socialNetwork'];
            let currentActive = 'personalInfo';
            for (const sectionId of sections) {
                const section = document.getElementById(sectionId);
                if (section && window.scrollY >= section.offsetTop - 100) { // Adjust offset as needed
                    currentActive = sectionId;
                }
            }
            setActiveSettingSection(currentActive);
        };

        // Add event listener only if on the settings tab
        if (activeMainTab === 'Settingss') {
            window.addEventListener('scroll', handleScroll);
            handleScroll(); // Call initially to set correct active state
        } else {
            window.removeEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [activeMainTab]);

    const handleSettingLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        setActiveSettingSection(sectionId);
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    };

    // This data would typically come from an API
    const products = [
        { id: 1, img: productImg1, title: "SaaS dashboard digital products Title here", author: "themepix", price: "$120", prevPrice: "$259", sales: 1200, rating: 5 },
        { id: 2, img: productImg2, title: "SaaS dashboard digital products Title here", author: "themepix", price: "$129", prevPrice: "$236", sales: 100, rating: 5 },
        { id: 3, img: productImg3, title: "SaaS dashboard digital products Title here", author: "themepix", price: "$79", prevPrice: "$99", sales: 900, rating: 5 },
        { id: 4, img: productImg4, title: "SaaS dashboard digital products Title here", author: "themepix", price: "$59", prevPrice: "$129", sales: 1225, rating: 5 },
        { id: 5, img: productImg5, title: "SaaS dashboard digital products Title here", author: "themepix", price: "$99", prevPrice: "$129", sales: 1300, rating: 5 },
        { id: 6, img: productImg6, title: "SaaS dashboard digital products Title here", author: "themepix", price: "$129", prevPrice: "$256", sales: 200, rating: 5 },
        { id: 7, img: productImg7, title: "SaaS dashboard digital products Title here", author: "themepix", price: "$129", prevPrice: "$259", sales: 500, rating: 5 },
        { id: 8, img: productImg8, title: "SaaS dashboard digital products Title here", author: "themepix", price: "$79", prevPrice: "$99", sales: 2100, rating: 5 },
        { id: 9, img: productImg9, title: "SaaS dashboard digital products Title here", author: "themepix", price: "$79", prevPrice: "$99", sales: 2100, rating: 5 },
        { id: 10, img: productImg10, title: "SaaS dashboard digital products Title here", author: "themepix", price: "$79", prevPrice: "$99", sales: 2100, rating: 5 },
        { id: 11, img: productImg11, title: "SaaS dashboard digital products Title here", author: "themepix", price: "$79", prevPrice: "$99", sales: 2100, rating: 5 },
        { id: 12, img: productImg12, title: "SaaS dashboard digital products Title here", author: "themepix", price: "$79", prevPrice: "$99", sales: 2100, rating: 5 },
    ];

    const RenderStars = ({ count }: { count: number }) => {
        const stars = [];
        for (let i = 0; i < count; i++) {
            stars.push(<li key={i} className="star-rating__item font-11"><i className="fas fa-star"></i></li>);
        }
        return <ul className="star-rating">{stars}</ul>;
    };

    const ProductItem = ({ product }: { product: typeof products[0] }) => (
        <div className="col-xl-3 col-lg-4 col-sm-6">
            <div className="product-item section-bg">
                <div className="product-item__thumb d-flex">
                    <Link to="/product-details" className="link w-100">
                        <img src={product.img} alt="" className="cover-img" />
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
                            <Link to="/profile" className="link hover-text-decoration-underline"> {product.author}</Link>
                        </span>
                        <div className="flx-align gap-2">
                            <h6 className="product-item__price mb-0">{product.price}</h6>
                            <span className="product-item__prevPrice text-decoration-line-through">{product.prevPrice}</span>
                        </div>
                    </div>
                    <div className="product-item__bottom flx-between gap-2">
                        <div>
                            <span className="product-item__sales font-14 mb-2">{product.sales} Sales</span>
                            <div className="d-flex align-items-center gap-1">
                                <RenderStars count={product.rating} />
                                <span className="star-rating__text text-heading fw-500 font-14"> (16)</span>
                            </div>
                        </div>
                        <Link to="/product-details" className="btn btn-outline-light btn-sm pill">Live Demo</Link>
                    </div>
                </div>
            </div>
        </div>
    );

    const FollowItem = ({ type }: { type: 'follow' | 'unfollow' }) => (
        <div className="follow-item">
            <div className="follow-item__author">
                <div className="d-flex align-items-start gap-2">
                    <div className="author-details__thumb flex-shrink-0">
                        <img src={authorDetailsImg} alt="" />
                    </div>
                    <div className="author-details__content">
                        <h6 className="author-details__name font-18 mb-2">Oviousdev</h6>
                        <ul className="badge-list badge-list--sm flx-align gap-1 mt-3 ms-0">
                            <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                <img src={badge1} alt="" />
                            </li>
                            <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                <img src={badge2} alt="" />
                            </li>
                            <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                <img src={badge3} alt="" />
                            </li>
                            <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                <img src={badge4} alt="" />
                            </li>
                            <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                <img src={badge5} alt="" />
                            </li>
                            <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                <img src={badge6} alt="" />
                            </li>
                            <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                <img src={badge7} alt="" />
                            </li>
                            <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                <img src={badge8} alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="follow-item__meta">
                <strong className="font-11 fw-600 text-heading">
                    77 Items
                    <br />
                    100 Followers
                    <br />
                    Member Since: September 2018
                    <br />
                    Available for freelance work
                </strong>
            </div>
            <div className="follow-item__sales">
                <div className="sales">
                    <span className="sales__text mb-1 font-13 text-heading fw-500">Sales</span>
                    <h6 className="sales__amount mb-0 font-body">15,830</h6>
                    <ul className="star-rating mt-2">
                        <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                        <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                        <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                        <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                        <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                    </ul>
                    <span className="star-rating__text text-heading font-12 fw-500"> 116 ratings</span>
                </div>
            </div>
            <button type="button" className="btn btn-main pill px-4">{type === 'follow' ? 'Follow' : 'Unfollow'}</button>
        </div>
    );


    return (
        <>
            <section className="breadcrumb-three section-bg position-relative z-index-1 overflow-hidden">
                <img src={breadcrumbGradientBg} alt="" className="bg--gradient" />
                <img src={elementMoon3} alt="" className="element one" />
                <img src={elementMoon1} alt="" className="element three" />

                <div className="container container-two">
                    <div className="breadcrumb-three-content border-bottom border-color">
                        <div className="breadcrumb-three-content__inner">
                            <div className="breadcrumb-three-content__left">
                                <div className="flx-between align-items-end gap-3">
                                    <div className="author-profile d-flex gap-2 flex-column">
                                        <div className="author-profile__thumb flex-shrink-0">
                                            <img src={authorProfile} alt="" />
                                        </div>

                                        <div className="d-flex align-items-end flex-wrap gap-4">
                                            <div className="author-profile__info">
                                                <h5 className="author-profile__name mb-2">Oviousdev</h5>
                                                <span className="author-profile__membership font-14">Member Since January 2021</span>
                                            </div>
                                            <div className="flx-align gap-3">
                                                <Link to="/profile" className="btn btn-main pill px-4 fw-300"> View Profile </Link>
                                                <button type="button" className="btn btn-outline-black pill px-4" onClick={toggleFollow}>
                                                    {isFollowing ? 'Following' : 'Follow'}
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="breadcrumb-three-content__right flex-shrink-0  d-flex align-items-center gap-4 gap-lg-5">
                                        <div className="author-rating">
                                            <span className="author-rating__text text-heading fw-500 mb-2">Author Rating</span>
                                            <div className="d-flex align-items-center gap-1">
                                                <ul className="star-rating">
                                                    <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                    <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                    <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                    <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                    <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                </ul>
                                                <span className="star-rating__text text-body font-14"> (116 ratings)</span>
                                            </div>
                                        </div>
                                        <div className="sales">
                                            <span className="sales__text mb-1 text-heading fw-500">Sales</span>
                                            <h5 className="sales__amount mb-0">15,830</h5>
                                        </div>
                                    </div>
                                </div>

                                <ul className="badge-list mt-32 flx-align gap-2 ms-0">
                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                        <img src={badge1} alt="" />
                                    </li>
                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                        <img src={badge2} alt="" />
                                    </li>
                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                        <img src={badge3} alt="" />
                                    </li>
                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                        <img src={badge4} alt="" />
                                    </li>
                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                        <img src={badge5} alt="" />
                                    </li>
                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                        <img src={badge6} alt="" />
                                    </li>
                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                        <img src={badge7} alt="" />
                                    </li>
                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                        <img src={badge8} alt="" />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <ul className="nav tab-bordered nav-pills mt-4" id="pills-tabbs" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeMainTab === 'profile' ? 'active' : ''}`}
                                    onClick={() => handleMainTabClick('profile')}
                                    id="pills-profile-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-profile"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-profile"
                                    aria-selected={activeMainTab === 'profile'}
                                >
                                    Profile
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeMainTab === 'portfolio' ? 'active' : ''}`}
                                    onClick={() => handleMainTabClick('portfolio')}
                                    id="pills-portfolio-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-portfolio"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-portfolio"
                                    aria-selected={activeMainTab === 'portfolio'}
                                >
                                    Portfolio
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeMainTab === 'followerss' ? 'active' : ''}`}
                                    onClick={() => handleMainTabClick('followerss')}
                                    id="pills-followerss-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-followerss"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-followerss"
                                    aria-selected={activeMainTab === 'followerss'}
                                >
                                    Followers <span className="notification">100</span>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeMainTab === 'Followingg' ? 'active' : ''}`}
                                    onClick={() => handleMainTabClick('Followingg')}
                                    id="pills-Followingg-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-Followingg"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-Followingg"
                                    aria-selected={activeMainTab === 'Followingg'}
                                >
                                    Following <span className="notification">22</span>
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeMainTab === 'Settingss' ? 'active' : ''}`}
                                    onClick={() => handleMainTabClick('Settingss')}
                                    id="pills-Settingss-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-Settingss"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-Settingss"
                                    aria-selected={activeMainTab === 'Settingss'}
                                >
                                    Settings
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeMainTab === 'hiddenItem' ? 'active' : ''}`}
                                    onClick={() => handleMainTabClick('hiddenItem')}
                                    id="pills-hiddenItem-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-hiddenItem"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-hiddenItem"
                                    aria-selected={activeMainTab === 'hiddenItem'}
                                >
                                    Hidden Item
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeMainTab === 'refunded' ? 'active' : ''}`}
                                    onClick={() => handleMainTabClick('refunded')}
                                    id="pills-refunded-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-refunded"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-refunded"
                                    aria-selected={activeMainTab === 'refunded'}
                                >
                                    Refunded
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeMainTab === 'earning' ? 'active' : ''}`}
                                    onClick={() => handleMainTabClick('earning')}
                                    id="pills-earning-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-earning"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-earning"
                                    aria-selected={activeMainTab === 'earning'}
                                >
                                    Earning
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeMainTab === 'statement' ? 'active' : ''}`}
                                    onClick={() => handleMainTabClick('statement')}
                                    id="pills-statement-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-statement"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-statement"
                                    aria-selected={activeMainTab === 'statement'}
                                >
                                    Statement
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeMainTab === 'review' ? 'active' : ''}`}
                                    onClick={() => handleMainTabClick('review')}
                                    id="pills-review-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-review"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-review"
                                    aria-selected={activeMainTab === 'review'}
                                >
                                    Review
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button
                                    className={`nav-link ${activeMainTab === 'download' ? 'active' : ''}`}
                                    onClick={() => handleMainTabClick('download')}
                                    id="pills-download-tab"
                                    data-bs-toggle="pill"
                                    data-bs-target="#pills-download"
                                    type="button"
                                    role="tab"
                                    aria-controls="pills-download"
                                    aria-selected={activeMainTab === 'download'}
                                >
                                    Download
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="profile pt-5 padding-b-120">
                <div className="container container-two">
                    <div className="tab-content" id="pills-tabb">

                        <div className={`tab-pane fade ${activeMainTab === 'profile' ? 'show active' : ''}`} id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                            <div className="profile-wrapper">
                                <div className="profile-content">
                                    <div className="profile-content__inner">
                                        <div className="profile-content__thumb mb-lg-5 mb-4">
                                            <img src={profileImg} alt="" />
                                        </div>
                                        <div className="profile-content__item-wrapper">
                                            <div className="profile-content__item">
                                                <h5 className="profile-content__title mb-2">About us</h5>
                                                <p className="profile-content__desc">At Dpmarket, our journey began in 2018 with a singular mission: to craft innovative digital products that empower businesses in the ever-evolving landscape of the digital world. With a passion for technology and a commitment to excellence, we have steadily grown into a trusted name in the realm of digital solutions.</p>
                                            </div>
                                            <div className="profile-content__item">
                                                <h5 className="profile-content__title mb-2">Our Vision</h5>
                                                <p className="profile-content__desc">At Dpmarket, our journey began in 2018 with a singular mission: to craft innovative digital products that empower businesses in the ever-evolving landscape of the digital world. With a passion for technology and a commitment to excellence, we have steadily grown into a trusted name in the realm of digital solutions.</p>
                                            </div>
                                            <div className="profile-content__item">
                                                <h5 className="profile-content__title mb-2">Our Expertise</h5>
                                                <p className="profile-content__desc">At Dpmarket, our journey began in 2018 with a singular mission: to craft innovative digital products that empower businesses in the ever-evolving landscape of the digital world. With a passion for technology and a commitment to excellence, we have steadily grown into a trusted name in the realm of digital solutions.</p>
                                            </div>
                                            <div className="profile-content__item">
                                                <h5 className="profile-content__title mb-2">Our Commitment to Quality</h5>
                                                <p className="profile-content__desc">At Dpmarket, our journey began in 2018 with a singular mission: to craft innovative digital products that empower businesses in the ever-evolving landscape of the digital world. With a passion for technology and a commitment to excellence, we have steadily grown into a trusted name in the realm of digital solutions.</p>
                                            </div>
                                            <div className="profile-content__item">
                                                <h5 className="profile-content__title mb-2">Our Portfolio</h5>
                                                <p className="profile-content__desc">At Dpmarket, our journey began in 2018 with a singular mission: to craft innovative digital products that empower businesses in the ever-evolving landscape of the digital world. With a passion for technology and a commitment to excellence, we have steadily grown into a trusted name in the realm of digital solutions.</p>
                                            </div>
                                            <div className="profile-content__item">
                                                <h5 className="profile-content__title mb-2">Get Support</h5>
                                                <p className="profile-content__desc">At Dpmarket, our journey began in 2018 with a singular mission: to craft innovative digital products that empower businesses in the ever-evolving landscape of the digital world. With a passion for technology and a commitment to excellence, we have steadily grown into a trusted name in the realm of digital solutions.</p>
                                            </div>
                                        </div>
                                        <div className="follower-item">
                                            <div className="flx-between mb-4">
                                                <h5 className="follower-item__title mb-0">1285 Followers</h5>
                                                <Link to="/profile" className="text-body fw-500 hover-text-decoration-underline">View All Followers</Link>
                                            </div>
                                            <div className="follower-item__content flx-align">
                                                <div className="follower-item__item">
                                                    <Link to="/all-product" className="link w-100 h-100 d-block">
                                                        <img src={follower1} alt="" />
                                                    </Link>
                                                </div>
                                                <div className="follower-item__item">
                                                    <Link to="/all-product" className="link w-100 h-100 d-block">
                                                        <img src={follower2} alt="" />
                                                    </Link>
                                                </div>
                                                <div className="follower-item__item">
                                                    <Link to="/all-product" className="link w-100 h-100 d-block">
                                                        <img src={follower3} alt="" />
                                                    </Link>
                                                </div>
                                                <div className="follower-item__item">
                                                    <Link to="/all-product" className="link w-100 h-100 d-block">
                                                        <img src={follower4} alt="" />
                                                    </Link>
                                                </div>
                                                <div className="follower-item__item">
                                                    <Link to="/all-product" className="link w-100 h-100 d-block">
                                                        <img src={follower5} alt="" />
                                                    </Link>
                                                </div>
                                                <div className="follower-item__item">
                                                    <Link to="/all-product" className="link w-100 h-100 d-block">
                                                        <img src={follower6} alt="" />
                                                    </Link>
                                                </div>
                                                <div className="follower-item__item">
                                                    <Link to="/all-product" className="link w-100 h-100 d-block">
                                                        <img src={follower7} alt="" />
                                                    </Link>
                                                </div>
                                                <div className="follower-item__item">
                                                    <Link to="/all-product" className="link w-100 h-100 d-block">
                                                        <img src={follower8} alt="" />
                                                    </Link>
                                                </div>
                                                <div className="follower-item__item">
                                                    <Link to="/all-product" className="link w-100 h-100 d-block">
                                                        <img src={follower3} alt="" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="profile-sidebar">
                                    <div className="profile-sidebar__item">
                                        <h5 className="mb-4">Featured Items</h5>
                                        <div className="featured-item d-flex align-items-center gap-4">
                                            <div className="featured-item__thumb">
                                                <Link to="/product-details" className="link"><img src={featuredItemImg} alt="" /></Link>
                                            </div>
                                            <div className="featured-item__content">
                                                <h6 className="featured-item__title mb-2"><Link to="/product-details" className="link">Personal portfolio one page template</Link></h6>
                                                <span className="featured-item__text mb-2 text-heading fw-500">250 Purchases</span>
                                                <div className="d-flex align-items-center gap-1">
                                                    <ul className="star-rating">
                                                        <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                        <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                        <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                        <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                        <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                    </ul>
                                                    <span className="star-rating__text text-body font-14"> 5.0 </span>
                                                    <span className="star-rating__text text-body font-14"> (116)</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="profile-sidebar__author">
                                            <div className="author-details p-0 border-0 mt-0">
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="author-details__thumb flex-shrink-0">
                                                        <img src={authorDetailsImg} alt="" />
                                                    </div>
                                                    <div className="author-details__content">
                                                        <h6 className="author-details__name font-18 mb-2">Oviousdev</h6>

                                                        <span className="d-flex align-items-center gap-1">
                                                            <span className="star-rating">
                                                                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                            </span>
                                                            <span className="star-rating__text text-body"> 5.0</span>
                                                        </span>
                                                    </div>
                                                </div>

                                                <ul className="badge-list flx-align gap-2 mt-3">
                                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                                        <img src={badge1} alt="" />
                                                    </li>
                                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                                        <img src={badge2} alt="" />
                                                    </li>
                                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                                        <img src={badge3} alt="" />
                                                    </li>
                                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                                        <img src={badge4} alt="" />
                                                    </li>
                                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                                        <img src={badge5} alt="" />
                                                    </li>
                                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                                        <img src={badge6} alt="" />
                                                    </li>
                                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                                        <img src={badge7} alt="" />
                                                    </li>
                                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                                        <img src={badge8} alt="" />
                                                    </li>
                                                </ul>
                                                <Link to="/profile" className="btn btn-outline-light w-100 pill mt-32 fw-600">Total 89 Items</Link>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="profile-sidebar__item">
                                        <h5 className="profile-sidebar__title">Email to Support</h5>
                                        <form action="#">
                                            <div className="row gy-4">
                                                <div className="col-12">
                                                    <label htmlFor="emailsId" className="form-label mb-2 font-18 fw-500">Email</label>
                                                    <input type="email" className="common-input radius-8 common-input--md" id="emailsId" placeholder="dpmarket@gmail.com" />
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="messagesId" className="form-label mb-2 font-18 fw-500">Message</label>
                                                    <textarea className="common-input radius-8" id="messagesId" placeholder="Write Message"></textarea>
                                                </div>
                                                <div className="col-12">
                                                    <button type="submit" className="btn btn-main btn-md w-100">Send</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="profile-sidebar__item">
                                        <h5 className="profile-sidebar__title">Social Profile</h5>
                                        <ul className="social-icon-list">
                                            <li className="social-icon-list__item">
                                                <a href="https://www.facebook.com/" className="social-icon-list__link flx-center bg-white border-white text-heading font-18"><i className="fab fa-facebook-f"></i></a>
                                            </li>
                                            <li className="social-icon-list__item">
                                                <a href="https://www.twitter.com/" className="social-icon-list__link flx-center bg-white border-white text-heading font-18"> <i className="fab fa-twitter"></i></a>
                                            </li>
                                            <li className="social-icon-list__item">
                                                <a href="https://www.linkedin.com/" className="social-icon-list__link flx-center bg-white border-white text-heading font-18"> <i className="fab fa-linkedin-in"></i></a>
                                            </li>
                                            <li className="social-icon-list__item">
                                                <a href="https://www.pinterest.com/" className="social-icon-list__link flx-center bg-white border-white text-heading font-18"> <i className="fab fa-pinterest-p"></i></a>
                                            </li>
                                            <li className="social-icon-list__item">
                                                <a href="https://www.pinterest.com/" className="social-icon-list__link flx-center bg-white border-white text-heading font-18"> <i className="fab fa-youtube"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={`tab-pane fade ${activeMainTab === 'portfolio' ? 'show active' : ''}`} id="pills-portfolio" role="tabpanel" aria-labelledby="pills-portfolio-tab" tabIndex={0}>
                            <div className="filter-tab gap-3 flx-between mb-5">
                                <div className="list-grid d-flex align-items-center gap-2">
                                    <button
                                        className={`list-grid__button list-button d-sm-flex d-none text-body ${isListView ? 'active' : ''}`}
                                        onClick={handleListViewClick}
                                    >
                                        <i className="las la-list"></i>
                                    </button>
                                    <button
                                        className={`list-grid__button grid-button d-sm-flex d-none ${!isListView ? 'active' : ''}`}
                                        onClick={handleGridViewClick}
                                    >
                                        <i className="las la-border-all"></i>
                                    </button>
                                </div>
                                <ul className="nav common-tab nav-pills mb-0 gap-lg-2 gap-1 me-auto" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className={`nav-link ${activePortfolioTab === 'product' ? 'active' : ''}`}
                                            onClick={() => handlePortfolioTabClick('product')}
                                            id="pills-product-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-product"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-product"
                                            aria-selected={activePortfolioTab === 'product'}
                                        >
                                            All Item
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className={`nav-link ${activePortfolioTab === 'bestMatch' ? 'active' : ''}`}
                                            onClick={() => handlePortfolioTabClick('bestMatch')}
                                            id="pills-bestMatch-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-bestMatch"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-bestMatch"
                                            aria-selected={activePortfolioTab === 'bestMatch'}
                                        >
                                            Best Match
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className={`nav-link ${activePortfolioTab === 'bestRating' ? 'active' : ''}`}
                                            onClick={() => handlePortfolioTabClick('bestRating')}
                                            id="pills-bestRating-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-bestRating"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-bestRating"
                                            aria-selected={activePortfolioTab === 'bestRating'}
                                        >
                                            Best Rating
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className={`nav-link ${activePortfolioTab === 'trending' ? 'active' : ''}`}
                                            onClick={() => handlePortfolioTabClick('trending')}
                                            id="pills-trending-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-trending"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-trending"
                                            aria-selected={activePortfolioTab === 'trending'}
                                        >
                                            Site Template
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className={`nav-link ${activePortfolioTab === 'bestOffers' ? 'active' : ''}`}
                                            onClick={() => handlePortfolioTabClick('bestOffers')}
                                            id="pills-bestOffers-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-bestOffers"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-bestOffers"
                                            aria-selected={activePortfolioTab === 'bestOffers'}
                                        >
                                            Best Offers
                                        </button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button
                                            className={`nav-link ${activePortfolioTab === 'bestSelling' ? 'active' : ''}`}
                                            onClick={() => handlePortfolioTabClick('bestSelling')}
                                            id="pills-bestSelling-tab"
                                            data-bs-toggle="pill"
                                            data-bs-target="#pills-bestSelling"
                                            type="button"
                                            role="tab"
                                            aria-controls="pills-bestSelling"
                                            aria-selected={activePortfolioTab === 'bestSelling'}
                                        >
                                            Best Selling
                                        </button>
                                    </li>
                                </ul>

                                <form action="#" className="search-box style-three">
                                    <input type="text" className="common-input pill" placeholder="Search..." />
                                    <button type="submit" className="btn btn-main btn-icon icon border-0">
                                        <img src={searchIcon} alt="" />
                                    </button>
                                </form>
                            </div>

                            <div className="tab-content" id="pills-tabContent">
                                <div className={`tab-pane fade ${activePortfolioTab === 'product' ? 'show active' : ''}`} id="pills-product" role="tabpanel" aria-labelledby="pills-product-tab" tabIndex={0}>
                                    <div className={`row gy-4 list-grid-wrapper ${isListView ? 'list-view' : ''}`}>
                                        {products.map(product => <ProductItem key={product.id} product={product} />)}
                                    </div>
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
                                </div>
                                <div className={`tab-pane fade ${activePortfolioTab === 'bestMatch' ? 'show active' : ''}`} id="pills-bestMatch" role="tabpanel" aria-labelledby="pills-bestMatch-tab" tabIndex={0}>
                                    <div className={`row gy-4 list-grid-wrapper ${isListView ? 'list-view' : ''}`}>
                                        {products.slice(0, 8).map(product => <ProductItem key={product.id} product={product} />)}
                                    </div>
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination common-pagination">
                                            <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                            <li className="page-item">
                                                <Link className="page-link flx-align gap-2 flex-nowrap" to="#">Next
                                                    <span className="icon line-height-1 font-20"><i className="las la-arrow-right"></i></span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className={`tab-pane fade ${activePortfolioTab === 'bestRating' ? 'show active' : ''}`} id="pills-bestRating" role="tabpanel" aria-labelledby="pills-bestRating-tab" tabIndex={0}>
                                    <div className={`row gy-4 list-grid-wrapper ${isListView ? 'list-view' : ''}`}>
                                        {products.slice(2, 10).map(product => <ProductItem key={product.id} product={product} />)}
                                    </div>
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination common-pagination">
                                            <li className="page-item"><Link className="page-link" to="#">1</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#">2</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#">3</Link></li>
                                            <li className="page-item"><Link className="page-link" to="#">4</Link></li>
                                            <li className="page-item">
                                                <Link className="page-link flx-align gap-2 flex-nowrap" to="#">Next
                                                    <span className="icon line-height-1 font-20"><i className="las la-arrow-right"></i></span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                                <div className={`tab-pane fade ${activePortfolioTab === 'trending' ? 'show active' : ''}`} id="pills-trending" role="tabpanel" aria-labelledby="pills-trending-tab" tabIndex={0}>
                                    <div className={`row gy-4 list-grid-wrapper ${isListView ? 'list-view' : ''}`}>
                                        {products.slice(4, 12).map(product => <ProductItem key={product.id} product={product} />)}
                                    </div>
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
                                </div>
                                <div className={`tab-pane fade ${activePortfolioTab === 'bestOffers' ? 'show active' : ''}`} id="pills-bestOffers" role="tabpanel" aria-labelledby="pills-bestOffers-tab" tabIndex={0}>
                                    <div className={`row gy-4 list-grid-wrapper ${isListView ? 'list-view' : ''}`}>
                                        {products.slice(6, 11).map(product => <ProductItem key={product.id} product={product} />)}
                                    </div>
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
                                </div>
                                <div className={`tab-pane fade ${activePortfolioTab === 'bestSelling' ? 'show active' : ''}`} id="pills-bestSelling" role="tabpanel" aria-labelledby="pills-bestSelling-tab" tabIndex={0}>
                                    <div className={`row gy-4 list-grid-wrapper ${isListView ? 'list-view' : ''}`}>
                                        {products.slice(0, 9).map(product => <ProductItem key={product.id} product={product} />)}
                                    </div>
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
                                </div>
                            </div>
                        </div>
                        <div className={`tab-pane fade ${activeMainTab === 'followerss' ? 'show active' : ''}`} id="pills-followerss" role="tabpanel" aria-labelledby="pills-followerss-tab" tabIndex={0}>
                            <div className="profile-wrapper">
                                <div className="profile-content">
                                    <div className="follow-wrapper">
                                        <FollowItem type="follow" />
                                        <FollowItem type="follow" />
                                        <FollowItem type="follow" />
                                        <FollowItem type="follow" />
                                        <FollowItem type="follow" />
                                        <FollowItem type="follow" />
                                        <FollowItem type="follow" />
                                        <FollowItem type="follow" />
                                    </div>
                                </div>
                                <div className="profile-sidebar">
                                    <div className="profile-sidebar__item">
                                        <h5 className="mb-4">Featured Items</h5>
                                        <div className="featured-item d-flex align-items-center gap-4">
                                            <div className="featured-item__thumb">
                                                <Link to="/product-details" className="link"><img src={featuredItemImg} alt="" /></Link>
                                            </div>
                                            <div className="featured-item__content">
                                                <h6 className="featured-item__title mb-2"><Link to="/product-details" className="link">Personal portfolio one page template</Link></h6>
                                                <span className="featured-item__text mb-2 text-heading fw-500">250 Purchases</span>
                                                <div className="d-flex align-items-center gap-1">
                                                    <ul className="star-rating">
                                                        <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                        <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                        <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                        <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                        <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                    </ul>
                                                    <span className="star-rating__text text-body font-14"> 5.0 </span>
                                                    <span className="star-rating__text text-body font-14"> (116)</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="profile-sidebar__author">
                                            <div className="author-details p-0 border-0 mt-0">
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="author-details__thumb flex-shrink-0">
                                                        <img src={authorDetailsImg} alt="" />
                                                    </div>
                                                    <div className="author-details__content">
                                                        <h6 className="author-details__name font-18 mb-2">Oviousdev</h6>

                                                        <span className="d-flex align-items-center gap-1">
                                                            <span className="star-rating">
                                                                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                            </span>
                                                            <span className="star-rating__text text-body"> 5.0</span>
                                                        </span>
                                                    </div>
                                                </div>

                                                <ul className="badge-list flx-align gap-2 mt-3">
                                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                                        <img src={badge1} alt="" />
                                                    </li>
                                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                                        <img src={badge2} alt="" />
                                                    </li>
                                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                                        <img src={badge3} alt="" />
                                                    </li>
                                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                                        <img src={badge4} alt="" />
                                                    </li>
                                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                                        <img src={badge5} alt="" />
                                                    </li>
                                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                                        <img src={badge6} alt="" />
                                                    </li>
                                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                                        <img src={badge7} alt="" />
                                                    </li>
                                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                                        <img src={badge8} alt="" />
                                                    </li>
                                                </ul>
                                                <Link to="/profile" className="btn btn-outline-light w-100 pill mt-32 fw-600">Total 89 Items</Link>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="profile-sidebar__item">
                                        <h5 className="profile-sidebar__title">Email to Support</h5>
                                        <form action="#">
                                            <div className="row gy-4">
                                                <div className="col-12">
                                                    <label htmlFor="emailssssId" className="form-label mb-2 font-18 fw-500">Email</label>
                                                    <input type="email" className="common-input radius-8 common-input--md" id="emailssssId" placeholder="dpmarket@gmail.com" />
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="messagessssId" className="form-label mb-2 font-18 fw-500">Message</label>
                                                    <textarea className="common-input radius-8" id="messagessssId" placeholder="Write Message"></textarea>
                                                </div>
                                                <div className="col-12">
                                                    <button type="submit" className="btn btn-main btn-md w-100">Send</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="profile-sidebar__item">
                                        <h5 className="profile-sidebar__title">Social Profile</h5>
                                        <ul className="social-icon-list">
                                            <li className="social-icon-list__item">
                                                <a href="https://www.facebook.com/" className="social-icon-list__link flx-center bg-white border-white text-heading font-18"><i className="fab fa-facebook-f"></i></a>
                                            </li>
                                            <li className="social-icon-list__item">
                                                <a href="https://www.twitter.com/" className="social-icon-list__link flx-center bg-white border-white text-heading font-18"> <i className="fab fa-twitter"></i></a>
                                            </li>
                                            <li className="social-icon-list__item">
                                                <a href="https://www.linkedin.com/" className="social-icon-list__link flx-center bg-white border-white text-heading font-18"> <i className="fab fa-linkedin-in"></i></a>
                                            </li>
                                            <li className="social-icon-list__item">
                                                <a href="https://www.pinterest.com/" className="social-icon-list__link flx-center bg-white border-white text-heading font-18"> <i className="fab fa-pinterest-p"></i></a>
                                            </li>
                                            <li className="social-icon-list__item">
                                                <a href="https://www.pinterest.com/" className="social-icon-list__link flx-center bg-white border-white text-heading font-18"> <i className="fab fa-youtube"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={`tab-pane fade ${activeMainTab === 'Followingg' ? 'show active' : ''}`} id="pills-Followingg" role="tabpanel" aria-labelledby="pills-Followingg-tab" tabIndex={0}>
                            <div className="profile-wrapper">
                                <div className="profile-content">
                                    <div className="follow-wrapper">
                                        <FollowItem type="unfollow" />
                                        <FollowItem type="unfollow" />
                                        <FollowItem type="unfollow" />
                                        <FollowItem type="unfollow" />
                                        <FollowItem type="unfollow" />
                                        <FollowItem type="unfollow" />
                                        <FollowItem type="unfollow" />
                                        <FollowItem type="unfollow" />
                                    </div>
                                </div>
                                <div className="profile-sidebar">
                                    <div className="profile-sidebar__item">
                                        <h5 className="mb-4">Featured Items</h5>
                                        <div className="featured-item d-flex align-items-center gap-4">
                                            <div className="featured-item__thumb">
                                                <Link to="/product-details" className="link"><img src={featuredItemImg} alt="" /></Link>
                                            </div>
                                            <div className="featured-item__content">
                                                <h6 className="featured-item__title mb-2"><Link to="/product-details" className="link">Personal portfolio one page template</Link></h6>
                                                <span className="featured-item__text mb-2 text-heading fw-500">250 Purchases</span>
                                                <div className="d-flex align-items-center gap-1">
                                                    <ul className="star-rating">
                                                        <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                        <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                        <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                        <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                        <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                    </ul>
                                                    <span className="star-rating__text text-body font-14"> 5.0 </span>
                                                    <span className="star-rating__text text-body font-14"> (116)</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="profile-sidebar__author">
                                            <div className="author-details p-0 border-0 mt-0">
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="author-details__thumb flex-shrink-0">
                                                        <img src={authorDetailsImg} alt="" />
                                                    </div>
                                                    <div className="author-details__content">
                                                        <h6 className="author-details__name font-18 mb-2">Oviousdev</h6>

                                                        <span className="d-flex align-items-center gap-1">
                                                            <span className="star-rating">
                                                                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                                <li className="star-rating__item font-11"><i className="fas fa-star"></i></li>
                                                            </span>
                                                            <span className="star-rating__text text-body"> 5.0</span>
                                                        </span>
                                                    </div>
                                                </div>

                                                <ul className="badge-list flx-align gap-2 mt-3">
                                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                                        <img src={badge1} alt="" />
                                                    </li>
                                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                                        <img src={badge2} alt="" />
                                                    </li>
                                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                                        <img src={badge3} alt="" />
                                                    </li>
                                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                                        <img src={badge4} alt="" />
                                                    </li>
                                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                                        <img src={badge5} alt="" />
                                                    </li>
                                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                                        <img src={badge6} alt="" />
                                                    </li>
                                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                                        <img src={badge7} alt="" />
                                                    </li>
                                                    <li className="badge-list__item" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Badge Info">
                                                        <img src={badge8} alt="" />
                                                    </li>
                                                </ul>
                                                <Link to="/profile" className="btn btn-outline-light w-100 pill mt-32 fw-600">Total 89 Items</Link>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="profile-sidebar__item">
                                        <h5 className="profile-sidebar__title">Email to Support</h5>
                                        <form action="#">
                                            <div className="row gy-4">
                                                <div className="col-12">
                                                    <label htmlFor="emailssId" className="form-label mb-2 font-18 fw-500">Email</label>
                                                    <input type="email" className="common-input radius-8 common-input--md" id="emailssId" placeholder="dpmarket@gmail.com" />
                                                </div>
                                                <div className="col-12">
                                                    <label htmlFor="messagessId" className="form-label mb-2 font-18 fw-500">Message</label>
                                                    <textarea className="common-input radius-8" id="messagessId" placeholder="Write Message"></textarea>
                                                </div>
                                                <div className="col-12">
                                                    <button type="submit" className="btn btn-main btn-md w-100">Send</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="profile-sidebar__item">
                                        <h5 className="profile-sidebar__title">Social Profile</h5>
                                        <ul className="social-icon-list">
                                            <li className="social-icon-list__item">
                                                <a href="https://www.facebook.com/" className="social-icon-list__link flx-center bg-white border-white text-heading font-18"><i className="fab fa-facebook-f"></i></a>
                                            </li>
                                            <li className="social-icon-list__item">
                                                <a href="https://www.twitter.com/" className="social-icon-list__link flx-center bg-white border-white text-heading font-18"> <i className="fab fa-twitter"></i></a>
                                            </li>
                                            <li className="social-icon-list__item">
                                                <a href="https://www.linkedin.com/" className="social-icon-list__link flx-center bg-white border-white text-heading font-18"> <i className="fab fa-linkedin-in"></i></a>
                                            </li>
                                            <li className="social-icon-list__item">
                                                <a href="https://www.pinterest.com/" className="social-icon-list__link flx-center bg-white border-white text-heading font-18"> <i className="fab fa-pinterest-p"></i></a>
                                            </li>
                                            <li className="social-icon-list__item">
                                                <a href="https://www.pinterest.com/" className="social-icon-list__link flx-center bg-white border-white text-heading font-18"> <i className="fab fa-youtube"></i></a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={`tab-pane fade ${activeMainTab === 'Settingss' ? 'show active' : ''}`} id="pills-Settingss" role="tabpanel" aria-labelledby="pills-Settingss-tab" tabIndex={0}>

                            <div className="row gy-4">
                                <div className="col-lg-4 pe-xl-5">
                                    <div className="setting-sidebar ">
                                        <h6 className="setting-sidebar__title">Your Details</h6>
                                        <ul className="setting-sidebar-list" id="sidebar-scroll-spy">
                                            <li className="setting-sidebar-list__item"><a href="#personalInfo" className={`setting-sidebar-list__link ${activeSettingSection === 'personalInfo' ? 'active' : ''}`} onClick={(e) => handleSettingLinkClick(e, 'personalInfo')}>Personal Information</a></li>
                                            <li className="setting-sidebar-list__item"><a href="#profile" className={`setting-sidebar-list__link ${activeSettingSection === 'profile' ? 'active' : ''}`} onClick={(e) => handleSettingLinkClick(e, 'profile')}>Profile</a></li>
                                            <li className="setting-sidebar-list__item"><a href="#paymentSystem" className={`setting-sidebar-list__link ${activeSettingSection === 'paymentSystem' ? 'active' : ''}`} onClick={(e) => handleSettingLinkClick(e, 'paymentSystem')}>Setup Payment System</a></li>
                                            <li className="setting-sidebar-list__item"><a href="#emailSetting" className={`setting-sidebar-list__link ${activeSettingSection === 'emailSetting' ? 'active' : ''}`} onClick={(e) => handleSettingLinkClick(e, 'emailSetting')}>Email Setting</a></li>
                                            <li className="setting-sidebar-list__item"><a href="#socialNetwork" className={`setting-sidebar-list__link ${activeSettingSection === 'socialNetwork' ? 'active' : ''}`} onClick={(e) => handleSettingLinkClick(e, 'socialNetwork')}>Social Networks</a></li>
                                        </ul>
                                    </div>
                                </div>


                                <div className="col-lg-8">
                                    <div className="setting-content">
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
                                                        </div>
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
                                </div>
                            </div>

                        </div>
                        <div className={`tab-pane fade ${activeMainTab === 'hiddenItem' ? 'show active' : ''}`} id="pills-hiddenItem" role="tabpanel" aria-labelledby="pills-hiddenItem-tab" tabIndex={0}>
                            <div className="row justify-content-center">
                                <div className="col-xxl-8 col-xl-10">
                                    <div className="product-reject__wrapper">
                                        <div className="card common-card border border-gray-five overflow-hidden">
                                            <div className="card-body">
                                                <div className="product-reject__content d-flex flex-sm-row flex-column align-items-start gap-md-5 gap-4">
                                                    <div className="product-reviewer flx-align flex-nowrap gap-3 flex-shrink-0">
                                                        <div className="product-reviewer__thumb flex-shrink-0">
                                                            <img src={client3} alt="" />
                                                        </div>
                                                        <div className="product-reviewer__content">
                                                            <h6 className="product-reviewer__name mb-0">John Doe</h6>
                                                            <span className="product-reviewer__designation font-14">Reviewer</span>
                                                        </div>
                                                    </div>
                                                    <div className="product-reject__item flex-grow-1">
                                                        <div className="product-reject-info flx-align flex-nowrap gap-3">
                                                            <div className="product-reject-info__thumb flex-shrink-0">
                                                                