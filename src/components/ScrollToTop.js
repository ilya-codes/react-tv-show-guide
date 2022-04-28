import { FaArrowCircleUp } from "react-icons/fa";
import { StyledScrollTop } from "./styles/ScrollToTop.styled";

const ScrollToTop = () => {
  return (
    <StyledScrollTop
      text="UP"
      distance={1100}
      breakpoint={768}
      speed={500}
      target={0}
      icon={<FaArrowCircleUp className="icon" />}
    />
  );
};

export default ScrollToTop;
