import { StyledShowsGrid } from "./styles/Shows.styled";
import { Link } from "react-router-dom";
import { useContext } from "react";
import ShowsContext from "./ShowsContext";

const ShowsGrid = ({ showMovies, filterDate, dates }) => {
  const context = useContext(ShowsContext);

  return (
    <StyledShowsGrid>
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
              ></div>
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
    </StyledShowsGrid>
  );
};

export default ShowsGrid;
