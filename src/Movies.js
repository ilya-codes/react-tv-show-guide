import React from "react";
import styled from "styled-components";
import SelectBtn from "./SelectBtn";
import ShowDescription from "./ShowDescription";
import ShowMainDescription from "./ShowMainDescription";
import { Route, Switch } from "react-router-dom";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ShowsContext from "./ShowsContext";
import ShowCast from "./ShowCast";
import Actor from "./Actor";
import Button from "./Button";
import Loader from "./Loader";

const StyledForm = styled.form`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  button {
    margin: 2.5rem 0;
    width: 13rem;
  }

  input {
    margin-top: 2.5rem;
    width: 70vw;
    padding-left: 0.8rem;
    outline: none;
    height: 1.8rem;
    border-radius: 10px;
    /* border: 1px solid rgba(255, 255, 255, 0.3); */
    border: 1px solid #667eeab5;
    background-color: transparent;
    color: #fff;
    font-size: 1.1rem;
    transition: all 0.2s ease-in-out;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }

  @media screen and (min-width: 900px) {
    margin: 1.5rem;
    margin-left: auto;
    flex-direction: row;

    button {
      margin: 0 0 0 2rem;
      width: 9rem;
    }

    input {
      margin-top: 0;
      width: 20rem;
    }
  }
`;

const StyledMain = styled.main`
  background-image: linear-gradient(to right bottom, #434343 0%, black 100%);
  width: 100%;
  min-height: 100vh;
  padding: 0 3rem 3rem 3rem;

  .replacer {
    margin-top: 5rem;
    width: 100%;
    text-align: center;

    .replacer-text {
      color: #667eea;
      font-size: 2rem;
    }
  }

  .shows-count {
    margin: 1.5rem 0;
    text-align: center;
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
    color: #667eea;
    border-bottom: 1px solid gray;
  }

  @media screen and (min-width: 900px) {
    .replacer {
      margin-top: 8rem;
    }

    .shows-count {
      margin: 1.5rem 3.6rem;
      text-align: start;
    }
  }
`;

const MoviesNav = styled.div`
  margin: 0 auto 2rem;
  display: flex;
  flex-flow: column-reverse wrap;
  align-items: center;

  @media screen and (min-width: 900px) {
    max-width: 75rem;
    margin: 2rem auto;
    display: flex;
    flex-flow: row wrap;
  }
`;

const MoviesGrid = styled.div`
  overflow: hidden;
  display: grid;
  grid-template-columns: repeat(auto-fit, 210px);
  justify-content: center;
  gap: 2rem;
  overflow: visible;

  .link {
    text-decoration: none;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    justify-content: flex-start;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(108%);
    }
    p {
      margin-top: 0.4rem;
      font-size: 0.8rem;
      color: #fff;

      .accentend-info {
        font-size: 1rem;
        font-weight: 600;
      }
    }
  }

  .img-tile {
    background-color: #000;
    width: 75vw;
    /* height: 28rem; */
    height: 110vw;
    overflow: hidden;
    border-radius: 8px;
    background-size: cover;
    background-position: center;

    /* img {
      display: block;

      height: 100%;
    } */

    @media screen and (min-width: 900px) {
      /* width: unset; */
      width: 14rem;
      height: 20rem;
    }
  }
`;

const Movies = ({
  dates,
  filterDate,
  isLoading,
  type,
  genre,
  country,
  search,
  handleSearch,
  handleSubmit,
  showMovies,
  handleFilter,
  handleCountry,
}) => {
  const context = useContext(ShowsContext);

  return (
    <StyledMain>
      <Switch>
        <Route path="/" exact>
          <MoviesNav>
            <SelectBtn
              value={type}
              name="type"
              placeholder="Type"
              onChange={handleFilter}
            >
              <option value="All">All</option>
              <option value="Talk Show">Talk Show</option>
              <option value="Game Show">Game Show</option>
              <option value="Scripted">Scripted</option>
              <option value="Documentary">Documentary</option>
              <option value="Reality">Reality</option>
              <option value="News">News</option>
              <option value="Sports">Sports</option>
            </SelectBtn>

            <SelectBtn
              value={genre}
              name="genre"
              placeholder="Genre"
              onChange={handleFilter}
            >
              <option value="All">All</option>
              <option value="Drama">Drama</option>
              <option value="Comedy">Comedy</option>
              <option value="Family">Family</option>
              <option value="Romance">Romance</option>
              <option value="Sports">Sports</option>
              <option value="Music">Music</option>
              <option value="Action">Action</option>
              <option value="Adventure">Adventure</option>
            </SelectBtn>

            <SelectBtn
              value={country}
              name="country"
              // placeholder="Country"
              onChange={handleCountry}
            >
              <option value="US">US</option>
              <option value="GB">UK</option>
              <option value="RU">Russia</option>
              <option value="JP">Japan</option>
              <option value="KR">South Korea</option>
            </SelectBtn>

            <StyledForm onSubmit={handleSubmit}>
              <input type="text" value={search} onChange={handleSearch} />
              <Button type="submit">Search</Button>
            </StyledForm>
          </MoviesNav>
          {showMovies.length > 0 && (
            <div className="shows-count">{showMovies.length} found</div>
          )}

          {isLoading ? (
            <Loader />
          ) : !showMovies.length && !isLoading ? (
            <div className="replacer">
              <span className="replacer-text">Nothing Found</span>
            </div>
          ) : (
            <MoviesGrid>
              {showMovies.map(
                (item) =>
                  item.show.image && (
                    <Link
                      to="/description"
                      onClick={() => {
                        context.handleShowSave(item);
                      }}
                      className="link"
                      key={item.id || item.show.id}
                    >
                      <div
                        className="img-tile"
                        style={{
                          backgroundImage: `url(${item.show.image.original}) `,
                        }}
                      >
                        {/* <img src={item.show.image.original} alt="" /> */}
                      </div>
                      <p>
                        {item.airdate && filterDate === dates.today
                          ? "Today"
                          : "Tomorrow"}{" "}
                        <span className="accentend-info">
                          {item.airtime || item.show.schedule.time}
                        </span>{" "}
                        {item.show.network && "on"}{" "}
                        <span className="accentend-info">
                          {item.show.network?.name}
                        </span>
                      </p>
                    </Link>
                  )
              )}
            </MoviesGrid>
          )}
        </Route>
        <Route path="/description" exact>
          <ShowDescription />
        </Route>
        <Route path="/description/show" exact>
          <ShowMainDescription />
        </Route>
        <Route path="/description/cast" exact>
          <ShowCast />
        </Route>
        <Route path="/actor">
          <Actor />
        </Route>
      </Switch>
    </StyledMain>
  );
};

export default Movies;
