import { StyledButton } from "./styles/Button.styled";

const Button = (props) => {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
};

export default Button;
