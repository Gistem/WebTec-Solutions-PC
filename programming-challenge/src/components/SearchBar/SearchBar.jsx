import { useState, useRef } from "react";
import { searchArtwork } from "../../api/artwork";

const SearchBar = () => {
    const inputSearch = useRef(null);
    const [search, setSearch] = useState("");
    const onChangeSearch = (event) => {
        event.preventDefault();
        const text = inputSearch.current.value;
        setSearch(text);
      };
    
      const onSearchSubmit = () => {
        inputSearch.current.value = "";
        searchArtwork(search).then(setArtworks).catch(handleError);
      };

      return (
          <>
          <input
        ref={inputSearch}
        onChange={onChangeSearch}
        type="text"
        placeholder="Search"
      />
      <button onClick={onSearchSubmit}>🔎</button>
      </>
      )
}

export default SearchBar