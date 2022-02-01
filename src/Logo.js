import React from "react";

import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLogo = styled.div`
  font-size: 1.4rem;
  cursor: pointer;

  .link {
    text-decoration: none;
  }

  h1 {
    color: #667eea;
  }

  @media screen and (min-width: 900px) {
    position: absolute;
    left: 4rem;
    font-size: 2rem;
  }
`;

const Logo = ({ handleReset }) => {
  return (
    <StyledLogo onClick={handleReset}>
      <Link className="link" to="/">
        <h1>TVShow Guide</h1>
      </Link>
    </StyledLogo>
  );
};

export default Logo;
