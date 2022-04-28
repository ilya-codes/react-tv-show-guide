import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import ShowsContext from "./ShowsContext";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Button from "./Button";
import Loader from "./Loader";
import { StyledCast, CastGrid } from "./styles/ShowCast.styled";

const ShowCast = () => {
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let history = useHistory();
  const context = useContext(ShowsContext);
  const showName = context.clickedShow.show.name;
  const showId = JSON.parse(window.localStorage.getItem("savedShow")).show.id;

  useEffect(() => {
    const castDataFetcher = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.tvmaze.com/shows/${showId}/cast`
        );
        const data = await response.json();

        setCast(data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    castDataFetcher();
  }, [showId]);

  return (
    <StyledCast>
      <div className="top-bar">
        <h1 className="show-name">{showName}</h1>

        <span className="back-btn">
          <Button onClick={history.goBack}>Back</Button>
        </span>
      </div>

      {isLoading ? (
        <Loader />
      ) : !cast.length && !isLoading ? (
        <div className="replacer">
          <span className="replacer-text">Nothing Found</span>
        </div>
      ) : (
        <CastGrid>
          {cast.map((item, index) => (
            <div key={index} className="cast-box">
              <div className="cast-img-box">
                {item.person.image ? (
                  <img
                    src={item.person.image.medium}
                    className="cast-img"
                    alt=""
                  />
                ) : (
                  <div className="replacer" />
                )}
              </div>
              <p className="wrapper">
                <span className="name-box">
                  <span className="name">{item.person.name}</span>{" "}
                  {item.character.name && `as ${item.character.name}`}
                </span>

                <Link
                  to="/actor"
                  onClick={() => {
                    context.handleActor(item.person);
                  }}
                >
                  <Button>About</Button>
                </Link>
              </p>
            </div>
          ))}
        </CastGrid>
      )}
    </StyledCast>
  );
};

export default ShowCast;
