import { useState, useEffect, useRef } from "react";
import { SearchBar, ArtworksList, Pagination } from "./components";
import "./App.css";
// import data from "./data.json";
import { getArtworks, searchArtwork } from "./api/artwork";

function App() {
  // const inputSearch = useRef(null);
  // const [search, setSearch] = useState("");

  // const [artworks, setArtworks] = useState([]);

  // const [page, setPage] = useState(1);

  // const [errorState, setErrorState] = useState({ hasError: false });

  // const handleError = (err) => {
  //   setErrorState({ hasError: true, message: err.message });
  // };

  // useEffect(() => {
  //   getArtworks(page).then(setArtworks).catch(handleError);
  //   // console.log(page, "pages");
  // }, [page]);

  // const onChangePage = (next) => {
  //   // console.log(artworks, "artworks");
  //   if (!artworks.pagination.prev_url && page + next <= 0) return;
  //   if (!artworks.pagination.next_url && page + next >= 9) return;

  //   setPage(page + next);
  // };

  // const onChangeSearch = (event) => {
  //   event.preventDefault();
  //   const text = inputSearch.current.value;
  //   setSearch(text);
  // };

  // const onSearchSubmit = () => {
  //   inputSearch.current.value = "";
  //   searchArtwork(search).then(setArtworks).catch(handleError);
  // };

  //  ONLY FOR TESTING PURPOSES
  // <ul>
  //   {data.data.map((artwork) => (
  //     <li key={artwork.title}>{artwork.title}</li>
  //   ))}
  // </ul>

  return (
    <div>
      <SearchBar />
      <ArtworksList />
      <Pagination />
      {/* <input
        ref={inputSearch}
        onChange={onChangeSearch}
        type="text"
        placeholder="Search"
      />
      <button onClick={onSearchSubmit}>🔎</button> */}
      {/* <ul>
        {errorState.hasError && <div>{errorState.message}</div>}
        {artworks?.data?.map((artwork) => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul> */}
      {/* <section>
        <button type="button" onClick={() => onChangePage(-1)}>
          Prev
        </button>
        {page}
        <button type="button" onClick={() => onChangePage(1)}>
          Next
        </button>
      </section> */}
    </div>
  );
}

export default App;
