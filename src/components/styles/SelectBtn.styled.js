import styled from "styled-components";

export const StyledSelect = styled.select`
  width: 10rem;
  margin: 0.8rem;
  height: 1.8rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-color: transparent;
  background-image: linear-gradient(135deg, #667eea90 0%, #764ba290 100%);
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  outline: none;
  transition: all 0.2s ease-in-out;
  padding-left: 1.2rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (min-width: 900px) {
    margin: 1.5rem;
  }
`;
