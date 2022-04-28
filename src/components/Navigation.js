import Logo from "./Logo";
import { StyledNavbar } from "./styles/Navigation.styled";

const Navigation = ({ handleReset, dates, filterDate, filterDateHandler }) => {
  return (
    <StyledNavbar>
      <Logo handleReset={handleReset} />
      <button onClick={filterDateHandler}>{`On Air 
      ${filterDate === dates.today ? "Today" : "Tomorrow"}`}</button>
    </StyledNavbar>
  );
};

export default Navigation;
