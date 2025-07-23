```tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RegisterPage: React.FC = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Initialize theme based on localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
      document.documentElement.setAttribute('data-theme', currentTheme);
      setIsDarkMode(currentTheme === 'dark');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setIsDarkMode(!isDarkMode);
  };

  const handlePasswordToggle = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Register form submitted!');
  };

  return (
    <>
      {/* Preloader - Typically handled globally */}
      <div className="loader-mask">
        <div className="loader">
          <div></div>
          <div></div>
        </div>
      </div>

      {/* Overlay - Typically handled globally */}
      <div className="overlay"></div>

      {/* Sidebar Overlay - Typically handled globally */}
      <div className="side-overlay"></div>

      {/* Scroll to Top - Typically handled globally */}
      <div className="progress-wrap">
        <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
          <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
        </svg>
      </div>

      {/* Mobile Menu - Typically handled globally */}
      <div className="mobile-menu d-lg-none d-block">
        <button type="button" className="close-button"> <i className="las la-times"></i> </button>
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
                  <li className="nav-submenu__item">
                    <Link to="/home-one" className="nav-submenu__link"> Home One</Link>
                  </li>
                  <li className="nav-submenu__item">
                    <Link to="/home-two" className="nav-submenu__link"> Home Two</Link>
                  </li>
                  <li className="nav-submenu__item">
                    <Link to="/home-three" className="nav-submenu__link"> Home Three</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-menu__item has-submenu">
                <Link to="#">Products</Link>
                <ul className="nav-submenu">
                  <li className="nav-submenu__item">
                    <Link to="/all-product" className="nav-submenu__link"> All Products</Link>
                  </li>
                  <li className="nav-submenu__item">
                    <Link to="/product-details" className="nav-submenu__link"> Product Details</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-menu__item has-submenu">
                <Link to="#">Pages</Link>
                <ul className="nav-submenu">
                  <li className="nav-submenu__item">
                    <Link to="/profile" className="nav-submenu__link"> Profile</Link>
                  </li>
                  <li className="nav-submenu__item">
                    <Link to="/cart" className="nav-submenu__link"> Shopping Cart</Link>
                  </li>
                  <li className="nav-submenu__item">
                    <Link to="/cart-personal" className="nav-submenu__link"> Mailing Address</Link>
                  </li>
                  <li className="nav-submenu__item">
                    <Link to="/cart-payment" className="nav-submenu__link"> Payment Method</Link>
                  </li>
                  <li className="nav-submenu__item">
                    <Link to="/cart-thank-you" className="nav-submenu__link"> Preview Order</Link>
                  </li>
                  <li className="nav-submenu__item">
                    <Link to="/dashboard" className="nav-submenu__link"> Dashboard</Link>
                  </li>
                </ul>
              </li>
              <li className="nav-menu__item has-submenu">
                <Link to="#">Blog</Link>
                <ul className="nav-submenu">
                  <li className="nav-submenu__item">
                    <Link to="/blog" className="nav-submenu__link"> Blog</Link>
                  </li>
                  <li className="nav-submenu__item">
                    <Link to="/blog-details" className="nav-submenu__link"> Blog Details</Link>
                  </li>
                  <li className="nav-submenu__item">
                    <Link to="/blog-details-sidebar" className="nav-submenu__link"> Blog Details Sidebar</Link>
                  </li>
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

      <section className="account d-flex">
        <img src="/assets/images/thumbs/account-img.png" alt="" className="account__img" />
        <div className="account__left d-md-flex d-none flx-align section-bg position-relative z-index-1 overflow-hidden">
          <img src="/assets/images/shapes/pattern-curve-seven.png" alt="" className="position-absolute end-0 top-0 z-index--1 h-100" />
          <div className="account-thumb">
            <img src="/assets/images/thumbs/banner-img.png" alt="" />
            <div className="statistics animation bg-main text-center">
              <h5 className="statistics__amount text-white">50k</h5>
              <span className="statistics__text text-white font-14">Customers</span>
            </div>
          </div>
        </div>
        <div className="account__right padding-t-120 flx-align">
          <div className="dark-light-mode">
            {/* Light Dark Mode */}
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
          </div>

          <div className="account-content">
            <Link to="/" className="logo mb-64">
              <img src="/assets/images/logo/logo.png" alt="" className="white-version" />
              <img src="/assets/images/logo/white-logo-two.png" alt="" className="dark-version" />
            </Link>
            <h4 className="account-content__title mb-48 text-capitalize">Create A Free Account</h4>

            <form onSubmit={handleSubmit}>
              <div className="row gy-4">
                <div className="col-12">
                  <label htmlFor="name" className="form-label mb-2 font-18 font-heading fw-600">Full Name</label>
                  <div className="position-relative">
                    <input type="text" className="common-input common-input--bg common-input--withIcon" id="name" placeholder="Your full name" />
                    <span className="input-icon"><img src="/assets/images/icons/user-icon.svg" alt="" /></span>
                  </div>
                </div>
                <div className="col-12">
                  <label htmlFor="email" className="form-label mb-2 font-18 font-heading fw-600">Email</label>
                  <div className="position-relative">
                    <input type="email" className="common-input common-input--bg common-input--withIcon" id="email" placeholder="infoname@mail.com" />
                    <span className="input-icon"><img src="/assets/images/icons/envelope-icon.svg" alt="" /></span>
                  </div>
                </div>

                <div className="col-12">
                  <label htmlFor="your-password" className="form-label mb-2 font-18 font-heading fw-600">Password</label>
                  <div className="position-relative">
                    <input
                      type={isPasswordVisible ? "text" : "password"}
                      className="common-input common-input--bg common-input--withIcon"
                      id="your-password"
                      placeholder="6+ characters, 1 Capital letter"
                    />
                    <span
                      className="input-icon toggle-password cursor-pointer"
                      onClick={handlePasswordToggle}
                    >
                      <img src="/assets/images/icons/lock-icon.svg" alt="" />
                    </span>
                  </div>
                </div>
                <div className="col-12">
                  <div className="common-check my-2">
                    <input className="form-check-input" type="checkbox" name="checkbox" id="agree" />
                    <label className="form-check-label mb-0 fw-400 font-16 text-body" htmlFor="agree">I agree to the terms & conditions</label>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-main btn-lg w-100 pill"> Create An Account</button>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-outline-light btn-lg-icon btn-lg w-100 pill">
                    <span className="icon icon-left"><img src="/assets/images/icons/google.svg" alt="" /></span>
                    Sign up with google
                  </button>
                </div>
                <div className="col-sm-12 mb-0">
                  <div className="have-account">
                    <p className="text font-14">Already a member? <Link to="/login" className="link text-main text-decoration-underline fw-500">Login</Link></p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
```