import React from "react";
import { render } from "@testing-library/react";
import CommentCard from "../CommentCard";
describe("testing comment card", () => {
  test("checks for cmmt card", () => {
    const cmmnt = "this book is so good!!";
    const name = "balaram";
    const props = { comment: cmmnt, name };
    const { getAllByText } = render(<CommentCard {...props} />);
    expect(getAllByText(props.name)).toBeDefined();
  });
});
