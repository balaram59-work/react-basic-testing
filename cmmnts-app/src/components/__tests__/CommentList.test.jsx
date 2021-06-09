import React from "react";
import { render } from "@testing-library/react";
import CommentList from "../CommentList";
describe("running tests for cmmnt list component", () => {
  test("check if cmmntlist renders correctly", () => {
    const comment1 = { comment: "good book", name: "balaram" };
    const comment2 = { comment: "bad book", name: "sai balaram" };
    const comments = [comment1, comment2];
    const { getByText } = render(<CommentList comments={comments} />);
    expect(getByText(comment1.comment)).toBeDefined();
    expect(getByText(comment2.comment)).toBeDefined();
  });
});
