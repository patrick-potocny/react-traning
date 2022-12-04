import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe('App component', () => {
  it('should render heading', () => {
    render(<App />)
    expect(screen.getByRole('heading').textContent).toMatch('Hello from App')
  });
});