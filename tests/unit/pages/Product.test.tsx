import React from "react";
import Product from "@/pages/products/[id]";
import { render } from "../../utils";

describe("Product page", () => {
  it("matches snapshot", () => {
    const mockProduct = {
      id: 123,
      title: "Test product",
      description: "Foo bar baz",
      price: 99.99,
    };

    const { asFragment } = render(<Product product={mockProduct} />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
