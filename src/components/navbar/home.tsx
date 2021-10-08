import { FC } from 'react';


export const NavbarHome: FC = () => {
    return (
        <div className="ltn__header-middle-area ltn__logo-right-menu-option ltn__header-row-bg-white ltn__header-padding ltn__header-sticky ltn__sticky-bg-white">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="site-logo-wrap">
                            <div className="site-logo">
                                <a href="index.html"><img src="img/logo.png" alt="Logo" /></a>
                            </div>
                            <div className="get-support clearfix d-none">
                                <div className="get-support-icon">
                                    <i className="icon-call" />
                                </div>
                                <div className="get-support-info">
                                    <h6>Get Support</h6>
                                    <h4><a href="tel:+123456789">123-456-789-10</a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col header-menu-column menu-color-white---">
                        <div className="header-menu d-none d-xl-block">
                            <nav>
                                <div className="ltn__main-menu">
                                    <ul>
                                        <li className="menu-icon"><a href="index.html#">Home</a>
                                            <ul className="sub-menu menu-pages-img-show ltn__sub-menu-col-2---">
                                                <li>
                                                    <a href="index.html">Home Style 01</a>
                                                    <img src="img/home-demos/home-1.jpg" alt="#" />
                                                </li>
                                                <li>
                                                    <a href="index-2.html">Home Style 02</a>
                                                    <img src="img/home-demos/home-2.jpg" alt="#" />
                                                </li>
                                                <li>
                                                    <a href="index-3.html">Home Style 03</a>
                                                    <img src="img/home-demos/home-3.jpg" alt="#" />
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-icon"><a href="index.html#">About</a>
                                            <ul>
                                                <li><a href="about.html">About</a></li>
                                                <li><a href="service.html">Services</a></li>
                                                <li><a href="service-details.html">Service Details</a></li>
                                                <li><a href="portfolio.html">Gallery</a></li>
                                                <li><a href="portfolio-2.html">Gallery - 02</a></li>
                                                <li><a href="portfolio-details.html">Gallery Details</a></li>
                                                <li><a href="team.html">Team</a></li>
                                                <li><a href="team-details.html">Team Details</a></li>
                                                <li><a href="faq.html">FAQ</a></li>
                                                <li><a href="locations.html">Google Map Locations</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-icon"><a href="index.html#">Shop</a>
                                            <ul>
                                                <li><a href="shop.html">Shop</a></li>
                                                <li><a href="shop-grid.html">Shop Grid</a></li>
                                                <li><a href="shop-left-sidebar.html">Shop Left sidebar</a></li>
                                                <li><a href="shop-right-sidebar.html">Shop right sidebar</a></li>
                                                <li><a href="product-details.html">Shop details </a></li>
                                                <li><a href="index.html#">Other Pages <span className="float-right">&gt;&gt;</span></a>
                                                    <ul>
                                                        <li><a href="cart.html">Cart</a></li>
                                                        <li><a href="wishlist.html">Wishlist</a></li>
                                                        <li><a href="checkout.html">Checkout</a></li>
                                                        <li><a href="order-tracking.html">Order Tracking</a></li>
                                                        <li><a href="account.html">My Account</a></li>
                                                        <li><a href="login.html">Sign in</a></li>
                                                        <li><a href="register.html">Register</a></li>
                                                    </ul>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="menu-icon"><a href="index.html#">News</a>
                                            <ul>
                                                <li><a href="blog.html">News</a></li>
                                                <li><a href="blog-grid.html">News Grid</a></li>
                                                <li><a href="blog-left-sidebar.html">News Left sidebar</a></li>
                                                <li><a href="blog-right-sidebar.html">News Right sidebar</a></li>
                                                <li><a href="blog-details.html">News details</a></li>
                                            </ul>
                                        </li>
                                        <li className="menu-icon"><a href="index.html#">Pages</a>
                                            <ul className="mega-menu">
                                                <li><a href="index.html#">Inner Pages</a>
                                                    <ul>
                                                        <li><a href="portfolio.html">Gallery</a></li>
                                                        <li><a href="portfolio-2.html">Gallery - 02</a></li>
                                                        <li><a href="portfolio-details.html">Gallery Details</a></li>
                                                        <li><a href="team.html">Team</a></li>
                                                        <li><a href="team-details.html">Team Details</a></li>
                                                        <li><a href="faq.html">FAQ</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="index.html#">Inner Pages</a>
                                                    <ul>
                                                        <li><a href="history.html">History</a></li>
                                                        <li><a href="contact.html">Appointment</a></li>
                                                        <li><a href="locations.html">Google Map Locations</a></li>
                                                        <li><a href="404.html">404</a></li>
                                                        <li><a href="contact.html">Contact</a></li>
                                                        <li><a href="coming-soon.html">Coming Soon</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="index.html#">Shop Pages</a>
                                                    <ul>
                                                        <li><a href="shop.html">Shop</a></li>
                                                        <li><a href="shop-left-sidebar.html">Shop Left sidebar</a></li>
                                                        <li><a href="shop-right-sidebar.html">Shop right sidebar</a></li>
                                                        <li><a href="shop-grid.html">Shop Grid</a></li>
                                                        <li><a href="product-details.html">Shop details </a></li>
                                                        <li><a href="cart.html">Cart</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="shop.html"><img src="img/banner/menu-banner-1.png" alt="#" /></a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                    <div className="col--- ltn__header-options ltn__header-options-2 mb-sm-20">
                        {/* header-search-1 */}
                        <div className="header-search-wrap">
                            <div className="header-search-1">
                                <div className="search-icon">
                                    <i className="icon-search for-search-show" />
                                    <i className="icon-cancel  for-search-close" />
                                </div>
                            </div>
                            <div className="header-search-1-form">
                                <form id="#" method="get" action="index.html#">
                                    <input type="text" name="search" defaultValue="" placeholder="Search here..." />
                                    <button type="submit">
                                        <span><i className="icon-search" /></span>
                                    </button>
                                </form>
                            </div>
                        </div>
                        {/* user-menu */}
                        <div className="ltn__drop-menu user-menu">
                            <ul>
                                <li>
                                    <a href="index.html#"><i className="icon-user" /></a>
                                    <ul>
                                        <li><a href="login.html">Sign in</a></li>
                                        <li><a href="register.html">Register</a></li>
                                        <li><a href="account.html">My Account</a></li>
                                        <li><a href="wishlist.html">Wishlist</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {/* mini-cart */}
                        <div className="mini-cart-icon">
                            <a href="index.html#ltn__utilize-cart-menu" className="ltn__utilize-toggle">
                                <i className="icon-shopping-cart" />
                                <sup>2</sup>
                            </a>
                        </div>
                        {/* mini-cart */}
                        {/* Mobile Menu Button */}
                        <div className="mobile-menu-toggle d-xl-none">
                            <a href="index.html#ltn__utilize-mobile-menu" className="ltn__utilize-toggle">
                                <svg viewBox="0 0 800 600">
                                    <path d="M300,220 C300,220 520,220 540,220 C740,220 640,540 520,420 C440,340 300,200 300,200" id="top" />
                                    <path d="M300,320 L540,320" id="middle" />
                                    <path d="M300,210 C300,210 520,210 540,210 C740,210 640,530 520,410 C440,330 300,190 300,190" id="bottom" transform="translate(480, 320) scale(1, -1) translate(-480, -318) " />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}