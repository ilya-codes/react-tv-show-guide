import styled from "styled-components";

export const StyledButton = styled.button`
  width: 9rem;
  margin: 1.5rem;
  height: 1.8rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  background-color: transparent;
  background-image: linear-gradient(135deg, #667eea90 0%, #764ba290 100%);
  color: #fff;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }
`;
