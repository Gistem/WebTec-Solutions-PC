export class ServerError extends Error {
  constructor() {
    super("There was a server error.");
  }
}
