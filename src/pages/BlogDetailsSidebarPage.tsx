import React from 'react';

const BlogDetailsSidebarPage: React.FC = () => {
  return (
    <>
      {/* Mobile Menu Start Here */}
      <div className="mobile-menu d-lg-none d-block">
        <button type="button" className="close-button"> <i className="las la-times"></i> </button>
        <div className="mobile-menu__inner">
          <a href="/#" className="mobile-menu__logo">
            <img src="/assets/images/logo/logo.png" alt="Logo" className="white-version" />
            <img src="/assets/images/logo/white-logo-two.png" alt="Logo" className="dark-version" />
          </a>
          <div className="mobile-menu__menu">
            <ul className="nav-menu flx-align nav-menu--mobile">
              <li className="nav-menu__item has-submenu">
                <a href="/#" className="nav-menu__link">Home</a>
                <ul className="nav-submenu">
                  <li className="nav-submenu__item">
                    <a href="/#" className="nav-submenu__link"> Home One</a>
                  </li>
                  <li className="nav-submenu__item">
                    <a href="/#" className="nav-submenu__link"> Home Two</a>
                  </li>
                  <li className="nav-submenu__item">
                    <a href="/#" className="nav-submenu__link"> Home Three</a>
                  </li>
                </ul>
              </li>
              <li className="nav-menu__item has-submenu">
                <a href="/#" className="nav-menu__link">Products</a>
                <ul className="nav-submenu">
                  <li className="nav-submenu__item">
                    <a href="/#" className="nav-submenu__link"> All Products</a>
                  </li>
                  <li className="nav-submenu__item">
                    <a href="/#" className="nav-submenu__link"> Product Details</a>
                  </li>
                </ul>
              </li>
              <li className="nav-menu__item has-submenu">
                <a href="/#" className="nav-menu__link">Pages</a>
                <ul className="nav-submenu">
                  <li className="nav-submenu__item">
                    <a href="/#" className="nav-submenu__link"> Profile</a>
                  </li>
                  <li className="nav-submenu__item">
                    <a href="/#" className="nav-submenu__link"> Shopping Cart</a>
                  </li>
                  <li className="nav-submenu__item">
                    <a href="/#" className="nav-submenu__link"> Mailing Address</a>
                  </li>
                  <li className="nav-submenu__item">
                    <a href="/#" className="nav-submenu__link"> Payment Method</a>
                  </li>
                  <li className="nav-submenu__item">
                    <a href="/#" className="nav-submenu__link"> Preview Order</a>
                  </li>
                  <li className="nav-submenu__item">
                    <a href="/#" className="nav-submenu__link"> Dashboard</a>
                  </li>
                </ul>
              </li>
              <li className="nav-menu__item has-submenu">
                <a href="/#" className="nav-menu__link">Blog</a>
                <ul className="nav-submenu">
                  <li className="nav-submenu__item">
                    <a href="/#" className="nav-submenu__link"> Blog</a>
                  </li>
                  <li className="nav-submenu__item">
                    <a href="/#" className="nav-submenu__link"> Blog Details</a>
                  </li>
                  <li className="nav-submenu__item">
                    <a href="/#" className="nav-submenu__link"> Blog Details Sidebar</a>
                  </li>
                </ul>
              </li>
              <li className="nav-menu__item">
                <a href="/#" className="nav-menu__link">Contact</a>
              </li>
            </ul>
            <div className="header-right__inner d-lg-none my-3 gap-1 d-flex flx-align">
              <a href="/#" className="btn btn-main pill">
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
      {/* Mobile Menu End Here */}

      {/* Header Start Here */}
      <header className="header">
        <div className="container container-full">
          <nav className="header-inner flx-between">
            {/* Logo Start */}
            <div className="logo">
              <a href="/#" className="link white-version">
                <img src="/assets/images/logo/logo.png" alt="Logo" />
              </a>
              <a href="/#" className="link dark-version">
                <img src="/assets/images/logo/white-logo.png" alt="Logo" />
              </a>
            </div>
            {/* Logo End */}

            {/* Menu Start */}
            <div className="header-menu d-lg-block d-none">
              <ul className="nav-menu flx-align ">
                <li className="nav-menu__item has-submenu">
                  <a href="/#" className="nav-menu__link">Home</a>
                  <ul className="nav-submenu">
                    <li className="nav-submenu__item">
                      <a href="/#" className="nav-submenu__link"> Home One</a>
                    </li>
                    <li className="nav-submenu__item">
                      <a href="/#" className="nav-submenu__link"> Home Two</a>
                    </li>
                    <li className="nav-submenu__item">
                      <a href="/#" className="nav-submenu__link"> Home Three</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-menu__item has-submenu">
                  <a href="/#" className="nav-menu__link">Products</a>
                  <ul className="nav-submenu">
                    <li className="nav-submenu__item">
                      <a href="/#" className="nav-submenu__link"> All Products</a>
                    </li>
                    <li className="nav-submenu__item">
                      <a href="/#" className="nav-submenu__link"> Product Details</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-menu__item has-submenu">
                  <a href="/#" className="nav-menu__link">Pages</a>
                  <ul className="nav-submenu">
                    <li className="nav-submenu__item">
                      <a href="/#" className="nav-submenu__link"> Profile</a>
                    </li>
                    <li className="nav-submenu__item">
                      <a href="/#" className="nav-submenu__link"> Shopping Cart</a>
                    </li>
                    <li className="nav-submenu__item">
                      <a href="/#" className="nav-submenu__link"> Mailing Address</a>
                    </li>
                    <li className="nav-submenu__item">
                      <a href="/#" className="nav-submenu__link"> Payment Method</a>
                    </li>
                    <li className="nav-submenu__item">
                      <a href="/#" className="nav-submenu__link"> Preview Order</a>
                    </li>
                    <li className="nav-submenu__item">
                      <a href="/#" className="nav-submenu__link"> Dashboard</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-menu__item has-submenu">
                  <a href="/#" className="nav-menu__link">Blog</a>
                  <ul className="nav-submenu">
                    <li className="nav-submenu__item">
                      <a href="/#" className="nav-submenu__link"> Blog</a>
                    </li>
                    <li className="nav-submenu__item">
                      <a href="/#" className="nav-submenu__link"> Blog Details</a>
                    </li>
                    <li className="nav-submenu__item">
                      <a href="/#" className="nav-submenu__link"> Blog Details Sidebar</a>
                    </li>
                  </ul>
                </li>
                <li className="nav-menu__item">
                  <a href="/#" className="nav-menu__link">Contact</a>
                </li>
              </ul>
            </div>
            {/* Menu End */}

            {/* Header Right start */}
            <div className="header-right flx-align">
              <a href="/#" className="header-right__button cart-btn position-relative">
                <img src="/assets/images/icons/cart.svg" alt="" className="white-version" />
                <img src="/assets/images/icons/cart-white.svg" alt="" className="dark-version" />
                <span className="qty-badge font-12">0</span>
              </a>

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

              <div className="header-right__inner gap-3 flx-align d-lg-flex d-none">
                <a href="/#" className="btn btn-main pill">
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
              <button type="button" className="toggle-mobileMenu d-lg-none"> <i className="las la-bars"></i> </button>
            </div>
            {/* Header Right End */}
          </nav>
        </div>
      </header>
      {/* Header End Here */}

      {/* Blog Details Section Start */}
      <section className="blog-details padding-y-120 position-relative overflow-hidden">
        <div className="container container-two">
          {/* blog details top Start */}
          <div className="blog-details-top mb-64">
            <div className="blog-details-top__info flx-align gap-3 mb-4">
              <div className="blog-details-top__thumb flx-align gap-2">
                <img src="/assets/images/thumbs/blog-details-user.png" alt="" />
                <span className="text-heading fw-500">Michel Smith</span>
              </div>
              <span className="blog-details-top__date flx-align gap-2">
                <img src="/assets/images/icons/clock.svg" alt="" />
                25 Jan 2024
              </span>
            </div>
            <h2 className="blog-details-top__title mb-4 text-capitalize">How to hire a right business executive for your company</h2>
            <p className="blog-details-top__desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit proin mi pellentesque lorem turpis feugiat non sed sed sed aliquam lectus sodales gravida turpis maassa odio faucibus accumsan.</p>
          </div>
          {/* blog details top End */}
          <div className="row gy-4">
            <div className="col-lg-8 pe-lg-5">
              {/* blog details content Start */}
              <div className="blog-details-content">
                <div className="blog-details-content__thumb mb-32">
                  <img src="/assets/images/thumbs/blog-details-thumb1.png" alt="" />
                </div>
                <p className="blog-details-content__desc mb-40">Design and development may seem like two separate worlds, but they can work together seamlessly to create stunning and functional software. In this post, we'll explore the benefits of integrating design and development early on in a project.</p>

                <h4 className="blog-details-content__title mb-24">Interview multiple candidates</h4>
                <p className="blog-details-content__desc mb-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit proin mi pellentesque lorem turpis feugiat non sed sed sed aliquam lectus sodales gravida turpis maassa.</p>

                <div className="blog-details-content__thumbs mb-40">
                  <div className="row gy-4">
                    <div className="col-sm-5 col-6">
                      <div className="blog-details-content__thumb">
                        <img src="/assets/images/thumbs/blog-details-thumb2.jpg" alt="" />
                      </div>
                    </div>
                    <div className="col-sm-7 col-6">
                      <div className="blog-details-content__thumb">
                        <img src="/assets/images/thumbs/blog-details-thumb3.jpg" alt="" />
                      </div>
                    </div>
                  </div>
                </div>

                <h5 className="blog-details-content__title mb-3">Search for the right experience</h5>
                <p className="blog-details-content__desc mb-32">Lorem ipsum dolor sit amet, consectetur adipiscing elit proin mi pellentesque lorem turpis feugiat non sed sed sed aliquam lectus sodales gravida turpis maassa odio. we'll explore the importance of design in the software development process and how it can lead to more successful projects.</p>
                <p className="blog-details-content__desc mb-24">Lorem ipsum dolor sit amet consectetur. Ipsum vitae tincidunt adipiscing sed tellus nulla sit ultrices. Arcu maecenas quam iaculis ullamcorper id posuere. Leo congue nulla quam pharetra. Pellentesque morbi dictumst congue risus luctus.</p>


                <ul className="product-list mb-40">
                  <li className="product-list__item font-18 fw-500 text-heading">Morbi dictumst congue risus luctus</li>
                  <li className="product-list__item font-18 fw-500 text-heading">Porttitor nibh est vulputate vitae sem vitae.</li>
                  <li className="product-list__item font-18 fw-500 text-heading">Amet tellus nisl risus lorem vulputate velit eget.</li>
                  <li className="product-list__item font-18 fw-500 text-heading">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </ul>

                {/* Quote Text Start */}
                <div className="quote-text mb-40">
                  <img src="/assets/images/icons/quote-icon.svg" alt="" className="quote-text__icon" />
                  <p className="quote-text__desc mb-3 font-20 fw-500 text-heading">“Through their vision, determination, and exacting standards, the winning young developers inspire not only their peers in the Apple developer.</p>
                  <h6 className="quote-text__name">Esabela Marun</h6>
                </div>
                {/* Quote Text Ebd */}

                <h5 className="blog-details-content__title mb-3">Once you hire them, give them access for all tools & resources for success</h5>
                <p className="blog-details-content__desc mb-40">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut suspendisse convallis enim tincidunt nunc condimentum facilisi accumsan tempor donec.</p>


                {/* Post Tag & Share Start */}
                <div className="flx-between gap-2 mb-40 mt-40">
                  <div className="post-tag flx-align gap-3">
                    <span className="post-tag__text text-heading fw-500">Post Tag: </span>
                    <ul className="post-tag__list flx-align gap-2">
                      <li className="post-tag__item">
                        <a href="/#" className="post-tag__link font-14 text-heading pill fw-500">Business</a>
                      </li>
                      <li className="post-tag__item">
                        <a href="/#" className="post-tag__link font-14 text-heading pill fw-500">Marketing</a>
                      </li>
                      <li className="post-tag__item">
                        <a href="/#" className="post-tag__link font-14 text-heading pill fw-500">Strategy</a>
                      </li>
                    </ul>
                  </div>
                  <div className="socail-share flx-align gap-3">
                    <span className="socail-share__text text-heading fw-500">Share On: </span>
                    <ul className="social-icon-list colorful-style">
                      <li className="social-icon-list__item">
                        <a href="https://www.facebook.com/" className="social-icon-list__link text-heading font-16 flex-center"><i className="fab fa-facebook-f"></i></a>
                      </li>
                      <li className="social-icon-list__item">
                        <a href="https://www.twitter.com/" className="social-icon-list__link text-heading font-16 flex-center"> <i className="fab fa-linkedin-in"></i></a>
                      </li>
                      <li className="social-icon-list__item">
                        <a href="https://www.google.com/" className="social-icon-list__link text-heading font-16 flex-center"> <i className="fab fa-twitter"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* Post Tag & Share End */}

                {/* Advisor content Start */}
                <div className="advisor p-3 p-lg-4 mt-40 mb-64 section-bg d-flex flex-sm-row flex-column align-items-start gap-md-4 gap-3">
                  <div className="advisor__thumb flex-shrink-0">
                    <img src="/assets/images/thumbs/advisor-img.png" alt="" />
                  </div>
                  <div className="advisor__content flex-grow-1">
                    <h6 className="advisor__name font-18 mb-2">Brooklyn Simmons</h6>
                    <span className="advisor__designation text-heading mb-3 fw-500">Chief Advisor </span>
                    <p className="advisor__desc">Lorem ipsum dolor sit amet consectetur. Nec nunc pellentesque massa pretium. Quam sapien nec venenatis vivamus sed cras faucibus.</p>
                  </div>
                </div>
                {/* Advisor content End */}

                {/* Comment Form Start */}
                <div className="comment-form mt-64 mb-64" id="comment-box">
                  <h5 className="mb-32">Post a comment</h5>
                  <form action="#">
                    <div className="row gy-4">
                      <div className="col-sm-6 col-xs-6">
                        <label htmlFor="name" className="form-label mb-2 font-18 font-heading fw-600">Full Name</label>
                        <input type="text" className="common-input common-input--grayBg border" id="name" placeholder="Your name here" />
                      </div>
                      <div className="col-sm-6 col-xs-6">
                        <label htmlFor="email" className="form-label mb-2 font-18 font-heading fw-600">Your Mail</label>
                        <input type="email" className="common-input common-input--grayBg border" id="email" placeholder="Your email here " />
                      </div>
                      <div className="col-sm-12">
                        <label htmlFor="comment" className="form-label mb-2 font-18 font-heading fw-600">Your Comment</label>
                        <textarea className="common-input common-input--grayBg border" id="comment" placeholder="Type your comment"></textarea>
                      </div>
                      <div className="col-sm-12">
                        <div className="common-check">
                          <input className="form-check-input" type="checkbox" name="checkbox" id="agree" />
                          <label className="form-check-label mb-0 fw-400 font-16 text-body" htmlFor="agree">Save my details for future purchase</label>
                        </div>
                      </div>
                      <div className="col-sm-12">
                        <button className="btn btn-main btn-lg pill"> Submit
                          <span className="icon icon-right line-height-1 font-20"><i className="las la-arrow-right"></i></span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                {/* Comment Form End */}

                {/* Comment Start */}
                <div className="comment mt-64 mb-64">
                  <h5 className="mb-32">2 Comments</h5>
                  <ul className="comment-list">
                    <li className="comment-list__item d-flex align-items-start gap-sm-4 gap-3">
                      <div className="comment-list__thumb flex-shrink-0">
                        <img src="/assets/images/thumbs/comment1.png" className="cover-img" alt="" />
                      </div>
                      <div className="comment-list__content">
                        <div className="flx-between gap-2 align-items-start">
                          <div>
                            <h6 className="comment-list__name font-18 mb-sm-2 mb-1">Jenny Wilson</h6>
                            <span className="comment-list__date font-14">Jan 21, 2024 at 11:25 pm</span>
                          </div>
                          <a className="comment-list__reply fw-500 flx-align gap-2 hover-text-decoration-underline" href="#comment-box">
                            Reply
                            <span className="icon"><img src="/assets/images/icons/reply-icon.svg" alt="" /></span>
                          </a>
                        </div>
                        <p className="comment-list__desc mt-3">Lorem ipsum dolor sit amet consectetur. Nec nunc pellentesque massa pretium. Quam sapien nec venenatis vivamus sed cras faucibus mi viverra. Quam faucibus morbi cras vitae neque. Necnunc pellentesque massa pretium.</p>
                      </div>
                    </li>
                    <li>
                      <ul className="comment-list comment-list--two">
                        <li className="comment-list__item d-flex align-items-start gap-sm-4 gap-3">
                          <div className="comment-list__thumb flex-shrink-0">
                            <img src="/assets/images/thumbs/comment2.png" className="cover-img" alt="" />
                          </div>
                          <div className="comment-list__content">
                            <div className="flx-between gap-2 align-items-start">
                              <div>
                                <h6 className="comment-list__name font-18 mb-sm-2 mb-1">Courtney Henry</h6>
                                <span className="comment-list__date font-14">Jan 21, 2024 at 11:25 pm</span>
                              </div>
                              <a className="comment-list__reply fw-500 flx-align gap-2 hover-text-decoration-underline" href="#comment-box">
                                Reply
                                <span className="icon"><img src="/assets/images/icons/reply-icon.svg" alt="" /></span>
                              </a>
                            </div>
                            <p className="comment-list__desc mt-3">Lorem ipsum dolor sit amet consectetur. Nec nunc pellentesque massa pretium. Quam sapien nec venenatis vivamus sed cras faucibus.</p>
                          </div>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                {/* Comment End */}

              </div>
              {/* blog details content End*/}
            </div>
            <div className="col-lg-4">
              {/* blog Sidebar Start */}
              <div className="common-sidebar-wrapper">
                <div className="common-sidebar p-0">
                  <form action="#">
                    <div className="search-box w-100">
                      <input type="text" className="common-input border-0" placeholder="Type here..." />
                      <button type="submit" className="icon line-height-1 rounded-icon white-version">
                        <img src="/assets/images/icons/search-dark.svg" alt="" />
                      </button>
                      <button type="submit" className="icon line-height-1 rounded-icon dark-version">
                        <img src="/assets/images/icons/search-dark-white.svg" alt="" />
                      </button>
                    </div>
                  </form>
                </div>

                <div className="common-sidebar">
                  <h6 className="common-sidebar__title">Recent News</h6>
                  <div className="latest-blog">
                    <div className="latest-blog__thumb">
                      <a href="/#"> <img src="/assets/images/thumbs/latest-blog1.png" className="cover-img" alt="" /></a>
                    </div>
                    <div className="latest-blog__content">
                      <span className="latest-blog__date font-14 mb-2">January 15, 2024</span>
                      <h6 className="latest-blog__title fw-500 font-body font-16">
                        <a href="/#">There are many variations of business consulting.</a>
                      </h6>
                    </div>
                  </div>
                  <div className="latest-blog">
                    <div className="latest-blog__thumb">
                      <a href="/#"> <img src="/assets/images/thumbs/latest-blog2.png" className="cover-img" alt="" /></a>
                    </div>
                    <div className="latest-blog__content">
                      <span className="latest-blog__date font-14 mb-2">January 15, 2024</span>
                      <h6 className="latest-blog__title fw-500 font-body font-16">
                        <a href="/#">Maecenas malesuada mauris libero, ultricies vehicula.</a>
                      </h6>
                    </div>
                  </div>
                  <div className="latest-blog">
                    <div className="latest-blog__thumb">
                      <a href="/#"> <img src="/assets/images/thumbs/latest-blog3.png" className="cover-img" alt="" /></a>
                    </div>
                    <div className="latest-blog__content">
                      <span className="latest-blog__date font-14 mb-2">January 15, 2024</span>
                      <h6 className="latest-blog__title fw-500 font-body font-16">
                        <a href="/#">Phasellus sollicitudin massa aliquet ultricies condimentum.</a>
                      </h6>
                    </div>
                  </div>
                </div>

                <div className="common-sidebar">
                  <h6 className="common-sidebar__title"> Categories </h6>
                  <ul className="category-list">
                    <li className="category-list__item">
                      <a href="/#" className="category-list__link flx-align flex-nowrap gap-2 text-body hover-text-main">
                        <span className="icon font-12"> <i className="fas fa-chevron-right"></i></span>
                        <span className="text">WordPress (12)</span>
                      </a>
                    </li>
                    <li className="category-list__item">
                      <a href="/#" className="category-list__link flx-align flex-nowrap gap-2 text-body hover-text-main">
                        <span className="icon font-12"> <i className="fas fa-chevron-right"></i></span>
                        <span className="text">App & Saas (6)</span>
                      </a>
                    </li>
                    <li className="category-list__item">
                      <a href="/#" className="category-list__link flx-align flex-nowrap gap-2 text-body hover-text-main">
                        <span className="icon font-12"> <i className="fas fa-chevron-right"></i></span>
                        <span className="text">Web Development (6)</span>
                      </a>
                    </li>
                    <li className="category-list__item">
                      <a href="/#" className="category-list__link flx-align flex-nowrap gap-2 text-body hover-text-main">
                        <span className="icon font-12"> <i className="fas fa-chevron-right"></i></span>
                        <span className="text">Graphics (6)</span>
                      </a>
                    </li>
                    <li className="category-list__item">
                      <a href="/#" className="category-list__link flx-align flex-nowrap gap-2 text-body hover-text-main">
                        <span className="icon font-12"> <i className="fas fa-chevron-right"></i></span>
                        <span className="text">IOS/Android Design (6)</span>
                      </a>
                    </li>
                    <li className="category-list__item">
                      <a href="/#" className="category-list__link flx-align flex-nowrap gap-2 text-body hover-text-main">
                        <span className="icon font-12"> <i className="fas fa-chevron-right"></i></span>
                        <span className="text">Web Design (6)</span>
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="common-sidebar">
                  <h6 className="common-sidebar__title"> Popular Tags </h6>
                  <ul className="tag-list flx-align gap-2">
                    <li className="tag-list__item">
                      <a href="/#" className="tag-list__link pill px-3 py-2 font-14 fw-500">Digital</a>
                    </li>
                    <li className="tag-list__item">
                      <a href="/#" className="tag-list__link pill px-3 py-2 font-14 fw-500">Template</a>
                    </li>
                    <li className="tag-list__item">
                      <a href="/#" className="tag-list__link pill px-3 py-2 font-14 fw-500">Web Design</a>
                    </li>
                    <li className="tag-list__item">
                      <a href="/#" className="tag-list__link pill px-3 py-2 font-14 fw-500">SaaS</a>
                    </li>
                    <li className="tag-list__item">
                      <a href="/#" className="tag-list__link pill px-3 py-2 font-14 fw-500">Products</a>
                    </li>
                    <li className="tag-list__item">
                      <a href="/#" className="tag-list__link pill px-3 py-2 font-14 fw-500">App</a>
                    </li>
                    <li className="tag-list__item">
                      <a href="/#" className="tag-list__link pill px-3 py-2 font-14 fw-500">Development</a>
                    </li>
                    <li className="tag-list__item">
                      <a href="/#" className="tag-list__link pill px-3 py-2 font-14 fw-500">UI/UX</a>
                    </li>
                    <li className="tag-list__item">
                      <a href="/#" className="tag-list__link pill px-3 py-2 font-14 fw-500">Marketing</a>
                    </li>
                    <li className="tag-list__item">
                      <a href="/#" className="tag-list__link pill px-3 py-2 font-14 fw-500">HTML</a>
                    </li>
                    <li className="tag-list__item">
                      <a href="/#" className="tag-list__link pill px-3 py-2 font-14 fw-500">Web App</a>
                    </li>
                    <li className="tag-list__item">
                      <a href="/#" className="tag-list__link pill px-3 py-2 font-14 fw-500">Design</a>
                    </li>
                  </ul>
                </div>

              </div>
              {/* blog Sidebar End*/}
            </div>
          </div>
        </div>
      </section>
      {/* Blog Details Section End */}

      {/* Article Section Start */}
      <section className="article padding-y-120 section-bg">
        <div className="container container-two">
          <div className="section-heading style-left style-flex flx-between align-items-end gap-3">
            <div className="section-heading__inner">
              <h3 className="section-heading__title">Browse all latest blogs and articles</h3>
            </div>
            <a href="/#" className="btn btn-outline-light btn-lg pill">Browse All Articles</a>
          </div>
          <div className="article-item-wrapper">
            <div className="article-item">
              <div className="article-item__inner d-flex position-relative">
                <div className="article-item__start">
                  <div className="user-info">
                    <div className="user-info__thumb">
                      <img src="/assets/images/thumbs/user-info-img1.png" alt="" />
                    </div>
                    <span className="user-info__text mt-2 mb-1 font-14 text-heading">Posted by</span>
                    <h6 className="user-info__name font-16 font-body fw-600 mb-0">
                      Ralph Edwards
                    </h6>
                  </div>
                </div>
                <div className="article-item__center d-flex align-items-center">
                  <div className="article-item__content">
                    <div className="article-item__top flx-align">
                      <a href="/#" className="article-item__tag font-14">Startup</a>
                      <a href="/#" className="article-item__tag font-14">Marketing</a>
                      <span className="text-heading font-16 fw-500">June 24, 2024</span>
                    </div>
                    <h4 className="article-item__title mb-3">
                      <a href="/#" className="link"> Data-Driven Insights Unlock The Hidden Potential</a>
                    </h4>
                    <p className="article-item__desc">Etiam id euismod odio. Ut euismod sem a lacus ringill a hendrerit. facilisi orbi a arcu turpis...</p>
                  </div>

                  <div className="article-item__thumb">
                    <img src="/assets/images/thumbs/blog1.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="article-item__end flex-shrink-0">
                <a href="/#" className="btn-simple">Read More <span className="icon font-26"><i className="las la-arrow-right"></i></span> </a>
              </div>
            </div>
            <div className="article-item">
              <div className="article-item__inner d-flex position-relative">
                <div className="article-item__start">
                  <div className="user-info">
                    <div className="user-info__thumb">
                      <img src="/assets/images/thumbs/user-info-img2.png" alt="" />
                    </div>
                    <span className="user-info__text mt-2 mb-1 font-14 text-heading">Posted by</span>
                    <h6 className="user-info__name font-16 font-body fw-600 mb-0">
                      Jacob Jones
                    </h6>
                  </div>
                </div>
                <div className="article-item__center d-flex align-items-center">
                  <div className="article-item__content">
                    <div className="article-item__top flx-align">
                      <a href="/#" className="article-item__tag font-14">Startup</a>
                      <a href="/#" className="article-item__tag font-14">Marketing</a>
                      <span className="text-heading font-16 fw-500">June 24, 2024</span>
                    </div>
                    <h4 className="article-item__title mb-3">
                      <a href="/#" className="link">we offer best training for individuals and teams</a>
                    </h4>
                    <p className="article-item__desc">Etiam id euismod odio. Ut euismod sem a lacus ringill a hendrerit. facilisi orbi a arcu turpis...</p>
                  </div>

                  <div className="article-item__thumb">
                    <img src="/assets/images/thumbs/blog2.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="article-item__end flex-shrink-0">
                <a href="/#" className="btn-simple">Read More <span className="icon font-26"><i className="las la-arrow-right"></i></span> </a>
              </div>
            </div>
            <div className="article-item">
              <div className="article-item__inner d-flex position-relative">
                <div className="article-item__start">
                  <div className="user-info">
                    <div className="user-info__thumb">
                      <img src="/assets/images/thumbs/user-info-img1.png" alt="" />
                    </div>
                    <span className="user-info__text mt-2 mb-1 font-14 text-heading">Posted by</span>
                    <h6 className="user-info__name font-16 font-body fw-600 mb-0">
                      Jenny Wilson
                    </h6>
                  </div>
                </div>
                <div className="article-item__center d-flex align-items-center">
                  <div className="article-item__content">
                    <div className="article-item__top flx-align">
                      <a href="/#" className="article-item__tag font-14">Startup</a>
                      <a href="/#" className="article-item__tag font-14">Marketing</a>
                      <span className="text-heading font-16 fw-500">June 24, 2024</span>
                    </div>
                    <h4 className="article-item__title mb-3">
                      <a href="/#" className="link">The analytics feature is like having a personal fortune.</a>
                    </h4>
                    <p className="article-item__desc">Etiam id euismod odio. Ut euismod sem a lacus ringill a hendrerit. facilisi orbi a arcu turpis...</p>
                  </div>

                  <div className="article-item__thumb">
                    <img src="/assets/images/thumbs/blog3.png" alt="" />
                  </div>
                </div>
              </div>
              <div className="article-item__end flex-shrink-0">
                <a href="/#" className="btn-simple">Read More <span className="icon font-26"><i className="las la-arrow-right"></i></span> </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Article Section ENd */}

      {/* Brand Section Start */}
      <div className="brand ">
        <div className="container container">
          <div className="brand-slider">
            <div className="brand-item d-flex align-items-center justify-content-center">
              <img src="/assets/images/thumbs/brand-img1.png" alt="" className="white-version" />
              <img src="/assets/images/thumbs/brand-white-img1.png" alt="" className="dark-version" />
            </div>
            <div className="brand-item d-flex align-items-center justify-content-center">
              <img src="/assets/images/thumbs/brand-img2.png" alt="" className="white-version" />
              <img src="/assets/images/thumbs/brand-white-img2.png" alt="" className="dark-version" />
            </div>
            <div className="brand-item d-flex align-items-center justify-content-center">
              <img src="/assets/images/thumbs/brand-img3.png" alt="" className="white-version" />
              <img src="/assets/images/thumbs/brand-white-img3.png" alt="" className="dark-version" />
            </div>
            <div className="brand-item d-flex align-items-center justify-content-center">
              <img src="/assets/images/thumbs/brand-img4.png" alt="" className="white-version" />
              <img src="/assets/images/thumbs/brand-white-img4.png" alt="" className="dark-version" />
            </div>
            <div className="brand-item d-flex align-items-center justify-content-center">
              <img src="/assets/images/thumbs/brand-img5.png" alt="" className="white-version" />
              <img src="/assets/images/thumbs/brand-white-img5.png" alt="" className="dark-version" />
            </div>
            <div className="brand-item d-flex align-items-center justify-content-center">
              <img src="/assets/images/thumbs/brand-img3.png" alt="" className="white-version" />
              <img src="/assets/images/thumbs/brand-white-img3.png" alt="" className="dark-version" />
            </div>
          </div>
        </div>
      </div>
      {/* Brand Section End */}

      {/* Footer Start Here */}
      <footer className="footer-section section-bg">
        <img src="/assets/images/shapes/pattern.png" alt="" className="bg-pattern" />
        <img src="/assets/images/shapes/element1.png" alt="" className="element one" />
        <img src="/assets/images/shapes/element2.png" alt="" className="element two" />
        <img src="/assets/images/gradients/footer-gradient.png" alt="" className="bg--gradient" />

        <div className="container container-two">
          <div className="row gy-5">
            <div className="col-xl-3 col-sm-6">
              <div className="footer-widget">
                <div className="footer-widget__logo">
                  <a href="/#"> <img src="/assets/images/logo/white-logo.png" alt="" /></a>
                </div>
                <p className="footer-widget__desc">Lorem consultancy elitsed do eiusmod tempor inci didunt ut labore dolore magna aliqua sed do eiusmod.</p>
                <div className="footer-widget__social">
                  <ul className="social-icon-list">
                    <li className="social-icon-list__item">
                      <a href="https://www.facebook.com/" className="social-icon-list__link flx-center"><i className="fab fa-facebook-f"></i></a>
                    </li>
                    <li className="social-icon-list__item">
                      <a href="https://www.twitter.com/" className="social-icon-list__link flx-center"> <i className="fab fa-twitter"></i></a>
                    </li>
                    <li className="social-icon-list__item">
                      <a href="https://www.linkedin.com/" className="social-icon-list__link flx-center"> <i className="fab fa-linkedin-in"></i></a>
                    </li>
                    <li className="social-icon-list__item">
                      <a href="https://www.pinterest.com/" className="social-icon-list__link flx-center"> <i className="fab fa-pinterest-p"></i></a>
                    </li>
                    <li className="social-icon-list__item">
                      <a href="https://www.youtube.com/" className="social-icon-list__link flx-center"> <i className="fab fa-youtube"></i></a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-sm-6 col-xs-6">
              <div className="footer-widget">
                <h5 className="footer-widget__title text-white">Useful Link</h5>
                <ul className="footer-lists">
                  <li className="footer-lists__item"><a href="/#" className="footer-lists__link">Product </a></li>
                  <li className="footer-lists__item"><a href="/#" className="footer-lists__link">Product Details</a></li>
                  <li className="footer-lists__item"><a href="/#" className="footer-lists__link">Profile </a></li>
                  <li className="footer-lists__item"><a href="/#" className="footer-lists__link">Shopping Cart</a></li>
                  <li className="footer-lists__item"><a href="/#" className="footer-lists__link">Dashboard</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-sm-6 col-xs-6 ps-xl-5">
              <div className="footer-widget">
                <h5 className="footer-widget__title text-white">Quick Links</h5>
                <ul className="footer-lists">
                  <li className="footer-lists__item"><a href="/#" className="footer-lists__link">Dashboard </a></li>
                  <li className="footer-lists__item"><a href="/#" className="footer-lists__link">Login </a></li>
                  <li className="footer-lists__item"><a href="/#" className="footer-lists__link">Register</a></li>
                  <li className="footer-lists__item"><a href="/#" className="footer-lists__link">Blog </a></li>
                  <li className="footer-lists__item"><a href="/#" className="footer-lists__link">Blog Details</a></li>
                </ul>
              </div>
            </div>
            <div className="col-xl-4 col-sm-6">
              <div className="footer-widget">
                <h5 className="footer-widget__title text-white">Subscribe</h5>
                <p className="footer-widget__desc">Subscribe our newsletter to get updated the latest news</p>
                <form action="#" className="mt-4 subscribe-box d-flex align-items-center flex-column gap-2">
                  <input type="text" className="form-control common-input pill text-white" placeholder="Enter Mail" />
                  <button type="submit" className="btn btn-main btn-lg w-100 pill">Subscribe Now</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* bottom Footer */}
      <div className="bottom-footer">
        <div className="container container-two">
          <div className="bottom-footer__inner flx-between gap-3">
            <p className="bottom-footer__text font-14"> Copyright &copy; 2024 DPmarket, All rights reserved.</p>
            <div className="footer-links">
              <a href="/#" className="footer-link font-14">Terms of service</a>
              <a href="/#" className="footer-link font-14">Privacy Policy</a>
              <a href="/#" className="footer-link font-14">cookies</a>
            </div>
          </div>
        </div>
      </div>
      {/* Footer End Here */}
    </>
  );
};

export default BlogDetailsSidebarPage;