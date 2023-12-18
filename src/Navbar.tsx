import { useContext, useEffect, useState } from "react"
import { ScrollContext } from "./Scroll-observer"
import Logo from "./assets/logo.png"

export const Navbar: React.FC = () => {
  const { scrollY } = useContext(ScrollContext)
  const [atTop, setAtTop] = useState<boolean>(true)

  useEffect(() => {
    console.log(scrollY, ":", scrollY > 200)
    setAtTop(scrollY < 200)
  }, [scrollY])

  return (
    <>
      <header className={`header ${!atTop && "sticky"}`}>
        <div className="topbar">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-5 col-12">
                <ul className="top-link">
                  <li>
                    <a href="https://www.free-css.com/free-css-templates">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="https://www.free-css.com/free-css-templates">
                      Doctors
                    </a>
                  </li>
                  <li>
                    <a href="pages/contact.php">Contact</a>
                  </li>
                  <li>
                    <a href="https://www.free-css.com/free-css-templates">
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6 col-md-7 col-12">
                <ul className="top-contact">
                  <li>
                    <i className="fa fa-phone"></i>+880 1234 56789
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <a href="https://www.free-css.com/free-css-templates">
                      email@domain.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-inner">
          <div className="container">
            <div className="inner">
              <div className="row">
                <div className="col-lg-3 col-md-3 col-12">
                  <div className="logo">
                    <a href="https://www.free-css.com/free-css-templates">
                      <img src={Logo} alt="website template image" />
                    </a>
                  </div>
                  <div className="mobile-nav">
                    <div className="slicknav_menu">
                      <a
                        href="#"
                        aria-haspopup="true"
                        role="button"
                        tabIndex={0}
                        className="slicknav_btn slicknav_collapsed"
                        style="outline: none;"
                      >
                        <span className="slicknav_menutxt"></span>
                        <span className="slicknav_icon slicknav_no-text">
                          <span className="slicknav_icon-bar"></span>
                          <span className="slicknav_icon-bar"></span>
                          <span className="slicknav_icon-bar"></span>
                        </span>
                      </a>
                      <ul
                        className="slicknav_nav slicknav_hidden"
                        style="display: none;"
                        aria-hidden="true"
                        role="menu"
                      >
                        <li className="active">
                          <a
                            href="https://www.free-css.com/free-css-templates"
                            role="menuitem"
                            tabIndex={-1}
                          >
                            Home
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.free-css.com/free-css-templates"
                            role="menuitem"
                            tabIndex={-1}
                          >
                            Doctors
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://www.free-css.com/free-css-templates"
                            role="menuitem"
                            tabIndex={-1}
                          >
                            Services
                          </a>
                        </li>
                        <li className="slicknav_collapsed slicknav_parent">
                          <a
                            href="#"
                            role="menuitem"
                            aria-haspopup="true"
                            tabIndex={-1}
                            className="slicknav_item slicknav_row"
                            style="outline: none;"
                          >
                            <a href="javascript:void(0);" tabIndex={-1}>
                              Pages <i className="icofont-rounded-down"></i>
                            </a>
                            <span className="slicknav_arrow">►</span>
                          </a>
                          <ul
                            className="dropdown slicknav_hidden"
                            role="menu"
                            style="display: none;"
                            aria-hidden="true"
                          >
                            <li>
                              <a
                                href="pages/404.php"
                                role="menuitem"
                                tabIndex={-1}
                              >
                                404 Error
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="slicknav_collapsed slicknav_parent">
                          <a
                            href="#"
                            role="menuitem"
                            aria-haspopup="true"
                            tabIndex={-1}
                            className="slicknav_item slicknav_row"
                            style="outline: none;"
                          >
                            <a href="javascript:void(0);" tabIndex={-1}>
                              Blogs <i className="icofont-rounded-down"></i>
                            </a>
                            <span className="slicknav_arrow">►</span>
                          </a>
                          <ul
                            className="dropdown slicknav_hidden"
                            role="menu"
                            style="display: none;"
                            aria-hidden="true"
                          >
                            <li>
                              <a
                                href="pages/blog-single.php"
                                role="menuitem"
                                tabIndex={-1}
                              >
                                Blog Details
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a
                            href="pages/contact.php"
                            role="menuitem"
                            tabIndex={-1}
                          >
                            Contact Us
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7 col-md-9 col-12">
                  <div className="main-menu">
                    <nav className="navigation">
                      <ul className="nav menu">
                        <li className="active">
                          <a href="https://www.free-css.com/free-css-templates">
                            Home
                          </a>
                        </li>
                        <li>
                          <a href="https://www.free-css.com/free-css-templates">
                            Doctors
                          </a>
                        </li>
                        <li>
                          <a href="https://www.free-css.com/free-css-templates">
                            Services
                          </a>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            Pages <i className="icofont-rounded-down"></i>
                          </a>
                          <ul className="dropdown">
                            <li>
                              <a href="pages/404.php">404 Error</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="javascript:void(0);">
                            Blogs <i className="icofont-rounded-down"></i>
                          </a>
                          <ul className="dropdown">
                            <li>
                              <a href="pages/blog-single.php">Blog Details</a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="pages/contact.php">Contact Us</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-lg-2 col-12">
                  <div className="get-quote">
                    <a
                      href="https://www.free-css.com/free-css-templates"
                      className="btn"
                    >
                      Book Appointment
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}
