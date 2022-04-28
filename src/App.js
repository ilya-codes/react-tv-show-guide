import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import Header from "./components/Header";
import Shows from "./components/Shows";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import GlobalStyles from "./components/styles/Global";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [showMovies, setShowMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [country, setCountry] = useState("US");
  const [filterType, setFilterType] = useState("");
  const [filterGenre, setFilterGenre] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  function addDays(days) {
    let result = new Date();
    if (!days) return result.toISOString().slice(0, 10);
    result.setDate(result.getDate() + days);
    return result.toISOString().slice(0, 10);
  }

  const dates = {
    today: addDays(0),
    tomorrow: addDays(1),
  };

  const [filterDate, setFilterDate] = useState(dates.today);

  const filterDateHandler = () => {
    let date = filterDate === dates.today ? dates.tomorrow : dates.today;
    setFilterDate(date);
    setIsLoading(true);
  };

  const resetHandler = () => {
    setCountry("US");
    setQuery("");
    setFilterType("");
    setFilterGenre("");
    setFilterDate(dates.today);
  };

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  const countryHandler = (e) => {
    setCountry(e.target.value);
    setIsLoading(true);
  };

  const filterHandler = (e) => {
    e.target.name === "type" && setFilterType(e.target.value);
    e.target.name === "genre" && setFilterGenre(e.target.value);

    if (e.target.value === "All") {
      e.target.name === "type" && setFilterType("");
      e.target.name === "genre" && setFilterGenre("");
      e.target.name === "country" && setCountry("US");
    }
  };

  useEffect(() => {
    const initialDataFetcher = async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.tvmaze.com/schedule?country=${country}&date=${filterDate}`
        );
        const data = await response.json();

        setTimeout(() => {
          setMovies(data);
          setIsLoading(false);
        }, 2000);
      } catch (err) {
        console.log(err);
      }
    };
    initialDataFetcher();
  }, [country, filterDate]);

  useEffect(() => {
    const result = movies
      .filter((item) =>
        filterType ? filterType.includes(item.show.type) : item
      )
      .filter((item) =>
        filterGenre ? item.show.genres.includes(filterGenre) : item
      )
      .filter((item) =>
        query
          ? item.show.name?.toLowerCase().includes(query.toLowerCase()) ||
            item.show.network?.name
              .toLowerCase()
              .includes(query.toLowerCase()) ||
            item.name?.toLowerCase().includes(query.toLowerCase())
          : item
      );

    setShowMovies(result);
  }, [filterType, filterGenre, movies, query]);

  return (
    <>
      <GlobalStyles />
      <ScrollToTop />
      <div className="App">
        <Navigation
          handleReset={resetHandler}
          dates={dates}
          filterDate={filterDate}
          filterDateHandler={filterDateHandler}
        />
        <Header />
        <Shows
          dates={dates}
          filterDate={filterDate}
          isLoading={isLoading}
          type={filterType}
          genre={filterGenre}
          country={country}
          search={search}
          handleSearch={searchHandler}
          handleSubmit={submitHandler}
          showMovies={showMovies}
          handleFilter={filterHandler}
          handleCountry={countryHandler}
        />
        <Footer />
      </div>
    </>
  );
};

export default App;
