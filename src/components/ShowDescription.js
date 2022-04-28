import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { StyledDescription } from "./styles/ShowDescription.styled";

const ShowDescription = ({ ratingColor, show }) => {
  return (
    <StyledDescription>
      <div className="img-desc">
        <img src={show.show.image?.original} alt="" />
      </div>
      <div className="text-desc">
        <div className="links-btns">
          {show.show.officialSite && (
            <a href={show.show.officialSite}>
              <Button>To Website</Button>
            </a>
          )}

          <Link to="/description/show">
            <Button>About Show</Button>
          </Link>

          <Link to="/description/cast">
            <Button>Cast</Button>
          </Link>

          <Link to="/" className="back-btn">
            <Button>Back</Button>
          </Link>
        </div>
        <div>
          <div className="upper-plank">
            <div className="rating" style={{ color: ratingColor }}>
              {show.show.rating?.average}
            </div>
          </div>
          <div className="show-name">
            <span>"{show.name}"</span>
          </div>
          <div className="show-numbers">
            <span>Season: {show.season} </span>
            <span>Ep: {show.number}</span>
          </div>

          {show.summary && (
            <div
              className="summary"
              dangerouslySetInnerHTML={{ __html: show.summary }}
            />
          )}

          <div className="network-name">
            <span>{show.show.schedule?.time}</span> {show.show.network && "on"}{" "}
            {show.show.network?.name}
          </div>
        </div>
      </div>
    </StyledDescription>
  );
};

export default ShowDescription;
