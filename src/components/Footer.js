import { StyledFooter } from "./styles/Footer.styled";

const Footer = () => {
  return (
    <StyledFooter>
      <p>Copyright &copy; {new Date().getFullYear()}</p>
    </StyledFooter>
  );
};

export default Footer;
