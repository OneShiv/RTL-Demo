import React from "react";
import { render } from "@testing-library/react";
import Card from "../Card";
test("test if h1 has text with length greater than 0", () => {
  const { getByTestId } = render(<Card title="Hello" description="My desc" />);
  expect(getByTestId("card-title").textContent.length).toBeGreaterThan(0);
});

test("test if p has text with length greater than 10", () => {
  const { getByTestId } = render(
    <Card title="Hello dbshjbjfs fr" description="My descriptionf jhfuh fur" />
  );
  expect(getByTestId("card-description").textContent.length).toBeGreaterThan(
    10
  );
});
