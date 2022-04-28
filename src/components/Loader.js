import { StyledLoader } from "./styles/Loader.styled";

const Loader = () => {
  return (
    <StyledLoader>
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </StyledLoader>
  );
};

export default Loader;
