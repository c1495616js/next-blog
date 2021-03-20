import React from "react";
import Account from "@/pages/account";
import { Cookie } from "@/utils";
import { render } from "../../utils";

describe("Account page", () => {
  beforeAll(() => {
    Cookie.set("isAuthenticated", true, { path: "/", days: 7 });
  });

  it("matches snapshot", () => {
    const { asFragment } = render(<Account />, {});
    expect(asFragment()).toMatchSnapshot();
  });
});
