// import { NetworkError, NotFoundError, ServerError } from "./errors";

class NetworkError extends Error {
  constructor () {
    super('Network error')
  }
}

class NotFoundError extends Error {
  constructor () {
    super('The resource you requested was not found.')
  }
}

class ServerError extends Error {
  constructor () {
    super('There was a server error.')
  }
}

function _handleError (status) {
  if (status === 404) {
    throw new NotFoundError()
  }

  if (status === 500) {
    throw new ServerError()
  }
}

function _throwSpecificError (err) {
  if (err instanceof ServerError || err instanceof NotFoundError) {
    throw err
  }
  throw new NetworkError()
}
export async function getArtworks (page = 1) {
  try {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks/search?limit=10&page=${page}`
    )
    if (!response.ok) {
      return _handleError(response.status)
    }
    const data = await response.json()
    return data
  } catch (err) {
    _throwSpecificError(err)
  }
}

export async function searchArtwork (title) {
  try {
    const response = await fetch(
      `https://api.artic.edu/api/v1/artworks/search?q=${title}`
    )
    if (!response.ok) {
      return _handleError(response.status)
    }
    const data = await response.json()
    return data
  } catch (err) {
    _throwSpecificError(err)
  }
}
