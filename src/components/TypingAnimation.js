import { Fragment, useEffect, useRef } from "react";
import Typed from "typed.js";
import useTranslation from "../../intl/useTranslation"
const TypingAnimation = () => {
  // Create Ref element.
  const el = useRef(null);
  const { t } = useTranslation()

  useEffect(() => {
    console.log( t("introLineDesc"))
    const typed = new Typed(el.current, {
      strings:  t("introLineDesc"),
      //["Software Engineer", "Web Developer", "Human"] Strings to display
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      smartBackspace: true,
      loop: true,
      showCursor: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, t("introLineDesc"),[]);
  return (
    <Fragment>
      <span id="type-it" className="subtitle subtitle-typed" ref={el}></span>
    </Fragment>
  );
};
export default TypingAnimation;
