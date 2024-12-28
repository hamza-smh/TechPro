/* eslint-disable @next/next/no-img-element */
import React,{ useState } from "react";
import { Formik, Form, Field } from "formik";
import appData from "../../data/app.json";
import Link from 'next/link';

const Footer = ({ noSubBG }) => {

   const [successMessage, setSuccessMessage] = useState(""); 

  const validateEmail = (value) => {
    let error;
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!value) {
      error = 'Required';
    } else if (!regex.test(value)) {
      error = 'Invalid email address';
    }
    return error;
  };

  const sendEmail = async (timeout) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve('Email sent'), timeout);
    });
  };
  // function validateEmail(value) {
  //   let error;
  //   if (!value) {
  //     error = "Required";
  //   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
  //     error = "Invalid email address";
  //   }
  //   return error;
  // }
  // const sendEmail = (ms) => new Promise((r) => setTimeout(r, ms));
  return (
    <footer className={`footer-half ${noSubBG ? '':'sub-bg'} section-padding pb-0`} style={{padding:"20px 0px"}}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="cont">
              <div className="logo" style={{width:"250px",left:"-40px",position:"relative"}}>
                <Link href="/" passHref>
                  <img src={`${appData.darkLogo}`} alt="Logo" />
                </Link>
              </div>

              <div className="con-info custom-font">
                <ul>
  <li>
    <span>Email: </span>
    <a href="mailto:techprologist@gmail.com" style={{ color: '#FFF' }}>
      techprologist@gmail.com
    </a>
  </li>
  <li>
    <span>Address: </span>
    <a 
      href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.039279567866!2d-122.0165768!3d37.5405636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fbf12b7502837%3A0x6513e4d2952195f9!2s5284+Central+Ave,+Fremont,+CA+94536,+USA!5e0!3m2!1sen!2seg!4v1644772966009!5m2!1sen!2seg" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{ color: '#FFF' }}
    >
      5284 Central Ave, Fremont, CA 94536
    </a>
  </li>
  <li>
    <span>Phone: </span>
    <a href="tel:+13412369764" style={{ color: '#FFF' }}>
      +1 (341) 236-9764
    </a>
  </li>
</ul>

              </div>
              <div className="social-icon">
                <h6 className="custom-font stit simple-btn">Follow Us</h6>
                <div className="social">
                  <a href="#0" className="icon">
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-pinterest"></i>
                  </a>
                  <a href="#0" className="icon">
                    <i className="fab fa-behance"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="col-lg-5 offset-lg-2">
            <div className="subscribe mb-50">
              <h6 className="custom-font stit simple-btn">Newsletter</h6>
              <p>Sign up for subscribe out newsletter!</p>
              <Formik
                initialValues={{
                  subscribe: "",
                  
                }}
                onSubmit={async (values) => {
                  await sendEmail(500);
                  alert(JSON.stringify(values, null, 2));
                  // Reset the values
                  values.subscribe = "";
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <div className="form-group custom-font">
                      <Field
                        validate={validateEmail}
                        type="email"
                        name="subscribe"
                        placeholder="Your Email"
                      />
                      {errors.email && touched.email && (
                        <div>{errors.email}</div>
                      )}
                      <button className="cursor-pointer">Subscribe</button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
            <div className="insta">
              <h6 className="custom-font stit simple-btn">Instagram Post</h6>
              <div className="insta-gallary">
                <a href="#0">
                  <img src="/img/intro/b1.jpg" alt="" />
                </a>
                <a href="#0">
                  <img src="/img/demos/12.jpg" alt="" />
                </a>
                <a href="#0">
                  <img src="/img/demos/11.jpg" alt="" />
                </a>
              </div>
            </div>
          </div> */}
          <div className="col-lg-5 offset-lg-2" style={{display:"flex",flexDirection:"column",justifyContent: "center"}}>
      <div className="subscribe mb-80" >
        <h6 className="custom-font stit simple-btn">Newsletter</h6>
        <p>Sign up for our newsletter!</p>
        <Formik
          initialValues={{
            subscribe: "",
          }}
          onSubmit={async (values) => {
            await sendEmail(500);  // Simulate email sending
            setSuccessMessage(`Thank you for subscribing, ${values.subscribe}!`); // Show success message
            // Reset the form values
            values.subscribe = "";
          }}
        >
          {({ errors, touched }) => (
            <Form>
              <div className="form-group custom-font">
                <Field
                  validate={validateEmail}
                  type="email"
                  name="subscribe"
                  placeholder="Your Email"
                />
                {errors.subscribe && touched.subscribe && <div>{errors.subscribe}</div>}
                <button className="cursor-pointer">Subscribe</button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

      {/* Success Message */}
      {successMessage && (
        <div className="success-message">
          <p>{successMessage}</p>
        </div>
      )}

      <div className="insta">
        <h6 className="custom-font stit simple-btn">Instagram Post</h6>
        <div className="insta-gallary">
          <a href="#0">
            <img src="/img/intro/b1.jpg" alt="" />
          </a>
          <a href="#0">
            <img src="/img/demos/12.jpg" alt="" />
          </a>
          <a href="#0">
            <img src="/img/demos/11.jpg" alt="" />
          </a>
        </div>
      </div>
    </div>
        </div>
        <div className="copyrights text-center">
          <p>
            © 2024, Techprologist Template. Made with passion by <a href="#0">ThemesCamp</a>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
