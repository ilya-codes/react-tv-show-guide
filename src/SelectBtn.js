import React from "react";
import styled from "styled-components";

const StyledSelect = styled.select`
  /* width: 13rem; */
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
  text-align: center;

  &:hover {
    background-color: rgba(255, 255, 255, 0.5);
  }

  @media screen and (min-width: 900px) {
    /* width: 9rem; */

    margin: 1.5rem;
  }
`;

const SelectBtn = (props) => {
  return (
    <StyledSelect
      onChange={props.onChange}
      name={props.name}
      value={props.value}
    >
      <option hidden>{props.placeholder}</option>

      {props.children}
    </StyledSelect>
  );
};

export default SelectBtn;
