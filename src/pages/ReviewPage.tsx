import React from 'react';
import { Link } from 'react-router-dom';

const ReviewPage: React.FC = () => {
  // Mock data for reviews. In a real application, this data would typically
  // be fetched from an API or a global state management solution.
  const reviews = [
    {
      id: 1,
      productName: 'CityScape - Real Estate',
      productLink: '/product-details/cityscape', // Placeholder, replace with actual product ID/slug
      productImage: '/images/thumbs/rejected1.png',
      date: '2024-03-13  04:50 pm',
      userName: 'WowTheme7',
      userComment: 'Lorem ipsum dolor sit.',
      rating: 5, // All examples in HTML are 5 stars. If dynamic, adjust rendering.
    },
    {
      id: 2,
      productName: 'FixTurbo - Car Repair',
      productLink: '/product-details/fixturbo',
      productImage: '/images/thumbs/rejected2.png',
      date: '2024-02-10  04:50 pm',
      userName: 'WowTheme7',
      userComment: 'Lorem ipsum dolor sit.',
      rating: 5,
    },
    {
      id: 3,
      productName: 'CityScape - Real Estate',
      productLink: '/product-details/cityscape',
      productImage: '/images/thumbs/rejected1.png',
      date: '2024-03-13  04:50 pm',
      userName: 'WowTheme7',
      userComment: 'Lorem ipsum dolor sit.',
      rating: 5,
    },
    {
      id: 4,
      productName: 'FixTurbo - Car Repair',
      productLink: '/product-details/fixturbo',
      productImage: '/images/thumbs/rejected2.png',
      date: '2024-02-10  04:50 pm',
      userName: 'WowTheme7',
      userComment: 'Lorem ipsum dolor sit.',
      rating: 5,
    },
    {
      id: 5,
      productName: 'CityScape - Real Estate',
      productLink: '/product-details/cityscape',
      productImage: '/images/thumbs/rejected1.png',
      date: '2024-03-13  04:50 pm',
      userName: 'WowTheme7',
      userComment: 'Lorem ipsum dolor sit.',
      rating: 5,
    },
    {
      id: 6,
      productName: 'FixTurbo - Car Repair',
      productLink: '/product-details/fixturbo',
      productImage: '/images/thumbs/rejected2.png',
      date: '2024-02-10  04:50 pm',
      userName: 'WowTheme7',
      userComment: 'Lorem ipsum dolor sit.',
      rating: 5,
    },
  ];

  // Helper to render star icons based on the HTML structure
  const renderStaticStars = () => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <li key={i} className="star-rating__item font-16">
          <i className="fas fa-star"></i>
        </li>
      );
    }
    return stars;
  };

  return (
    // This div corresponds to .dashboard-body__content in the original HTML
    // Assuming DashboardSidebar, DashboardNav, and DashboardFooter are handled by a parent layout component.
    <div className="dashboard-body__content">
      {/* ===================== Review Section Start ========================== */}
      <div className="card common-card border border-gray-five">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table text-body mt--24">
              <thead>
                <tr>
                  <th>Product | Date</th>
                  <th>User</th>
                  <th>Rating</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {reviews.map((review) => (
                  <tr key={review.id}>
                    <td>
                      <div className="review-product d-flex align-items-center gap-2">
                        <div className="review-product__thumb flex-shrink-0">
                          <img src={review.productImage} alt={review.productName} />
                        </div>
                        <div className="review-product__content">
                          <h6 className="review-product__name font-15 fw-500 mb-0">
                            <Link to={review.productLink} className="link">
                              {review.productName}
                            </Link>
                          </h6>
                          <span className="review-product__date font-12">{review.date}</span>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="product-user font-12">
                        <strong className="fw-600 text-heading d-block">{review.userName}</strong>
                        <span>{review.userComment}</span>
                      </div>
                    </td>
                    <td>
                      <ul className="star-rating justify-content-center">
                        {renderStaticStars()} {/* Renders 5 solid stars as per original HTML */}
                      </ul>
                    </td>
                    <td>
                      <Link to="#" className="btn btn-main">
                        <i className="fa fa-reply"></i>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flx-between gap-2">
              <div className="paginate-content flx-align flex-nowrap gap-3">
                <select className="select common-input py-2 px-3 w-auto">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
                </select>
                <span className="paginate-content__text fs-14">Showing 1 - 10 of 100</span>
              </div>
              <nav aria-label="Page navigation example">
                <ul className="pagination common-pagination mt-0">
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      1
                    </Link>
                  </li>
                  <li className="page-item active">
                    <Link className="page-link" to="#">
                      2
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      3
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link" to="#">
                      4
                    </Link>
                  </li>
                  <li className="page-item">
                    <Link className="page-link flx-align gap-2 flex-nowrap" to="#">
                      Next
                      <span className="icon line-height-1 font-20">
                        <i className="las la-arrow-right"></i>
                      </span>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* ===================== Review Section End ========================== */}
    </div>
  );
};

export default ReviewPage;