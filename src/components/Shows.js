import { useContext } from "react";
import ShowsContext from "./ShowsContext";
import ShowDescription from "./ShowDescription";
import ShowMainDescription from "./ShowMainDescription";
import { Route, Switch } from "react-router-dom";
import ShowCast from "./ShowCast";
import Actor from "./Actor";
import Loader from "./Loader";
import ShowsGrid from "./ShowsGrid";
import ShowsNav from "./ShowsNav";
import { StyledMain } from "./styles/Shows.styled";

const Shows = ({
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
  const show = context.clickedShow;

  let ratingColor =
    show.show.rating?.average < 3
      ? "red"
      : show.show.rating?.average < 5
      ? "orange"
      : show.show.rating?.average < 8
      ? "yellow"
      : "green";

  return (
    <StyledMain>
      <Switch>
        <Route path="/" exact>
          <ShowsNav
            type={type}
            genre={genre}
            country={country}
            search={search}
            handleSearch={handleSearch}
            handleSubmit={handleSubmit}
            handleFilter={handleFilter}
            handleCountry={handleCountry}
          />
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
            <ShowsGrid
              showMovies={showMovies}
              filterDate={filterDate}
              dates={dates}
            />
          )}
        </Route>
        <Route path="/description" exact>
          <ShowDescription ratingColor={ratingColor} show={show} />
        </Route>
        <Route path="/description/show" exact>
          <ShowMainDescription ratingColor={ratingColor} show={show} />
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

export default Shows;
