import styled from "styled-components";
import ScrollTop from "react-scrolltop-button";

export const StyledScrollTop = styled(ScrollTop)`
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
