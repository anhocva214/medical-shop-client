import { FC } from 'react';




export const NavbarMobile: FC = () => {
    return (
        <div id="ltn__utilize-mobile-menu" className="ltn__utilize ltn__utilize-mobile-menu">
            <div className="ltn__utilize-menu-inner ltn__scrollbar">
                <div className="ltn__utilize-menu-head">
                    <div className="site-logo">
                        <a href="index.html"><img src="img/logo.png" alt="Logo" /></a>
                    </div>
                    <button className="ltn__utilize-close">×</button>
                </div>
                <div className="ltn__utilize-menu-search-form">
                    <form action="index.html#">
                        <input type="text" placeholder="Search..." />
                        <button><i className="fas fa-search" /></button>
                    </form>
                </div>
                <div className="ltn__utilize-menu">
                    <ul>
                        <li><a href="index.html#">Home</a>
                            <ul className="sub-menu">
                                <li><a href="index.html">Home Style 01</a></li>
                                <li><a href="index-2.html">Home Style 02</a></li>
                                <li><a href="index-3.html">Home Style 03</a></li>
                            </ul>
                        </li>
                        <li><a href="index.html#">About</a>
                            <ul className="sub-menu">
                                <li><a href="about.html">About</a></li>
                                <li><a href="service.html">Services</a></li>
                                <li><a href="service-details.html">Service Details</a></li>
                                <li><a href="portfolio.html">Portfolio</a></li>
                                <li><a href="portfolio-2.html">Portfolio - 02</a></li>
                                <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                <li><a href="team.html">Team</a></li>
                                <li><a href="team-details.html">Team Details</a></li>
                                <li><a href="faq.html">FAQ</a></li>
                                <li><a href="locations.html">Google Map Locations</a></li>
                            </ul>
                        </li>
                        <li><a href="index.html#">Shop</a>
                            <ul className="sub-menu">
                                <li><a href="shop.html">Shop</a></li>
                                <li><a href="shop-grid.html">Shop Grid</a></li>
                                <li><a href="shop-left-sidebar.html">Shop Left sidebar</a></li>
                                <li><a href="shop-right-sidebar.html">Shop right sidebar</a></li>
                                <li><a href="product-details.html">Shop details </a></li>
                                <li><a href="cart.html">Cart</a></li>
                                <li><a href="wishlist.html">Wishlist</a></li>
                                <li><a href="checkout.html">Checkout</a></li>
                                <li><a href="order-tracking.html">Order Tracking</a></li>
                                <li><a href="account.html">My Account</a></li>
                                <li><a href="login.html">Sign in</a></li>
                                <li><a href="register.html">Register</a></li>
                            </ul>
                        </li>
                        <li><a href="index.html#">News</a>
                            <ul className="sub-menu">
                                <li><a href="blog.html">News</a></li>
                                <li><a href="blog-grid.html">News Grid</a></li>
                                <li><a href="blog-left-sidebar.html">News Left sidebar</a></li>
                                <li><a href="blog-right-sidebar.html">News Right sidebar</a></li>
                                <li><a href="blog-details.html">News details</a></li>
                            </ul>
                        </li>
                        <li><a href="index.html#">Pages</a>
                            <ul className="sub-menu">
                                <li><a href="about.html">About</a></li>
                                <li><a href="service.html">Services</a></li>
                                <li><a href="service-details.html">Service Details</a></li>
                                <li><a href="portfolio.html">Portfolio</a></li>
                                <li><a href="portfolio-2.html">Portfolio - 02</a></li>
                                <li><a href="portfolio-details.html">Portfolio Details</a></li>
                                <li><a href="team.html">Team</a></li>
                                <li><a href="team-details.html">Team Details</a></li>
                                <li><a href="faq.html">FAQ</a></li>
                                <li><a href="history.html">History</a></li>
                                <li><a href="https://maelectrics.com/tf/html/vicodin-preview/vicodin/add-listing.html">Add Listing</a></li>
                                <li><a href="locations.html">Google Map Locations</a></li>
                                <li><a href="404.html">404</a></li>
                                <li><a href="contact.html">Contact</a></li>
                                <li><a href="coming-soon.html">Coming Soon</a></li>
                            </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </div>
                <div className="ltn__utilize-buttons ltn__utilize-buttons-2">
                    <ul>
                        <li>
                            <a href="account.html" title="My Account">
                                <span className="utilize-btn-icon">
                                    <i className="far fa-user" />
                                </span>
                                My Account
                            </a>
                        </li>
                        <li>
                            <a href="wishlist.html" title="Wishlist">
                                <span className="utilize-btn-icon">
                                    <i className="far fa-heart" />
                                    <sup>3</sup>
                                </span>
                                Wishlist
                            </a>
                        </li>
                        <li>
                            <a href="cart.html" title="Shoping Cart">
                                <span className="utilize-btn-icon">
                                    <i className="fas fa-shopping-cart" />
                                    <sup>5</sup>
                                </span>
                                Shoping Cart
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="ltn__social-media-2">
                    <ul>
                        <li><a href="index.html#" title="Facebook"><i className="fab fa-facebook-f" /></a></li>
                        <li><a href="index.html#" title="Twitter"><i className="fab fa-twitter" /></a></li>
                        <li><a href="index.html#" title="Linkedin"><i className="fab fa-linkedin" /></a></li>
                        <li><a href="index.html#" title="Instagram"><i className="fab fa-instagram" /></a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}