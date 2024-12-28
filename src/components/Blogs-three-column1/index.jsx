import React from "react";
import Link from "next/link";
import Split from '../Split';

const BlogsThreeColumn1 = ({ subBG, newHome }) => {
  return (
    <section className={`blog-grid section-padding ${subBG ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="sec-head custom-font text-center">
          <h6 className="wow fadeIn" data-wow-delay=".5s">
            Latest News
          </h6>
          <Split>
            <h3 className="wow" data-splitting>
              Our Blogs.
            </h3>
          </Split>
          {
            !newHome && (<span className="tbg">Blogs</span>)
          }
        </div>
        <div className="row">
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".3s">
            <div
              className={`item bg-img ${newHome ? 'active' : ''}`}
              style={{ backgroundImage: "url(/img/blog/b1.jpg)" }}
            >
              <div className="cont">
                <Link href="/blog/blog-dark">
                  <a className="date custom-font">
                    <span>
                      <i>06</i> Aug 2024
                    </span>
                  </a>
                </Link>
                <div className="info custom-font">
                  <a href="#0" className="author">
                    <span>by / Admin</span>
                  </a>
                  <Link href="/blog/blog-dark">
                    <a className="tag">
                      <span>The Prologist Blog</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/blog-details/blog-details-dark">
                    Expert insights, tutorials, and stories for tech enthusiasts.
                  </Link>
                </h6>
                <div className="btn-more custom-font">
                  <Link href="/blog-details/blog-details-dark">
                    <a className="simple-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".6s">
            <div
              className="item active bg-img"
              style={{ backgroundImage: "url(/img/blog/b2.jpg)" }}
            >
              <div className="cont">
                <Link href="/blog/blog-dark">
                  <a className="date custom-font">
                    <span>
                      <i>20</i> Oct 2024
                    </span>
                  </a>
                </Link>
                <div className="info custom-font">
                  <a href="#0" className="author">
                    <span>by / Admin</span>
                  </a>
                  <Link href="/blog/blog-dark">
                    <a className="tag">
                      <span>Tech Chronicles</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/blog-details/blog-details-dark">
                    Stories and updates shaping the future of technology.
                  </Link>
                </h6>
                <div className="btn-more custom-font">
                  <Link href="/blog-details/blog-details-dark">
                    <a className="simple-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 wow fadeInUp" data-wow-delay=".9s">
            <div
              className={`item bg-img ${newHome ? 'active' : ''}`}
              style={{ backgroundImage: "url(/img/blog/single.jpg)" }}
            >
              <div className="cont">
                <Link href="/blog/blog-dark">
                  <a className="date custom-font">
                    <span>
                      <i>09</i> Dec 2024
                    </span>
                  </a>
                </Link>
                <div className="info custom-font">
                  <a href="#0" className="author">
                    <span>by / Admin</span>
                  </a>
                  <Link href="/blog/blog-dark">
                    <a className="tag">
                      <span>Behind the Code</span>
                    </a>
                  </Link>
                </div>
                <h6>
                  <Link href="/blog-details/blog-details-dark">
                    Dive into the minds and processes shaping modern software.
                  </Link>
                </h6>
                <div className="btn-more custom-font">
                  <Link href="/blog-details/blog-details-dark">
                    <a className="simple-btn">Read More</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsThreeColumn1;
