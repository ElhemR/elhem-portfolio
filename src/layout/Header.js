import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { activeSection } from "../utilits";
import { useContext } from "react"
import { useRouter } from "next/router"
import { LanguageContext, locales } from "../../intl/LanguageProvider"
import useTranslation from "../../intl/LanguageProvider"
const Header = ({ blog }) => {
  const [sideBarToggle, setSideBarToggle] = useState(false);
  useEffect(() => {
    if (!blog) {
      activeSection();
    }
  }, []);

  const [locale, setLocale] = useContext(LanguageContext)
  console.log(locale)
  const router = useRouter()
  function handleLocaleChange(language) {
    if (!window) {
      return
    }

    const regex = new RegExp(`^/(${locales.join("|")})`)
    localStorage.setItem("lang", language) // This line saves the language option!
    setLocale(language)

    router.push(router.pathname, router.asPath.replace(regex, `/${language}`))
  }
  return (
    
    <Fragment>
      <div className="mob-header">
   
        <div className="d-flex">
          <div className="navbar-brand">
            <Link href="/">
              <a className="logo-text">Elhem</a>
            </Link>
          </div>
          <button
            className={`toggler-menu ${sideBarToggle ? "open" : ""}`}
            onClick={() => setSideBarToggle(!sideBarToggle)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
      {/* End Header */}
      {/* nav bar */}
      <header
        className={`header-left ${
          sideBarToggle ? "menu-open menu-open-desk" : ""
        }`}
      >
        <div className="scroll-bar">
          <div className="hl-top">
            <div className="hl-logo">
              <div className="img">
                <img src="static/img/about-me.jpg" title="" alt="" style={{marginTop: "-15px"}}/>
              </div>
              <h5 style={{marginBottom: "10px" }} >Elhem</h5>
            <a style={{cursor: "pointer", letterSpacing: "7px",fontWeight: locale==="en" ? 500:100}} onClick={() => handleLocaleChange("en")}>EN</a> |  <a style={{cursor: "pointer", letterSpacing: "7px",fontWeight: locale==="de" ? 500:100}} onClick={() => handleLocaleChange("de")}>DE</a>
            </div>
          </div>
          {blog ? <MenuWithBlog /> : <MenuWithOutBlog />}
        </div>
      
        <div className="nav justify-content-center social-icons" target='_blank'  rel="noreferrer" >
          <a href="https://www.facebook.com/elhemrebhi">
            <i className="fab fa-facebook-f" />
          </a>
          <a href="https://twitter.com/ElhemRebhi" target='_blank'  rel="noreferrer" >
            <i className="fab fa-twitter" />
          </a>
          <a href="https://www.instagram.com/elhem.rebhi/" target='_blank'  rel="noreferrer" >
            <i className="fab fa-instagram" />
          </a>
          <a href="https://www.linkedin.com/in/elhemrebhi/" target='_blank'  rel="noreferrer" >
            <i className="fab fa-linkedin-in" />
          </a>
          <a href="https://github.com/elhemr" target='_blank'>
            <i className="fab fa-github" />
          </a>
        </div>
   
      </header>
    </Fragment>
  );
};
export default Header;

const MenuWithOutBlog = () => {
  const [locale, setLocale] = useContext(LanguageContext)
  console.log(locale)
  const router = useRouter()
  function handleLocaleChange(language) {
    if (!window) {
      return
    }

    const regex = new RegExp(`^/(${locales.join("|")})`)
    localStorage.setItem("lang", language) // This line saves the language option!
    setLocale(language)

    router.push(router.pathname, router.asPath.replace(regex, `/${language}`))
  }
  return (
    <ul className="nav nav-menu" id="pp-menu">
     
      <li data-menuanchor="home" className="active">
        <a className="nav-link" href="#home">
          <i className="ti-home" />
          <span>Home</span>
        </a>
      </li>
      <li data-menuanchor="about">
        <a className="nav-link" href="#about">
          <i className="ti-id-badge" />
          <span>About Me</span>
        </a>
      </li>
      <li data-menuanchor="services">
        <a className="nav-link" href="#services">
          <i className="ti-panel" />
          <span>Services</span>
        </a>
      </li>
      <li data-menuanchor="work">
        <a className="nav-link" href="#work">
          <i className="ti-bookmark-alt" />
          <span>Portfolio</span>
        </a>
      </li>
      <li data-menuanchor="blog" className="blog">
        <a className="nav-link" href="#blog">
          <i className="ti-layout-media-overlay-alt-2" />
          <span>Blogs</span>
        </a>
      </li>
      <li data-menuanchor="contactus">
        <a className="nav-link" href="#contactus">
          <i className="ti-map-alt" />
          <span>Contact Me</span>
        </a>
      </li>
    </ul>
  );
};

const MenuWithBlog = () => {

  useEffect(() => {
    window.addEventListener("scroll", () =>
      document.querySelector(".blog").classList.add("active")
    );
  });

  return (
    <Fragment>
      <ul className="nav nav-menu" id="pp-menu">
        <li data-menuanchor="home">
          <Link href="/#home">
            <a className="nav-link">
              <i className="ti-home" />
              <span>Home</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="about">
          <Link href="/#about">
            <a className="nav-link">
              <i className="ti-id-badge" />
              <span>About Me</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="services">
          <Link href="/#services">
            <a className="nav-link">
              <i className="ti-panel" />
              <span>Services</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="work">
          <Link href="/#work">
            <a className="nav-link">
              <i className="ti-bookmark-alt" />
              <span>Portfolio</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="blog" className="blog active">
          <Link href="/#blog">
            <a className="nav-link">
              <i className="ti-layout-media-overlay-alt-2" />
              <span>Blogs</span>
            </a>
          </Link>
        </li>
        <li data-menuanchor="contactus">
          <Link href="/#contactus">
            <a className="nav-link">
              <i className="ti-map-alt" />
              <span>Contact Me</span>
            </a>
          </Link>
        </li>
   
      </ul>
    </Fragment>
  );
};
