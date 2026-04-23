import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../landing_page/home/Hero";

describe("Hero Component", () => {
  test("renders Hero img", () => {
    render(<Hero />);

    const heroImg = screen.getByAltText("Hero Image");

    expect(heroImg).toBeInTheDocument();

    expect(heroImg).toHaveAttribute("src", "/src/assets/images/homeHero.png");
  });
});
