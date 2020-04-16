import React from "react";
// import { Router } from "react-router-dom";
// import { createMemoryHistory } from "history";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axiosMock from "axios";
import Posts from "../Posts";

jest.mock("axios");

test("test if we have 10 cards being rendred in posts component", () => {
  // const history = createMemoryHistory();
  axiosMock.get.mockResolvedValueOnce([
    {
      id: 1,
      title: "one",
      description: "two"
    },
    {
      id: 2,
      title: "one",
      description: "two"
    },
    {
      id: 3,
      title: "one",
      description: "two"
    },
    {
      id: 4,
      title: "one",
      description: "two"
    },
    {
      id: 5,
      title: "one",
      description: "two"
    },
    {
      id: 6,
      title: "one",
      description: "two"
    },
    {
      id: 7,
      title: "one",
      description: "two"
    },
    {
      id: 8,
      title: "one",
      description: "two"
    },
    {
      id: 9,
      title: "one",
      description: "two"
    },
    {
      id: 10,
      title: "one",
      description: "two"
    }
  ]);
  const { getAllByTestId } = render(<Posts />);
  expect(axiosMock).toHaveBeenCalledTimes(1);
  /// waitForElementToBeRemoved(null, getByText("Loading ....."));
  console.log(getAllByTestId("card").length);
  // expect().toHaveLength(10);
});
