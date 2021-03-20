import React from "react";
import { RenderResult, render } from "@testing-library/react";
import { AuthProvider } from "@/store";
import { Cookie } from "@/utils";

const AllTheProviders = ({ children }) => {
  const isAuthenticated = JSON.parse(Cookie.get("isAuthenticated") || null) ?? false;
  return <AuthProvider isAuthenticated={isAuthenticated}>{children}</AuthProvider>;
};

const customRender = (ui: React.ReactElement, options = {}): RenderResult => {
  return render(ui, { wrapper: AllTheProviders, ...options });
};

// Re-export everything
export * from "@testing-library/react";

// Override render method
export { customRender as render };
