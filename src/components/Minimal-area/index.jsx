/* eslint-disable @next/next/no-img-element */
import React from "react";
import featuresEffect from "../../common/featuresEffect";
import { thumparallaxDown } from "../../common/thumparallax";
import Split from "../Split";

const MinimalArea = () => {
  React.useEffect(() => {
    featuresEffect();
    setTimeout(() => {
      thumparallaxDown();
    }, 1000);
  }, []);
  return (
    <section className="min-area sub-bg" style={{
    backgroundImage: "url(/img/slid/bkg.avif)",
    position: 'relative',
    paddingTop:"25px",
    paddingBottom:"25px"
  }}
  data-overlay-dark="9"
  >
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img" //style={{backgroundImage:"url(../../../img/meeting.jpg)"}}
            >
              <img
                className="thumparallax-down"
                src="../../../img/meeting.jpg"
                alt=""
              />
              
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <Split>
                <h4
                  className="wow custom-font words chars splitting"
                  data-splitting
                >
                  About us.
                </h4>
              </Split>

              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  Our creative design and development team is ranked among the finest in the US.
                  We cultivate smart ideas for start-ups and seasoned players.
                </p>
              </Split>
              <ul className="feat">
                <li className="wow fadeInUp" data-wow-delay=".2s">
                  <h6>
                    <span>1</span> Our Mission
                  </h6>
                  <p>
                    To empower businesses with innovative software solutions that drive success and simplify technology.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".4s">
                  <h6>
                    <span>2</span> Our Goals
                  </h6>
                  <p>
                    To transform ideas into scalable, efficient, and user-centric digital products that create lasting impact.
                  </p>
                </li>
                <li className="wow fadeInUp" data-wow-delay=".6s">
                  <h6>
                    <span>3</span> Why Us?
                  </h6>
                  <p>
                    We provide reliable, innovative solutions tailored to your needs, with a focus on building long-term partnerships.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MinimalArea;
