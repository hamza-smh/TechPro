/* eslint-disable @next/next/no-img-element */
import React from "react";
import Split from '../Split';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const VideoWithTestimonials = () => {
  const [isOpen, setOpen] = React.useState(false);
  React.useEffect(() => {
    console.clear();
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="block-sec">
      <div
        className="background bg-img section-padding pb-0"
        style={{ backgroundImage: `url(./../../../../public/img/slid/1.jpg)` }}
        data-overlay-dark="8"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="vid-area">
                <div className="vid-icon">
                  {typeof window !== "undefined" && (
                    <ModalVideo
                      channel="vimeo"
                      autoplay
                      isOpen={isOpen}
                      videoId="127203262"
                      onClose={() => setOpen(false)}
                    />
                  )}
                  <a
                    className="vid"
                    onClick={(e) => {
                      e.preventDefault();
                      setOpen(true);
                    }}
                    href="https://vimeo.com/127203262"
                  >
                    <div className="vid-butn">
                      <span className="icon">
                        <i className="fas fa-play"></i>
                      </span>
                    </div>
                  </a>
                </div>

                <div className="cont">
                  <Split>
                    <h3 className="wow" data-splitting>
                      So that&apos;s us. There&apos;s  no  other  way  to  put  it.
                    </h3>
                  </Split>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="testim-box">
                <div className="head-box">
                  <h6 className="wow fadeIn" data-wow-delay=".5s">
                    Our Happy Clients
                  </h6>
                  <h4 className="wow fadeInLeft" data-wow-delay=".5s">
                    What Client&apos;s Say?
                  </h4>
                </div>
                <Slider
                  {...settings}
                  className="slic-item wow fadeInUp"
                  data-wow-delay=".5s"
                >
                  <div className="item">
                    {/* <p>
                      We had the pleasure of working with Techprologist for the development of our SaaS product, and we couldn't be happier with the results. From the very beginning, their team demonstrated a deep understanding of our needs, providing innovative solutions and exceptional attention to detail.
                    </p> */}
                    <p>
                      We had the pleasure of working with Techprologist for the development of our SaaS product, and we couldn&apos;t be happier with the results. From the very beginning, their team demonstrated a deep understanding of our needs, providing innovative solutions and exceptional attention to detail.
                    </p>

                    <div className="info">
                      <div className="img">
                        <div className="img-box" style={{width:"50px",height:"50px",backgroundColor:"#CB9A17",borderRadius:"50%"}}>
                          <img src="/img/clients/user.png" alt="" style={{width:"100%"}}/>
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                           Emily Carter
                          </h6>
                          <span className="author-details">
                          Product Manager, BrightTech Co.
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>
                      The professionalism and dedication shown by their team were beyond our expectations. They didn&apos;t just deliver on time; they exceeded our expectations in every way possible.
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box" style={{width:"50px",height:"50px",backgroundColor:"#CB9A17",borderRadius:"50%"}}>
                          <img src="/img/clients/user.png" alt="" style={{width:"100%"}}/>
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                            Alex Regelman
                          </h6>
                          <span className="author-details">
                            Co-founder, Colabrio
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item">
                    <p>
                     If you&apos;re looking for a software house that combines technical expertise with a personal touch, look no further than Techprologist. We look forward to collaborating with them again on future projects!
                    </p>
                    <div className="info">
                      <div className="img">
                        <div className="img-box" style={{width:"50px",height:"50px",backgroundColor:"#CB9A17",borderRadius:"50%"}}>
                          <img src="/img/clients/user.png" alt="" style={{width:"100%"}}/>
                        </div>
                      </div>
                      <div className="cont">
                        <div className="author">
                          <h6 className="author-name custom-font">
                            James Brown
                          </h6>
                          <span className="author-details">
                            Operations Manager, TechFlow Systems
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoWithTestimonials;
