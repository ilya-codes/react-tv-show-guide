import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToView = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    pathname !== "/" && window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToView;
