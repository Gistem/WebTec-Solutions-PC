import { useState } from "react";

const Pagination = () => {
    const [page, setPage] = useState(1);

    const onChangePage = (next) => {
        // console.log(artworks, "artworks");
        if (!artworks.pagination.prev_url && page + next <= 0) return;
        if (!artworks.pagination.next_url && page + next >= 9) return;
    
        setPage(page + next);
      };

      return (
        <section>
        <button type="button" onClick={() => onChangePage(-1)}>
          Prev
        </button>
        {page}
        <button type="button" onClick={() => onChangePage(1)}>
          Next
        </button>
      </section>
      )
}

export default Pagination