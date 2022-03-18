import { useState, useEffect } from "react";
import { getArtworks } from "../../api/artwork";

const ArtworksList = () => {
    const [artworks, setArtworks] = useState([]);

    const [errorState, setErrorState] = useState({ hasError: false });

    const handleError = (err) => {
    setErrorState({ hasError: true, message: err.message });
    };

    
    useEffect(() => {
        getArtworks(page).then(setArtworks).catch(handleError);
        // console.log(page, "pages");
    }, [page]);

    return(
        <ul>
        {errorState.hasError && <div>{errorState.message}</div>}
        {artworks?.data?.map((artwork) => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul>
    )
}

export default ArtworksList