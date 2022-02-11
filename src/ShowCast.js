import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import ShowsContext from "./ShowsContext";
import { useHistory } from "react-router-dom";
import Button from "./Button";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Loader from "./Loader";

const StyledCast = styled.div`
  .top-bar {
    margin: auto;
    max-width: 75rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 3.5rem 0 0;

    .show-name {
      margin: 0 1.5rem 0.5rem;
      color: gray;
      font-size: 1.5rem;
      text-align: center;
    }

    .back-btn {
      button {
        width: 13rem;
      }
    }
  }

  .replacer {
    margin-top: 5rem;
    width: 100%;
    text-align: center;

    .replacer-text {
      color: #667eea;
      font-size: 2rem;
    }
  }

  @media screen and (min-width: 900px) {
    .top-bar {
      flex-direction: row;
      padding: 1.5rem 0;

      .show-name {
        margin: 0 1.5rem;
        color: gray;
        font-size: 2rem;
      }

      .back-btn {
        button {
          width: 9rem;
        }
      }
    }
  }
`;

const CastGrid = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;

  .cast-box {
    margin: 1rem;
    padding: 1rem;
    height: 12rem;
    width: 22rem;
    display: flex;
    color: #fff;
    border-radius: 8px;
    box-shadow: 0 9px 18px rgba(0, 0, 0, 0.5);

    .cast-img-box {
      max-width: 7rem;
      margin-right: 2rem;
      background-color: #000;
      border-radius: 8px;
    }

    .cast-img {
      height: 100%;
      /* width: 100%; */
      display: block;
      border-radius: 8px;
      border: 1px solid #667eeab5;
    }

    .replacer {
      height: 100%;
      width: 7.1rem;
      background-color: #000;
      border-radius: 8px;
    }

    .wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .name-box {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: 0.8rem;

        .name {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }
      }

      Button {
        margin: 0;
      }
    }
  }
`;

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
                    context.handleActor(item.person.id);
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
