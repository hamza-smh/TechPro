import React from "react";
import Split from "../Split";

const AboutIntro = () => {
  return (
    <section className="intro-section section-padding pb-0">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit sm-mb30">
              <h4>Who We Are ?</h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text">
              <Split>
                <p className="wow txt words chars splitting" data-splitting>
                  At TechPrologist, we are a dynamic and passionate team of software engineers, designers, and innovators dedicated to crafting cutting-edge solutions that drive business success.
                  Founded with a vision to simplify technology, our mission is to help businesses unlock their full potential through the power of software.
                  We specialize in creating custom SaaS products, responsive websites, and tailored digital solutions that cater to your unique needs. Our team thrives on delivering top-notch quality while maintaining a deep understanding of your goals, ensuring that every project is completed with precision and excellence.
                  We also believe in fostering growth within the tech community. 
                  We are passionate about mentoring fresh graduates and talented students, helping them gain practical experience while creating new opportunities for themselves in the software industry.
                  At TechPrologist, innovation, creativity, and technical expertise converge to shape the future of software development.

                  Join us on our journey, and let’s build something extraordinary together.
                </p>
              </Split>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutIntro;
