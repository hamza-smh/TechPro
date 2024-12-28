import React from "react";

const AboutHeader = () => {
  return (
    <header
  className="pages-header bg-img valign parallaxie aboutHeader"
  style={{
    backgroundImage: "url(/img/slid/bkg.avif)",
    position: 'relative'
  }}
  data-overlay-dark="1"
>
  <div
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: '#a38941CC', // Add your tint color with opacity
      zIndex: 1,
    }}
  ></div>
  
  <div className="container" style={{ position: 'relative', zIndex: 2 }}>
    <div className="row">
      <div className="col-lg-12">
        <div className="cont text-center">
          <h1>About Us</h1>
        </div>
      </div>
    </div>
  </div>
</header>

  );
};

export default AboutHeader;
