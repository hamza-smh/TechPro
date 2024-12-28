/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect, useRef } from 'react'
import { Formik, Form, Field } from 'formik'
import Link from 'next/link'
import appData from '../../data/app.json'
import {
  handleDropdown,
  handleMobileDropdown,
  handleSearch
} from '../../common/navbar'

const Navbar = ({ lr, nr, theme }) => {
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    handleSearch()
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === 'themeL' ? 'light' : ''
      }`}
    >
      <div className='container'>
        {/* <Link href='/'>
          <a className='logo'>
            {theme ? (
              theme === 'themeL' ? (
                <img ref={lr} src={`${appData.darkLogo}`} alt='logo' />
              ) : (
                <img ref={lr} src={`${appData.darkLogo}`} alt='logo' />
              )
            ) : (
              <img
                ref={lr}
                src={`${isScrolled ? appData.darkLogo : appData.lightLogo}`}
                alt='logo'
                style={{ width: '100px', height: '80px' }}
              />
            )}
          </a>
        </Link> */}
        <Link href='/' passHref>
  <div className='logo'>
    {theme ? (
      theme === 'themeL' ? (
        <img ref={lr} src={`${appData.darkLogo}`} alt='logo' />
      ) : (
        <img ref={lr} src={`${appData.darkLogo}`} alt='logo' />
      )
    ) : (
      <img
        ref={lr}
        src={`${isScrolled ? appData.darkLogo : appData.lightLogo}`}
        alt='logo'
        style={{ width: '100px', height: '80px' }}
      />
    )}
  </div>
</Link>


        <button
          className='navbar-toggler'
          type='button'
          onClick={handleMobileDropdown}
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='icon-bar'>
            <i className='fas fa-bars'></i>
          </span>
        </button>

        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav ml-auto'>
            {/* <li className='nav-item'>
              <Link href='/' className='nav-link'>
                Home
              </Link>
            </li> */}

<li className="nav-item">
  <Link href="/" passHref>
    <a className="nav-link">Home</a>
  </Link>
</li>

            {/* <li className="nav-item dropdown" href="/"
            //onClick={handleDropdown}
            >
              <span
                className="nav-link "
                // data-toggle="dropdown"
                 role="button"
                //aria-haspopup="true"
                //aria-expanded="false"
              >
                Home
              </span>
              <div className="dropdown-menu">
                <Link href="/home/home1-dark">
                  <a className="dropdown-item">Main Home</a>
                </Link>
                <Link href="/home/home2-dark">
                  <a className="dropdown-item">Creative Studio</a>
                </Link>
                <Link href="/home/home3-dark">
                  <a className="dropdown-item">Business Startup</a>
                </Link>
                <Link href="/home/home4-dark">
                  <a className="dropdown-item">One Page</a>
                </Link>
                <Link href="/home/home5-dark">
                  <a className="dropdown-item">Freelancer</a>
                </Link>
              </div>
            </li> */}

            {/* <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Showcases
              </span>
              <div className="dropdown-menu">
                <Link href="/showcase/showcase-dark">
                  <a className="dropdown-item">Full Screen</a>
                </Link>
                <Link href="/showcase2/showcase2-dark">
                  <a className="dropdown-item">Creative Carousel</a>
                </Link>
                <Link href="/showcase3/showcase3-dark">
                  <a className="dropdown-item">Radius Carousel</a>
                </Link>
                <Link href="/showcase4/showcase4-dark">
                  <a className="dropdown-item">Columns Carousel</a>
                </Link>
                <Link href="/showcase5/showcase5-dark">
                  <a className="dropdown-item">Boxed Carousel</a>
                </Link>
              </div>
            </li> */}
            <li className='nav-item'>
              <a
                href='#services'
                className='nav-link'
                onClick={e => {
                  e.preventDefault() 
                  if (window.location.pathname === '/') {
                    
                    const element = document.getElementById('services')
                    if (element) {
                      element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      })
                    }
                  } else {
                    // Redirect to home and use a query parameter to identify the section
                    window.location.href = '/#services'
                  }
                }}
              >
Services
              </a>
            </li>



            

            <li className='nav-item'>
              <Link href='/about/about-dark'>
                <a className='nav-link'>About</a>
              </Link>
            </li>






            {/* <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                portfolio
              </span>
              <div className="dropdown-menu">
                <Link href="/works/works-dark">
                  <a className="dropdown-item">Mouse Info</a>
                </Link>
                <Link href="/works2/works2-dark">
                  <a className="dropdown-item">Masonry 3 Columns</a>
                </Link>
                <Link href="/works3/works3-dark">
                  <a className="dropdown-item">Masonry 2 Columns</a>
                </Link>
                <Link href="/works4/works4-dark">
                  <a className="dropdown-item">Pinterest List</a>
                </Link>
              </div>
            </li> */}
            <li className='nav-item'>
              <a
                href='#portfolio'
                className='nav-link'
                onClick={e => {
                  e.preventDefault() 
                  if (window.location.pathname === '/') {
                    
                    const element = document.getElementById('portfolio')
                    if (element) {
                      element.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                      })
                    }
                  } else {
                    // Redirect to home and use a query parameter to identify the section
                    window.location.href = '/#portfolio'
                  }
                }}
              >
                Portfolio
              </a>
            </li>

            <li className='nav-item'>
              <Link href='/contact/contact-dark'>
                <a className='nav-link'>Contact</a>
              </Link>
            </li>
          </ul>


          
          <div className='search'>
            <span className='icon pe-7s-search cursor-pointer'></span>
            <div className='search-form text-center custom-font'>
              <Formik
                initialValues={{
                  search: ''
                }}
                onSubmit={async values => {
                  alert(JSON.stringify(values, null, 2))
                  // Reset the values
                  values.search = ''
                }}
              >
                {({ errors, touched }) => (
                  <Form>
                    <Field type='text' name='search' placeholder='Search' />
                  </Form>
                )}
              </Formik>
              <span className='close pe-7s-close cursor-pointer'></span>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
