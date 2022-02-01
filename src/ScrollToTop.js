import React from "react";
import ScrollTop from "react-scrolltop-button";
import styled from "styled-components";
import { FaArrowCircleUp } from "react-icons/fa";

const StyledScrollTop = styled(ScrollTop)`
  background-color: red;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  border: 1px solid #000;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: #000;
  font-size: 1.3rem;
  font-weight: 600;

  .icon {
    font-size: 3.5rem;
  }
`;

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
