import { StyledSelect } from "./styles/SelectBtn.styled";

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
