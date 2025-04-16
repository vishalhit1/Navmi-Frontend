import { useEffect, useState } from "react";
import { Col } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
const Sidebar = ({ toggleSidebars }) => {
  const location = useLocation().pathname;
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    toggleSidebars(isOpen);
  }, [isOpen, toggleSidebars]);

  return (
    <>
      <Col lg={3} className="leftsidebar">

        <>
          <button id="menu-btn" onClick={toggleSidebar}>
            {isOpen ? (
              <span>
                <i className="fa fa-window-close" aria-hidden="true" />&nbsp; Close
              </span>
            ) : (
              <span>
                <i className="fa fa-bars" aria-hidden="true" />&nbsp; Open 
              </span>
            )}
            Sidebar
          </button>

          {/* Sidebar */}
          <div className={`sidebars ${isOpen ? 'open' : ''}`}>
            <ul>
              <Link to="/loan-offers">
                <li className={`${location === "/loan-offers" ? "active_url" : ""
                  }`}>
                  <svg
                    width={29}
                    height={24}
                    viewBox="0 0 29 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.93272 10.3533C3.88609 10.3533 1.16016 8.24552 1.16016 5.61078C1.16016 2.97605 3.88609 1 6.93272 1C9.97935 1 12.5449 3.10779 12.5449 5.61078C12.5449 8.24552 9.97935 10.3533 6.93272 10.3533Z"
                      stroke="#DA3731"
                      strokeWidth="1.3"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.4985 23.0004H4.20698C2.60349 23.0004 1 21.9465 1 20.6291V16.2818C1 14.8327 2.44314 13.7788 4.20698 13.7788H9.4985C11.102 13.7788 12.5451 14.8327 12.5451 16.2818V20.6291C12.5451 21.8147 11.102 23.0004 9.4985 23.0004Z"
                      stroke="#DA3731"
                      strokeWidth="1.3"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.0525 23H19.761C18.1575 23 16.7144 21.9461 16.7144 20.497V3.50299C16.7144 2.18563 17.9971 1 19.761 1H25.0525C26.656 1 28.0991 2.05389 28.0991 3.50299V20.497C28.0991 21.8144 26.656 23 25.0525 23Z"
                      stroke="#DA3731"
                      strokeWidth="1.3"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  Insta Loan Offers
                </li>
              </Link>
              <Link to="/credit-report">
                <li
                  className={`${location === "/credit-report" ? "active_url" : ""
                    }`}
                >
                  <svg
                    width={29}
                    height={24}
                    viewBox="0 0 29 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.93272 10.3533C3.88609 10.3533 1.16016 8.24552 1.16016 5.61078C1.16016 2.97605 3.88609 1 6.93272 1C9.97935 1 12.5449 3.10779 12.5449 5.61078C12.5449 8.24552 9.97935 10.3533 6.93272 10.3533Z"
                      stroke="#DA3731"
                      strokeWidth="1.3"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.4985 23.0004H4.20698C2.60349 23.0004 1 21.9465 1 20.6291V16.2818C1 14.8327 2.44314 13.7788 4.20698 13.7788H9.4985C11.102 13.7788 12.5451 14.8327 12.5451 16.2818V20.6291C12.5451 21.8147 11.102 23.0004 9.4985 23.0004Z"
                      stroke="#DA3731"
                      strokeWidth="1.3"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.0525 23H19.761C18.1575 23 16.7144 21.9461 16.7144 20.497V3.50299C16.7144 2.18563 17.9971 1 19.761 1H25.0525C26.656 1 28.0991 2.05389 28.0991 3.50299V20.497C28.0991 21.8144 26.656 23 25.0525 23Z"
                      stroke="#DA3731"
                      strokeWidth="1.3"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <img src="" alt="" />
                  Credit Report
                </li>
              </Link>
              <Link to="/user-profile">
                <li
                  className={`${location === "/user-profile" ? "active_url" : ""
                    }`}
                >
                  <svg
                    width={29}
                    height={24}
                    viewBox="0 0 29 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.93272 10.3533C3.88609 10.3533 1.16016 8.24552 1.16016 5.61078C1.16016 2.97605 3.88609 1 6.93272 1C9.97935 1 12.5449 3.10779 12.5449 5.61078C12.5449 8.24552 9.97935 10.3533 6.93272 10.3533Z"
                      stroke="#DA3731"
                      strokeWidth="1.3"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.4985 23.0004H4.20698C2.60349 23.0004 1 21.9465 1 20.6291V16.2818C1 14.8327 2.44314 13.7788 4.20698 13.7788H9.4985C11.102 13.7788 12.5451 14.8327 12.5451 16.2818V20.6291C12.5451 21.8147 11.102 23.0004 9.4985 23.0004Z"
                      stroke="#DA3731"
                      strokeWidth="1.3"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.0525 23H19.761C18.1575 23 16.7144 21.9461 16.7144 20.497V3.50299C16.7144 2.18563 17.9971 1 19.761 1H25.0525C26.656 1 28.0991 2.05389 28.0991 3.50299V20.497C28.0991 21.8144 26.656 23 25.0525 23Z"
                      stroke="#DA3731"
                      strokeWidth="1.3"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <img src="" alt="" />
                  Profile Details
                </li>
              </Link>
              <Link to="/user-support">
                <li
                  className={`${location === "/user-support" ? "active_url" : ""
                    }`}
                >
                  <svg
                    width={29}
                    height={24}
                    viewBox="0 0 29 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.93272 10.3533C3.88609 10.3533 1.16016 8.24552 1.16016 5.61078C1.16016 2.97605 3.88609 1 6.93272 1C9.97935 1 12.5449 3.10779 12.5449 5.61078C12.5449 8.24552 9.97935 10.3533 6.93272 10.3533Z"
                      stroke="#DA3731"
                      strokeWidth="1.3"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.4985 23.0004H4.20698C2.60349 23.0004 1 21.9465 1 20.6291V16.2818C1 14.8327 2.44314 13.7788 4.20698 13.7788H9.4985C11.102 13.7788 12.5451 14.8327 12.5451 16.2818V20.6291C12.5451 21.8147 11.102 23.0004 9.4985 23.0004Z"
                      stroke="#DA3731"
                      strokeWidth="1.3"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.0525 23H19.761C18.1575 23 16.7144 21.9461 16.7144 20.497V3.50299C16.7144 2.18563 17.9971 1 19.761 1H25.0525C26.656 1 28.0991 2.05389 28.0991 3.50299V20.497C28.0991 21.8144 26.656 23 25.0525 23Z"
                      stroke="#DA3731"
                      strokeWidth="1.3"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <img src="" alt="" />
                  Customer Support
                </li>
              </Link>
              <Link to="/notifications">
                <li
                  className={`${location === "/notifications" ? "active_url" : ""
                    }`}
                >
                  <svg
                    width={29}
                    height={24}
                    viewBox="0 0 29 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.93272 10.3533C3.88609 10.3533 1.16016 8.24552 1.16016 5.61078C1.16016 2.97605 3.88609 1 6.93272 1C9.97935 1 12.5449 3.10779 12.5449 5.61078C12.5449 8.24552 9.97935 10.3533 6.93272 10.3533Z"
                      stroke="#DA3731"
                      strokeWidth="1.3"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.4985 23.0004H4.20698C2.60349 23.0004 1 21.9465 1 20.6291V16.2818C1 14.8327 2.44314 13.7788 4.20698 13.7788H9.4985C11.102 13.7788 12.5451 14.8327 12.5451 16.2818V20.6291C12.5451 21.8147 11.102 23.0004 9.4985 23.0004Z"
                      stroke="#DA3731"
                      strokeWidth="1.3"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.0525 23H19.761C18.1575 23 16.7144 21.9461 16.7144 20.497V3.50299C16.7144 2.18563 17.9971 1 19.761 1H25.0525C26.656 1 28.0991 2.05389 28.0991 3.50299V20.497C28.0991 21.8144 26.656 23 25.0525 23Z"
                      stroke="#DA3731"
                      strokeWidth="1.3"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <img src="" alt="" />
                  Notification
                </li>
              </Link>
              <Link to="/">
                <li style={{ borderBottom: "1px solid #312783" }}>
                  <svg
                    width={29}
                    height={24}
                    viewBox="0 0 29 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.93272 10.3533C3.88609 10.3533 1.16016 8.24552 1.16016 5.61078C1.16016 2.97605 3.88609 1 6.93272 1C9.97935 1 12.5449 3.10779 12.5449 5.61078C12.5449 8.24552 9.97935 10.3533 6.93272 10.3533Z"
                      stroke="#DA3731"
                      strokeWidth="1.3"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.4985 23.0004H4.20698C2.60349 23.0004 1 21.9465 1 20.6291V16.2818C1 14.8327 2.44314 13.7788 4.20698 13.7788H9.4985C11.102 13.7788 12.5451 14.8327 12.5451 16.2818V20.6291C12.5451 21.8147 11.102 23.0004 9.4985 23.0004Z"
                      stroke="#DA3731"
                      strokeWidth="1.3"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M25.0525 23H19.761C18.1575 23 16.7144 21.9461 16.7144 20.497V3.50299C16.7144 2.18563 17.9971 1 19.761 1H25.0525C26.656 1 28.0991 2.05389 28.0991 3.50299V20.497C28.0991 21.8144 26.656 23 25.0525 23Z"
                      stroke="#DA3731"
                      strokeWidth="1.3"
                      strokeMiterlimit={10}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <img src="" alt="" />
                  Logout
                </li>
              </Link>
            </ul>
          </div>

          {/* Overlay */}
          {isOpen && <div className="overlay" onClick={toggleSidebar}></div>}
        </>
      </Col>
    </>
  );
};

export default Sidebar;
