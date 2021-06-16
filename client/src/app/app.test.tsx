import React, { render, screen } from "@testing-library/react";
import App from ".";

test("renders hello from the typescript frontend text", () => {
  render(<App />);
  const linkElement = screen.getByText(/Hello from the typescript frontend!/i);
  expect(linkElement).toBeInTheDocument();
});
