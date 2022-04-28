import { Link } from "react-router-dom";
import { StyledLogo } from "./styles/Logo.styled";

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
