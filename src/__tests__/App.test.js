import React from "react";
import { render, fireEvent } from "@testing-library/react";
import axiosMock from "axios";
import App from "../App";

jest.mock("axios");

test("integration test for App", () => {
  const { container, getByText, getByLabelText } = render(<App />);
  expect(getByText("All Posts")).toBeTruthy();
  expect(getByText("+")).toBeTruthy();
  fireEvent.click(getByText("+"));
  const postTitle = getByLabelText("Enter Title for post");
  const postDescription = getByLabelText("Enter Description for post");
  const formWrapper = container.querySelector("form");
  axiosMock.post.mockResolvedValueOnce({
    data: { title: postTitle, description: postDescription }
  });
  expect(axiosMock.post).toHaveBeenCalledTimes(1);
  postTitle.value = "Hello this is title for post";
  postDescription.value = "Hello this is description for post";
  expect(window.location.href).toMatch("/new-post");
});
