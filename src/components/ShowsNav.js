import SelectBtn from "./SelectBtn";
import Button from "./Button";
import { StyledShowsNav, StyledForm } from "./styles/Shows.styled";

const ShowsNav = ({
  type,
  genre,
  country,
  search,
  handleSearch,
  handleSubmit,
  handleFilter,
  handleCountry,
}) => {
  return (
    <StyledShowsNav>
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

      <SelectBtn value={country} name="country" onChange={handleCountry}>
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
    </StyledShowsNav>
  );
};

export default ShowsNav;
