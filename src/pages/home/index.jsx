import React from "react";
import Slider from "react-slick";

import Header from "components/header";

import { SlideList, slideSlick } from "utils/script";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* <Helmet pageTitle="Business" /> */}
      <Header />
      {/* Start Slider Area   */}
      <div className="slider-wrapper">
        <div className="slider-activation">
          <Slider className="rn-slick-dot dot-light" {...slideSlick}>
            {SlideList.map((value, index) => (
              <div
                className={`slide slide-style-2 d-flex align-items-center justify-content-center bg_image ${value.bgImage}`}
                key={index}
                data-black-overlay="8"
              >
                <div className="container">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className={`inner ${value.textPosition}`}>
                        {value.category ? <span>{value.category}</span> : ""}
                        {value.title ? (
                          <h1 className="title">{value.title}</h1>
                        ) : (
                          ""
                        )}
                        {value.description ? (
                          <p className="description">{value.description}</p>
                        ) : (
                          ""
                        )}
                        {value.buttonText ? (
                          <div className="slide-btn">
                            <Link
                              className="rn-button-style--2 btn-solid"
                              to={`${value.buttonLink}`}
                            >
                              {value.buttonText}
                            </Link>
                          </div>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
      {/* End Slider Area   */}

      {/* Start Brand Area */}
      {/* <div className="rn-brand-area bg_color--5 ptb--60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-12">
              <BrandTwo />
            </div>
          </div>
        </div>
      </div> */}
      {/* End Brand Area */}

      {/* Start Service Area  */}
      {/* <div className="service-area creative-service-wrapper ptb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title service-style--3 text-center mb--30 mb_sm--0">
                <h2 className="title">Our Service</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div className="row creative-service">
            <div className="col-lg-12">
              <ServiceList
                item="6"
                column="col-lg-4 col-md-6 col-sm-6 col-12 text-left"
              />
            </div>
          </div>
        </div>
      </div> */}
      {/* End Service Area  */}

      {/* Start About Area  */}
      {/* <div className="rn-about-area ptb--120 bg_color--5">
        <div className="container">
          <div className="row row--35 align-items-center">
            <div className="col-lg-6">
              <div className="thumbnail">
                <img
                  className="w-100"
                  src="/assets/images/about/about-4.png"
                  alt="About Images"
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-inner inner">
                <div className="section-title">
                  <h2 className="title">Working Process</h2>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Enim exercitationem impedit iure quia quo recusandae?
                  </p>
                </div>
                <div className="accordion-wrapper mt--30">
                  <Accordion01 />
                </div>
                <div className="about-button mt--50">
                  <a className="rn-button-style--2 btn-solid" href="/about">
                    See how it works
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* End About Area  */}

      {/* Start About Area  */}
      {/* <div className="rn-about-area ptb--120 bg_color--1">
        <div className="container">
          <div className="row row--35 align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="about-inner inner">
                <div className="section-title">
                  <h2 className="title">About</h2>
                  <p className="description">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which dont
                    look even slightly believable.
                  </p>
                </div>
                <div className="mt--30">
                  <h4>Lorem ipsum dolor sit.</h4>
                  <ul className="list-style--1">
                    {namesItemOne.map((name, index) => {
                      return (
                        <li key={index}>
                          <FiCheck /> {name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="mt--30">
                  <h4>Lorem ipsum dolor sit.</h4>
                  <ul className="list-style--1">
                    {namesItemTwo.map((name, index) => {
                      return (
                        <li key={index}>
                          <FiCheck /> {name}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="thumbnail position-relative">
                <img
                  className="w-100"
                  src="/assets/images/about/about-3.png"
                  alt="About Images"
                />
                <ModalVideo
                  channel="youtube"
                  isOpen={this.state.isOpen}
                  videoId="ZOoVOfieAF8"
                  onClose={() => this.setState({ isOpen: false })}
                />
                <button
                  className="video-popup position-top-center theme-color"
                  onClick={this.openModal}
                >
                  <span className="play-icon"></span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* End About Area  */}

      {/* Start Portfolio Area */}
      {/* <div className="portfolio-area ptb--120 bg_color--5">
        <div className="portfolio-sacousel-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                  <h2 className="title">Our Project</h2>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration.
                  </p>
                </div>
              </div>
            </div>
            <div className="row">
              <PortfolioList
                styevariation="text-left mt--40"
                column="col-lg-4 col-md-6 col-sm-6 col-12"
                item="6"
              />
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="view-more-btn mt--60 text-center">
                  <a className="rn-button-style--2 btn-solid" href="/portfolio">
                    <span>View More Project</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* End Portfolio Area */}

      {/* Start Team Area  */}
      {/* <div className="rn-team-area ptb--120 bg_color--1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title service-style--3 text-center mb--25 mb_sm--0">
                <h2 className="title">Skilled Team</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <Team column="col-lg-4 col-md-6 col-sm-6 col-12" />
          </div>
        </div>
      </div> */}
      {/* End Team Area  */}

      {/* Start Blog Area */}
      {/* <div className="rn-blog-area pt--120 pb--80 bg_color--5">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-12">
              <div className="section-title service-style--3 text-center">
                <h2 className="title">Latest News</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration.
                </p>
              </div>
            </div>
          </div>
          <div className="row mt--60">
            {PostList.map((value, i) => (
              <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={i}>
                <div className="blog blog-style--1">
                  <div className="thumbnail">
                    <a href="/blog-details">
                      <img
                        className="w-100"
                        src={`/assets/images/blog/blog-${value.images}.jpg`}
                        alt="Blog Images"
                      />
                    </a>
                  </div>
                  <div className="content">
                    <p className="blogtype">{value.category}</p>
                    <h4 className="title">
                      <a href="/blog-details">{value.title}</a>
                    </h4>
                    <div className="blog-btn">
                      <a className="rn-btn text-white" href="/blog-details">
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div> */}
      {/* End Blog Area */}

      {/* Start call To Action  */}
      {/* <CallAction /> */}
      {/* End call To Action  */}

      {/* Start Footer Style  */}
      {/* <FooterTwo /> */}
      {/* End Footer Style  */}

      {/* Start Back To Top */}
      {/* <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div> */}
      {/* End Back To Top */}
    </>
  );
};

export default Home;
