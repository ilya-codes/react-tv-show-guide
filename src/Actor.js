import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import ShowsContext from "./ShowsContext";
import Button from "./Button";

const StyedActor = styled.div`
  display: flex;
  flex-direction: column;

  .back-btn {
    /* margin-left: auto; */
    align-self: center;
    margin-bottom: 2rem;

    Button {
      margin: 0;
    }
  }
  .actor-box {
    margin: auto;
    padding-top: 3rem;
    display: flex;
    flex-direction: column-reverse;

    .actor-info {
      display: flex;
      flex-direction: column;
      color: #fff;
      border-top: 1px solid gray;
      border-bottom: 1px solid gray;
      margin-bottom: 2rem;

      .actor-name {
        font-size: 1.1rem;
        letter-spacing: 0.1rem;
        padding: 1rem 0;
      }

      .actor-desc {
        margin-bottom: 0.5rem;
      }
    }

    .actor-img-box {
      width: 18rem;
      border: 1px solid #667eeab5;
      background-color: #000;
      box-shadow: 0 9px 18px rgba(0, 0, 0, 0.5);
      align-self: flex-start;
      margin: auto;

      .actor-img {
        width: 100%;
        display: block;
      }

      .replacer {
        width: 100%;
        height: 20rem;
        /* background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%); */
      }
    }
  }

  @media screen and (min-width: 900px) {
    .back-btn {
      align-self: flex-start;
    }
    .actor-box {
      flex-direction: row;

      .actor-info {
        margin: 0 3rem;
        width: 20rem;
      }
    }
  }
`;

const Actor = () => {
  const context = useContext(ShowsContext);
  const history = useHistory();
  const [actor, setActor] = useState(context.clickedActor);

  useEffect(() => {
    const actorDataFetcher = async () => {
      try {
        const response = await fetch(`https://api.tvmaze.com/people/${actor}`);
        const data = await response.json();
        setActor(data);
        window.localStorage.setItem("savedActor", JSON.stringify(data));
      } catch (err) {
        console.log(err);
      }
    };

    actorDataFetcher();
  }, [actor]);

  return (
    <StyedActor>
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
    </StyedActor>
  );
};

export default Actor;
