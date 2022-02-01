import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 0.3);
  background-image: linear-gradient(to right bottom, #434343 0%, black 100%);
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>Copyright &copy; {new Date().getFullYear()}</p>
    </StyledFooter>
  );
};

export default Footer;
