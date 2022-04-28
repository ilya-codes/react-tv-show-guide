import { useContext } from "react";
import { useHistory } from "react-router-dom";
import ShowsContext from "./ShowsContext";
import Button from "./Button";
import { StyledActor } from "./styles/Actor.styled";

const Actor = () => {
  const context = useContext(ShowsContext);
  const history = useHistory();
  let actor = context.clickedActor;
  window.localStorage.setItem("savedActor", JSON.stringify(actor));

  return (
    <StyledActor>
      <div className="actor-box">
        <div className="actor-img-box">
          {actor.image ? (
            <img src={actor.image.original} alt="" className="actor-img" />
          ) : (
            <div className="replacer" />
          )}
        </div>
        <div className="actor-info">
          <p className="actor-name">{actor.name}</p>
          <p className="actor-desc">{actor.country?.name}</p>
          <p className="actor-desc">{actor.gender}</p>
          <p className="actor-desc">{actor.birthday}</p>
        </div>
        <span className="back-btn" onClick={history.goBack}>
          <Button>Back</Button>
        </span>
      </div>
    </StyledActor>
  );
};

export default Actor;
