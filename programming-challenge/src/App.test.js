import { render, screen } from "@testing-library/react";
import App from "./App";
import data from "./data.json";

describe("Art Institute of Chicago API", () => {
  beforeAll(() => jest.spyOn(window, "fetch"));
  // jest.spyOn creates a mock function

  // it("Should show a list of artworks including Haunted House", () => {
  //   render(<App />);
  //   expect(screen.getByText("Paperwight")).toBeInTheDocument();
  // });

  // it("should show a list of artworks titles from a JSON filte", () => {
  //   render(<App />);
  //   for (let artwork of data.data) {
  //     expect(screen.getByText(artwork.title)).toBeInTheDocument();
  //   }
  // });

  it("should should be a list of artworks from the API", async () => {
    window.fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => data,
    });

    render(<App />);
    expect(window.fetch).toHaveBeenCalledTimes(1);
    expect(window.fetch).toHaveBeenCalledWith(
      "https://api.artic.edu/api/v1/artworks/search?limit=10&page=1",
    );

    for (const artwork of data.data) {
      expect(await screen.findByText(artwork.title)).toBeInTheDocument();
    }
  });

  it("should show an error message if there's a network error", async () => {
    window.fetch.mockRejectedValue(new Error("Network error"));

    render(<App />);
    expect(await screen.findByText(/Network error/i)).toBeInTheDocument();
  });

  it("should show an error message if there's a server error", async () => {
    window.fetch.mockResolvedValue({
      ok: false,
      status: 500,
    });

    render(<App />);
    expect(
      await screen.findByText(/There was a server error./i),
    ).toBeInTheDocument();
  });

  it("should show an error message if there's a NotFound error", async () => {
    window.fetch.mockResolvedValueOnce({
      ok: false,
      status: 404,
    });

    render(<App />);
    expect(
      await screen.findByText(/The resource you requested was not found./i),
    ).toBeInTheDocument();
  });
});
