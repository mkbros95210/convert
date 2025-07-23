import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Import images as static assets for Vite
import accountImg from '../assets/images/thumbs/account-img.png';
import patternCurveSeven from '../assets/images/shapes/pattern-curve-seven.png';
import bannerImg from '../assets/images/thumbs/banner-img.png';
import logoLight from '../assets/images/logo/logo.png'; // Used for white-version
import logoDark from '../assets/images/logo/white-logo-two.png'; // Used for dark-version
import sunIcon from '../assets/images/icons/sun.svg';
import moonIcon from '../assets/images/icons/moon.svg';
import envelopeIcon from '../assets/images/icons/envelope-icon.svg';
import lockIcon from '../assets/images/icons/lock-icon.svg'; // The default icon for password field
import googleIcon from '../assets/images/icons/google.svg';

const LoginPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const [keepMeSignedIn, setKeepMeSignedIn] = useState(false);

    const handleLoginSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In a real application, you would send this data to your authentication API
        console.log('Login attempt:', { email, password, keepMeSignedIn });
        alert('Login functionality is a placeholder. Email: ' + email + ', Password: ' + password);
        // Example: Redirect after successful login
        // navigate('/dashboard');
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    // Note: The original HTML (`login.html`) includes global layout elements such as a preloader,
    // an overlay, a scroll-to-top button, and a mobile menu. In a React application, these
    // elements are typically managed by a higher-level layout component (e.g., `App.tsx` or
    // a dedicated `Layout` component) that wraps the individual page components.
    // This `LoginPage.tsx` file focuses on rendering the content specific to the login form,
    // as it appeared within the `<section class="account">` tag in the original HTML.
    // All original CSS class names have been retained to maintain the styling from `main.css`.
    // Navigation links (`.html` files) are converted to `Link` components from `react-router-dom`.

    return (
        <section className="account d-flex">
            {/* Background image for the account section, absolutely positioned */}
            <img src={accountImg} alt="Account background visual" className="account__img" />

            {/* Left side of the account section, visible on medium and larger screens */}
            <div className="account__left d-md-flex d-none flx-align section-bg position-relative z-index-1 overflow-hidden">
                <img src={patternCurveSeven} alt="Decorative pattern" className="position-absolute end-0 top-0 z-index--1 h-100" />
                <div className="account-thumb">
                    <img src={bannerImg} alt="Login page banner image" />
                    <div className="statistics animation bg-main text-center">
                        <h5 className="statistics__amount text-white">50k</h5>
                        <span className="statistics__text text-white font-14">Customers</span>
                    </div>
                </div>
            </div>

            {/* Right side of the account section, containing the login form */}
            <div className="account__right padding-y-120 flx-align">
                {/* Dark/Light Mode Toggle - This functionality would typically be handled by a global theme context in React */}
                <div className="dark-light-mode">
                    <div className="theme-switch-wrapper position-relative">
                        <label className="theme-switch" htmlFor="checkbox">
                            <input type="checkbox" className="d-none" id="checkbox" />
                            <span className="slider text-black header-right__button white-version">
                                <img src={sunIcon} alt="Sun icon for light mode" />
                            </span>
                            <span className="slider text-black header-right__button dark-version">
                                <img src={moonIcon} alt="Moon icon for dark mode" />
                            </span>
                        </label>
                    </div>
                </div>

                <div className="account-content">
                    {/* Logo linking to the homepage */}
                    <Link to="/" className="logo mb-64">
                        <img src={logoLight} alt="Digital Market Place Logo" className="white-version" />
                        <img src={logoDark} alt="Digital Market Place Logo" className="dark-version" />
                    </Link>
                    <h4 className="account-content__title mb-48 text-capitalize">Welcome Back!</h4>

                    {/* Login Form */}
                    <form onSubmit={handleLoginSubmit}>
                        <div className="row gy-4">
                            <div className="col-12">
                                <label htmlFor="email" className="form-label mb-2 font-18 font-heading fw-600">Email</label>
                                <div className="position-relative">
                                    <input
                                        type="email"
                                        className="common-input common-input--bg common-input--withIcon"
                                        id="email"
                                        placeholder="infoname@mail.com"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <span className="input-icon"><img src={envelopeIcon} alt="Envelope icon" /></span>
                                </div>
                            </div>
                            <div className="col-12">
                                <label htmlFor="your-password" className="form-label mb-2 font-18 font-heading fw-600">Password</label>
                                <div className="position-relative">
                                    <input
                                        type={showPassword ? "text" : "password"} // Type changes based on showPassword state
                                        className="common-input common-input--bg common-input--withIcon"
                                        id="your-password"
                                        placeholder="6+ characters, 1 Capital letter"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    {/* Password visibility toggle icon. Original JS hints at Font Awesome classes for the icon.
                                        For this conversion, we toggle the input type directly. The visual icon change would
                                        require Font Awesome setup or swapping image sources. */}
                                    <span
                                        className="input-icon toggle-password cursor-pointer"
                                        onClick={togglePasswordVisibility}
                                    >
                                        <img src={lockIcon} alt="Lock icon" />
                                    </span>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="flx-between gap-1">
                                    <div className="common-check my-2">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            name="checkbox"
                                            id="keepMe"
                                            checked={keepMeSignedIn}
                                            onChange={(e) => setKeepMeSignedIn(e.target.checked)}
                                        />
                                        <label className="form-check-label mb-0 fw-400 font-14 text-body" htmlFor="keepMe">Keep me signed in</label>
                                    </div>
                                    <Link to="/forgot-password" className="forgot-password text-decoration-underline text-main text-poppins font-14">Forgot password?</Link>
                                </div>
                            </div>
                            <div className="col-12">
                                <button type="submit" className="btn btn-main btn-lg w-100 pill"> Sign In</button>
                            </div>
                            <div className="col-12">
                                <button type="button" className="btn btn-outline-light btn-lg-icon btn-lg w-100 pill">
                                    <span className="icon icon-left"><img src={googleIcon} alt="Google icon" /></span>
                                    Sign in with google
                                </button>
                            </div>
                            <div className="col-sm-12 mb-0">
                                <div className="have-account">
                                    <p className="text font-14">New to the market? <Link className="link text-main text-decoration-underline fw-500" to="/register">sign up</Link></p>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default LoginPage;