import React from "react";
import Products from "@/pages/products";
import { render } from "../../utils";

describe("Products page", () => {
  it("matches snapshot", () => {
    const { asFragment } = render(<Products />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
