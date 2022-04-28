import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import { StyledMainDescription } from "./styles/ShowMainDescription.styled";

const ShowMainDescription = ({ ratingColor, show }) => {
  return (
    <StyledMainDescription>
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

          <Link to="/description/cast">
            <Button>Cast</Button>
          </Link>

          <Link to="/description" className="back-btn">
            <Button>Back</Button>
          </Link>
        </div>
        <div>
          <div className="upper-plank">
            <div className="rating" style={{ color: ratingColor }}>
              {show.show.rating?.average}
            </div>
          </div>
          <div className="show-name">{show.show.name}</div>
          <div className="sub-info">
            <span>{show.show.type}</span>
            <span>Premiered: {show.show.premiered}</span>
          </div>
          <div
            className="summary"
            dangerouslySetInnerHTML={{ __html: show.show.summary }}
          />
          <div className="schedule">
            <span>{show.show.schedule?.days.join(", ")}</span>{" "}
            <span className="time">{show.show.schedule?.time}</span>
          </div>
          <div className="network-name">
            {show.show.network && "On"} {show.show.network?.name}
          </div>
        </div>
      </div>
    </StyledMainDescription>
  );
};

export default ShowMainDescription;
