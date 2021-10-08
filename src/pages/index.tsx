import { alertActions } from '@actions/alert.action'
import { userActions } from '@actions/user.action'
import { userSelector } from '@store/slices/user.slice'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { TopContact } from '@components/containers/top-contact'
import { NavbarHome } from '@components/navbar/home'
import { CartMenu } from '@components/cart/cart-menu'
import { NavbarMobile } from '@components/navbar/mobile'
import { SliderIntro } from '@components/slider/intro'
import { SliderCategory } from '@components/slider/category'
import { ProdcutItem } from '@components/product/item'
import { BlogItem } from '@components/blog/item'
import { Footer } from '@components/containers/footer'


export default function Home() {

  const { users } = useSelector(userSelector)

  useEffect(() => {
    console.log(users)
  }, [users])

  return (
    <>
      {/* Body main wrapper start */}
      <div className="body-wrapper">
        {/* HEADER AREA START (header-5) */}
        <header className="ltn__header-area ltn__header-5 ltn__header-logo-and-mobile-menu-in-mobile--- ltn__header-logo-and-mobile-menu--- ltn__header-transparent gradient-color-4---">

          {/* ltn__header-top-area start */}
          <TopContact />
          {/* ltn__header-top-area end */}

          {/* ltn__header-middle-area start */}
          <NavbarHome />
          {/* ltn__header-middle-area end */}
        </header>
        {/* HEADER AREA END */}

        {/* Utilize Cart Menu Start */}
        <CartMenu />
        {/* Utilize Cart Menu End */}
        {/* Utilize Mobile Menu Start */}
        <NavbarMobile />
        {/* Utilize Mobile Menu End */}
        <div className="ltn__utilize-overlay" />
        {/* SLIDER AREA START (slider-3) */}
        <SliderIntro />
        {/* SLIDER AREA END */}
        {/* CATEGORY AREA START */}
        <SliderCategory />
        {/* CATEGORY AREA END */}

        {/* ABOUT US AREA START */}
        <div className="ltn__about-us-area pt-25 pb-120 ">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="about-us-img-wrap about-img-left">
                  <img src="img/others/9.png" alt="About Us Image" />
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="about-us-info-wrap">
                  <div className="section-title-area ltn__section-title-2--- mb-30">
                    <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color d-none">About Us</h6>
                    <h1 className="section-title">Your faithful partners Medical Goods</h1>
                    <p>Houzez allow you to design unlimited panels and real estate custom
                      forms to capture leads and keep record of all information</p>
                  </div>
                  <ul className="ltn__list-item-1 ltn__list-item-1-before--- clearfix">
                    <li><i className="fas fa-check-square" /> Better security for patient privacy and information.</li>
                    <li><i className="fas fa-check-square" /> More products at lower prices.</li>
                    <li><i className="fas fa-check-square" /> connect customers with the power of eCommerce at all.</li>
                  </ul>
                  <div className="about-author-info-2 border-top mt-30 pt-20">
                    <ul>
                      <li>
                        <div className="about-author-info-2-brief  d-flex">
                          <div className="author-img">
                            <img src="img/blog/author.jpg" alt="#" />
                          </div>
                          <div className="author-name-designation">
                            <h4 className="mb-0">Jerry Henson</h4>
                            <small>Medical Specialist</small>
                          </div>
                        </div>
                      </li>
                      <li>
                        <div className="about-author-info-2-contact  d-flex">
                          <div className="about-contact-icon d-flex align-self-center mr-10">
                            <i className="icon-call" />
                          </div>
                          <div className="about-author-info-2-contact-info">
                            <small>Get Support</small>
                            <h6 className="mb-0">123-456-789-10</h6>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ABOUT US AREA END */}

        {/* BANNER AREA START */}
        <div className="ltn__banner-area mt-120---">
          <div className="container">
            <div className="row ltn__custom-gutter--- justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div className="ltn__banner-item">
                  <div className="ltn__banner-img">
                    <a href="shop.html"><img src="img/banner/1.jpg" alt="Banner Image" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="ltn__banner-item">
                  <div className="ltn__banner-img">
                    <a href="shop.html"><img src="img/banner/2.jpg" alt="Banner Image" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="ltn__banner-item">
                  <div className="ltn__banner-img">
                    <a href="shop.html"><img src="img/banner/3.jpg" alt="Banner Image" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BANNER AREA END */}

        {/* PRODUCT AREA START (product-item-3) */}
        <div className="ltn__product-area ltn__product-gutter pt-85 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area ltn__section-title-2 text-center">
                  <h1 className="section-title">Featured Products</h1>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-3">
                <div className="row">
                  <div className="col-lg-12 col-sm-6">
                    <div className="ltn__banner-item">
                      <div className="ltn__banner-img">
                        <a href="shop.html"><img src="img/banner/11.jpg" alt="Banner Image" /></a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 col-sm-6">
                    <div className="ltn__banner-item">
                      <div className="ltn__banner-img">
                        <a href="shop.html"><img src="img/banner/12.jpg" alt="Banner Image" /></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-9">
                <div className="row ltn__tab-product-slider-one-active--- slick-arrow-1">
                  {
                    [1, 2, 3, 4, 5, 6].map(i => (
                      <div key={i} className="col-lg-3--- col-md-4 col-sm-6 col-6">
                        <ProdcutItem
                          title="Hello world!"
                          price={{
                            origin: 100000,
                            sale: 90000,
                            unit: "VNĐ"
                          }}
                          imageUrl={`/img/product/${i}.png`}
                          badgeList={[
                            <span className="sale-badge">New</span>
                          ]}
                          type="featured"
                          textAlign="text-left"
                        />
                      </div>

                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* PRODUCT AREA END */}
        {/* COUNTDOWN AREA START */}
        <div className="ltn__call-to-action-area section-bg-1 bg-image pt-120 pb-120" data-bs-bg="/img/bg/25.jpg" style={{ backgroundImage: "url(/img/bg/25.jpg)" }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="call-to-action-inner text-color-white--- text-center---">
                  <div className="section-title-area ltn__section-title-2--- text-center---">
                    <h6 className="ltn__secondary-color">Todays Hot Offer</h6>
                    <h1 className="section-title">Free Covid-19 Vaccine<br />Campaign Ticket</h1>
                    <p>Cur tantas regiones barbarorum obiit, tot maria transmist <br />
                      summo bono fruitur id est voluptate barbarorum </p>
                  </div>
                  <div className="ltn__countdown ltn__countdown-3 bg-white--" data-countdown="2021/12/28" />
                  <div className="btn-wrapper animated">
                    <a href="contact.html" className="theme-btn-1 btn btn-effect-1 text-uppercase">Book Now</a>
                    <a href="shop.html" className="ltn__secondary-color text-decoration-underline">Deal of The Day</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                {/* <img src="/img/banner/15.png" alt="#"/> */}
              </div>
            </div>
          </div>
        </div>
        {/* COUNTDOWN AREA END */}
        {/* PRODUCT AREA START (product-item-3) */}
        <div className="ltn__product-area ltn__product-gutter pt-115 pb-70">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area ltn__section-title-2 text-center">
                  <h1 className="section-title">Leatest Product</h1>
                </div>
              </div>
            </div>
            <div className="row ltn__tab-product-slider-one-active--- slick-arrow-1">
              {/* ltn__product-item */}
              {
                [1, 2, 3, 4, 5, 6, 7, 8].map(i => (
                  <div key={i} className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <ProdcutItem
                      title="Hello world!"
                      price={{
                        origin: 100000,
                        sale: 90000,
                        unit: "VNĐ"
                      }}
                      imageUrl={`/img/product-2/${i}.png`}
                      badgeList={[
                        <span className="sale-badge">New</span>
                      ]}
                      type="leatest"
                      textAlign='text-left'
                    />
                  </div>

                ))
              }


            </div>
          </div>
        </div>
        {/* PRODUCT AREA END */}
        {/* ABOUT US AREA START */}
        <div className="ltn__about-us-area section-bg-1 bg-image-left-before pt-115 pb-115">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="about-us-img-wrap about-img-left---">
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="about-us-info-wrap">
                  <div className="section-title-area ltn__section-title-2--- mb-20">
                    <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">N95 Facial Covering Mask</h6>
                    <h1 className="section-title">Grade A Safety Masks
                      For Sale. Haurry Up!</h1>
                    <p>Over 39,000 people work for us in more than 70 countries all over the
                      This breadth of global coverage, combined with specialist services</p>
                  </div>
                  <ul className="ltn__list-item-half clearfix">
                    <li>
                      <i className="flaticon-home-2" />
                      Activated Carbon
                    </li>
                    <li>
                      <i className="flaticon-mountain" />
                      Breathing Valve
                    </li>
                    <li>
                      <i className="flaticon-heart" />
                      6 Layer Filteration
                    </li>
                    <li>
                      <i className="flaticon-secure" />
                      Rewashes &amp; Reusable
                    </li>
                  </ul>
                  <div className="btn-wrapper animated">
                    <a href="service.html" className="ltn__secondary-color text-uppercase text-decoration-underline">View Products</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ABOUT US AREA END */}
        {/* ABOUT US AREA START */}
        <div className="ltn__about-us-area bg-overlay-white-90--- bg-image pt-115 pb-110 d-none" data-bs-bg="img/bg/26.jpg">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 align-self-center">
                <div className="about-us-img-wrap about-img-left">
                  {/* <img src="img/others/7.png" alt="About Us Image"> */}
                </div>
              </div>
              <div className="col-lg-6 align-self-center">
                <div className="about-us-info-wrap">
                  <div className="section-title-area ltn__section-title-2--- mb-20">
                    <h6 className="section-subtitle section-subtitle-2--- ltn__secondary-color">N95 Facial Covering Mask</h6>
                    <h1 className="section-title">Grade A Safety Masks
                      For Sale. Haurry Up!</h1>
                    <p>Over 39,000 people work for us in more than 70 countries all over the
                      This breadth of global coverage, combined with specialist services</p>
                  </div>
                  <ul className="ltn__list-item-half clearfix">
                    <li>
                      <i className="flaticon-home-2" />
                      Activated Carbon
                    </li>
                    <li>
                      <i className="flaticon-mountain" />
                      Breathing Valve
                    </li>
                    <li>
                      <i className="flaticon-heart" />
                      6 Layer Filteration
                    </li>
                    <li>
                      <i className="flaticon-secure" />
                      Rewashes &amp; Reusable
                    </li>
                  </ul>
                  <div className="btn-wrapper animated">
                    <a href="service.html" className="ltn__secondary-color text-uppercase text-decoration-underline">View Products</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* ABOUT US AREA END */}
        {/* PRODUCT AREA START (product-item-3) */}
        <div className="ltn__product-area ltn__product-gutter  no-product-ratting pt-115 pb-70---">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area ltn__section-title-2 text-center">
                  <h1 className="section-title">Trending Products</h1>
                </div>
              </div>
            </div>
            <div className="row ltn__tab-product-slider-one-active--- slick-arrow-1">
              {/* ltn__product-item */}

              {
                [1, 2, 3, 4].map(i => (
                  <div key={i} className="col-lg-3 col-md-4 col-sm-6 col-6">
                    <ProdcutItem
                      title="Hello world!"
                      price={{
                        origin: 100000,
                        sale: 90000,
                        unit: "VNĐ"
                      }}
                      imageUrl={`/img/product-2/${i}.png`}
                      badgeList={[
                        <span className="sale-badge">New</span>
                      ]}
                      type="trending"
                      textAlign="text-center"
                    />
                  </div>

                ))
              }

            </div>
          </div>
        </div>
        {/* PRODUCT AREA END */}
        {/* BANNER AREA START */}
        <div className="ltn__banner-area mt-120---">
          <div className="container">
            <div className="row ltn__custom-gutter--- justify-content-center">
              <div className="col-lg-4 col-sm-6">
                <div className="ltn__banner-item">
                  <div className="ltn__banner-img">
                    <a href="shop.html"><img src="img/banner/23.jpg" alt="Banner Image" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="ltn__banner-item">
                  <div className="ltn__banner-img">
                    <a href="shop.html"><img src="img/banner/22.jpg" alt="Banner Image" /></a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6">
                <div className="ltn__banner-item">
                  <div className="ltn__banner-img">
                    <a href="shop.html"><img src="img/banner/21.jpg" alt="Banner Image" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BANNER AREA END */}
        {/* FEATURE AREA START ( Feature - 3) */}
        <div className="ltn__feature-area section-bg-1 mt-90 pt-30 pb-30 mt--65---">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="ltn__feature-item-box-wrap ltn__feature-item-box-wrap-2 ltn__border--- section-bg-1">
                  <div className="ltn__feature-item ltn__feature-item-8">
                    <div className="ltn__feature-icon">
                      <img src="img/icons/svg/8-trolley.svg" alt="#" />
                    </div>
                    <div className="ltn__feature-info">
                      <h4>Free shipping</h4>
                      <p>On all orders over $49.00</p>
                    </div>
                  </div>
                  <div className="ltn__feature-item ltn__feature-item-8">
                    <div className="ltn__feature-icon">
                      <img src="img/icons/svg/9-money.svg" alt="#" />
                    </div>
                    <div className="ltn__feature-info">
                      <h4>15 days returns</h4>
                      <p>Moneyback guarantee</p>
                    </div>
                  </div>
                  <div className="ltn__feature-item ltn__feature-item-8">
                    <div className="ltn__feature-icon">
                      <img src="img/icons/svg/10-credit-card.svg" alt="#" />
                    </div>
                    <div className="ltn__feature-info">
                      <h4>Secure checkout</h4>
                      <p>Protected by Paypal</p>
                    </div>
                  </div>
                  <div className="ltn__feature-item ltn__feature-item-8">
                    <div className="ltn__feature-icon">
                      <img src="img/icons/svg/11-gift-card.svg" alt="#" />
                    </div>
                    <div className="ltn__feature-info">
                      <h4>Offer &amp; gift here</h4>
                      <p>On all orders over</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* FEATURE AREA END */}

        {/* BLOG AREA START (blog-3) */}
        <div className="ltn__blog-area pt-115 pb-45">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title-area ltn__section-title-2--- text-center">
                  <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color d-none">News &amp; Blogs</h6>
                  <h1 className="section-title">Leatest Blogs</h1>
                </div>
              </div>
            </div>
            <div className="row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal">
              {/* Blog Item */}
              {
                [1, 2, 3, 4].map(i => (
                  <div key={i} className="col-lg-12">
                    <BlogItem
                      title="Hello, world!"
                      imgUrl="/img/blog/1.jpg"
                      author="anho"
                      tag="test"
                      createdAt={1633663959000}
                    />
                  </div>
                ))
              }

            </div>
          </div>
        </div>
        {/* BLOG AREA END */}

        {/* BRAND LOGO AREA START */}
        <div className="ltn__brand-logo-area ltn__brand-logo-1 section-bg-1--- pt-110--- pb-95 plr--9--- d-none---">
          <div className="container">
            <div className="row ltn__brand-logo-active">
              <div className="col-lg-12">
                <div className="ltn__brand-logo-item">
                  <img src="img/brand-logo/1.png" alt="Brand Logo" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="ltn__brand-logo-item">
                  <img src="img/brand-logo/2.png" alt="Brand Logo" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="ltn__brand-logo-item">
                  <img src="img/brand-logo/3.png" alt="Brand Logo" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="ltn__brand-logo-item">
                  <img src="img/brand-logo/4.png" alt="Brand Logo" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="ltn__brand-logo-item">
                  <img src="img/brand-logo/5.png" alt="Brand Logo" />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="ltn__brand-logo-item">
                  <img src="img/brand-logo/3.png" alt="Brand Logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* BRAND LOGO AREA END */}

        {/* FOOTER AREA START */}
        <Footer/>
        {/* FOOTER AREA END */}

      </div>

    </>
  )
}
