import { useRef } from 'react';
import Link from 'next/link';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import slides from '../../data/sections/works3Slider.json';

import "swiper/css";
import "swiper/css/navigation";
import Split from "../Split";

SwiperCore.use([Navigation]);

const Works3Slider = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <section className="work-carousel section-padding caroul simpl sub-bg position-re" id="portfolio">
      <div className="container-fluid">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">Portfolio</h6>
          <Split>
            <h3 className="wow" data-splitting>Our Works.</h3>
          </Split>
        </div>
        <div className="row">
          <div className="col-lg-12 no-padding">
            <Swiper
              className="swiper-wrapper"
              slidesPerView={4}
              spaceBetween={0}
              loop={true}
              speed={1000}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                  spaceBetween: 0
                },
                767: {
                  slidesPerView: 2,
                  spaceBetween: 0
                },
                991: {
                  slidesPerView: 3,
                  spaceBetween: 0
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 0
                }
              }}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;

                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                });
              }}
            >
              {
                slides.map((slide) => (
                  <SwiperSlide key={slide.id}>
                    <div className="content wow fadeInUp" data-wow-delay=".3s">
                        <div className="item-img bg-img wow imago" style={{ backgroundImage: `url('${slide.image}')` }}>
                        </div>
                        <div className="cont">
                          <h6><a href="#0">{ slide.title }</a></h6>
                          <h4>
                            <Link href={slide.slug}>
                              <a>{ slide.secTex }</a>
                            </Link>
                          </h4>
                        </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>

            <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer" ref={navigationNextRef}>
              <i className="ion-ios-arrow-right"></i>
            </div>
            <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer" ref={navigationPrevRef}>
              <i className="ion-ios-arrow-left"></i>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Works3Slider