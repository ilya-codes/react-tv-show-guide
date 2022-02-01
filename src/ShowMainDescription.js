import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import styled from "styled-components";
import { useContext } from "react";
import ShowsContext from "./ShowsContext";

const StyledDescription = styled.div`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;
  overflow: hidden;

  .img-desc {
    width: 100%;
    border: 1px solid #667eeab5;
    align-self: flex-start;

    img {
      display: block;
      width: 100%;
      box-shadow: 0 9px 18px rgba(0, 0, 0, 0.5);
    }
  }

  .text-desc {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    color: gray;

    .upper-plank {
      display: flex;
      justify-content: space-between;
      margin-bottom: 2rem;

      .rating {
        width: 25rem;
        font-size: 1.5rem;
        font-weight: 600;
        border-top: 1px solid gray;
      }
    }

    .sub-info {
      display: flex;
      justify-content: space-between;
    }

    Button {
      margin: 0;
    }

    .summary {
      text-align: justify;
      margin: 3rem 0;
    }

    .schedule,
    .show-name,
    .network-name {
      color: #fff;
      font-size: 1.1rem;
      letter-spacing: 0.1rem;
    }

    .schedule {
      margin: 2rem 0;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      line-height: 2rem;
    }

    .network-name {
      /* margin-bottom: 2rem; */
      margin: 2rem 0;
    }

    .links-btns {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
      margin-top: 1.5rem;

      a {
        text-decoration: none;
        color: #fff;
        margin: 1rem;

        button {
          margin: 0;
          width: 13rem;
        }
      }
    }
  }

  @media screen and (min-width: 900px) {
    flex-direction: row;

    .img-desc {
      width: 25rem;
    }

    .text-desc {
      width: 40rem;
      margin-left: 5rem;

      .links-btns {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-bottom: 2rem;
        margin-top: 0;

        a {
          margin: 0;

          button {
            margin: 0;
            width: 9rem;
          }
        }
      }
    }
  }
`;
const ShowMainDescription = () => {
  const context = useContext(ShowsContext);
  const show = context.clickedShow;

  // const showDescription = JSON.parse(window.localStorage.getItem("savedShow"));

  let ratingColor =
    show.show.rating?.average < 3
      ? "red"
      : show.show.rating?.average < 5
      ? "orange"
      : show.show.rating?.average < 8
      ? "yellow"
      : "green";

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

          <Link to="/description/cast">
            <Button>Cast</Button>
          </Link>

          <Link to="/description" className="back-btn">
            <Button>Back</Button>
          </Link>
        </div>

        <div className="upper-plank">
          <div className="rating" style={{ color: ratingColor }}>
            {show.show.rating?.average}
          </div>
          {/* <Link to="/description" className="back-btn">
            <Button>Back</Button>
          </Link> */}
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
        {/* <div className="links-btns">
          {show.show.officialSite && (
            <Button>
              <a href={show.show.officialSite}>To Website</a>
            </Button>
          )}

          <Link to="/description/cast">
            <Button>Cast</Button>
          </Link>
        </div> */}
      </div>
    </StyledDescription>
  );
};

export default ShowMainDescription;
