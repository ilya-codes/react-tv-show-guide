import styled from "styled-components";

export const StyledLogo = styled.div`
  font-size: 1.2rem;
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
