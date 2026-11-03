import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the new profile name and about copy", () => {
  render(<App />);

  expect(screen.getByText("Bobby Lee")).toBeInTheDocument();
  expect(screen.getByText(/full-time wanderer/i)).toBeInTheDocument();
});

test("no longer exposes the old name or resume link", () => {
  render(<App />);

  expect(screen.queryByText(/Robert Kugler/i)).not.toBeInTheDocument();
  expect(screen.queryByText(/resume/i)).not.toBeInTheDocument();
});
