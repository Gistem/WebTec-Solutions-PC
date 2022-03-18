export class NotFoundError extends Error {
  constructor() {
    super("The resource you requested was not found.");
  }
}
