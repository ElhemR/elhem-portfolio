import dynamic from "next/dynamic";
import { useContext } from "react"
import { useRouter } from "next/router"
import { LanguageContext, locales } from "../intl/LanguageProvider"
import useTranslation from "../intl/useTranslation"
import About from "../src/components/About";
import Blog from "../src/components/Blog";
import Contact from "../src/components/Contact";
import Services from "../src/components/Services";
import TypingAnimation from "../src/components/TypingAnimation";
import Layout from "../src/layout/Layout"
import Link from "next/link";
import DownloadLink from "react-download-link";


import { saveAs } from 'file-saver';

const Portfolio = dynamic(() => import("../src/components/Portfolio"), {
  ssr: false,
});
const Index = () => {
  const { t } = useTranslation()
  const downloadCV= () => {
    const element = document.createElement("a");
    element.href = "./files/Elhem_Rebhi_CV.pdf";
    element.download = "Elhem_Rebhi_CV.pdf";
    element.click();
  };
  return (
    <Layout>
        
      <section
        id="home"
        data-nav-tooltip="Home"
        className="pp-section pp-scrollable"
      >
        <div className="home-banner">
          <div className="container">
            <div className="row full-screen align-items-center">
              <div className="col-lg-6">
                <div className="type-box">
                  <h6> {t("slogan")}</h6>
                  <h1 className="font-alt">Elhem Rebhi</h1>
                  <p className="lead">
                  {t("introLine")} <TypingAnimation />
                  </p>
          
                  <p className="desc">
                  {t("aboutmeParagraph")} <br></br>
               
                  </p>
                  <div className="btn-bar">
                    <a className="px-btn px-btn-theme"        onClick={downloadCV} >
                    {t("downloadCV")}
                    </a>

                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="quotehome" dangerouslySetInnerHTML={{ __html: t("quoteHomePage") }}> 
       
                </div> 
                <div className="hb-img">
                  <img src="static/img/home-banner.png" title="" alt="elhem_main_photo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Home */}
      {/* about us */}
      <About />
      {/* End about us */}
      {/* Services */}
      <Services />
      {/* End Services */}
      {/* Portfolio */}
      <Portfolio />
      {/* End Portfolio */}
      {/* Blog */}
      {/* <Blog /> */}
      {/* End Blog */}
      {/* Contact us */}
      <Contact />
    </Layout>
  );
};
export default Index;
