import { useState, useEffect, useRef } from 'react'

import { getArtworks, searchArtwork } from './api/artwork'

import './App.css'

function App () {
  const inputSearch = useRef(null)
  const [search, setSearch] = useState('')

  const [artworks, setArtworks] = useState([])

  const [page, setPage] = useState(1)

  const [errorState, setErrorState] = useState({ hasError: false })

  const handleError = (err) => {
    setErrorState({ hasError: true, message: err.message })
  }

  const onChangeSearch = (event) => {
    event.preventDefault()
    const text = inputSearch.current.value
    setSearch(text)
  }

  const onSearchSubmit = (event) => {
    inputSearch.current.value = ''
    searchArtwork(search).then(setArtworks).catch(handleError)
  }

  const onChangePage = (next) => {
    if (!artworks.pagination.prev_url && page + next <= 0) return
    if (
      !artworks.pagination.next_url &&
      page + next >= artworks.pagination.total_pages
    ) {
      return
    }
    setPage(page + next)
  }

  useEffect(() => {
    getArtworks(page).then(setArtworks).catch(handleError)
  }, [page])
  return (
    <div>
      <input
        ref={inputSearch}
        onChange={onChangeSearch}
        type="text"
        placeholder="Search"
      />
      <button onClick={onSearchSubmit}>🔎</button>

      <ul>
        {errorState.hasError && <div>{errorState.message}</div>}
        {artworks?.data?.map((artwork) => (
          <li key={artwork.id}>{artwork.title}</li>
        ))}
      </ul>

      <section>
        <button type="button" onClick={() => onChangePage(-1)}>
          Prev
        </button>
        {page}
        <button type="button" onClick={() => onChangePage(1)}>
          Next
        </button>
      </section>
    </div>
  )
}

export default App
