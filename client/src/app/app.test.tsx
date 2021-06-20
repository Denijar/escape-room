import React, { render, screen } from "@testing-library/react";
import App from ".";

test("renders question marks before status event", () => {
  render(<App />);
  const text = screen.getByText("? OUT OF ?");
  expect(text).toBeInTheDocument();
});
