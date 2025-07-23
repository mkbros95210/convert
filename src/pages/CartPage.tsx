import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Assuming react-router-dom is used for navigation

// Define the type for a cart item
interface CartItem {
  id: number;
  name: string;
  category: string;
  image: string;
  price: number;
  quantity: number;
  isWishlisted: boolean; // Add a property for wishlist state
}

// Mock initial cart data
const initialCartItems: CartItem[] = [
  {
    id: 1,
    name: "Digital product name here",
    category: "WordPress",
    image: "/assets/images/thumbs/product-img2.png",
    price: 28.00,
    quantity: 2,
    isWishlisted: false,
  },
  {
    id: 2,
    name: "Digital product name here",
    category: "WordPress",
    image: "/assets/images/thumbs/product-img3.png",
    price: 28.00,
    quantity: 2,
    isWishlisted: true,
  },
  {
    id: 3,
    name: "Digital product name here",
    category: "WordPress",
    image: "/assets/images/thumbs/product-img4.png",
    price: 28.00,
    quantity: 3,
    isWishlisted: false,
  },
];

const CartPage: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCartItems);

  const handleQuantityChange = (id: number, newQuantity: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, Math.min(100, newQuantity)) } : item
      )
    );
  };

  const handleDecreaseQuantity = (id: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
      )
    );
  };

  const handleIncreaseQuantity = (id: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, quantity: Math.min(100, item.quantity + 1) } : item
      )
    );
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const handleToggleWishlist = (id: number) => {
    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, isWishlisted: !item.isWishlisted } : item
      )
    );
  };

  const calculateItemTotal = (item: CartItem) => {
    return (item.price * item.quantity).toFixed(2);
  };

  return (
    <>
      {/* ======================== Breadcrumb Four Section Start ===================== */}
      <section className="breadcrumb breadcrumb-four padding-static-y-60 section-bg position-relative z-index-1 overflow-hidden">
        <img src="/assets/images/gradients/breadcrumb-gradient-bg.png" alt="" className="bg--gradient" />
        <img src="/assets/images/shapes/element-moon3.png" alt="" className="element one" />
        <img src="/assets/images/shapes/element-moon1.png" alt="" className="element three" />

        <div className="container container-two">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="breadcrumb-four-content">
                <h3 className="breadcrumb-four-content__title text-center mb-3 text-capitalize">Shopping Cart</h3>
                <ul className="breadcrumb-list flx-align justify-content-center gap-2 mb-2">
                  <li className="breadcrumb-list__item font-14 text-body">
                    <Link to="/" className="breadcrumb-list__link text-body hover-text-main">Home</Link>
                  </li>
                  <li className="breadcrumb-list__item font-14 text-body">
                    <span className="breadcrumb-list__icon font-10"><i className="fas fa-chevron-right"></i></span>
                  </li>
                  <li className="breadcrumb-list__item font-14 text-body">
                    <span className="breadcrumb-list__text">My Shopping Cart</span>
                  </li>
                </ul>

                <ul className="process-list">
                  <li className="process-list__item activePage">
                    <Link to="/cart" className="process-list__link">
                      <div className="icons">
                        <span className="icon white"><img src="/assets/images/icons/process-white1.svg" alt="" /></span>
                      </div>
                      <span className="text">Shopping Cart</span>
                    </Link>
                  </li>
                  <li className="process-list__item ">
                    <Link to="/cart-personal" className="process-list__link">
                      <div className="icons">
                        <span className="icon white"><img src="/assets/images/icons/process-white2.svg" alt="" /></span>
                        <span className="icon colored"><img src="/assets/images/icons/process2.svg" alt="" /></span>
                      </div>
                      <span className="text">Mailing Address</span>
                    </Link>
                  </li>
                  <li className="process-list__item ">
                    <Link to="/cart-payment" className="process-list__link">
                      <div className="icons">
                        <span className="icon white"><img src="/assets/images/icons/process-white3.svg" alt="" /></span>
                        <span className="icon colored"><img src="/assets/images/icons/process3.svg" alt="" /></span>
                      </div>
                      <span className="text">Payment Methods</span>
                    </Link>
                  </li>
                  <li className="process-list__item">
                    <Link to="/cart-thank-you" className="process-list__link">
                      <div className="icons">
                        <span className="icon white"><img src="/assets/images/icons/process-white4.svg" alt="" /></span>
                        <span className="icon colored"><img src="/assets/images/icons/process4.svg" alt="" /></span>
                      </div>
                      <span className="text">Preview Order</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ======================== Breadcrumb Four Section End ===================== */}

      {/* ======================= Cart Section Start ======================== */}
      <div className="cart padding-y-120">
        <div className="container">
          <div className="cart-content">
            <div className="table-responsive">
              <table className="table style-two">
                <thead>
                  <tr>
                    <th>Product Details</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(item => (
                    <tr key={item.id}>
                      <td>
                        <div className="cart-item">
                          <div className="d-flex align-items-center gap-3">
                            <div className="cart-item__thumb">
                              <Link to="/product-details" className="link">
                                <img src={item.image} alt={item.name} className="cover-img" />
                              </Link>
                            </div>
                            <div className="cart-item__content">
                              <h6 className="cart-item__title font-heading fw-700 text-capitalize font-18 mb-4">
                                <Link to="/product-details" className="link">{item.name}</Link>
                              </h6>
                              <span className="cart-item__price font-18 text-heading fw-500">
                                Category: <span className="text-body font-14">{item.category}</span>
                              </span>
                            </div>
                          </div>
                          <div className="flx-align gap-4 mt-3 mt-lg-4">
                            <div className="flx-align gap-2">
                              <button
                                type="button"
                                className={`product-item__wishlist style-two ${item.isWishlisted ? 'active' : ''}`}
                                onClick={() => handleToggleWishlist(item.id)}
                              >
                                <i className="fas fa-heart"></i>
                              </button>
                              <span className="text-body">Add to wishlist</span>
                            </div>
                            <button
                              type="button"
                              className="rounded-btn delete-btn text-danger hover-text-decoration-underline"
                              onClick={() => handleRemoveItem(item.id)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </td>
                      <td>
                        <div className="cart-item__count">
                          <button type="button" onClick={() => handleDecreaseQuantity(item.id)}>
                            <i className="fas fa-minus"></i>
                          </button>
                          <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                          />
                          <button type="button" onClick={() => handleIncreaseQuantity(item.id)}>
                            <i className="fas fa-plus"></i>
                          </button>
                        </div>
                      </td>
                      <td>
                        <span className="cart-item__totalPrice text-body font-18 fw-400 mb-0">${item.price.toFixed(2)}</span>
                      </td>
                      <td>
                        <span className="cart-item__totalPrice text-body font-18 fw-400 mb-0">${calculateItemTotal(item)}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="cart-content__bottom flx-between gap-2">
              <Link to="/all-product" className="btn btn-outline-light flx-align gap-2 pill btn-lg">
                <span className="icon line-height-1 font-20"><i className="las la-arrow-left"></i></span>
                Continue Shopping
              </Link>
              <Link to="/cart-personal" className="btn btn-main flx-align gap-2 pill btn-lg">
                Next
                <span className="icon line-height-1 font-20"><i className="las la-arrow-right"></i></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* ======================= Cart Section End ======================== */}

      {/* ======================== Brand Section Start ========================= */}
      <div className="brand">
        <div className="container container">
          <div className="brand-slider">
            {/* These would typically be mapped from data in a real app or use a React slick equivalent */}
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
      {/* ======================== Brand Section End ========================= */}
    </>
  );
};

export default CartPage;